import React from 'react'

export const Profile = (props) => {
  return (
    <div class="profile">
    <h1 class="profile__title">Профиль</h1>
    <div class="profile__arey">
        <form id='profileForm' class="profile__form">
            <input value={props.data.name} id="name" type="text" placeholder="Ведите имя" class="input profile__input-name"/>
            <input value={props.data.email} id="email" type="email" placeholder="Ведите email " class="input profile__input-email"/>
            <input id="new-password" type="password" placeholder="Новый пароль" class="input profile__input-new-password"/>
            <input id="conf-password" type="password" placeholder="Подтвердите пароль" class="input profile__input-conf-password"/>
        </form>
        <div class="profile__item">
            <img src={props.data.img} alt="profileImg" class="profile__avatar"/>
            <input  id="profile__input-img-link" type="file" class="profile__input-img-link"/>
        </div>
       
    </div> 
    <button type='submit' form='profileForm'  class="profile-btn profile-btn--save ">Сохранить</button>
</div>
    
  )
}


