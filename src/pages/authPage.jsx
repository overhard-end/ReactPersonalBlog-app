import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Auth } from '../components/auth';

export const AuthPage = observer(() => {
  return (
    <div className="container">
      <Auth />
    </div>
  );
});
