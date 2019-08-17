import React from 'react';
import './App.scss';

import Header from './components/header/header.component';

import SignUp from './components/sign-up/sign-up.component';
import SignIn from './components/sign-in/sign-in.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { Switch, Route } from 'react-router-dom';

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
    const Home = () => {
      return (
        <div>
          <h1>Welcome to Firebase Auth</h1>
        </div>
      );
    };

    return (
      <div className="App">
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
