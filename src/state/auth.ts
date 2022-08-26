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
    const result = await signInWithPhoneNumber(
      auth,
      number,
      window.recaptchaVerifier,
    );
    runInAction(() => {
      this.confirmationResult = result;
      this.isPhoneNumberAuthPending = true;
    });
  }

  async confirmCode(code: string): Promise<void> {
    if (this.confirmationResult) {
      const confirmed = await this.confirmationResult.confirm(code);
      const token = await confirmed.user.getIdToken();
      this.token = token;
      this.isPhoneNumberAuthPending = false;
    }
  }

  get isConfirmationResultAvailable() {
    return this.confirmationResult && this.isPhoneNumberAuthPending;
  }

  async signOut(): Promise<void> {
    if (this.isAuthenticated) {
      authState.authStep = AuthStep.LOADING;
      await auth.signOut();
    }
  }
}

export const authState = new AuthState();

auth.onIdTokenChanged(async (user) => {
  if (user) {
    const token = await user.getIdToken();
    authState.token = token;
    console.log(token);
  } else {
    authState.authStep = AuthStep.LOGIN;
    authState.token = '';
  }
});
