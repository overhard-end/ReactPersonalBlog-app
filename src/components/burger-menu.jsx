import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '..';
export const BurgerMenu = () => {
  const { store } = useContext(Context);

  function burgerMenuHandler() {
    let menu = document.getElementById('burger-inner');
    menu.classList.toggle('burger-menu-inner');
  }

  return (
    <div className="burger-menu" onClick={() => burgerMenuHandler()}>
      <span className="burger-menu__btn"></span>

      <div id="burger-inner" className="burger-menu-inner_hidden">
        <div className="sidebar__header">
          <img className="sidebar__header--img" src="../images/1212.jpg" alt="sidebar__img" />
          <h3> ГКОУ РД Горьковская ООШ Унцукульского района в Хасавюртовском районе с. Колоб</h3>
          <ul className="burger-navigation">
            <Link to="/" className="header__nav__link">
              Главная
            </Link>

            <Link to="/myPosts" className="header__nav__link">
              Мои посты
            </Link>

            <Link to="/users" className="header__nav__link">
              Пользователи
            </Link>

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

          <span></span>
        </div>
        <div className="sidebar__main">
          <span></span>
          <div className="sadibar__main--buttons">
            <button className="blue contact-me">Сайт школы</button>
          </div>
        </div>
      </div>
    </div>
  );
};
