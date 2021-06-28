import React, { useState, useEffect } from 'react';
import Styles from './Post.module.scss';
import { db } from '../../firebase';
import firebase from 'firebase/app';
import { useAppSelector } from '../../app/hooks';
import { selectUser } from '../../features/userSlice';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MessageIcon from '@material-ui/icons/Message';
import SendIcon from '@material-ui/icons/Send';

interface PROPS {
  postId: string;
  avatar: string;
  image: string;
  text: string;
  timestamp: any;
  username: string;
}

export const Post: React.FC<PROPS> = ({
  postId,
  avatar,
  image,
  text,
  timestamp,
  username,
}) => {
  const user = useAppSelector(selectUser);
  const [comment, setComment] = useState('');
  const newComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    db.collection('posts').doc(postId).collection('comments').add({
      avatar: user.photoUrl,
      text: comment,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      username: user.displayName,
    });
    setComment('');
  };

  return (
    <div className={Styles.post}>
      <div className={Styles.post_avatar}>
        <Avatar src={avatar} />
      </div>
      <div className={Styles.post_body}>
        <div>
          <div className={Styles.post_header}>
            <h3>
              <span className={Styles.post_headerUser}>@{username}</span>
              <span className={Styles.post_headerTime}>
                {new Date(timestamp?.toDate()).toLocaleString()}
              </span>
            </h3>
          </div>
          <div className={Styles.post_tweet}>
            <p>{text}</p>
          </div>
        </div>
        {image && (
          <div className={Styles.post_tweetImage}>
            <img src={image} alt="tweet" />
          </div>
        )}
        <form onSubmit={newComment}>
          <div className={Styles.post_form}>
            <input
              className={Styles.post_input}
              type="text"
              placeholder="Type new comment..."
              value={comment}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setComment(e.target.value);
              }}
            />
            <button
              disabled={!comment}
              className={
                comment ? Styles.post_button : Styles.post_buttonDisable
              }
              type="submit"
            >
              <SendIcon className={Styles.post_sendIcon} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
