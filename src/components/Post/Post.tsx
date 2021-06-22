import React, { useState, useEffect } from 'react';
import Styles from './Post.module.scss';
import { db } from '../../firebase';
import firebase from 'firebase/app';
import { useSelector } from 'react-redux';
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
      </div>
    </div>
  );
};
