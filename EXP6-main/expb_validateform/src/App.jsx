import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const validateEmail = (em) => {
    if (!em) return { ok: false, msg: 'Email is required' }
    // Basic but strict email validation: local@domain.tld (tld >=2 letters)
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/
    if (!re.test(em)) return { ok: false, msg: 'Enter a valid email address' }
    return { ok: true }
  }

  const validatePassword = (pw) => {
    if (!pw) return { ok: false, msg: 'Password is required' }
    if (!pw.match(/^[A-Z]/)) return { ok: false, msg: 'Must start with a capital letter' }
    if (pw.length < 5) return { ok: false, msg: 'Must be at least 5 characters' }
    if (!pw.match(/\d/)) return { ok: false, msg: 'Must contain at least one number' }
    if (!pw.match(/[^\w\s]/)) return { ok: false, msg: 'Must contain at least one special character' }
    return { ok: true }
  }

  const emailState = validateEmail(email)
  const passwordState = validatePassword(password)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (emailState.ok && passwordState.ok) {
      alert('Form submitted')
    }
  }

  return (
    <div className="app-shell">
      <div className="card" role="main">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label className="label" htmlFor="email">Email</label>
            <input
              id="email"
              className={`input ${email && !emailState.ok ? 'error' : ''}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              aria-invalid={!emailState.ok}
            />
            {!emailState.ok && email && (
              <div className="error-msg">{emailState.msg}</div>
            )}
          </div>

          <div className="field">
            <label className="label" htmlFor="password">Password</label>
            <input
              id="password"
              className={`input ${password && !passwordState.ok ? 'error' : ''}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Start with capital, include number & special"
              type="password"
              aria-invalid={!passwordState.ok}
            />
            {!passwordState.ok && password && (
              <div className="error-msg">{passwordState.msg}</div>
            )}
          </div>

          <div className="actions">
            <button
              type="submit"
              className="btn"
              disabled={!(emailState.ok && passwordState.ok)}
            >
              Submit
            </button>
          </div>

          <div className="footer-cta small-muted">By signing in you agree to our terms.</div>
        </form>
      </div>
    </div>
  )
}

export default App
