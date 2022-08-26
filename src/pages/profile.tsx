import { observer } from 'mobx-react-lite';
import React from 'react';

const Profile: React.FC = observer(() => (
  <div className="flex h-screen justify-center items-center">
    <div className="w-96 h-96 bg-blue-gray-50" />
  </div>
));

export default Profile;
