import { useState } from "react";

export default function Exo3() {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !pwd) return;
    setUsers([...users, { username, pwd }]);
    setUsername("");
    setPwd("");
  };

  return (
    <div>
      <h2>Exercise 3</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
        <br />
        <button type="submit">Add User</button>
      </form>

      <ul>
        {users.map((u, i) => (
          <li key={i}>
            {u.username} ({u.pwd})
            <button onClick={() => setUsers(users.filter((_, index) => index !== i))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
