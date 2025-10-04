// src/components/AuthForm.jsx

import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { signUpWithEmail, signInWithEmail, signOut, getCurrentUser } from '../lib/auth'
import "./AuthForm.css";


export default function AuthForm() {
  const [mode, setMode] = useState('signup')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => { getCurrentUser().then(setUser) }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      if (mode === 'signup') {
        const u = await signUpWithEmail({ email, password, username })
        setUser(u)
      } else {
        const u = await signInWithEmail({ email, password })
        setUser(u)
      }
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <div>
      {!user ? (
      <form onSubmit={handleSubmit} className="auth-form">
        {mode === 'signup' && (
          <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" required />
        )}
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">{mode === 'signup' ? 'Sign Up' : 'Log In'}</button>
        <button type="button" onClick={() => setMode(mode === 'signup' ? 'login' : 'signup')}>
          {mode === 'signup' ? 'Have an account? Log in' : 'Need an account? Sign up'}
        </button>
      </form>
    ) : (
      <div className="signout-container">
        <p className="welcome-text">Welcome, {user.email}</p>
        <button className="signout-button" onClick={async () => { await signOut(); setUser(null) }}>
          Sign Out
        </button>
      </div>
    )}

    </div>
  )
}
