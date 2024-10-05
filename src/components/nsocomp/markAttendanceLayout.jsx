import { Outlet, useLoaderData } from "react-router-dom";

import MarkAttendanceNavbar from "./markAttendanceNavbar";



export default function MarkAttendanceLayout () {
    const user = useLoaderData()
    return(
        <>

            <>
                <div className="flex flex-col items-center min-h-screen bg-gray-100">
                    <div className="w-[95vw] md:w-[50vw] max-w-4xl">
                    <MarkAttendanceNavbar/>
                    <div className="mt-4">
                        <Outlet/>
                    </div>
                    </div>
                </div> 
            </>
         
            
        </>
    )
}


