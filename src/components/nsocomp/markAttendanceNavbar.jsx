import React from 'react'
import { Trophy, Award } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="w-full sm:w-[50vw] mx-auto mt-4 bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg shadow-lg p-2">
      <div className="flex justify-between items-center">
        <button className="flex items-center justify-center px-4 py-2 bg-slate-100 text-slate-800 rounded-full hover:bg-slate-200 transition-all duration-300 transform hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-400">
          <Trophy className="w-5 h-5 mr-1 text-amber-500" />
          <span className="font-semibold text-sm">NSO</span>
        </button>
        <div className="text-center text-slate-200 text-xs font-medium">
          <span className="bg-slate-700 px-3 py-1 rounded-l-full">Sports</span>
          <span className="bg-slate-600 px-3 py-1 rounded-r-full">Events</span>
        </div>
        <button className="flex items-center justify-center px-4 py-2 bg-slate-100 text-slate-800 rounded-full hover:bg-slate-200 transition-all duration-300 transform hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-400">
          <Award className="w-5 h-5 mr-1 text-emerald-500" />
          <span className="font-semibold text-sm">Inter IIT</span>
        </button>
      </div>
    </nav>
  )
}


export function FacultyNavbar() {
  return (
    <nav className="w-full sm:w-[50vw] mx-auto mt-4 bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg shadow-lg p-2">
      <div className="flex justify-center items-center">
        <button className="flex items-center justify-center px-6 py-2 bg-slate-100 text-slate-800 rounded-full hover:bg-slate-200 transition-all duration-300 transform hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-400">
          <Award className="w-5 h-5 mr-2 text-emerald-500" />
          <span className="font-semibold text-sm">Inter IIT</span>
        </button>
      </div>
    </nav>
  )
}