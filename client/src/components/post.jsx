import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Context } from '..';
import { Discussion } from './discussion';

export const Post = observer(() => {
  const { store } = useContext(Context);
  const posts = toJS(store.posts);
  const { id } = useParams();
  const post = posts.find((post) => post._id === id);

  if (!post) {
    return <Navigate to="/" />;
  }
  return (
    <div className="text-page">
      <div className="text-page__header">
        <div className="text-page__links-item">
          <Link to="/">
            <p className="post__tag back-link">Вернуться назад</p>
          </Link>
          {store.user.id === post.userId ? (
            <button onClick={() => store.deletePost(store.user.id, post._id)} className="">
              {' '}
              Удалить пост
            </button>
          ) : (
            ''
          )}
        </div>
        <div className="post__tag">
          <time className="post__time">{post.date}</time>
        </div>

        <h2 className="text-page__title">{post.title}</h2>
      </div>
      <div className="post-body">
        {post.imgUrl ? (
          <div className="post__image__item">
            <img src={post.imgUrl} alt="post-img" className="post__image" />
          </div>
        ) : (
          ''
        )}

        <p className="post__text">{post.text}</p>
      </div>
      <Discussion postId={id} />
    </div>
  );
});
