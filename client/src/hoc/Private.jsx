import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { Context } from '..';

export const Private = observer(({ children }) => {
  const location = useLocation(children);
  const { store } = useContext(Context);
  if (!store.isAuth) {
    return <Navigate to="/auth" state={{ from: location }} />;
  }
  return [children];
});
