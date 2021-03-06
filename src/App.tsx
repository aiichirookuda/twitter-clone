import React, { useEffect } from 'react';
import Styles from './App.module.scss';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { Auth } from './components/Auth/Auth';
import { Feed } from './components/Feed/Feed';
import { selectUser, login, logout } from './features/userSlice';
import { auth } from './firebase';

const App: React.FC = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unSub = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photoUrl: authUser.photoURL,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return () => {
      unSub();
    };
  }, [dispatch]);

  return (
    <>
      {user.uid ? (
        <div className={Styles.app}>
          <Feed />
        </div>
      ) : (
        <Auth />
      )}
    </>
  );
};

export default App;
