import React, { useEffect } from 'react';
import { auth } from 'src/firebase';
import { RecaptchaVerifier } from 'firebase/auth';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Auth from './pages/auth';
import Profile from './pages/profile';
import { BaseServiceClientImpl, PingRequest } from './proto/base/base_service';
import { GetMyProfileRequest } from './proto/user/user_service';
import { AuthType } from './proto/user/user';

const App: React.FC = () => {
  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      'recaptcha-container',
      {
        size: 'invisible',
      },
      auth,
    );
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <React.Fragment>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </React.Fragment>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
