import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
  .collection('users')
  .doc('BxAlbkBbyCPiFX9It52Z')
  .collection('cart')
  .doc('0rxgtgjIlSqrgNPkULsi');
// Small Bag

// You can write like these
firestore.doc('/users/BxAlbkBbyCPiFX9It52Z/cart/0rxgtgjIlSqrgNPkULsi');
firestore.collection('/users/BxAlbkBbyCPiFX9It52Z/cart');

/* 

＊QueryReference and QuerySnapshot

  queryとはfirestore（データベース）からデータを取得するためのリクエスト

  Firestoreは２種類のオブジェクトをreturnする。

  references & snapshotsの２種類。
  ともにDocument or Collection versionsとして。

  Queryによるリクエストに対してそのデータが存在していなくても、Firestoreは必ずこれらのオブジェクトをreturnする。

＊QueryReference

  詳細のドキュメント

  https://firebase.google.com/docs/auth/web/google-signin?authuser=0#next_steps



*/
