import { useLoaderData } from "react-router-dom";

export async function loader ({params}) {
    const sport = params.sport;
    const res = await fetch(`https://terabyte-kvey.onrender.com/api/v1/attendance/interiit/sportattendance/${sport}`, {
        method: 'GET',
        credentials: 'include',
    });
    const data = await res.json();
    return data;
}



import React from 'react';

const StylishTable = () => {
    const data = useLoaderData();
    console.log(data);
//   const attendanceData = [
//     { id: 'A001', name: 'John Doe', attendance: 22 },
//     { id: 'A002', name: 'Jane Smith', attendance: 18 },
//     { id: 'A003', name: 'Bob Johnson', attendance: 15 },
//     { id: 'A004', name: 'Alice Brown', attendance: 20 },
//     { id: 'A005', name: 'Charlie Davis', attendance: 12 },
//     { id: 'A006', name: 'Eva Wilson', attendance: 25 },
//     { id: 'A007', name: 'Frank Miller', attendance: 8 },
//     { id: 'A008', name: 'Grace Lee', attendance: 19 },
//   ];
    const attendanceData = data;
  return (
    <div className='flex flex-col items-center min-h-screen bg-gray-100'>
        <div className="w-[95vw] md:w-[50vw] mx-auto bg-slate-900 rounded-xl shadow-lg overflow-hidden mt-[30px] mb-[30px] font-titlefont">
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-300">
            <thead className="text-xs uppercase bg-slate-800 text-gray-100">
                <tr>
                <th scope="col" className="px-6 py-3 rounded-tl-xl">
                    S.No
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    ID
                </th>
                <th scope="col" className="px-6 py-3 rounded-tr-xl">
                    Attendance
                </th>
                </tr>
            </thead>
            <tbody>
                {attendanceData.map((item, index) => (
                <tr 
                    key={item.id} 
                    className={`border-b border-slate-700 ${
                    index % 2 === 0 ? 'bg-slate-800' : 'bg-slate-850'
                    } hover:bg-slate-700 transition-colors duration-200`}
                >
                    <td className="px-6 py-4 font-medium whitespace-nowrap">
                    {index + 1}
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-100">
                    {item.name}
                    </td>
                    <td className="px-6 py-4">
                    {item.id}
                    </td>
                    <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.attendance > 20 ? 'bg-green-500 text-green-900' :
                        item.attendance > 10 ? 'bg-yellow-500 text-yellow-900' :
                        'bg-red-500 text-red-900'
                    }`}>
                        {item.attendance} days
                    </span>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </div>
    </div>
  );
};

export default StylishTable;


// const Component = () =>{
//     <div className="flex flex-col items-center min-h-screen bg-gray-100">
//     <div className="w-[95vw] md:w-[50vw] max-w-4xl">
//     <StylishTable/>
//     </div>
// </div> 
// }

// export default Component;