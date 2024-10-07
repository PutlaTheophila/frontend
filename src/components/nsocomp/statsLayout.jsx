import React, { useState } from 'react'
import { Link , Outlet} from 'react-router-dom'
import { Users, UserCircle, X, ChevronRight } from 'lucide-react'

const SportSelector = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedGroup, setSelectedGroup] = useState(null)

  const studentSports = ['Badminton', 'Basketball', 'Athletics', 'Volleyball', 'Cricket', 'Football','table-tennis']
  const facultySports = ['Tennis', 'Golf', 'Yoga', 'Cycling']

  const openModal = (group) => {
    setSelectedGroup(group)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const sports = selectedGroup === 'student' ? studentSports : facultySports

  return (
    <>
      <nav className="w-full sm:w-[50vw] mx-auto mt-4 bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg shadow-lg p-3">
        <div className="flex space-x-4">
          <button
            className="flex-1 px-6 py-3 text-sm font-medium text-slate-800 bg-slate-100 rounded-full hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center group"
            onClick={() => openModal('student')}
          >
            <Users className="w-5 h-5 mr-2 text-blue-500 group-hover:text-blue-600 transition-colors duration-300" />
            <span className="group-hover:text-slate-900 transition-colors duration-300">Students</span>
          </button>
          <button
            className="flex-1 px-6 py-3 text-sm font-medium text-slate-800 bg-slate-100 rounded-full hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center group"
            onClick={() => openModal('faculty')}
          >
            <UserCircle className="w-5 h-5 mr-2 text-green-500 group-hover:text-green-600 transition-colors duration-300" />
            <span className="group-hover:text-slate-900 transition-colors duration-300">Faculty</span>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 bg-slate-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-opacity duration-300">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-md transform transition-all duration-300 scale-100 opacity-100">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-slate-800 flex items-center">
                  {selectedGroup === 'student' ? (
                    <Users className="w-6 h-6 mr-2 text-blue-500" />
                  ) : (
                    <UserCircle className="w-6 h-6 mr-2 text-green-500" />
                  )}
                  {selectedGroup === 'student' ? 'Student' : 'Faculty'} Sports
                </h2>
                <button
                  onClick={closeModal}
                  className="text-slate-400 hover:text-slate-600 transition duration-200 rounded-full p-1 hover:bg-slate-100"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                {sports.map((sport) => (
                  <Link
                    key={sport}
                    to={`/nso/stats/${selectedGroup}/${sport.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block w-full p-4 text-left text-slate-700 bg-slate-50 rounded-lg shadow-sm hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-50 transition-all duration-200 transform hover:scale-102 flex items-center justify-between group"
                    onClick={closeModal}
                  >
                    <span className="font-medium group-hover:text-slate-900">{sport}</span>
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-transform duration-200 transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </>
  )
}

export default function Layout() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <div className="w-[95vw] md:w-[50vw] max-w-4xl">
        <SportSelector />
        <div className="mt-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
