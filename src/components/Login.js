import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { login } from "../store/actions";

const Login = props => {
  const [user, setUser] = useState({ username: "", password: "" });

  function handleChange(e) {
    const updatedUser = { ...user, [e.target.name]: e.target.value };
    setUser(updatedUser);
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`https://csbuildweek1.herokuapp.com/api/login`, {
        username: user.username,
        password: user.password
      })
      .then(function(response) {
        console.log(response);
        localStorage.setItem("token", response.data.key);
        props.history.push("/dashboard");
      })
      .catch(function(error) {
        console.log(error);
      });

    // login(dispatch, user).then(res => {
    //   if(res){
    //     props.history.push("/dashbaord")
    //   }
    // });
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
