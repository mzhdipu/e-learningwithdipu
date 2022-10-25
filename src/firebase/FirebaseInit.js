// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOAzt9LCUHEE72Ro6Dw0IgIvXSVqWCMCM",
  authDomain: "e-learning-with-dipu.firebaseapp.com",
  projectId: "e-learning-with-dipu",
  storageBucket: "e-learning-with-dipu.appspot.com",
  messagingSenderId: "602009201463",
  appId: "1:602009201463:web:0f3c79edd48f37c18c88b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;