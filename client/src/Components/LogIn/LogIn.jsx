import React, { useState } from "react";
import "./LogIn.css";
import axios from 'axios';
import config from '../../config.json';
import { Link, useNavigate } from 'react-router-dom'

const LogIn = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const { username, password } = user;
  const navigate = useNavigate();

  const onInputChange = (event) => {
    // setUser(prevState=> ({...prevState,[event.target.name]: event.target.value}));
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const loginSubmission = async (e) => {
    e.preventDefault();
    try {
      if (!username || !password) {
        setError("Please enter your credentials");
      } else {
        const response = await axios.post(`${config.apiURl}/login`, user)
        if (response.data) {
          console.log("login successfull");
          localStorage.setItem('token', response.data.token);
          navigate("/home",{state:{id:username}});
        }
      }
    } catch (error) {
      setError("email or password incorrect !");
    }
  }
  return (
    <>
      <div className="LogIn">
        <h2>Connection</h2>
        {error && <div className="error"> {error} </div>}
        <form action="POST" onSubmit={loginSubmission}>
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
            <button type="submit">Se connecter</button>
          </div>
          <div className="msg">
            To create an account click on <Link to={"/signup"}>SignUp</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default LogIn;
