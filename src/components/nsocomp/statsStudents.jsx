import React, { useState } from 'react';

export default function StudentSportsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSport, setSelectedSport] = useState('Select a Sport');

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSportSelect = (sport) => {
    setSelectedSport(sport);
    setIsOpen(false);
  };

  return (
    <div className="relative w-64 mx-auto font-sans">
      <button
        onClick={toggleDropdown}
        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg py-3 px-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg hover:from-blue-600 hover:to-blue-700 transition duration-300"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="block truncate">{selectedSport}</span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          <svg
            className="h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-xl max-h-60 overflow-auto">
          <div className="py-2 space-y-1">
            <button
              onClick={() => handleSportSelect('Basketball')}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-900 focus:outline-none focus:bg-blue-100 focus:text-blue-900"
            >
              Basketball
            </button>
            <button
              onClick={() => handleSportSelect('Football')}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-900 focus:outline-none focus:bg-blue-100 focus:text-blue-900"
            >
              Football
            </button>
            <button
              onClick={() => handleSportSelect('Tennis')}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-900 focus:outline-none focus:bg-blue-100 focus:text-blue-900"
            >
              Tennis
            </button>
            <button
              onClick={() => handleSportSelect('Swimming')}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-900 focus:outline-none focus:bg-blue-100 focus:text-blue-900"
            >
              Swimming
            </button>
            <button
              onClick={() => handleSportSelect('Volleyball')}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-900 focus:outline-none focus:bg-blue-100 focus:text-blue-900"
            >
              Volleyball
            </button>
            <button
              onClick={() => handleSportSelect('Athletics')}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-900 focus:outline-none focus:bg-blue-100 focus:text-blue-900"
            >
              Athletics
            </button>
          </div>
        </div>
      )}
    </div>
  );
}