import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '..';
import { useNavigate, useLocation } from 'react-router-dom';

export const Auth = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const { store } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();

  async function login() {
    const path = location.state.from.pathname;
    if (!(email || pass)) {
      return alert('Заполните все поля !!!');
    }
    await store.login(email, pass);

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
            onChange={(e) => setPass(e.target.value)}
            value={pass}
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
          <Link to="/registration" className="auth-link auth-link-sign-in">
            Регистрация
          </Link>
        </div>
      </div>
    </div>
  );
};
