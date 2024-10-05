import { Outlet, useLoaderData } from "react-router-dom";

import MarkAttendanceNavbar from "./markAttendanceNavbar";
import {FacultyNavbar } from "./markAttendanceNavbar"

export async function loader() {
    const res = await fetch("https://terabyte-kvey.onrender.com/api/v1/attendance/interiit/mark-attendance-navbar", {
        method: 'GET',
        credentials: 'include'
    });
    const data = await res.json();
    return data;
}


export default function MarkAttendanceLayout () {
    const res = useLoaderData();
    console.log('user from navlayout ',res);
    return(
        <>

            <>
                <div className="flex flex-col items-center min-h-screen bg-gray-100">
                    <div className="w-[95vw] md:w-[50vw] max-w-4xl">
                    {
                        (res.render) ? <MarkAttendanceNavbar/> : <FacultyNavbar/>
                    }
                    
                    <div className="mt-4">
                        <Outlet/>
                    </div>
                    </div>
                </div> 
            </>
         
            
        </>
    )
}


