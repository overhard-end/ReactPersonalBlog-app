import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Context } from '..';

export default function Registration() {
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const [firstName, SetFirstName] = useState('');
  const [lastName, SetLastName] = useState('');

  const { store } = React.useContext(Context);

  async function registration() {
    await store.registration(firstName, lastName, email, password);
    if (store.error === 'Ошибка при валидации') {
      alert('Пороль должен содержать больше 8 символов!!!');
    }
    if (store.error) {
      alert(store.error);
    }
  }

  return (
    <div className="auth">
      <div className="auth__container">
        <h1 className="auth__title">Регистрация</h1>
        <form action="" className="auth-form">
          <input
            value={firstName}
            onChange={(e) => SetFirstName(e.target.value)}
            id="firstname"
            type="text"
            placeholder="Ведите имя"
            className="input auth__input"
          />
          <input
            value={lastName}
            onChange={(e) => SetLastName(e.target.value)}
            id="lastname"
            type="text"
            placeholder="Ведите Фамилию"
            className="input auth__input"
          />
          <input
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
            id="email"
            type="email"
            placeholder="Ведите email "
            className="input auth__input"
            label="blue"
          />
          <input
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
            id="new-password"
            type="password"
            placeholder="Новый пароль"
            className="input auth__input"
          />

          <button
            type="button"
            onClick={() => registration()}
            className="profile-btn profile-btn--login">
            Создать
          </button>
        </form>

        <div className="auth-link__item">
          <Link to="/auth">
            <p className="auth-link auth-link-sign-in">Войти</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
