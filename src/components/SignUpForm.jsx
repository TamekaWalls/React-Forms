import { useState } from "react"

function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();


    try {
      if (username.length < 8) {
        throw new Error('Username length must be 8 and above characters')
      }
      if (password.length < 8) {
        throw new Error('Password length must be 8 and above characters')
      }
      const res = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
        method: "POST",
        headers: {
          'Content-Type': "Application/json"
        },
        body: JSON.stringify({ username, password })
      });
      const result = await res.json()
      setToken(result.token);
    } catch (error) {
      setError(error.message);
    }
  }

  return <div>
    <h2>Sign Up</h2>
    {error && <p className="error">{error}</p>}
    <form onSubmit={handleSubmit}>
      <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />

      <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button>Submit</button>
    </form>
  </div>
}
export default SignUpForm