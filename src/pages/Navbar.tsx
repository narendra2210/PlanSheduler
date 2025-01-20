import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { HiMenu, HiX } from 'react-icons/hi'; // For hamburger menu icon
import { ModeToggle } from '@/components/ui/mode-toggle';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Toggle state for mobile menu

  const toggleMenu = () => setMenuOpen(!menuOpen); // Toggle mobile menu

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 fixed w-full top-0 z-50 shadow-md">
      {/* Left Section - Logo */}
      <div className="flex items-center space-x-3">
        <span className="text-3xl font-extrabold text-white font-poppins tracking-wider transform hover:scale-110 transition-all duration-300 ease-in-out">
          PlanSchedular
        </span>
      </div>

      {/* Center Section - Navigation Links */}
      <div className="hidden md:flex space-x-8">
        <Link to="/" className="text-lg font-medium text-white hover:text-gray-400 transition-colors">
          Home
        </Link>
        <Link to="/features" className="text-lg font-medium text-white hover:text-gray-400 transition-colors">
          Features
        </Link>
        <Link to="/contact" className="text-lg font-medium text-white hover:text-gray-400 transition-colors">
          Contact
        </Link>
        <Link to="/about" className="text-lg font-medium text-white hover:text-gray-400 transition-colors">
          About
        </Link>
      </div>

      {/* Right Section - Theme Toggle, Get Started, Login */}
      <div className="flex items-center space-x-4">
        {/* Theme Toggle */}
        <ModeToggle />

        {/* Get Started and Login Buttons */}
        <Link to="/signup">
          <Button className="bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            Get Started
          </Button>
        </Link>
        <Link to="/login">
          <Button className="bg-white text-black hover:bg-gray-300 transition-colors">
            Login
          </Button>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Dropdown */}
      <div
        className={`md:hidden absolute top-0 right-0 w-full bg-black bg-opacity-90 transition-transform transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ zIndex: 999 }}
      >
        <div className="flex flex-col items-center space-y-4 py-6">
          <Link to="/" className="text-lg font-medium text-white hover:text-gray-400 transition-colors">
            Home
          </Link>
          <Link to="/features" className="text-lg font-medium text-white hover:text-gray-400 transition-colors">
            Features
          </Link>
          <Link to="/contact" className="text-lg font-medium text-white hover:text-gray-400 transition-colors">
            Contact
          </Link>
          <Link to="/about" className="text-lg font-medium text-white hover:text-gray-400 transition-colors">
            About
          </Link>
          {/* Get Started and Login Buttons in Mobile */}
          <div className="space-x-4">
            <Link to="/signup">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                Get Started
              </Button>
            </Link>
            <Link to="/login">
              <Button className="bg-white text-black hover:bg-gray-300 transition-colors">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
