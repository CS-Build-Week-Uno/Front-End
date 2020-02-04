import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Login = props => {
  const [user, setUser] = useState({ username: "", password: "" });

  function handleChange(e) {
    const updatedUser = { ...user, [e.target.name]: e.target.value };
    setUser(updatedUser);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.history.push("/dashboard");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          required
          value={user.username}
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          required
          value={user.password}
          onChange={handleChange}
        />
        <button>Login</button>
      </form>
      <span>
        Don't have an account yet? <Link to="/signup">Sign Up</Link>
      </span>
    </>
  );
};

export default Login;
