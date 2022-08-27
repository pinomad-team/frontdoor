import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { ProfileComponent } from 'src/components/profile';
import { authState } from 'src/state/auth';
import { profileState } from 'src/state/profile';

const Profile: React.FC = observer(() => {
  useEffect(() => {
    if (authState.isAuthenticated) {
      profileState.getMyProfile();
    }
  }, [authState.isAuthenticated]);

  if (!authState.isAuthenticated) {
    return <Navigate to="/auth" />;
  }

  return (
    <div className="flex h-screen justify-center items-center gap-44">
      <ProfileComponent></ProfileComponent>
    </div>
  );
});

export default Profile;
