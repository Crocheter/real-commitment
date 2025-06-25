import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Dashboard from './components/Dashboard'

function App() {
  const [user, setUser] = useState(null);
  const dummyUser = {
    name: 'Abisola',
    email: 'abisola@example.com',
  };

  return (
     <>
      <div className="min-h-screen bg-gray-100"> 
        {!user ? (
          <Home onSignIn={setUser} />
        ) : (
          <Dashboard user={dummyUser} onSignOut={() => alert('Logged out')} />
        )}
      </div>
    </>
  )
}

export default App
