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
    { name: 'PROFILE', path: '/nso', icon: IoMdFitness },
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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 257" className="mr-2 sm:mr-3">
            <defs>
              <linearGradient id="a" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%">
                <stop offset="0%" stopColor="#41D1FF"/>
                <stop offset="100%" stopColor="#BD34FE"/>
              </linearGradient>
              <linearGradient id="b" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%">
                <stop offset="0%" stopColor="#FFEA83"/>
                <stop offset="8.333%" stopColor="#FFDD35"/>
                <stop offset="100%" stopColor="#FFA800"/>
              </linearGradient>
            </defs>
            <path fill="url(#a)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"/>
            <path fill="url(#b)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"/>
          </svg>
          <div className="tracking-wider">IIT BHILAI</div>
        </div>
        
        <div className="sm:hidden flex ml-auto items-center">
          <Link to="/nso" className="font-titlefont font-medium px-3 py-1 rounded-lg bg-slate-900 text-white flex items-center transition duration-300 ease-in-out hover:bg-slate-700">
            <div>Student</div>
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