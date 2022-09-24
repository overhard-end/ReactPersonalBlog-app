import React from 'react';
import { BurgerMenu } from './burger-menu';
import { Link } from 'react-router-dom';
import { Context } from '..';
import { observer } from 'mobx-react-lite';

export const Header = observer(() => {
  const { store } = React.useContext(Context);
  return (
    <header className="header">
      <BurgerMenu />
      <nav className="header__left">
        <ul className="header__nav">
          <Link to="/" className="header__nav__link">
            <li>Главная</li>{' '}
          </Link>

          <Link to="/myPosts" className="header__nav__link">
            <li>Мои посты</li>
          </Link>

          <li>
            <Link to="/users" className="header__nav__link">
              {' '}
              Пользователи
            </Link>
          </li>
        </ul>
      </nav>
      <div className="header__right">
        <ul className="right-bottons-item">
          {!store.isAuth ? (
            <Link to="/auth" className="header__nav__link">
              Войти
            </Link>
          ) : (
            <Link to="/profile" className="header__nav__link">
              Профиль
            </Link>
          )}
        </ul>
        <form className="header__search__form">
          <input
            value={store.searchData}
            onChange={(e) => store.setsearchData(e.target.value)}
            type="text"
            placeholder="Поиск по блогу"
          />
        </form>
      </div>
    </header>
  );
});
