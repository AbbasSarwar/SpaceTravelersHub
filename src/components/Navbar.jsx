import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../assets/planet.png';

const Navbar = () => (
  <header>
    <div>
      <img src={planet} alt="logo" />
      <h1>Space Travelers&apos; Hub</h1>
    </div>
    
    <nav>
      <ul>
        <li>
          <NavLink to="/">Rockets</NavLink>
        </li>
        <li>
          <NavLink to="/missions">Missions</NavLink>
        </li>
        <li>
          <NavLink to="/my-profile">My profile</NavLink>
        </li>
        </ul>
    </nav>
  </header>
);

export default Navbar;
