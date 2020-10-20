import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyC_RffKSE44JlS8oGbynJFedMyPCDEnWhE",
    authDomain: "netflix-98917.firebaseapp.com",
    databaseURL: "https://netflix-98917.firebaseio.com",
    projectId: "netflix-98917",
    storageBucket: "netflix-98917.appspot.com",
    messagingSenderId: "285795569158",
    appId: "1:285795569158:web:d433faa6fdcddb7a437d87"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);     // firebase initialization

export { firebase };