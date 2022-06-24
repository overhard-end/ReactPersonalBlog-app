import { toJS } from 'mobx';
import React, { useContext } from 'react';
import { Context } from '..';
import { AddPost } from '../components/add-post';
import { PostNavigation } from '../components/post-navigation';
import PostItem from '../components/post-item';
import { observer } from 'mobx-react-lite';

export const MyPostsPage = observer(() => {
  const { store } = useContext(Context);
  const posts = toJS(store.posts);

  const myPosts = posts.filter((post) => store.user.id === post.userId);

  return (
    <div>
      <AddPost />

      {myPosts.map((post) => (
        <PostItem post={post} key={post._id} />
      ))}
    </div>
  );
});
