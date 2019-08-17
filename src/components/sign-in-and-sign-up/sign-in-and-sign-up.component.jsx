import React from 'react';
import SignUp from '../sign-up/sign-up.component';
import SignIn from '../sign-in/sign-in.component';

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignUp />
      <SignIn />
    </div>
  );
};

export default SignInAndSignUp;
