import React from 'react';
import './App.scss';

import Header from './components/header/header.component';
import SignInAndSignUp from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    // stateの状態が変わった際に呼び出される. sign outするまで.

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        // if exists
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            }
            // () => {
            //   console.log(this.state);
            // }
          );
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    // componentDidMountで呼び出された処理をクリーンアップする.
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <Header currentUser={currentUser} />
        <SignInAndSignUp />
      </div>
    );
  }
}

export default App;
