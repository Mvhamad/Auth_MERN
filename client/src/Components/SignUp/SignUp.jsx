import React from 'react';
import './SignUp.css';

const SignUp = () => {
  return (
    <div className="SignUp">
      <h2>Inscription</h2>
      <form action="">
        <div>
          <label htmlFor="">Username</label>
          <input required type="text" />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input required type="email" />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input required type="password" />
        </div>
        <div>
          <button type="submit">S'inscrire</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp