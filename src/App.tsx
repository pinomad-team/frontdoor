import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { PylonRpc } from './api/pylon';
import { auth } from 'src/firebase';
import {
  ConfirmationResult,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from 'firebase/auth';
import { UserServiceClientImpl } from './proto/user/user_service';
import { AuthType } from './proto/user/user';
import { Button } from '@material-tailwind/react';

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
    window.recaptchaVerifier = new RecaptchaVerifier(
      'recaptcha-container',
      {
        size: 'invisible',
      },
      auth,
    );
    auth.onIdTokenChanged((user) => {
      if (user) {
        user.getIdToken().then((token) => {
          setIdToken(token);
          const pylonRpc = new PylonRpc({
            'x-grpc-firebase-token': token,
          });

          const client = new UserServiceClientImpl(pylonRpc);

          client
            .getMyProfile({
              authType: AuthType.FIREBASE,
            })
            .then((value) => {
              console.log(value);
            })
            .catch((e) => console.error(e));
        });
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
        <Button>Hi</Button>
        <button
          onClick={() => {
            confirmationResult.current
              .confirm(confirmationCode)
              .then(() => {
                alert('auth success');
              })
              .catch((e) => {
                console.error('auth error', e);
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
