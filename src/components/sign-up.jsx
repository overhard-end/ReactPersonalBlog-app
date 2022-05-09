import React, {useState} from 'react';
import { Link } from 'react-router-dom';



export default function SignUp() {
    const [userData, SetUserData] = useState({email:'', pass:''});
  return (
    <div class="auth">
    <div class="auth__container">
    <h1 class="auth__title">Регистрация</h1>
    <form action="" class="auth-form">
        <input value={userData.email} onChange={e=>SetUserData.email(e.target.value)}  id="email" type="email" placeholder="Ведите email или Login " class="input auth__input"/>
        <input value={userData.pass} onChange={e=>SetUserData.pass(e.target.value)} id="new-password" type="password" placeholder="Новый пароль" class="input auth__input"/>
    </form>
    <button   class="profile-btn profile-btn--login">Создать</button>
     <div class="auth-link__item">
      <a href="#" class="auth-link auth-link-restore">Востановить</a>
      <Link to="/auth"><a href="#" class="auth-link auth-link-sign-in">Войти</a></Link>
    </div>
</div>
</div>
  )
}
