import { SingleBedOutlined } from '@material-ui/icons';
import React from 'react';
import { auth } from '../firebase';

export const Feed = () => {
  return (
    <div>
      Feed
      <button onClick={() => auth.signOut()}>logout</button>
    </div>
  );
};
