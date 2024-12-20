import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import icon from '../Assets/icon.jpeg';

const Navbar = ({ user, onLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo section */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-3">
            <img src={icon} alt="Chess Icon" className="h-14 w-14 rounded-full" />
            <h1 className="text-2xl font-bold">Chess AI</h1>
          </Link>
        </div>

        {/* User Section */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-full"
          >
            <span className="font-medium">{user.name}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {/* SVG path commented out */}
            </svg>
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div
              className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg z-50"
              onMouseLeave={closeDropdown}
            >
              <Link
                to="/profile"
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Profile
              </Link>
              <button
                onClick={onLogout}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;