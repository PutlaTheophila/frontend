import { Outlet, useLoaderData , Navigate, redirect } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import NsoNavbar from "./nsocomp/nsoNavBar";
import AttendanceNavbar from "./nsocomp/attendanceBar";
import React, { useEffect, useState } from 'react';



export async function loader() {
    const res = await fetch("https://terabyte-kvey.onrender.com/api/v1/auth", {
        method: 'GET',
        credentials: 'include'
    });
    const data = await res.json();
    if(data.status !== 'success')
        throw redirect('/login')
    return data
}

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




