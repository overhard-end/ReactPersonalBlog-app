import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import { toJS } from 'mobx';
export const Comment = observer(({ comment }) => {
  const { store } = useContext(Context);
  const users = toJS(store.users);
  const commentUser = users.find((user) => user._id === comment.userId);

  return (
    <div className="comments">
      <div className="comments__item">
        <div className="commentator__prof">
          <img alt="commenter-img" className="prof-photo" src={commentUser.imgUrl} />
          <div className="commentator__info">
            <p className="commentator__name">
              {commentUser.firstName} {commentUser.lastName}
            </p>
            <time className="post__time comment__time">{comment.date.slice(0, 10)}</time>
          </div>
        </div>
        <p className="comment__text">{comment.content}</p>

        <form action="" className=" discussion-form-answer--h">
          <input type="text" className="discussion-input" placeholder="Текст комментрия" />
          <button type="button" className="discussion-btn">
            Отправить
          </button>
        </form>
      </div>
      <span className="comment__underline"></span>
    </div>
  );
});
