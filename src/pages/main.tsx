import { Button } from '@material-tailwind/react';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { authState } from 'src/state/auth';

const Main: React.FC = observer(() => {
  useEffect(() => {
    if (authState.isAuthenticated) {
    }
  }, [authState.isAuthenticated]);

  return (
    <div className="flex h-screen justify-center items-center gap-44">
      <Link to="/auth">
        <Button color="red">Get Started</Button>
      </Link>
    </div>
  );
});

export default Main;
