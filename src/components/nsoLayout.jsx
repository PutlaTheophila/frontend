import { Outlet, useLoaderData } from "react-router-dom";
import NsoNavbar from "./nsocomp/nsoNavBar";
import AttendanceNavbar from "./nsocomp/attendanceBar";


export const loader = async () => {
      const res = await fetch("https://terabyte-lvkey.onrender.com/api/v1/auth", {
        method: 'GET',
        credentials: 'include',  // Include credentials for cookies or auth
        headers: { // Add your token if needed
          'Content-Type': 'application/json',         // Specify the content type
          // Add any other custom headers you need
        }
      });
  
    //   if (!res.ok) {
    //     throw new Error('Failed to fetch user data');
    //   }
  
    //   const data = await res.json();
    //   console.log('data', 'loader running');
    //   if (!data?.data?.user) return null;
    //   console.log(data?.data?.user);
    //   return data?.data?.user || null;
  
    // } catch (error) {
    //   console.error('Error fetching user data:', error);
    //   return null;
    // }
    console.log(await res.json());
    return null
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