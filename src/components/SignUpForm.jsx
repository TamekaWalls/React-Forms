import { useState } from "react"

function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
        method : "POST", 
        headers : {
          'Content-Type': "Application/json"
        },
        body: JSON.stringify({username, password})
      });
      const result=await res.json()
      console.log (result)
    } catch (error) {
      setError(error.message);
    }
  }
  
  return <div>
    <h2>Sign Up</h2>
    {error && <p>{error}</p>}
    <form onSubmit={handleSubmit}>
      <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />

      <input placeholder="Password" value={password} onChange={(e) =>setPassword(e.target.value)} />

      <button>Submit</button>
    </form>
  </div>
}
export default SignUpForm