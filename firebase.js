// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore';
import { getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5RsHR0jAjmxGJxBpHWN_EZvV7BGWg0d0",
  authDomain: "myproductivityapp-e62cd.firebaseapp.com",
  projectId: "myproductivityapp-e62cd",
  storageBucket: "myproductivityapp-e62cd.appspot.com",
  messagingSenderId: "759389287885",
  appId: "1:759389287885:web:c3492164deae1ba9220084",
  measurementId: "G-S16YTZ2FPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getFirestore(app);
const storage = getStorage(app);
export { app, database, storage }
