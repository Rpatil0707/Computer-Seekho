import React, { useState } from 'react';
import './Login_signup.css';
import NavBar from './NavBar';
import Signup from './Signup';



const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
    
    <NavBar/>
      <div className='form-container'>
  
        {!isSubmitted ? (
          <Signup submitForm={submitForm} />
        ) : (
          <Signup />
        )}
      </div>
    </>
  );
};

export default Login;