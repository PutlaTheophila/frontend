import { Outlet, useLoaderData , Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import NsoNavbar from "./nsocomp/nsoNavBar";
import AttendanceNavbar from "./nsocomp/attendanceBar";
import React, { useEffect, useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';


// export const loader = async () => {
//     try {
//       const res = await fetch("https://terabyte-lvkey.onrender.com/api/v1/auth", {
//         method: 'GET',
//         credentials: 'include',  // Include credentials for cookies or aut
//         headers: { // Add your token if needed
//           'Content-Type': 'application/json',
//         }
//       });
//     //   const myCookie = Cookies.get('connect.sid');
//     //   console.log(myCookie);
//     //   const cookieString = document.cookie;
//     //   console.log('cookie string',cookieString)
  
//       const data = await res.json();
//       console.log('data', 'loader running');
//       if (!data?.data?.user) return null;
//       console.log(data?.data?.user);
//       return data?.data?.user;
  
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//       return null;
//     }
// };


// export default function NsoLayout (){
//     const user = useLoaderData();
//     return(
//         <>
//             <NsoNavbar/>
//             {
//                 user && (<AttendanceNavbar/>)
//             }            
//             <Outlet/>
//         </>

//     )
// } 

// Login.js
// import React from 'react';
// import { GoogleLogin } from '@react-oauth/google';


const Login = () => {
  const navigate = useNavigate();

  const handleSuccess = (response) => {
    console.log('Google OAuth Success:', response);
    fetch("https://terabyte-lvkey.onrender.com/api/v1/auth/google/callback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ response }),
      })
    navigate('/dashboard'); 
  };

  const handleError = () => {
    console.log('Google OAuth Error');
  };

  return (
    <div>
      <h1>Login</h1>
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    </div>
  );
};

export default Login;
