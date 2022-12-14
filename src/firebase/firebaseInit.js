import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBjsBqbT5NAnsjLIFCrb9ODn8ChNWZLU-A',
  authDomain: 'jbblogs-159a4.firebaseapp.com',
  projectId: 'jbblogs-159a4',
  storageBucket: 'jbblogs-159a4.appspot.com',
  messagingSenderId: '342092665691',
  appId: '1:342092665691:web:c50a9344fc47a3ffa3007e'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();
