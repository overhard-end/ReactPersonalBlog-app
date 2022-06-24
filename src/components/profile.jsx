import React, { useContext, useState } from 'react';
import { Context } from '..';
import { observer } from 'mobx-react-lite';

export const Profile = observer(() => {
  const { store } = useContext(Context);
  const [dataForChange, setDataForChange] = useState({});

  const [file, setFile] = useState({});
  const [previewImg, setPreviewImg] = useState();
  const [confPass, setConfPass] = useState();

  const defaultAvatar = `https://ui-avatars.com/api/?name=${store.user.firstName}+${store.user.lastName}&size=150&background=random`;

  function HandlerAddImg(file) {
    const FReader = new FileReader();
    setFile(file);
    FReader.readAsDataURL(file[0]);
    FReader.onload = function (e) {
      setPreviewImg(e.target.result);
    };
  }

  async function userDataHandler() {
    if (dataForChange.firstName === store.user.firstName) {
      delete dataForChange['firstName'];
    }
    if (dataForChange.lastName === store.user.lastName) {
      delete dataForChange['lastName'];
    }
    if (dataForChange.email === store.user.email) {
      delete dataForChange['email'];
    }
    if (Object.keys(dataForChange).length === 0 && Object.keys(file).length === 0) {
      return alert('нет изменений');
    }
    if (dataForChange?.password?.length < 8) {
      return alert('Пороль должен содержать больше 8 символов');
    }
    if ((dataForChange.password === confPass) === false) {
      return alert('не совпадают пороли');
    }

    const response = await store.changeUserData(dataForChange, file);
    if (response?.status === 200) {
      return alert('Именения внесены ');
    }
    if (response.message) {
      return alert('Не коректный email ');
    }
  }

  return (
    <div className="profile">
      <h1 className="profile__title">Профиль</h1>

      <div className="profile__arey">
        <form id="profileForm" className="profile__form">
          {!store.user.isActivated ? (
            <h2 className="profile__activated--false">
              Ваш аккаунт не активирован, для активации перейдите по ссылке которая была отправленна
              на вашу почту!!!
            </h2>
          ) : (
            <h2 className="profile__activated--true">Ваш аккаунт активирован</h2>
          )}
          <input
            onChange={(e) => setDataForChange({ ...dataForChange, firstName: e.target.value })}
            defaultValue={store.user.firstName}
            id="firstName"
            type="text"
            className="input profile__input-name"
          />
          <input
            onChange={(e) => setDataForChange({ ...dataForChange, lastName: e.target.value })}
            defaultValue={store.user.lastName}
            id="lastName"
            type="text"
            className="input profile__input-name"
          />
          <input
            onChange={(e) => setDataForChange({ ...dataForChange, email: e.target.value })}
            defaultValue={store.user.email}
            id="email"
            type="email"
            className="input profile__input-email"
          />

          <input
            onChange={(e) => setDataForChange({ ...dataForChange, password: e.target.value })}
            id="new-password"
            type="password"
            placeholder="Новый пароль"
            className="input profile__input-new-password"
          />
          <input
            onChange={(e) => setConfPass(e.target.value)}
            id="conf-password"
            value={confPass}
            type="password"
            placeholder="Повторите пароль"
            className="input profile__input-conf-password"
          />
        </form>
        <div className="profile__item">
          <div className="profile__avatar">
            <img
              className="profile__avatar__img"
              style={{ maxHeight: '150px' }}
              id="result"
              src={previewImg ? previewImg : store.user.imgUrl ? store.user.imgUrl : defaultAvatar}
              alt="profileImg"
            />
          </div>
          <input
            onChange={(e) => HandlerAddImg(e.target.files)}
            id="profile__input-img"
            type="file"
            style={{ display: 'none' }}
          />
          <label htmlFor="profile__input-img" className="profile-btn profile-btn--save">
            Изменить
          </label>
        </div>
      </div>
      <button onClick={() => userDataHandler()} className="profile-btn profile-btn--save ">
        Сохранить
      </button>
      <button
        className="profile-btn profile-btn--save"
        style={{ background: 'red', marginLeft: '10px' }}
        onClick={() => store.logout()}>
        {' '}
        Выйти
      </button>
    </div>
  );
});
