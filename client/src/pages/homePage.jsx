import React, { useContext } from 'react';
import PostItem from '../components/post-item';
import { PostNavigation } from '../components/post-navigation';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import Fuse from 'fuse.js';
import { toJS } from 'mobx';

export const HomePage = observer(() => {
  const { store } = useContext(Context);
  const AllPosts = toJS(store.posts);

  const fuse = new Fuse(AllPosts, {
    keys: ['title', 'text'],
  });
  if (store.searchData.length > 0) {
    const findedPosts = fuse.search(store.searchData);
    const newAllPosts = [];
    findedPosts.forEach(({ item }) => {
      newAllPosts.push(item);
    });

    return (
      <div>
        {newAllPosts.map((post) => (
          <PostItem post={post} key={post._id} />
        ))}
      </div>
    );
  }
  return (
    <div>
      {AllPosts.map((post) => (
        <PostItem post={post} key={post._id} />
      ))}

      <PostNavigation />
    </div>
  );
});
