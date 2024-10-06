import { Outlet, useLoaderData } from "react-router-dom";

import StudentNavbar from "./personalAttendanceNavbar";
import {FacultyNavbar } from "./personalAttendanceNavbar"

export async function loader() {
    const res = await fetch("https://terabyte-kvey.onrender.com/api/v1/attendance/interiit/player", {
        method: 'GET',
        credentials: 'include'
    });
    const data = await res.json();
    return data;
}


export default function MarkAttendanceLayout() {
    const res = useLoaderData();
    console.log('user from navlayout ', res);
    console.log(res?.sports);

    return (
        <>
            <div className="flex flex-col items-center min-h-screen bg-gray-100">
                <div className="w-[95vw] md:w-[50vw] max-w-4xl">
                    {
                        // Pass `sports` array to `MarkAttendanceNavbar` and `FacultyNavbar`
                        res.render
                            ? <StudentNavbar sportsList={res?.sports
                            } /> // No spread here
                            : <FacultyNavbar sportsList={res?.sports
                            } /> // No spread here
                    }

                    <div className="mt-4">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}



