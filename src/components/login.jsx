import { Outlet, useLoaderData , Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import NsoNavbar from "./nsocomp/nsoNavBar";
import AttendanceNavbar from "./nsocomp/attendanceBar";
import React, { useEffect, useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';


const Login = () => {
    const navigate = useNavigate();
  
    const handleSuccess =  async (response) => {
      console.log('Google OAuth Success:', response);
      console.log('hellooo');
      const credential = response.credential;
      const res = await fetch("https://terabyte-kvey.onrender.com/api/v1/auth/google/callback", {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(response),
          credentials: "include",
      })
      const data = await res.json();
      console.log('user',data)
      navigate('/nso');
    };
    const handleError = () => {
      console.log('Google OAuth Error');
    };
  
    return (
      <div className="min-h-screen bg-slate-100 flex flex-col justify-center items-center p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-slate-900 text-white py-4 px-6">
            <h2 className="text-2xl font-bold text-center">Welcome to SportSync</h2>
          </div>
          <div className="p-6">
            <h1 className="text-xl font-semibold text-slate-900 mb-6 text-center">Login to Your Account</h1>
            <div className="mb-6">
              <GoogleLogin
                onSuccess={handleSuccess}
                onError={handleError}
                render={({ onClick }) => (
                  <button
                    onClick={onClick}
                    className="w-full bg-slate-900 text-white py-2 px-4 rounded-md hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50 transition duration-200 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                      />
                    </svg>
                    Sign in with Google
                  </button>
                )}
              />
            </div>
            <div className="text-center text-sm text-slate-600">
              By signing in, you agree to our Terms of Service and Privacy Policy
            </div>
          </div>
        </div>
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Popular Sports</h3>
          <ul className="grid grid-cols-2 gap-2">
            {['Football', 'Basketball', 'Tennis', 'Swimming', 'Athletics', 'Volleyball'].map((sport) => (
              <li key={sport} className="bg-slate-100 text-slate-800 px-3 py-2 rounded-md text-sm">
                {sport}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default Login;