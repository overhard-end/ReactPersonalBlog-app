import React from 'react';


export const Comments = (props) => {
    
  return (
    <div class="comments">
    <div class="comments__item">
        <div class="commentator__prof">
            <img src={props.comment.img} alt="prof-photo" class="prof-photo"/>
            <div class="commentator__info">
                <p class="commentator__name">{props.comment.name}</p>
                <time class="post__time comment__time">{props.comment.date}</time>
            </div>
        </div>
        <p class="comment__text">{props.comment.text}</p>
        <a id="click" class="comment__answer-link">ответить</a>
            <form action="" class=" discussion-form-answer--h">
                <input type="text" class="discussion-input" placeholder="Текст комментрия"/>
                <button id="click" type="button" class="discussion-btn">Отправить</button>
            </form>
        
    </div>
   
</div>
  )
}
