// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApVPHKBI9YIBGEyq5FWkS5tJkXIsCR0rw",
  authDomain: "erp-batata2.firebaseapp.com",
  projectId: "erp-batata2",
  storageBucket: "erp-batata2.appspot.com",
  messagingSenderId: "257303192098",
  appId: "1:257303192098:web:9c14831227f829d1b0207b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
