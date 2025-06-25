import React from 'react'
import { signInWithPopup, auth, provider } from '../firebase';

const AuthButton = ({ onSignIn }) => {

    const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      onSignIn({ name: user.displayName, email: user.email, photo: user.photoURL });
    } catch (error) {
      console.error('Google Sign-in error:', error);
    }
  };

  return (
     <button
      onClick={handleLogin}
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
    >
      Sign in with Google
    </button>
  )
}

export default AuthButton