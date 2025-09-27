import React, { useState } from "react";
import { Menu, X, Bus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo with Bus Icon */}
          <div
            className="flex items-center gap-2 cursor-pointer font-bold text-2xl"
            onClick={() => handleNavigate("/")}
          >
            <Bus size={28} />
            <span>Vayoo</span>
          </div>

          {/* Navigation Links - Center */}
          <div className="hidden md:flex space-x-6 mx-auto">
            <div
              className="cursor-pointer hover:text-yellow-300 transition duration-200"
              onClick={() => handleNavigate("/")}
            >
              Home
            </div>
            <div
              className="cursor-pointer hover:text-yellow-300 transition duration-200"
              onClick={() => handleNavigate("/cyberauthority/dashboard")}
            >
              CyberDashboard
            </div>           
            <div
              className="cursor-pointer hover:text-yellow-300 transition duration-200"
              onClick={() => handleNavigate("/registeruser")}
            >
              RegisterUser
            </div>
          </div>

          {/* Sign In - Right */}
          <div className="hidden md:flex">
            <div
              className="cursor-pointer font-extrabold text-lg text-white px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-200"
              onClick={() => handleNavigate("/login")}
            >
              Sign In
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-4 pt-2 pb-4 space-y-2">
          <div
            className="block cursor-pointer hover:text-yellow-300 transition duration-200"
            onClick={() => handleNavigate("/")}
          >
            Home
          </div>
          <div
            className="block cursor-pointer hover:text-yellow-300 transition duration-200"
            onClick={() => handleNavigate("/cyberauthority/dashboard")}
          >
            CyberDashboard
          </div>
          <div
            className="block cursor-pointer hover:text-yellow-300 transition duration-200"
            onClick={() => handleNavigate("/registeruser")}
          >
            RegisterUser
          </div>
          <div
            className="block cursor-pointer bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-200"
            onClick={() => handleNavigate("/signin")}
          >
            Sign out
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
