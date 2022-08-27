import { GrpcStatusCode } from '@protobuf-ts/grpcweb-transport';
import _ from 'lodash';
import { makeAutoObservable, runInAction } from 'mobx';
import { generateFirebaseTokenHeader, PylonRpc } from 'src/api/pylon';
import { auth } from 'src/firebase';
import { GrpcWebError } from 'src/lib/types';
import { AuthType, User } from 'src/proto/user/user';
import {
  CreateUserRequest,
  DeleteUserRequest,
  GetMyProfileRequest,
  UpdateUserRequest,
  UserServiceClientImpl,
} from 'src/proto/user/user_service';
import { authState, AuthState } from './auth';

export enum ProfileStep {
  LOADING,
  NOT_ONBOARDED,
  PROFILE_CREATED,
}

export class ProfileState {
  private authState: AuthState = authState;
  isOnboarded: boolean;
  profileStep: ProfileStep = ProfileStep.LOADING;
  profile: User;

  constructor() {
    this.isOnboarded = false;
    makeAutoObservable(this);
  }

  async getMyProfile() {
    const rpc = new PylonRpc({
      ...generateFirebaseTokenHeader(authState.token),
    });

    const client = new UserServiceClientImpl(rpc);
    const request = GetMyProfileRequest.fromPartial({
      authType: AuthType.FIREBASE,
    });
    let userProfile: User;
    let profileStep = this.profileStep;
    try {
      const response = await client.getMyProfile(request);
      userProfile = response.user;
      profileStep = ProfileStep.PROFILE_CREATED;
    } catch (err) {
      const axiosErr = err as GrpcWebError;
      if (axiosErr.response?.data?.grpcCode === GrpcStatusCode.NOT_FOUND) {
        profileStep = ProfileStep.NOT_ONBOARDED;
      }
    }
    runInAction(() => {
      this.profile = {
        ...userProfile,
        phoneNumber: auth.currentUser?.phoneNumber,
        email: auth.currentUser?.email,
      };
      this.setProfileStep(profileStep);
    });
  }

  async createProfile(): Promise<void> {
    this.profile = {
      ...this.profile,
      phoneNumber: auth.currentUser?.phoneNumber,
      email: auth.currentUser?.email,
    };
    const rpc = new PylonRpc({
      ...generateFirebaseTokenHeader(authState.token),
    });
    this.setProfileStep(ProfileStep.LOADING);
    const client = new UserServiceClientImpl(rpc);
    const request = CreateUserRequest.fromPartial({
      authType: AuthType.FIREBASE,
      user: this.profile,
    });
    await client.createUser(request);
    const updateRequest = UpdateUserRequest.fromPartial({
      authType: AuthType.FIREBASE,
      user: this.profile,
    });

    const updateResponse = await client.updateUser(updateRequest);
    runInAction(() => {
      this.profile = updateResponse?.user;
      this.setProfileStep(ProfileStep.PROFILE_CREATED);
    });
  }

  async updateProfile(): Promise<void> {
    this.profile = {
      ...this.profile,
      phoneNumber: auth.currentUser?.phoneNumber,
      email: auth.currentUser?.email,
      userAuths: [],
    };
    const rpc = new PylonRpc({
      ...generateFirebaseTokenHeader(authState.token),
    });

    const client = new UserServiceClientImpl(rpc);
    this.setProfileStep(ProfileStep.LOADING);
    const updateRequest = UpdateUserRequest.fromPartial({
      authType: AuthType.FIREBASE,
      user: this.profile,
    });

    const updateResponse = await client.updateUser(updateRequest);
    runInAction(() => {
      this.profile = updateResponse?.user;
      this.setProfileStep(ProfileStep.PROFILE_CREATED);
    });
  }

  async deleteProfile(): Promise<void> {
    const rpc = new PylonRpc({
      ...generateFirebaseTokenHeader(authState.token),
    });

    const client = new UserServiceClientImpl(rpc);
    const request = DeleteUserRequest.fromPartial({
      authType: AuthType.FIREBASE,
    });
    this.setProfileStep(ProfileStep.LOADING);
    await client.deleteUser(request);
    runInAction(() => {
      let nullProfile: User;
      this.profile = {
        ...nullProfile,
        phoneNumber: auth.currentUser?.phoneNumber,
        email: auth.currentUser?.email,
      };
      this.setProfileStep(ProfileStep.NOT_ONBOARDED);
    });
  }

  set name(name: string) {
    _.set<User>(this.profile, 'name', name);
  }

  set displayName(displayName: string) {
    _.set<User>(this.profile, 'displayName', displayName);
  }

  setProfileStep(profileStep: ProfileStep) {
    this.profileStep = profileStep;
  }
}

export const profileState = new ProfileState();
