import React from 'react';

import { auth } from '../../firebase/firebase.utils';

import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = ({ currentUser }) => {
  return (
    <header className="header">
      {currentUser ? (
        <nav className="nav">
          <div onClick={() => auth.signOut()}>Sign Out</div>
        </nav>
      ) : (
        <nav className="nav">
          <div>
            <Link to="/signin"> Sign In </Link>
          </div>
          <div>
            <Link to="/signup"> Sign Up </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
