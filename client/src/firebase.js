import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5mL-IqOF2NGiX4x1pvKZy6OUNIQZKpiA",
  authDomain: "video-app-73dcf.firebaseapp.com",
  projectId: "video-app-73dcf",
  storageBucket: "video-app-73dcf.appspot.com",
  messagingSenderId: "104174311793",
  appId: "1:104174311793:web:49af0ed62af480b675fed0",
  measurementId: "G-9M0GLSJ3ZN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
