import React, { useState } from 'react';
import { CalendarDays, MapPin, Users, Trophy, FileText, ChevronRight } from "lucide-react";
import {Link, useLoaderData} from "react-router-dom";

export async function loader ({params}) {

  return 'hello'
}

export default function TournamentDetailsPage() {

    const data = useLoaderData();
    console.log(data.tournament);

  const [activeTab, setActiveTab] = useState('boys');

  const tournament = {
    id: 1,
    name: "Inter-College Basketball Championship 2023",
    date: "2023-07-15",
    endDate: "2023-07-20",
    location: "Main Sports Arena, Central University",
    participants: 16,
    sport: "Basketball",
    status: "Completed",
    description: "The annual Inter-College Basketball Championship brings together the best college teams for an intense week of competition. Teams battle it out in a knockout format to be crowned the champions.",
    schedule: [
      { date: "2023-07-15", events: ["Opening Ceremony", "Preliminary Rounds"] },
      { date: "2023-07-16", events: ["Quarter Finals"] },
      { date: "2023-07-18", events: ["Semi Finals"] },
      { date: "2023-07-20", events: ["Finals", "Closing Ceremony"] },
    ],
    results: {
      boys: {
        winner: { name: "Riverside College", image: "https://avatarfiles.alphacoders.com/130/thumb-1920-130018.jpg", score: "78-72" },
        runnerUp: { name: "Hillside University", image: "https://avatarfiles.alphacoders.com/130/thumb-1920-130018.jpg", score: "72-78" },
      },
      girls: {
        winner: { name: "Lakeview Institute", image: "https://avatarfiles.alphacoders.com/130/thumb-1920-130018.jpg", score: "65-60" },
        runnerUp: { name: "Mountainview College", image: "https://avatarfiles.alphacoders.com/130/thumb-1920-130018.jpg", score: "60-65" },
      },
    },
    matches: [
      { team1: "Riverside College", team2: "Oakwood University", score: "82-75", stage: "Quarter Final" },
      { team1: "Hillside University", team2: "Pinecrest College", score: "79-68", stage: "Quarter Final" },
      { team1: "Lakeview Institute", team2: "Seaview Academy", score: "71-69", stage: "Semi Final" },
      { team1: "Mountainview College", team2: "Valley Tech", score: "77-73", stage: "Semi Final" },
    ],
};

  return (
    <div className="min-h-screen bg-gray-100 font-titlefont">
      <header className="bg-slate-800 text-white py-6">
        <div className="w-[85vw] mx-auto">
          <h1 className="text-2xl font-bold">{tournament.name}</h1>
          <div className="flex items-center mt-2">
            <span className="mr-2 bg-slate-700 text-white px-2 py-1 rounded-full text-xs">{tournament.sport}</span>
            <span className={`px-2 py-1 rounded-full text-xs ${tournament.status === "Completed" ? "bg-green-500" : "bg-yellow-500"}`}>
              {tournament.status}
            </span>
          </div>
        </div>
      </header>
      <main className="w-[85vw] mx-auto py-8">
        <div className="bg-slate-800 text-white rounded-lg shadow-2xl p-4 mb-6">
          <h2 className="text-xl font-semibold mb-4">Tournament Overview</h2>
          <div className="space-y-4 text-sm">
            <div className="flex items-center">
              <CalendarDays className="mr-2 h-4 w-4 text-amber-300" />
              <span>{new Date(tournament.date).toLocaleDateString()} - {new Date(tournament.endDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-4 w-4 text-amber-300" />
              <span>{tournament.location}</span>
            </div>
            <div className="flex items-center">
              <Users className="mr-2 h-4 w-4 text-amber-300" />
              <span>{tournament.participants} Teams</span>
            </div>
            <p className="text-gray-300">{tournament.description}</p>
          </div>
        </div>

        <div className="bg-slate-800 text-white rounded-lg shadow-2xl p-4 mb-6">
          <h2 className="text-xl font-semibold mb-4">Tournament Champions</h2>
          <div className="flex mb-4">
            <button
              className={`px-4 py-2 text-xs ${activeTab === 'boys' ? 'bg-amber-300 text-black' : 'bg-slate-700'} rounded-l-md`}
              onClick={() => setActiveTab('boys')}
            >
              Boys
            </button>
            <button
              className={`px-4 py-2 text-xs ${activeTab === 'girls' ? 'bg-amber-300 text-black' : 'bg-slate-700'} rounded-r-md`}
              onClick={() => setActiveTab('girls')}
            >
              Girls
            </button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <WinnerCard title="Winner" team={tournament.results[activeTab].winner} />
            <WinnerCard title="Runner Up" team={tournament.results[activeTab].runnerUp} />
          </div>
        </div>

        <div className="bg-slate-800 text-white rounded-lg shadow-2xl p-4 mb-6">
          <h2 className="text-xl font-semibold mb-4">Match Results</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-slate-700">
                  <th className="px-4 py-2 text-left text-xs">Stage</th>
                  <th className="px-4 py-2 text-left text-xs">Team 1</th>
                  <th className="px-4 py-2 text-left text-xs">Team 2</th>
                  <th className="px-4 py-2 text-left text-xs">Score</th>
                </tr>
              </thead>
              <tbody>
                {tournament.matches.map((match, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-slate-700' : 'bg-slate-800'}>
                    <td className="px-4 py-2 text-xs">{match.stage}</td>
                    <td className="px-4 py-2 text-xs">{match.team1}</td>
                    <td className="px-4 py-2 text-xs">{match.team2}</td>
                    <td className="px-4 py-2 text-xs">{match.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-slate-800 text-white rounded-lg shadow-2xl p-4 mb-6">
          <h2 className="text-xl font-semibold mb-4">Tournament Schedule</h2>
          <div className="space-y-4">
            {tournament.schedule.map((day, index) => (
              <div key={index} className="flex items-start">
                <CalendarDays className="mr-2 h-4 w-4 text-amber-300" />
                <div>
                  <h3 className="font-semibold text-sm">{new Date(day.date).toLocaleDateString()}</h3>
                  <ul className="list-disc list-inside text-gray-300 text-xs">
                    {day.events.map((event, eventIndex) => (
                      <li key={eventIndex}>{event}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link to="/tournaments" className="inline-flex items-center px-4 py-2 bg-amber-300 text-black rounded-md text-xs hover:bg-amber-400 transition duration-200">
            Back to All Tournaments
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}

function WinnerCard({ title, team }) {
  return (
    <div className="bg-slate-700 rounded-lg p-4 flex items-center">
      <img
        src={team.image}
        alt={team.name}
        className="w-16 h-16 rounded-full mr-4"
      />
      <div>
        <h3 className="font-semibold text-sm">{title}</h3>
        <p className="text-xs">{team.name}</p>
        <p className="text-xs text-gray-300">Final Score: {team.score}</p>
      </div>
    </div>
  );
}