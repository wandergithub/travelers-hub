import React from "react";

import { NavLink } from "react-router-dom";

export default function Navbar() {
  const links = [
    {
      id: 1,
      path: "/",
      text: "Missions",
    },
    {
      id: 2,
      path: "/myprofile",
      text: "My Profile",
    },
    {
      id: 3,
      path: "/rockets",
      text: "Rockets",
    },
  ];
  return (
    <nav>
      <h1>Space Travelers' Hub</h1>
      <ul className="navbar">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              className={(isActive) =>
                "nav-link" + (!isActive ? " unselected" : "")
              }
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
