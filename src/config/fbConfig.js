import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
  apiKey: "AIzaSyAlWsSj9Y2AuWbXhMGlSmHX2-pjPvN4d7U",
  authDomain: "reactboom-515ea.firebaseapp.com",
  databaseURL: "https://reactboom-515ea.firebaseio.com",
  projectId: "reactboom-515ea",
  storageBucket: "reactboom-515ea.appspot.com",
  messagingSenderId: "195302645015"
};

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase
