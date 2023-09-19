import React from 'react';
import './LogIn.css';

const LogIn = () => {
  return (
    <>
      <div className="LogIn">
        <h2>Connection</h2>
        <form action="">
          <div>
            <label htmlFor="">Username</label>
            <input required type="text" />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input required type="password" />
          </div>
          <div>
            <button type="submit">Se connecter</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LogIn