import React from 'react';

import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser }) => {
  return (
    <header className="header">
      {currentUser ? (
        <div onClick={() => auth.signOut()}>Sign Out</div>
      ) : (
        <div>Sign In</div>
      )}
    </header>
  );
};

export default Header;
