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
    event.preventDefault();
    setUser({ ...user, [event.target.name]: event.target.value });
    console.log(user);
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post(`http://csbuildweek1.herokuapp.com/api/registration/`, user)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          name="username"
          id="username"
          type="text"
          value={user.username}
          onChange={handleChange}
        />

        <label>Email:</label>
        <input
          name="email"
          id="email"
          type="email"
          value={user.email}
          onChange={handleChange}
        />

        <label>Password:</label>
        <input
          name="password1"
          id="password1"
          type="password"
          value={user.password1}
          onChange={handleChange}
        />

        <label>Confirm Password:</label>
        <input
          name="password2"
          id="password2"
          type="password"
          value={user.password2}
          onChange={handleChange}
        />

        <button>Submit</button>
      </form>
    </>
  );
};

export default SignUp;
