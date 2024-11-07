import React, { useState, useEffect, useMemo } from "react";
import { useLoaderData, useRevalidator } from "react-router-dom";

export async function loader({params}) {
  const sport = params?.sport || null;
  console.log('dfg',sport)
  const res = await fetch(`https://terabyte-kvey.onrender.com/api/v1/attendance/nso/players/${sport}`, {
    method: 'GET',
    credentials: 'include'
  });
  const data = await res.json();
  console.log('nso students',data);
  return {
    data,
    sport
  };
}

const FloatingWindow = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 3000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-slate-900 bg-opacity-50 backdrop-blur-sm"></div>
      <div className="bg-white text-slate-900 px-6 py-4 rounded-lg shadow-lg z-10 animate-fade-in-up max-w-sm w-full mx-4">
        <p className="font-semibold text-center">{message}</p>
      </div>
    </div>
  )
}

const Loader = ({ message }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="absolute inset-0 bg-slate-900 bg-opacity-50 backdrop-blur-sm"></div>
    <div className="relative">
      <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      <div className="mt-4 text-white font-semibold">{message}</div>
    </div>
  </div>
);

const NSOAttendance = () => {
  const response = useLoaderData();
  const sport = response.sport;
  console.log(response.data);
  const revalidator = useRevalidator();

  const students = useMemo(() => {
    return response.data.players || [];
  }, [response.data.players]);

  const [selectedStudents, setSelectedStudents] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCheckboxChange = (student) => {
    const studentWithSport = { ...student, sport };
    setSelectedStudents(prevSelected => {
      if (prevSelected.some(s => s.id === student.id)) {
        return prevSelected.filter(s => s.id !== student.id);
      } else {
        return [...prevSelected, studentWithSport];
      }
    });
  }

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const res = await fetch(`https://terabyte-kvey.onrender.com/api/v1/attendance/nso`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedStudents),
      });
      const attendanceStatus = await res.json();
      if (attendanceStatus.status === 'success') {
        setShowSuccess(true);
        setSelectedStudents([]);
        revalidator.revalidate();
      }
    } catch (error) {
      console.error('Error submitting attendance:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <main className="flex-grow flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">Select Students for NSO {sport ? `- ${sport}` : ''}</h2>
            <div className="space-y-3 max-h-[60vh] overflow-y-auto mb-6 pr-2">
              {students.map(student => (
                <div 
                  key={student.id} 
                  className="flex items-center p-3 rounded-md transition-colors duration-200 bg-slate-50 hover:bg-slate-100"
                >
                  <input
                    type="checkbox"
                    id={student.id}
                    checked={selectedStudents.some(s => s.id === student.id)}
                    onChange={() => handleCheckboxChange(student)}
                    className="w-5 h-5 rounded focus:ring-slate-500 text-slate-900 bg-slate-100 border-slate-300"
                  />
                  <label 
                    htmlFor={student.id} 
                    className="ml-3 flex-grow text-slate-900"
                  >
                    <span className="text-sm font-medium">{student.name}</span>
                    <span className="ml-2 text-xs text-slate-500">ID: {student.id}</span>
                  </label>
                </div>
              ))}
            </div>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting || selectedStudents.length === 0}
              className="w-full py-2 px-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-md shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50 disabled:bg-slate-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Attendance'}
            </button>
          </div>
        </div>
      </main>
      {isSubmitting && <Loader message="Submitting..." />}
      {revalidator.state === "loading" && <Loader message="Updating..." />}
      {showSuccess && (
        <FloatingWindow
          message="Attendance submitted successfully!"
          onClose={() => setShowSuccess(false)}
        />
      )}
    </div>
  );
}

export default NSOAttendance;