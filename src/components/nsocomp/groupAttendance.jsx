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

const StylishTable = () => {
    const res = useLoaderData();

    const attendanceData = res.data;
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
                        {item.attendanceLength} days
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

