  // // Import the functions you need from the SDKs you need
  // import { initializeApp } from "firebase/app";
  // import { getAnalytics } from "firebase/analytics";
  // // TODO: Add SDKs for Firebase products that you want to use
  // // https://firebase.google.com/docs/web/setup#available-libraries

  // // Your web app's Firebase configuration
  // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // import {getAuth} from "firebase/auth";
  // import { getFirestore } from "firebase/firestore";
  // const firebaseConfig = {
  //   apiKey: "AIzaSyCKNQmbNtmlcmn-uoX1PZZ3uRMMdeL2iOU",
  //   authDomain: "authentication-81f15.firebaseapp.com",
  //   projectId: "authentication-81f15",
  //   storageBucket: "authentication-81f15.appspot.com",
  //   messagingSenderId: "141105394768",
  //   appId: "1:141105394768:web:7d5e137a8a9859f942cd55",
  //   measurementId: "G-88X5SDBTH4"
  // };

  // // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  // const firestore = getFirestore(app);
  // export const auth = getAuth(app);

  import firebase from 'firebase/compat/app';
  import 'firebase/compat/auth';
  import 'firebase/compat/firestore';


  const firebaseConfig = {
    apiKey: "AIzaSyCKNQmbNtmlcmn-uoX1PZZ3uRMMdeL2iOU",
    authDomain: "authentication-81f15.firebaseapp.com",
    projectId: "authentication-81f15",
    storageBucket: "authentication-81f15.appspot.com",
    messagingSenderId: "141105394768",
    appId: "1:141105394768:web:7d5e137a8a9859f942cd55",
    measurementId: "G-88X5SDBTH4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };