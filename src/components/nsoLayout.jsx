import { Outlet, useLoaderData , Navigate, redirect } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import NsoNavbar from "./nsocomp/nsoNavBar";
import AttendanceNavbar from "./nsocomp/attendanceBar";
import React, { useEffect, useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from "axios"


const getCookieValue = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
};


export async function loader() {
    const res = await axios.get("https://terabyte-kvey.onrender.com/api/v1/auth", {
        withCredentials: true // Include credentials (cookies) in the request
    });
    const data = await res.json();
    // if(data.status !== 'success'){
    //     throw redirect('/login');
    // }
    return data
}



//
export default function NsoLayout (){
    const user = useLoaderData();
    const authToken = getCookieValue('authToken');
    console.log('from nso layout ',document.cookie);
    return(
        <>
            {/* <NsoNavbar/> */}
            <AttendanceNavbar/>                  
            <Outlet/>
        </>

    )
} 




