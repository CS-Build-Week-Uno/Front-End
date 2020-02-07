import React from "react";
import {useDispatch} from 'react-redux'
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { login } from "../store/actions"

const Login = props => {
  const [user, setUser] = useState({ username: "", password: "" });
  const dispatch = useDispatch()


  function handleChange(e) {
    const updatedUser = { ...user, [e.target.name]: e.target.value };
    setUser(updatedUser);
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(login(user))

    if (localStorage.getItem('token')) {
      props.history.push('/dashboard')
    }

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
