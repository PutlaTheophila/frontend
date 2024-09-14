import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const SportSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);

  const studentSports = ['badminton', 'Basketball', 'athletics', 'volleyball' , 'cricket' ,'football'];
  const facultySports = ['Tennis', 'Golf', 'Yoga', 'Cycling'];

  const openModal = (group) => {
    setSelectedGroup(group);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const sports = selectedGroup === 'student' ? studentSports : facultySports;

  return (
    <>
      <nav className="bg-white shadow-md rounded-lg p-4 w-full sticky top-0 z-10">
        <div className="flex space-x-4">
          <button
            className="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
            onClick={() => openModal('student')}
          >
            Students
          </button>
          <button
            className="flex-1 px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-200"
            onClick={() => openModal('faculty')}
          >
            Faculty
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                Select a Sport for {selectedGroup === 'student' ? 'Students' : 'Faculty'}
              </h2>
              <div className="space-y-2">
                {sports.map((sport) => (
                  <Link
                    key={sport}
                    to={`/nso/stats/${selectedGroup}/${sport.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block w-full p-2 text-left border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
                    onClick={closeModal}
                  >
                    {sport}
                  </Link>
                ))}
              </div>
              <button
                className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

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
