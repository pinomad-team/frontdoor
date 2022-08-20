import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { PylonRpc } from './api/pylon';
import { BaseServiceClientImpl } from './proto/idl/base/base_service';
import { auth } from 'src/firebase';
import {
  ConfirmationResult,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from 'firebase/auth';
import { FirebaseError } from 'firebase/app';

declare global {
  interface Window {
    recaptchaVerifier?: RecaptchaVerifier;
  }
}

const App: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [idToken, setIdToken] = useState('');
  const confirmationResult = useRef<ConfirmationResult>();
  useEffect(() => {
    const pylonRpc = new PylonRpc();

    const client = new BaseServiceClientImpl(pylonRpc);

    client
      .ping({
        name: 'hello',
      })
      .then((value) => {
        console.log(value);
      })
      .catch((e) => console.error(e));
    window.recaptchaVerifier = new RecaptchaVerifier(
      'recaptcha-container',
      {
        size: 'invisible',
      },
      auth,
    );
    auth.onIdTokenChanged((user) => {
      if (user) {
        user.getIdToken().then((token) => setIdToken(token));
      }
    });
  }, []);

  return (
    <div>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1> hi</h1>
        <input
          type="text"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
        <button
          onClick={() => {
            signInWithPhoneNumber(
              auth,
              phoneNumber,
              window.recaptchaVerifier,
            ).then((result) => {
              confirmationResult.current = result;
              console.log(confirmationResult);
            });
          }}
        >
          Send
        </button>
        <input
          type="text"
          onChange={(e) => {
            setConfirmationCode(e.target.value);
          }}
        />
        <button
          onClick={() => {
            confirmationResult.current
              .confirm(confirmationCode)
              .then(() => {
                alert('auth success');
              })
              .catch((e) => {
                console.error('auth error');
              });
          }}
        >
          Confirm
        </button>
        <p>{idToken}</p>
      </header>
    </div>
  );
};

export default App;
