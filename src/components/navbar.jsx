import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import { FaUserAlt, FaRegCopyright, FaHome, FaCalendarAlt, FaTrophy, FaUsers } from "react-icons/fa";
import { IoMdFitness } from "react-icons/io";

export default function Navbar() {
  const [display, setDisplay] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'HOME', path: '/', icon: FaHome },
    { name: 'PLAYER PROFILE', path: '/nso', icon: IoMdFitness },
    { name: 'EVENTS', path: '/events', icon: FaCalendarAlt },
    { name: 'TOURNAMENTS', path: '/tournaments', icon: FaTrophy },
    { name: 'COUNCIL', path: '/council', icon: FaUsers },
  ];

  useEffect(() => {
    if (display) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [display]);

  const toggleMenu = () => {
    setDisplay(!display);
  };

  return (
    <div className="w-full sticky top-0 z-50 bg-white shadow-lg shadow-slate-200/40">
      <div className="flex h-16 sm:h-20 items-center px-4 sm:px-6 lg:px-8">
        <button
          className="sm:hidden text-2xl p-2 text-slate-700 hover:text-slate-900 transition-colors duration-200 mr-4"
          onClick={toggleMenu}
          aria-label={display ? "Close menu" : "Open menu"}
        >
          {!display ? <RxHamburgerMenu /> : <CgClose />}
        </button>

        <div className="flex items-center font-myfont text-lg sm:text-xl lg:text-2xl font-extrabold tracking-wide text-slate-900">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbfsLOxQwx7k6_Pg6Uz6UbQaWFPDJi6rbtnA&s" // Replace with the actual path or URL of your logo
            alt="College Logo"
            className="mr-2 sm:mr-3 h-8 w-8 rounded-full" 
            loading="lazy"// Adjust size as needed
          />
          <div className="tracking-wider">IIT BHILAI</div>
        </div>

        
        <div className="sm:hidden flex ml-auto items-center">
          <Link to="/nso" className="font-titlefont font-medium text-[12px] px-3 py-3 rounded-lg bg-slate-900 text-white flex items-center transition duration-300 ease-in-out hover:bg-slate-700">
            <div>Player Profile</div>
            <FaUserAlt className="ml-2" />
          </Link>
        </div>

        <nav className="hidden sm:flex ml-auto font-myfont items-center justify-end space-x-1 md:space-x-2 lg:space-x-4">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `p-2 lg:px-4 rounded-md transition-colors duration-200 flex items-center ${
                  isActive ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'
                }`
              }
            >
              <item.icon className="mr-2" />
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
      
      {display && (
        <div className="fixed inset-0 z-50 bg-white sm:hidden overflow-y-auto">
          <div className="flex flex-col h-full">
            <div className="flex justify-start p-4">
              <button
                className="text-2xl p-2 text-slate-700 hover:text-slate-900 transition-colors duration-200"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <CgClose />
              </button>
            </div>
            <nav className="flex-grow flex flex-col justify-center items-center space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-2xl font-myfont text-slate-900 hover:text-slate-600 transition-colors duration-200 flex items-center"
                  onClick={toggleMenu}
                >
                  <item.icon className="mr-3" />
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="p-4 bg-slate-100 text-slate-900 flex items-center justify-center">
              <FaRegCopyright className="mr-2" /> SPORTS IIT BHILAI
            </div>
          </div>
        </div>
      )}
    </div>
  );
}