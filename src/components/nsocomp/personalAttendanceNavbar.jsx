import React from 'react'
import { Trophy, Award, X, ChevronRight } from 'lucide-react';
import {Link} from "react-router-dom";
import { useState } from 'react';

export default function StudentNavbar  ({sportsList}) {
  console.log('params',sportsList);
  const [isOpen, setIsOpen] = useState(false)
  const [selectedGroup, setSelectedGroup] = useState(null)

  const nsoSports = ['Badminton', 'Basketball', 'Athletics', 'Volleyball', 'Cricket', 'Football']
  const interIITSports = [...sportsList];

  const openModal = (group) => {
    setSelectedGroup(group)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const sports = selectedGroup === 'nso' ? nsoSports : interIITSports

  return (
    <>
      <nav className="w-full sm:w-[50vw] mx-auto mt-4 bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg shadow-lg p-2">
        <div className="flex justify-between items-center">
          <button
            className="flex items-center justify-center px-4 py-2 bg-slate-100 text-slate-800 rounded-full hover:bg-slate-200 transition-all duration-300 transform hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-400"
            onClick={() => openModal('nso')}
          >
            <Trophy className="w-5 h-5 mr-1 text-amber-500" />
            <span className="font-semibold text-sm">NSO</span>
          </button>
          <div className="text-center text-slate-200 text-xs font-medium">
            <span className="bg-slate-700 px-3 py-1 rounded-l-full">Sports</span>
            <span className="bg-slate-600 px-3 py-1 rounded-r-full">Events</span>
          </div>
          <button
            className="flex items-center justify-center px-4 py-2 bg-slate-100 text-slate-800 rounded-full hover:bg-slate-200 transition-all duration-300 transform hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-400"
            onClick={() => openModal('interIIT')}
          >
            <Award className="w-5 h-5 mr-1 text-emerald-500" />
            <span className="font-semibold text-sm">Inter IIT</span>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 bg-slate-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-opacity duration-300">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-md transform transition-all duration-300 scale-100 opacity-100">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-slate-800 flex items-center">
                  {selectedGroup === 'nso' ? (
                    <Trophy className="w-6 h-6 mr-2 text-amber-500" />
                  ) : (
                    <Award className="w-6 h-6 mr-2 text-emerald-500" />
                  )}
                  {selectedGroup === 'nso' ? 'NSO' : 'Inter IIT'} Sports
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
                    to={`/nso/personal-attendance/${selectedGroup === 'nso' ? 'nso' : 'interiit'}-attendance/${sport.toLowerCase().replace(/\s+/g, '-')}`}
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


import React, { useState } from 'react';
import { Award, X, ChevronRight } from 'lucide-react';
import { Link } from "react-router-dom";

export function FacultyNavbar({ sportsList }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const interIITSports = [...sportsList]; // Assuming sportsList is passed for faculty sports as well

  return (
    <>
      <nav className="w-full sm:w-[50vw] mx-auto mt-4 bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg shadow-lg p-2">
        <div className="flex justify-center items-center">
          <button
            className="flex items-center justify-center px-6 py-2 bg-slate-100 text-slate-800 rounded-full hover:bg-slate-200 transition-all duration-300 transform hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-400"
            onClick={openModal}
          >
            <Award className="w-5 h-5 mr-2 text-emerald-500" />
            <span className="font-semibold text-sm">Inter IIT</span>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 bg-slate-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-opacity duration-300">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-md transform transition-all duration-300 scale-100 opacity-100">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-slate-800 flex items-center">
                  <Award className="w-6 h-6 mr-2 text-emerald-500" />
                  Inter IIT Sports
                </h2>
                <button
                  onClick={closeModal}
                  className="text-slate-400 hover:text-slate-600 transition duration-200 rounded-full p-1 hover:bg-slate-100"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                {interIITSports.map((sport) => (
                  <Link
                    key={sport}
                    to={`/nso/personal-attendance/${selectedGroup === 'nso' ? 'nso' : 'interiit'}-attendance/${sport.toLowerCase().replace(/\s+/g, '-')}`}
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
  );
}
