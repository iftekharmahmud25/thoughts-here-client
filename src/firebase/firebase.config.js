// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJGKyuKMRMTJEOOrSIk6v8_zjh2jxcpNI",
  authDomain: "thoughtshere-3ed3c.firebaseapp.com",
  projectId: "thoughtshere-3ed3c",
  storageBucket: "thoughtshere-3ed3c.appspot.com",
  messagingSenderId: "243058054526",
  appId: "1:243058054526:web:7c50d9b835418138f14f2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;