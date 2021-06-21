import { SingleBedOutlined } from '@material-ui/icons';
import React from 'react';
import { auth } from '../firebase';
import { TweetInput } from './TweetInput/TweetInput';

export const Feed: React.FC = () => {
  return (
    <div>
      Feed
      <TweetInput />
      <button onClick={() => auth.signOut()}>logout</button>
    </div>
  );
};
