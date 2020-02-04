import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const SignUp = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password1: "",
    password2: ""
  });

  const handleChange = event => {
    const updatedUser = { ...user, [event.target.name]: event.target.value };
    setUser(updatedUser);
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          name="username"
          id="username"
          type="text"
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input name="email" id="email" type="email" onChange={handleChange} />

        <label htmlFor="password1">Password:</label>
        <input
          name="password1"
          id="password1"
          type="password"
          onChange={handleChange}
        />

        <label htmlFor="password2">Confirm Password:</label>
        <input
          name="password2"
          id="password2"
          type="password"
          onChange={handleChange}
        />

        <button>Submit</button>
      </form>
    </>
  );
};

export default SignUp;
