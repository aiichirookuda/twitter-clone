import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { TweetInput } from '../TweetInput/TweetInput';
import Styles from './Feed.module.scss';

type POST = {
  id: string;
  avatar: string;
  image: string;
  text: string;
  timestamp: null | string;
  username: string;
};

export const Feed: React.FC = () => {
  const [posts, setPosts] = useState<POST[]>([
    {
      id: '',
      avatar: '',
      image: '',
      text: '',
      timestamp: null,
      username: '',
    },
  ]);

  useEffect(() => {
    const unSub = db
      .collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            avatar: doc.data().avatar,
            image: doc.data().image,
            text: doc.data().text,
            timestamp: doc.data().timestamp,
            username: doc.data().username,
          }))
        )
      );
    return () => unSub();
  }, []);

  return (
    <div className={Styles.feed}>
      <TweetInput />
      {posts.map((post) => {
        return <h3>{post.id}</h3>;
      })}
    </div>
  );
};
