import { Outlet, useLoaderData } from "react-router-dom";

import MarkAttendanceNavbar from "./groupAttendanceNavbar";
import {FacultyNavbar } from "./groupAttendanceNavbar"

export async function loader() {
    const res = await fetch("https://terabyte-kvey.onrender.com/api/v1/attendance/interiit/mark-attendance-navbar", {
        method: 'GET',
        credentials: 'include'
    });
    const data = await res.json();
    return data;
}


export default function MarkAttendanceLayout() {
    const res = useLoaderData();
    console.log('user from navlayout ', res);
    console.log(res?.data?.coordinatorSports);

    return (
        <>
            <div className="flex flex-col items-center min-h-screen bg-gray-100">
                <div className="w-[95vw] md:w-[50vw] max-w-4xl">
                    {
                        // Pass `sports` array to `MarkAttendanceNavbar` and `FacultyNavbar`
                        res.data.render
                            ? <MarkAttendanceNavbar sportsList={res?.data?.coordinatorSports
                            } /> // No spread here
                            : <FacultyNavbar sportsList={res?.data?.coordinatorSports
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



