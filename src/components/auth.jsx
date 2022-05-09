import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export const Auth = () =>{
    
    return(
        <div class="auth">
    <div class="auth__container">
    <h1 class="auth__title">Вход</h1>
    <form action="" class="auth-form">
        <input id="email" type="email" placeholder="Ведите email " class="input auth__input"/>
        <input id="new-password" type="password" placeholder="Пароль" class="input auth__input"/>
    </form>
    <button   class="profile-btn profile-btn--login">Войти</button>
     <div class="auth-link__item">
      <a href="#" class="auth-link auth-link-restore">Востановить</a>
     <Link to="/sign-up"><a class="auth-link auth-link-sign-in">Регистрация</a></Link> 
    </div>
</div>
</div>

    )
} 
