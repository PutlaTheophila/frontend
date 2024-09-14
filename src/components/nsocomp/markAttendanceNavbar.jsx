import React from 'react';
import { Link } from 'react-router-dom';

export default function ButtonContainer() {
  return (
    <div className="bg-slate-900 w-full sm:w-[50vw] mx-auto p-4 rounded-lg shadow-lg">
      <div className="flex flex-row gap-4">
        <Link
          to="/nso/mark-attendance/nso-attendance"
          className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 text-center shadow-md hover:shadow-lg transform hover:scale-105"
        >
          NSO
        </Link>
        <Link
          to="/nso/mark-attendance/interiit-attendance"
          className="w-1/2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 text-center shadow-md hover:shadow-lg transform hover:scale-105"
        >
          Inter IIT
        </Link>
      </div>
    </div>
  );
}