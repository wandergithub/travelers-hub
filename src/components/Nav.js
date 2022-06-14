import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Missions',
    },
    {
      id: 2,
      path: '/myprofile',
      text: 'My Profile',
    },
    {
      id: 3,
      path: '/rockets',
      text: 'Rockets',
    },
  ];
  return (
    <nav>
      <div className="navbar-Logo">
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <ul className="navbar">
        {links.map((link) => (
          <li className="navbar-li" key={link.id}>
            <NavLink to={link.path} className="nav-link">
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
