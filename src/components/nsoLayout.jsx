import { Outlet, useLoaderData , Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import NsoNavbar from "./nsocomp/nsoNavBar";
import AttendanceNavbar from "./nsocomp/attendanceBar";
import React, { useEffect, useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';


export const loader = async () => {
    try {
        const res = await fetch("https://terabyte-lvkey.onrender.com/api/v1/auth", {
            method: 'GET',
            credentials: 'include', // Include credentials for cookies or auth
            headers: {
                'Content-Type': 'application/json',
            }
        });

        // Check if the response is okay (status in the range 200-299)
        if (!res.ok) {
            throw new Error(`Error: ${res.status} ${res.statusText}`);
        }

        // Parse the JSON data
        const data = await res.json();
        console.log(data);

        // Return the fetched data
        return data;
        

    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        // Optionally, return an error response or throw the error
        throw redirect('/login'); // or return { error: error.message };

    }
};



export default function NsoLayout (){
    const user = useLoaderData();
    return(
        <>
            {/* <NsoNavbar/> */}
            <AttendanceNavbar/>                  
            <Outlet/>
        </>

    )
} 




