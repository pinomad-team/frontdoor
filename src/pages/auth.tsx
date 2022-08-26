import React from 'react';
import { AuthComponent } from 'src/components/auth';
import { Navigate } from 'react-router-dom';
import { authState } from 'src/state/auth';
import { observer } from 'mobx-react-lite';

const Auth: React.FC = observer(() => {
  if (authState.isAuthenticated) {
    return <Navigate to="/profile" />;
  }
  return (
    <div className="flex h-screen justify-center items-center">
      <AuthComponent></AuthComponent>
    </div>
  );
});

export default Auth;
