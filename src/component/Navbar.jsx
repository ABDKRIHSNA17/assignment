import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white font-bold text-xl">MyApp</h1>
        <div className="flex space-x-4">
          <NavLink
            to="/form"
            className={({ isActive }) =>
              isActive ? 'text-white font-semibold' : 'text-gray-200'
            }
          >
            Form
          </NavLink>
          <NavLink
            to="/details"
            className={({ isActive }) =>
              isActive ? 'text-white font-semibold' : 'text-gray-200'
            }
          >
            Details
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
