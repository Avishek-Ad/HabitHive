// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABXXqh65XB9uBS0DTwD3uWBAP_BcxP2eA",
  authDomain: "react-firebase-2024-df773.firebaseapp.com",
  projectId: "react-firebase-2024-df773",
  storageBucket: "react-firebase-2024-df773.firebasestorage.app",
  messagingSenderId: "737062756215",
  appId: "1:737062756215:web:4ca5cf2a9a89afc3c04b72",
  measurementId: "G-KEDM9MBLCN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default app;
export { auth, provider };