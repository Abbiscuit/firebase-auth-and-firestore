import React, { Component } from 'react';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';

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
          <input
            onChange={handleChange}
            type="email"
            name="email"
            value={email}
            required
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={password}
            required
          />
          <br />
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
