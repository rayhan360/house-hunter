import { useState } from 'react';

const Nav = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className="navbar bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-white"
              onClick={toggleDropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {isDropdownOpen && (
              <ul
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
              >
                <li>
                  <a className="text-purple-700">Home</a>
                </li>
                <li>
                  <a className="text-purple-700">LogIn</a>
                </li>
                <li>
                  <a className="text-purple-700">Registration</a>
                </li>
              </ul>
            )}
          </div>
          <a href="/" className="btn btn-ghost text-white text-xl">
            House Hunter
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/" className="text-white hover:text-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="/login" className="text-white hover:text-gray-200">
                LogIn
              </a>
            </li>
            <li>
              <a href="/registration" className="text-white hover:text-gray-200">
                Registration
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href="/" className="btn bg-white text-purple-700 hover:bg-gray-200">
            Button
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
