import React from 'react'
import { BurgerMenu } from './burger-menu'
import { Link } from 'react-router-dom'

export const Header= () => {
  return (
    <header class="header">
    <BurgerMenu/>
    <nav class="header__left">
        <ul class="header__nav">
            <Link to='/'><li><a class="header__nav__link">Главная</a></li> </Link>
            <div class="droping">
               <Link to='/post'>
               <li><a  class="header__nav__link  droping">Статьи
                        <use>
                            <svg class="header__svg" width="10" height="11" viewBox="0 0 10 5" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 5L0.669872 0.5L9.33013 0.5L5 5Z" fill="white" />
                            </svg>
                        </use>
                    </a>
                </li></Link> 
                <div class="dropdown__links">
                    <a href="#">Создание сайтов</a>
                    <a href="#">Интернет-маркетинг</a>
                    <a href="#">Продвижение видео</a>
                </div>

            </div>

            <li><a to="/about" class="header__nav__link">Обо мне</a></li>
            <li><a href="#" class="header__nav__link">Реклама</a></li>
        </ul>
    </nav>
    <div class="header__right">
        <ul>
             <Link to="/profile"><li><a  class="header__nav__link">Профиль</a></li></Link>
            <Link to ="/auth"><li><a  class="header__nav__link">Войти</a></li></Link>
        </ul>
        <form class="header__search__form">
            <input type="text" placeholder="Поиск по блогу"/>
                
            </form>
    </div>
</header>
   
  )
}


