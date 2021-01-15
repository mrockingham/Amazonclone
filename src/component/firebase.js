import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCSegflWFko6ndf4W4gwwzmg8y0mw9uLLk",
    authDomain: "clone-72250.firebaseapp.com",
    databaseURL: "https://clone-72250.firebaseio.com",
    projectId: "clone-72250",
    storageBucket: "clone-72250.appspot.com",
    messagingSenderId: "292746552837",
    appId: "1:292746552837:web:8fc1b029d852833bf3de6c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth();

  export {db, auth};
