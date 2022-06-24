import React, { useContext } from 'react';

import Registration from '../components/registration';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { Navigate } from 'react-router-dom';

export const RegistrationPage = observer(() => {
  const { store } = useContext(Context);
  if (store.isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <div className="container">
      <Registration />
    </div>
  );
});
