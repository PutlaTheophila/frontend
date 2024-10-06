import { useLoaderData } from "react-router-dom";
import { useState , useEffect} from "react";


export async function loader({params}) {
  const sport = params?.sport;
  const res = await fetch(`https://terabyte-kvey.onrender.com/api/v1/attendance/interiit/players/${sport}`, {
      method: 'GET',
      credentials: 'include'
  });
  const data = await res.json();
  return data;
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

const InterIITAttendance = () => {
  const students = useLoaderData()
  console.log('params sport ',students);

  const [selectedStudents, setSelectedStudents] = useState([])
  const [showSuccess, setShowSuccess] = useState(false)

  const handleCheckboxChange = (student) => {
    setSelectedStudents(prevSelected => {
      if (prevSelected.some(s => s.id === student.id)) {
        return prevSelected.filter(s => s.id !== student.id)
      } else {
        return [...prevSelected, student]
      }
    })
  }

  const handleSubmit = async () => {
    console.log('Selected students:', selectedStudents)
    try {
      const res = await fetch(`https://terabyte-vw3n.onrender.com/api/v1/attendance/interiit/`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedStudents),
      })
      const attendanceStatus = await res.json()
      if (attendanceStatus.status === 'success') setShowSuccess(true)
      console.log(attendanceStatus.status)
    } catch (error) {
      console.error('Error submitting attendance:', error)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <main className="flex-grow flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">Select Students</h2>
            <div className="space-y-3 max-h-[50vh] overflow-y-auto mb-6 pr-2">
              {students.map(student => (
                <div key={student.id} className="flex items-center p-3 bg-slate-50 rounded-md hover:bg-slate-100 transition-colors duration-200">
                  <input
                    type="checkbox"
                    id={student.id}
                    checked={selectedStudents.some(s => s.id === student.id)}
                    onChange={() => handleCheckboxChange(student)}
                    className="w-5 h-5 text-slate-900 bg-slate-100 border-slate-300 rounded focus:ring-slate-500"
                  />
                  <label htmlFor={student.id} className="ml-3 flex-grow">
                    <span className="text-sm font-medium text-slate-900">{student.name}</span>
                    <span className="ml-2 text-xs text-slate-500">ID: {student.id}</span>
                  </label>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-slate-100 rounded-md mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Selected Students:</h3>
              {selectedStudents.length > 0 ? (
                <ul className="space-y-2 max-h-[20vh] overflow-y-auto pr-2">
                  {selectedStudents.map(student => (
                    <li key={student.id} className="flex items-center justify-between p-2 bg-white rounded-md shadow-sm">
                      <span className="text-sm font-medium text-slate-800">{student.name}</span>
                      <span className="text-xs text-slate-500">ID: {student.id}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-slate-500 italic">No students selected</p>
              )}
            </div>
            <button
              onClick={handleSubmit}
              className="w-full py-2 px-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-md shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </div>
      </main>
      {showSuccess && (
        <FloatingWindow
          message="Submission successful!"
          onClose={() => setShowSuccess(false)}
        />
      )}
    </div>
  )
}

export default InterIITAttendance