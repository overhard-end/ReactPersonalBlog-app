import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import { toJS } from 'mobx';
import { User } from '../components/user';

export const UsersPage = observer(() => {
  const { store } = useContext(Context);
  const cloneUsers = toJS(store.users);

  return (
    <div>
      {cloneUsers.map((user) => (
        <User user={user} key={user._id} />
      ))}
    </div>
  );
});
