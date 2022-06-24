import React from 'react';

export const User = ({ user }) => {
  const defaultAvatar = `https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}&size=150&background=random`;

  return (
    <div className="user">
      <div className="user-container">
        <img alt="user-img" className="user-img" src={user.imgUrl ? user.imgUrl : defaultAvatar} />
        <div className="user-info">
          <h2 className="user-name">
            {user.firstName} {user.lastName}{' '}
          </h2>
          <p className="user-email">{user.email}</p>
        </div>
        {user.role === 'Admin' ? <button className="user-delete">Удалить пользователя</button> : ''}
      </div>
    </div>
  );
};
