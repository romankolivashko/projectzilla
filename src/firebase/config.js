import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDnYzoNh7LTpdHfLLi4xZx3d5hzoUBV8Q8",
  authDomain: "projectzilla-5192f.firebaseapp.com",
  projectId: "projectzilla-5192f",
  storageBucket: "projectzilla-5192f.appspot.com",
  messagingSenderId: "922298661826",
  appId: "1:922298661826:web:8e9af4c43d53472f82b45b"
};

// init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }