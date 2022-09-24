import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '..';

export const Public = observer(({ children }) => {
  const { store } = useContext(Context);
  if (store.isAuth) {
    return <Navigate to="/" />;
  }

  return [children];
});
