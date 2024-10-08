import { Outlet, useLoaderData } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import MarkAttendanceNavbar from "./markAttendanceNavbar";
import { FacultyNavbar } from "./markAttendanceNavbar";


export async function loader() {
    const res = await fetch("https://terabyte-kvey.onrender.com/api/v1/attendance/interiit/mark-attendance-navbar", {
        method: 'GET',
        credentials: 'include'
    });
    const data = await res.json();
    return data;
}

const EnhancedPopup = ({ title, message }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
        <div className="bg-white rounded-lg shadow-xl p-6 max-w-lg w-full">
            <div className="flex items-center justify-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                    <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                </div>
                <h3 className="ml-4 text-lg font-medium text-gray-900">{title}</h3>
            </div>
            <div className="mt-4">
                <p className="text-sm text-gray-500">{message}</p>
            </div>
        </div>
    </div>
);

export default function MarkAttendanceLayout() {
    const res = useLoaderData();
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        // Check for status 500 or fail and trigger the error state
        if (res.status === 500 || res.status === 'fail') {
            setIsError(true);
        }
    }, [res.status]);

    console.log('user from navlayout', res);
    console.log(res?.data?.coordinatorSports);

    // Render only popup if there's an error
    if (isError) {
        return (
            <EnhancedPopup
                title="Unauthorized"
                message="You are not authorized to mark attendance."
            />
        );
    }

    return (
        <>
            <div className="flex flex-col items-center min-h-screen bg-gray-100">
                <div className="w-[95vw] md:w-[50vw] max-w-4xl">
                    {res?.data?.render
                        ? <MarkAttendanceNavbar sportsList={res?.data?.coordinatorSports || []} />
                        : <FacultyNavbar sportsList={res?.data?.coordinatorSports || []} />
                    }

                    <div className="mt-4">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}