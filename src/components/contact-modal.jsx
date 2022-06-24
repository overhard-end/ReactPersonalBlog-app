import React from 'react';

export const ContactModal = () => {
  return (
    <div className="contact-modal--hidden" id="contact-modal">
      <div className="back-btn">
        <span className="back-btn-span"></span>
      </div>

      <div className="contact-modal__inner">
        <form action="form" className="contact-modal__form">
          <input type="text" className="input" placeholder="Ваше имя" />
          <input type="email" className="input" placeholder="Ваш E-mail" />
          <input type="text" className="input" placeholder="Текс сообщения" />
        </form>
        <button className="profile-btn contact-modal-btn">Отправить</button>
      </div>
    </div>
  );
};
