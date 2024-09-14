import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Home, UserCheck, Users, BarChart, User } from 'lucide-react'

export default function AttendanceNavbar() {
  const location = useLocation()

  const buttonClass = ({ isActive }) => `
    p-3 rounded-md flex flex-col items-center justify-center
    transition-colors duration-200 ease-in-out cursor-pointer
    ${isActive
      ? 'bg-slate-900 text-white'
      : 'bg-white text-gray-700 hover:bg-gray-200'
    }
    focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50
  `

  const isExactPath = (path) => location.pathname === path

  return (
    <div className="w-full sm:w-[50vw] mx-auto mt-4 bg-gray-100 rounded-lg shadow-md p-4">
      <nav className="grid grid-cols-5 gap-3">
        <NavLink
          to="/nso"
          className={({ isActive }) => buttonClass({ isActive: isExactPath('/nso') })}
          title="Home"
        >
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1 text-center">Home</span>
        </NavLink>

        <NavLink
          to="/nso/mark-attendance"
          className={buttonClass}
          title="Mark Attendance"
        >
          <UserCheck className="w-6 h-6" />
          <span className="text-xs mt-1 text-center">Mark</span>
        </NavLink>

        <NavLink
          to="/nso/group"
          className={buttonClass}
          title="View Group Attendance"
        >
          <Users className="w-6 h-6" />
          <span className="text-xs mt-1 text-center">Group</span>
        </NavLink>

        <NavLink
          to="/nso/stats"
          className={buttonClass}
          title="Stats"
        >
          <BarChart className="w-6 h-6" />
          <span className="text-xs mt-1 text-center">Stats</span>
        </NavLink>

        <NavLink
          to="/nso/personal-attendance"
          className={buttonClass}
          title="Personal Attendance"
        >
          <User className="w-6 h-6" />
          <span className="text-xs mt-1 text-center">Personal</span>
        </NavLink>
      </nav>
    </div>
  )
}