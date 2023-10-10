import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../config.json";

const SignUp = () => {
  const [newUser, setNewUser] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const { username, email, password } = newUser;
  const navigate = useNavigate();

  const onInputChange = (event) => {
    setNewUser((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const signupSubmission = async (e) => {
    e.preventDefault();
    try {
      if (!username || !email || !password) {
        setError("Please fill in all fields");
      } else {
        const response = await axios.post(`${config.apiURl}/signup`, newUser);
        if (response.data ) {
          alert('Inscription reussie')
          window.location.assign("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="SignUp">
      <h2>Inscription</h2>
      {error && <div className="error"> {error} </div>}
      <form action="POST" onSubmit={signupSubmission}>
        <div>
          <label htmlFor="">Username</label>
          <input
            required
            type="text"
            name="username"
            value={username}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            required
            type="password"
            name="password"
            value={password}
            onChange={onInputChange}
          />
        </div>
        <div>
          <button type="submit">S'inscrire</button>
        </div>
        <div className="msg">
          To acces on your account click on <Link to={"/"}>LogIn</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
