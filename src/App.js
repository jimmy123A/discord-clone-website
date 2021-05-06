import React, { useEffect } from 'react';
import './App.css';
import Chat from './components/Chat';
import SideBar from './components/SideBar';
import { useSelector, useDispatch } from 'react-redux';
import { login, selectUser, logout } from './features/userSlice';
import Login from './components/Login';
import { auth } from './firebase';

function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
   auth.onAuthStateChanged((authUser => {
    if (authUser) {
      // the user is logged in
      console.log(`there is an authUser${authUser}`);
      dispatch(login({
       uid: authUser.uid,
       photo: authUser.photoURL,
       email: authUser.email,
       displayName: authUser.displayName 
      }))
    } else {
      //the user is logged out
      dispatch(logout());
    }
   }))
  }, [dispatch]);

  return (
    <div className="app">
      {user ? (
       <> 
       <SideBar />
       <Chat />
       </>
      ) : (
       <Login />
      )}
    </div>
  );
}

export default App;
