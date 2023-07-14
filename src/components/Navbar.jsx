import React, { useState } from 'react';
import Logo from '../assets/Logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className=" md:pl-32 mr-4">
            <img className="h-8" src={Logo} alt="Logo" />
          </div>
          <div className="hidden md:flex pl-4 space-x-4">
            <a href="#" className="hover:text-gray-300">
              Product
            </a>
            <a href="#" className="hover:text-gray-300">
              Team
            </a>
            <a href="#" className="hover:text-gray-300">
              Enterprise
            </a>
            <a href="#" className="hover:text-gray-300">
              Explore
            </a>
            <a href="#" className="hover:text-gray-300">
              Marketplace
            </a>
            <a href="#" className="hover:text-gray-300">
              Pricing
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-4">
            {/* Visible in md mode */}
            <input
              type="text"
              placeholder="Search"
              className="hidden md:block bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="hidden md:flex items-center">
            <button className="text-white hover:text-gray-300">
              Sign In
            </button>
            <button className="ml-4 border-white border text-white font-semibold py-2 px-4 rounded-full" style={{ backgroundColor: "transparent", borderRadius: "12px" }}>
            Sign Up
          </button>


          </div>
          <div className="flex items-center">
            <button
              className="block md:hidden focus:outline-none"
              onClick={toggleMenu}
            >
              {/* Toggle menu icon */}
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 5H22V7H2V5ZM2 12H22V14H2V12ZM2 19H22V21H2V19Z"
                    fill="currentColor"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
                    fill="currentColor"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="bg-black text-white px-4 py-2">
          <div className="container mx-auto">
            <div className="flex flex-col space-y-4">
              <a href="#" className="hover:text-gray-300">
                Product
              </a>
              <a href="#" className="hover:text-gray-300">
                Team
              </a>
              <a href="#" className="hover:text-gray-300">
                Enterprise
              </a>
              <a href="#" className="hover:text-gray-300">
                Explore
              </a>
              <a href="#" className="hover:text-gray-300">
                Marketplace
              </a>
              <a href="#" className="hover:text-gray-300">
                Pricing
              </a>
              <button className="text-white hover:text-gray-300">
                Sign In
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
