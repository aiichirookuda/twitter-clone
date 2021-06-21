import React from 'react';
import Styles from './TweetInput.module.scss';
import { useAppSelector } from '../../app/hooks';
import { selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';
import { Avatar } from '@material-ui/core';

export const TweetInput: React.FC = () => {
  const user = useAppSelector(selectUser);
  return (
    <div>
      <Avatar
        className={Styles.tweet_avatar}
        src={user.photoUrl}
        onClick={async () => {
          await auth.signOut();
        }}
      />
    </div>
  );
};
