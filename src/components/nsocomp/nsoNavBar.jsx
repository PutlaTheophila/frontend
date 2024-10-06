import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { FcGoogle, FcSportsMode } from "react-icons/fc";
import { LuLogOut } from "react-icons/lu";
import { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";

export const loader = async () => {
  const res = await fetch("https://terabyte-kvey.onrender.com/api/v1/auth", {
    method: 'GET',
    credentials: 'include',
  });
  const data = await res.json();
  console.log(data);
  return data;
};

export default function NsoNavbar() {
  const user = useLoaderData();
  const [markAttendanceDivision , setMarkAttendanceDivision ] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [attendanceSuccess , setAttendanceSuccess] = useState(false);
  console.log(user)
  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Update state with input value
  };


  return (
    <>
      <nav className="font-titlefont text-xs sm:text-sm md:text-base w-full sm:w-[50vw] h-[10vh] mx-auto shadow-lg">
        <div className="flex items-center justify-between h-full px-4 sm:px-6 md:px-8">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="text-xl sm:text-2xl md:text-3xl">
              {user ? (
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-hidden">
                  <img src={user?.photos[0]?.value} alt={user?.displayName} className="w-full h-full object-cover" />
                </div>
              ) : (
                <FcSportsMode />
              )}
            </div>
            <div className="font-semibold">
              {user ? (
                <span>Welcome {user?.displayName}</span>
              ) : (
                <span>Attendance section</span>
              )}
            </div>
          </div>
          {user ? (
            <button
              onClick={logoutUser}
              className="bg-gray-800 px-4 py-2 text-white rounded-md shadow-md flex items-center justify-center space-x-2 hover:bg-gray-700 transition-colors duration-200"
            >
              <span>Logout</span>
              <LuLogOut className="text-xl" />
            </button>
          ) : (
            <button
              onClick={handleClick}
              className="bg-gray-800 px-4 py-2 text-white rounded-md shadow-md flex items-center justify-center space-x-2 hover:bg-gray-700 transition-colors duration-200"
            >
              <span>Continue with</span>
              <FcGoogle className="text-xl" />
            </button>
          )}
        </div>
      </nav>
    </>
  );
}

