import { Comment } from './comment';
import React, { useContext, useState } from 'react';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
export const Discussion = observer(({ postId }) => {
  const { store } = useContext(Context);
  const comments = toJS(store.comments);
  const postComments = comments.data.filter((comment) => comment.postId === postId);

  const userId = store.user.id;
  const [commentData, setCommentData] = useState({ postId: postId, userId: userId, content: '' });

  async function addCommentHandler() {
    if (!commentData.content || commentData.content.length < 0) {
      return alert('Заполните поля для комментрия');
    }
    store.addComment(commentData);
  }

  return (
    <div className="discussion">
      <h2 className="discussion__title">Обсуждение</h2>
      <form action="" className="discussion-form">
        <input
          value={commentData.text}
          onChange={(e) => setCommentData({ ...commentData, content: e.target.value })}
          type="text"
          className="discussion-input"
          placeholder="Текст комментрия"
        />
        <button onClick={() => addCommentHandler()} type="button" className="discussion-btn">
          Отправить
        </button>
      </form>
      {postComments
        ? postComments.map((comment) => <Comment comment={comment} key={comment._id} />)
        : ''}
    </div>
  );
});
