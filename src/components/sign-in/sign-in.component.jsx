import React, { Component } from 'react';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  render() {
    const { email, password } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <section className="sign-up">
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <FormInput
            onChange={handleChange}
            type="email"
            name="email"
            value={email}
            required
          />

          <label htmlFor="password">Password:</label>
          <FormInput
            onChange={handleChange}
            type="password"
            name="password"
            value={password}
            required
          />

          <CustomButton type="submit">SignIn</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGooleSignIn>
            Sign in with Google
          </CustomButton>
        </form>
      </section>
    );
  }
}

export default SignIn;
