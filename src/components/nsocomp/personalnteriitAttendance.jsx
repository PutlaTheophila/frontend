import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';

export async function loader({ params }) {
  const sport = params?.sport;
  console.log('sport from params', sport);
  const res = await fetch(`https://terabyte-kvey.onrender.com/api/v1/attendance/interiit/${sport}`, {
    method: 'GET',
    credentials: 'include'
  });
  const data = await res.json();
  return data ;
}
//

const AttendanceChart = (props) => {
    const totalDays = props.totalDays
    const attendedDays = props.playerAttendanceDays
    const percentage = (attendedDays / totalDays) * 100
  
    let color, bgColor, ringColor
    if (percentage >= 90) {
      color = 'text-green-400'
      bgColor = 'bg-green-400'
      ringColor = 'ring-green-400'
    } else if (percentage >= 75) {
      color = 'text-yellow-400'
      bgColor = 'bg-yellow-400'
      ringColor = 'ring-yellow-400'
    } else {
      color = 'text-red-400'
      bgColor = 'bg-red-400'
      ringColor = 'ring-red-400'
    }
  
    return (
      <div className="w-[90vw] md:w-2/3 lg:w-1/2 p-8 bg-slate-900 rounded-2xl shadow-2xl text-white m-auto mt-10 mb-10 border border-slate-700 font-titlefont">
        <h2 className="text-3xl font-bold mb-8 text-center text-slate-100 border-b border-slate-700 pb-4">Attendance Overview</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 border-r border-slate-700">
            <div className="space-y-4">
              <div className="bg-slate-800 p-4 rounded-lg shadow-inner">
                <p className="text-lg text-slate-300">
                  <span className="font-semibold text-slate-100">Total Days:</span> 
                  <span className="float-right">{totalDays}</span>
                </p>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg shadow-inner">
                <p className="text-lg text-slate-300">
                  <span className="font-semibold text-slate-100">Days Attended:</span> 
                  <span className="float-right">{attendedDays}</span>
                </p>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg shadow-inner">
                <p className="text-lg text-slate-300">
                  <span className="font-semibold text-slate-100">Attendance Percentage:</span> 
                  <span className="float-right">{percentage.toFixed(2)}%</span>
                </p>
              </div>
            </div>
            <div className={`mt-6 text-lg font-bold ${color} p-3 rounded-md ${bgColor} bg-opacity-20 text-center shadow-lg`}>
              {percentage >= 90 ? 'Excellent Attendance' : 
               percentage >= 75 ? 'Good Attendance' : 'Needs Improvement'}
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center md:pl-8">
            <div className="relative w-64 h-64">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="128"
                  cy="128"
                  r="120"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="16"
                  className="text-slate-700"
                />
                <circle
                  cx="128"
                  cy="128"
                  r="120"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="16"
                  strokeDasharray="753.98"
                  strokeDashoffset={753.98 * (1 - percentage / 100)}
                  className={`${color} transition-all duration-1000 ease-in-out`}
                />
              </svg>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="text-center bg-slate-800 rounded-full p-8 shadow-xl">
                  <span className={`text-5xl font-bold ${color}`}>{percentage.toFixed(0)}%</span>
                  <p className={`text-sm mt-2 ${color} uppercase tracking-wide`}>Attendance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-slate-400 text-sm">
          <p>Keep up the good work! Regular attendance is key to success.</p>
        </div>
      </div>
    )
  }
  
  
    export default function AttendanceCalander() {
      const data = useLoaderData();
      console.log('hello',data);
  
      const totalDays = data?.data?.totalDays;
      const playerAttendanceDays = data?.data?.player?.attendance;
      console.log(data?.data?.totalDays)
  
      const today = new Date()
      const [currentMonth, setCurrentMonth] = useState(today.getMonth())
      const [currentYear, setCurrentYear] = useState(today.getFullYear())
    
      // Array of dates to be bordered (YYYY-MM-DD strings)
      const borderedDates = [...totalDays]
    
      // Array of dates to be filled (YYYY-MM-DD strings)
      const filledDates = [...playerAttendanceDays]
    
      const convertToDateObjects = (dateStrings) => {
        return dateStrings.map(dateString => new Date(dateString))
      }
    
      const borderedDateObjects = convertToDateObjects(borderedDates)
      const filledDateObjects = convertToDateObjects(filledDates)
    
      const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
      const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()
    
      const prevMonth = () => {
        if (currentMonth === 0) {
          setCurrentMonth(11)
          setCurrentYear(currentYear - 1)
        } else {
          setCurrentMonth(currentMonth - 1)
        }
      }
    
      const nextMonth = () => {
        if (currentMonth === 11) {
          setCurrentMonth(0)
          setCurrentYear(currentYear + 1)
        } else {
          setCurrentMonth(currentMonth + 1)
        }
      }
    
      const isDateBordered = (date) => {
        return borderedDateObjects.some(borderedDate => 
          borderedDate.getDate() === date.getDate() &&
          borderedDate.getMonth() === date.getMonth() &&
          borderedDate.getFullYear() === date.getFullYear()
        )
      }
    
      const isDateFilled = (date) => {
        return filledDateObjects.some(filledDate => 
          filledDate.getDate() === date.getDate() &&
          filledDate.getMonth() === date.getMonth() &&
          filledDate.getFullYear() === date.getFullYear()
        )
      }
    
      return (
      <>
        <div className="w-[80vw] md:w-1/2 p-6 bg-slate-900 rounded-lg shadow-2xl text-white m-auto mt-[20px] mb-[30px] font-titlefont">
          <div className="flex justify-between items-center mb-6">
            <button onClick={prevMonth} className="text-white hover:text-slate-300 transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold">
              {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}
            </h2>
            <button onClick={nextMonth} className="text-white hover:text-slate-300 transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="font-semibold text-slate-400">{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2 text-center">
            {Array.from({ length: firstDayOfMonth }).map((_, index) => (
              <div key={`empty-${index}`} />
            ))}
            {Array.from({ length: daysInMonth }).map((_, index) => {
              const date = new Date(currentYear, currentMonth, index + 1)
              const isBordered = isDateBordered(date)
              const isFilled = isDateFilled(date)
              const isToday = date.toDateString() === today.toDateString()
              return (
                <div
                  key={index}
                  className={`p-2 rounded-full flex items-center justify-center transition-colors
                    ${isBordered ? 'border-2 border-yellow-400' : ''}
                    ${isFilled ? 'bg-blue-500' : ''}
                    ${isToday && !isFilled ? 'bg-slate-700' : ''}
                    ${!isFilled && !isToday ? 'hover:bg-slate-800' : ''}
                  `}
                >
                  <span className={`text-sm ${isFilled ? 'text-white' : ''}`}>{index + 1}</span>
                </div>
              )
            })}
          </div>
        </div>
        <AttendanceChart totalDays={totalDays?.length} playerAttendanceDays={playerAttendanceDays?.length}/>
      </>
      )
    }
