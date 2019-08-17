import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <section className="sign-up">
        <h2 className="title">Sign Up</h2>
        <span>Sign up with your email &amp; password</span>
        <form onSubmit={handleSubmit}>
          <label htmlFor="displayName">Display Name:</label>
          <input
            type="text"
            name="displayName"
            value={displayName}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
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
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            onChange={handleChange}
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            required
          />
          <br />
          <CustomButton type="submit"> Sign Up </CustomButton>
        </form>
      </section>
    );
  }
}

export default SignUp;
