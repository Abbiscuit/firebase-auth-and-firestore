import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAEIrTyFiPSY-7vK9M7A9etxLpThtgSlY0',
  authDomain: 'testfirebaseauth-514f3.firebaseapp.com',
  databaseURL: 'https://testfirebaseauth-514f3.firebaseio.com',
  projectId: 'testfirebaseauth-514f3',
  storageBucket: '',
  messagingSenderId: '204590898066',
  appId: '1:204590898066:web:69a03c8eb3a84be1'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize auth and firestore
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; // if userAuth doesnt exist

  // if exists
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // snapshotを取得する
  const snapShot = await userRef.get();

  // もしsnapshotが存在していなければ
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // Createする
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

// Initialize Google Auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

// Sign In with google funciton
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default
export default firebase;
