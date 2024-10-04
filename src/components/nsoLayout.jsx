import { Outlet, useLoaderData , Navigate, redirect } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import NsoNavbar from "./nsocomp/nsoNavBar";
import AttendanceNavbar from "./nsocomp/attendanceBar";
import React, { useEffect, useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';


export async function loader() {
    const res = await fetch("https://terabyte-lvkey.onrender.com/api/v1/auth/details", {
        method: 'GET',
        credentials: 'include'
    });
    const data = await res.json();
    return data
}



//
export default function NsoLayout (){
    const user = useLoaderData();
    console.log('from nso layout ',user);
    return(
        <>
            {/* <NsoNavbar/> */}
            <AttendanceNavbar/>                  
            <Outlet/>
        </>

    )
} 




