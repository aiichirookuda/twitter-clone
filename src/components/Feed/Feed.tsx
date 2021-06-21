import { SingleBedOutlined } from '@material-ui/icons';
import React from 'react';
import { auth } from '../../firebase';
import { TweetInput } from '../TweetInput/TweetInput';
import Styles from './Feed.module.scss';

export const Feed: React.FC = () => {
  return (
    <div className={Styles.feed}>
      Feed
      <TweetInput />
      <button onClick={() => auth.signOut()}>logout</button>
    </div>
  );
};
