import firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDwXI-g2g0G49igrUQIb-TS-4EqsPe0okg",
  authDomain: "linkedin-clone-d0899.firebaseapp.com",
  projectId: "linkedin-clone-d0899",
  storageBucket: "linkedin-clone-d0899.appspot.com",
  messagingSenderId: "210172580507",
  appId: "1:210172580507:web:7b9cf277319529f98d6c3e",
  measurementId: "G-359735CWQJ",
};
// Initialize Firebase
const fireabseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = fireabseApp.firestore();
const auth = fireabseApp.auth();
const storage = fireabseApp.storage();

export {db, auth, storage};