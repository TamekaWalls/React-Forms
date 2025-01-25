import { useState } from "react"

function Authenticate({ token }) {
  const [error, setError] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)
  const [username, setUserame] = useState(null)

  async function handleClick() {
    try {
      const res = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
        method: "GET",
        headers: {
          'Content-Type': "Application/json",
          Authorization: `Bearer ${token}`
        },
      })
      const result = await res.json()
      console.log(result)
      setSuccessMessage(result.message)
      setUserame(result.data.username)
    } catch (error) {
      setError(error.message)
    }
  }
  return <div>
    <h2>Authenticate</h2>
    {username && <h3>{username}</h3>}
    {error && <p className="error">{error}</p>}
    {successMessage && <p className="success">{successMessage}</p>}
    <button onClick={handleClick}>Authenticate Token</button>
  </div>
}


export default Authenticate
