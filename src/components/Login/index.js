import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from '../../firebase';
import './login.css';

function Login() {

  const signin = () => {
   // all the google logic to sign in goes here
    auth.signInWithPopup(provider).catch((err) => alert(err));
  };

    return (
        <div className ="login" >
         <div className ="login__logo" >
          <img
           src ="https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Discord_logo.svg/1280px-Discord_logo.svg.png" 
           alt =""
           />  
         </div> 
         <Button onClick = {signin} >Sign In</Button>
        </div>
    )
}

export default Login;
