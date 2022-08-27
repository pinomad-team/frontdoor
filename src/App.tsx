import React, { useEffect } from 'react';
import { auth } from 'src/firebase';
import { RecaptchaVerifier } from 'firebase/auth';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Auth from './pages/auth';
import Profile from './pages/profile';
import { Logo } from './components/logo';

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
      <div className="flex justify-center">
        <div className="w-96 p-4">
          <Logo />
        </div>
      </div>
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
