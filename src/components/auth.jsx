import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '..';
import { useNavigate, useLocation } from 'react-router-dom';

export const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { store } = React.useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();

  async function login() {
    const path = location?.state?.from?.pathname;
    if (!email || !password) {
      return alert('Заполните все поля !!!');
    }
    await store.login(email, password);

    if (store.error && !store.isAuth) {
      return alert(store.error);
    }
    navigate(path, { replace: true });
  }

  return (
    <div className="auth">
      <div className="auth__container">
        <h1 className="auth__title">Вход</h1>
        <form action="" className="auth-form">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="email"
            type="email"
            placeholder="Ведите email "
            className="input auth__input"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            id="new-password"
            type="password"
            placeholder="Пароль"
            className="input auth__input"
          />
          <button type="button" onClick={() => login()} className="profile-btn profile-btn--login">
            Войти
          </button>
        </form>

        <div className="auth-link__item">
          <Link to="/registration">
            <p className="auth-link auth-link-sign-in">Регистрация</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
