// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa9OqosVDiZQYqmYG2DTzIisrYqKag-Vk",
  authDomain: "real-commitment.firebaseapp.com",
  projectId: "real-commitment",
  storageBucket: "real-commitment.firebasestorage.app",
  messagingSenderId: "862042087499",
  appId: "1:862042087499:web:d282add30f9bd052246dce",
  measurementId: "G-5K3P7SN725"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

signInWithPopup(auth, provider)
  .then((result) => {
    // success
    const user = result.user;
    console.log('User signed in:', user);
  })
  .catch((error) => {
    console.error('Google Sign-in error:', error);
  });

export { auth, provider, signInWithPopup, signOut };