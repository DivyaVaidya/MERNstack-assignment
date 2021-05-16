import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACoU2wgVhAmZqDm_9XFRJgoVgs1ebrNdk",
    authDomain: "recipebook-e8f21.firebaseapp.com",
    databaseURL: "https://recipebook-e8f21.firebaseio.com",
    projectId: "recipebook-e8f21",
    storageBucket: "recipebook-e8f21.appspot.com",
    messagingSenderId: "794622477051",
    appId: "1:794622477051:web:e11eec43d5f1e2722da65e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
