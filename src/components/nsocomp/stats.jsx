import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

export async function loader ({params}){
    const type  = params.groupType;
    const sport = params.sport;
    console.log(type , sport);
    const res = await fetch(`https://terabyte-kvey.onrender.com/api/v1/attendance/interiit/stats/${type}/${sport}`, {
        method: 'GET',
        credentials: 'include',
    });
    const data = await res.json();
    return data;
}


function calculateAttendancePercentage(totalDays, attendedDays) {
    if (totalDays <= 0) {
        return "Total days must be greater than 0";
    }
    
    const percentage = (attendedDays / totalDays) * 100;
    return percentage.toFixed(2); // returns percentage with two decimal places
}


const StylishTable = () => {
    const data = useLoaderData();
    // const students = data.data
    // console.log(students.students);
    const attendanceData = [...data?.data?.data];
    console.log(data?.data?.data);
  
    return (
      <div className="w-full bg-slate-900 rounded-xl shadow-lg overflow-hidden">
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
                      calculateAttendancePercentage(data?.data?.totalDays , item?.attendance) >= 90  ? 'bg-green-500 text-green-900' :
                      calculateAttendancePercentage(data?.data?.totalDays , item?.attendance) >= 75  ? 'bg-yellow-500 text-yellow-900' :
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
    );
  };

export default function SportStats() {
  const { groupType, sport } = useParams();
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-4 w-full ">
      <h2 className="text-2xl font-bold mb-4 font-titlefont">
        {sport.replace(/-/g, ' ')} Stats for {groupType}
      </h2>
      <div className='' >
          <StylishTable/>
      </div>

    </div>
  );
}