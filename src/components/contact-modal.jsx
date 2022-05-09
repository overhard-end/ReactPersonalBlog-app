import React from 'react'

export const ContactModal = () => {
  return (
    <div class="contact-modal--hidden" id="contact-modal">
    <div class="back-btn">
        <span class="back-btn-span"></span>
    </div>

    <div class="contact-modal__inner">
        <form action="form" class="contact-modal__form">
            <input type="text" class="input" placeholder="Ваше имя"/>
            <input type="email" class="input" placeholder="Ваш E-mail"/>
            <input type="text" class="input"  placeholder="Текс сообщения"/>
        </form>
        <button class="profile-btn contact-modal-btn">Отправить</button>

    </div>
</div>

    
  )
}

    