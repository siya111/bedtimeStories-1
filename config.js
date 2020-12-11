import * as firebase from 'firebase'
require("@firebase/firestore")



var firebaseConfig = {
    apiKey: "AIzaSyBaPR4Ex9wLEmQi-EPSJrZsVUANis7_4g8",
    authDomain: "storyhub-ffaaa.firebaseapp.com",
    projectId: "storyhub-ffaaa",
    storageBucket: "storyhub-ffaaa.appspot.com",
    messagingSenderId: "937521018481",
    appId: "1:937521018481:web:7fbcac854751b971688dd0"
  };




firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()      