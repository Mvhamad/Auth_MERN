import React from 'react';
import './LogOut.css';


const LogOut = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload('/');
  }
  return (
    <div className="LogOut">
      <button className="button-89" onClick={handleLogout}>
        LOG OUT
      </button>
    </div>
  );
}

export default LogOut