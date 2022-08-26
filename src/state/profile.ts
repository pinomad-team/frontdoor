import { makeAutoObservable, runInAction } from 'mobx';
import { authState, AuthState } from './auth';

export class ProfileState {
  private authState: AuthState;

  constructor() {
    this.authState = authState;
  }
}
