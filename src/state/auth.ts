import { ConfirmationResult, signInWithPhoneNumber } from 'firebase/auth';
import { makeAutoObservable, runInAction } from 'mobx';
import { auth } from '../firebase';
import isPhone from 'validator/lib/isMobilePhone';

export enum AuthStep {
  LOADING,
  LOGIN,
  CONFIRMATION_CODE,
  SIGNED_IN,
  ERROR,
}

export class AuthState {
  token: string;
  phoneNumber: string;
  isPhoneNumberAuthPending = false;
  authStep = AuthStep.LOADING;
  private confirmationResult: ConfirmationResult;

  constructor() {
    makeAutoObservable(this);
  }

  get isAuthenticated() {
    return !!this.token;
  }

  async authenticateWithPhoneNumber(number: string): Promise<void> {
    if (!isPhone(number)) {
      throw new Error('Phone number not valid');
    }
    this.setAuthStep(AuthStep.LOADING);
    const result = await signInWithPhoneNumber(
      auth,
      number,
      window.recaptchaVerifier,
    );
    runInAction(() => {
      this.confirmationResult = result;
      this.isPhoneNumberAuthPending = true;
      this.setAuthStep(AuthStep.CONFIRMATION_CODE);
    });
  }

  async confirmCode(code: string): Promise<void> {
    if (this.confirmationResult) {
      this.setAuthStep(AuthStep.LOADING);
      const confirmed = await this.confirmationResult.confirm(code);
      const token = await confirmed.user.getIdToken();
      runInAction(() => {
        this.setToken(token);
        this.isPhoneNumberAuthPending = false;
        this.setAuthStep(AuthStep.SIGNED_IN);
      });
    }
  }

  get isConfirmationResultAvailable() {
    return this.confirmationResult && this.isPhoneNumberAuthPending;
  }

  async signOut(): Promise<void> {
    if (this.isAuthenticated) {
      this.setAuthStep(AuthStep.LOADING);
      await auth.signOut();
    }
  }

  setToken(token?: string) {
    this.token = token;
  }

  setAuthStep(authStep: AuthStep) {
    this.authStep = authStep;
  }
}

export const authState = new AuthState();

auth.onIdTokenChanged(async (user) => {
  if (user) {
    const token = await user.getIdToken();
    authState.setToken(token);
  } else {
    authState.setAuthStep(AuthStep.LOGIN);
    authState.setToken('');
  }
});
