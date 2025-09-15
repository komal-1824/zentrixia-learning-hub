import { Link } from "react-router-dom";
import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-pink-500 to-purple-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 shadow-lg sticky top-0 z-50 transition-all border-b border-gray-200 dark:border-purple-500/40">
      {/*  Added border-b for bottom border (light gray in light mode, purple glow in dark mode) */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo / Brand */}
          <div className="flex-shrink-0 text-white font-bold text-2xl tracking-wide hover:scale-105 transition-transform duration-300">
            <Link to="/">Zentrixia</Link>
          </div>

          {/* Operating Hours (Desktop only) */}
          <div className="hidden md:flex items-center text-sm text-gray-200 dark:text-gray-400">
            ⏰ 10:00 AM – 9:00 PM | Mon – Fri
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-white hover:text-yellow-300 transition-colors duration-300">
              Home
            </Link>
            <Link to="/courses" className="text-white hover:text-yellow-300 transition-colors duration-300">
              Courses
            </Link>
            <Link to="/programs" className="text-white hover:text-yellow-300 transition-colors duration-300">
              Programs
            </Link>
            <Link to="/instructors" className="text-white hover:text-yellow-300 transition-colors duration-300">
              Instructors
            </Link>
            <Link to="/join" className="text-white hover:text-yellow-300 transition-colors duration-300">
              Join Now
            </Link>
            <Link to="/dashboard" className="text-white hover:text-yellow-300 transition-colors duration-300">
              Dashboard
            </Link>
            {/* Dark mode toggle */}
            <DarkModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none transition-transform duration-300 hover:rotate-90"
            >
              {isOpen ? (
                <span className="text-2xl">&times;</span>
              ) : (
                <span className="text-2xl">&#9776;</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gray-900 dark:to-gray-800 
          px-4 pt-2 pb-4 space-y-2 transition-all duration-500 border-t border-gray-200 dark:border-purple-500/40">
          {/* ↑ Added border-t for top border in mobile dropdown */}

          <Link to="/" className="block text-white hover:text-yellow-300" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/courses" className="block text-white hover:text-yellow-300" onClick={() => setIsOpen(false)}>
            Courses
          </Link>
          <Link to="/programs" className="block text-white hover:text-yellow-300" onClick={() => setIsOpen(false)}>
            Programs
          </Link>
          <Link to="/instructors" className="block text-white hover:text-yellow-300" onClick={() => setIsOpen(false)}>
            Instructors
          </Link>
          <Link to="/join" className="block text-white hover:text-yellow-300" onClick={() => setIsOpen(false)}>
            Join Now
          </Link>
          <Link to="/dashboard" className="block text-white hover:text-yellow-300" onClick={() => setIsOpen(false)}>
            Dashboard
          </Link>

          {/* Hours in mobile menu */}
          <div className="mt-4 text-gray-200 dark:text-gray-400 text-sm">
            ⏰ 10:00 AM – 9:00 PM | Mon – Fri
          </div>
          <DarkModeToggle />
        </div>
      )}
    </nav>
  );
}
