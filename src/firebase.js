import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBQwz1gDhyfw-kMDXq-vYN6ReoDR6jmccc',
  authDomain: 'lunch-ru.firebaseapp.com',
  databaseURL: 'https://lunch-ru.firebaseio.com',
  projectId: 'lunch-ru',
  storageBucket: 'lunch-ru.appspot.com',
  messagingSenderId: '340313493936'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
xzx