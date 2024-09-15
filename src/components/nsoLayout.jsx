import { Outlet, useLoaderData } from "react-router-dom";
import NsoNavbar from "./nsocomp/nsoNavBar";
import AttendanceNavbar from "./nsocomp/attendanceBar";


export const loader = async () => {
    const res = await fetch("https://terabyte-vw3n.onrender.com/api/v1/auth", {
      method: 'GET',
      credentials: 'include',
    });
    const data = await res.json();
    console.log('loader running');
    if (!data?.data?.user) return null;
    return data?.data?.user;
};

export default function NsoLayout (){

    const user = useLoaderData();
    return(
        <>
            <NsoNavbar/>
            {
                user && (<AttendanceNavbar/>)
            }            
            <Outlet/>
        </>

    )
} 