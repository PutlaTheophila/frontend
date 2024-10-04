import { Outlet, useLoaderData , Navigate, redirect } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import NsoNavbar from "./nsocomp/nsoNavBar";
import AttendanceNavbar from "./nsocomp/attendanceBar";
import React, { useEffect, useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useCookies } from 'react-cookie';


const getCookieValue = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
};


export async function loader() {
    const res = await fetch("https://terabyte-kvey.onrender.com/api/v1/auth", {
        method: 'GET',
        credentials: 'include'
    });
    const data = await res.json();
    return data
}



//
export default function NsoLayout (){
    const user = useLoaderData();
    console.log(user);
    return(
        <>
            {/* <NsoNavbar/> */}
            <AttendanceNavbar/>                  
            <Outlet/>
        </>

    )
} 




