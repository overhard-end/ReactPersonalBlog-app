import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '..';

const PostItem = observer(({ post }) => {
  const { store } = useContext(Context);
  const users = toJS(store.users);

  const author = users.find((user) => user._id === post.userId);

  const defaultAvatar = 'https://ui-avatars.com/api/?background=random';

  return (
    <div className="post">
      <div className="post__author">
        <img
          style={{ height: '50px', borderRadius: '50%' }}
          className="post__author-image"
          src={author?.imgUrl ? author?.imgUrl : defaultAvatar}
          alt="s"
        />
        <div className="post__author-info">
          <p className="post__author-name">
            {author?.firstName} {author?.lastName}
          </p>
          <p className="post__author-email">{author?.email} </p>
        </div>
      </div>
      <div className="post__content">
        {post.imgUrl ? (
          <div className="post__image__item">
            <img className="post__image" src={post.imgUrl} />{' '}
          </div>
        ) : (
          ''
        )}
        <div className="post__info">
          <h2 className="post__title">{post.title}</h2>
          <p className="post__text">{post.text}</p>
        </div>
      </div>
      <div className="post__footer">
        <time className="post__time">{post.date}</time>
        <Link to={`/post/${post._id}`}>
          {' '}
          <button className="post__link">Читать</button>
        </Link>
      </div>
    </div>
  );
});
export default PostItem;
