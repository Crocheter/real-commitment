import AuthButton from '../components/AuthButton'

import React from 'react'

const Home = ({ onSignIn }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-4">Real Commitment</h1>
      <p className="mb-6">Sign in to start your 7-day accountability journey.</p>
      <AuthButton onSignIn={onSignIn}/>
    </div>
  )
}

export default Home