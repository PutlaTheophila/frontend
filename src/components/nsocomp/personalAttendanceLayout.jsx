import { Outlet, useLoaderData } from "react-router-dom";
import { useState } from "react";
import StudentNavbar from "./personalAttendanceNavbar";
import { FacultyNavbar } from "./personalAttendanceNavbar";

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
    const [errorMessage, setErrorMessage] = useState(null);

    // Handle errors based on the status from the response
    if (res?.status === 500 || res?.status === 'fail') {
        setErrorMessage(res.message || 'An error occurred while fetching the data.');
    }

    const sportsList = res?.sports || [];

    return (
        <>
            {errorMessage && (
                <div className="fixed top-0 left-0 right-0 z-50 bg-red-500 text-white text-center py-2">
                    {errorMessage}
                </div>
            )}

            <div className="flex flex-col items-center min-h-screen bg-gray-100">
                <div className="w-[95vw] md:w-[50vw] max-w-4xl">
                    {sportsList.length > 0 ? (
                        res.render ? (
                            <FacultyNavbar sportsList={sportsList} />
                        ) : (
                            <StudentNavbar sportsList={sportsList} />
                        )
                    ) : (
                        res.render ? (
                            <FacultyNavbar sportsList={sportsList} />
                        ) : (
                            <StudentNavbar sportsList={sportsList} />
                        )
                    )}

                    <div className="mt-4">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}
