import { useState } from 'react'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'
import './App.css'

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className='container'>
      <h1>My Favorite Contacts</h1>
      <SignUpForm token={token} setToken={setToken} />

      <Authenticate token={token} setToken={setToken} />
    </div>
  )



}

export default App
