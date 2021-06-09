import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDX3gnW3DMUz-ZK5JqroMf2t3dp9nFgX4M",
    authDomain: "photo-contest-47a12.firebaseapp.com",
    projectId: "photo-contest-47a12",
    storageBucket: "photo-contest-47a12.appspot.com",
    messagingSenderId: "443285928432",
    appId: "1:443285928432:web:010feb0a29d2b5b73dc535",
    measurementId: "G-9N5JS1PF6V"
  };
  const Fire=firebase.initializeApp(firebaseConfig);
  export const auth = Fire.auth();
  export const storage=Fire.storage();
  export const db = Fire.firestore();
  export default Fire;