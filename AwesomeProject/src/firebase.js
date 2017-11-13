import * as firebase from 'firebase'

const  config = {
    apiKey: "AIzaSyC8VGVQgZ6K_XJYWitKpHK-4LZ-0L_n5Fg",
    authDomain: "music-37255.firebaseapp.com",
    databaseURL: "https://music-37255.firebaseio.com",
    projectId: "music-37255",
    storageBucket: "music-37255.appspot.com",
    messagingSenderId: "824260512414"
  };
  
firebase.initializeApp(config);

export const firebaseAuth = firebase.auth()
export const firebaseDatabase = firebase.database();

 
export default firebase