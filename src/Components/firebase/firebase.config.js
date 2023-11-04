// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS2EOFStq3ElgS05mltXXZv64y_8xb4IQ",
  authDomain: "online-group-study-crud-jwt.firebaseapp.com",
  projectId: "online-group-study-crud-jwt",
  storageBucket: "online-group-study-crud-jwt.appspot.com",
  messagingSenderId: "980102922449",
  appId: "1:980102922449:web:af08389afa8eee719105f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;