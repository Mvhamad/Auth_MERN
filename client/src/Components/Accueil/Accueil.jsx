import React from 'react';
import './Accueil.css';
import { useLocation } from 'react-router-dom';
import LogOut from '../LogOut/LogOut';

const Accueil = () => {
  const location = useLocation();
  return (
    <div className="Accueil">
      <h1>Hello {location.state.id} and welcome to your account</h1>
        <LogOut/>
    </div>
  );
}

export default Accueil