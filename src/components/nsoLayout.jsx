import { Outlet, useLoaderData } from "react-router-dom";
import NsoNavbar from "./nsocomp/nsoNavBar";
import AttendanceNavbar from "./nsocomp/attendanceBar";
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';


export const loader = async () => {
    try {
      const res = await fetch("https://terabyte-lvkey.onrender.com/api/v1/auth", {
        method: 'GET',
        credentials: 'include',  // Include credentials for cookies or auth
        headers: { // Add your token if needed
          'Content-Type': 'application/json',
        }
      });
      const myCookie = Cookies.get('connect.sid');
      console.log(myCookie);
      const cookieString = document.cookie;
      console.log('cookie string',cookieString)
  
      const data = await res.json();
      console.log('data', 'loader running');
      if (!data?.data?.user) return null;
      console.log(data?.data?.user);
      return data?.data?.user;
  
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
  };


export default function NsoLayout (){

    const cookieString = document.cookie;
    console.log('cookie string',cookieString)
    const user = useLoaderData();
    return(
        <>
            <NsoNavbar/>
            {
                user && (<AttendanceNavbar/>)
            }            
            <Outlet/>
        </>

    )
} 