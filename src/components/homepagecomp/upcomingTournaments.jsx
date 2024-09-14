import React from 'react';
import { CalendarDays, MapPin, Users, ChevronRight } from "lucide-react";
import { Link, useLoaderData } from 'react-router-dom';

export default function TournamentsPage() {
    // const tournamentsFetched = useLoaderData();
    // console.log(tournamentsFetched);
    // const tournaments = [...tournamentsFetched]

  const tournaments = [
    {
      id: 1,
      name: "Inter-College Basketball Championship",
      date: "2023-07-15",
      location: "Main Sports Arena",
      participants: 16,
      sport: "Basketball",
      status: "Upcoming"
    },
    {
      id: 2,
      name: "Annual Swimming Gala",
      date: "2023-08-05",
      location: "Olympic-size Pool",
      participants: 50,
      sport: "Swimming",
      status: "Registration Open"
    },
    {
      id: 3,
      name: "Cross-Country Running Event",
      date: "2023-09-10",
      location: "College Grounds",
      participants: 100,
      sport: "Athletics",
      status: "Registration Closed"
    },
    {
      id: 4,
      name: "Table Tennis Tournament",
      date: "2023-07-30",
      location: "Indoor Sports Complex",
      participants: 32,
      sport: "Table Tennis",
      status: "Upcoming"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 font-titlefont">
      <header className="bg-slate-900 text-white py-6">
        <div className="w-[85vw] mx-auto">
          <h1 className="text-2xl font-bold flex items-center justify-center">UPCOMING TOURNAMENTS</h1>
        </div>
      </header>
      <main className="w-[85vw] mx-auto py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tournaments.map((tournament) => (
            <TournamentCard key={tournament.id} tournament={tournament} />
          ))}
        </div>
      </main>
    </div>
  );
}

function TournamentCard({ tournament }) {
  const { id, name, date, location, participants, sport, status } = tournament;

  const statusColors = {
    "Ongoing": "bg-blue-500",
    "Upcoming": "bg-green-500",
    "Registration Closed": "bg-yellow-500",
    "Completed": "bg-red-500"
  };

  return (
    <div className="bg-slate-800 text-white rounded-lg shadow-2xl overflow-hidden">
      <div className="p-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${statusColors[status]} text-white mt-2`}>
          {status}
        </span>
      </div>
      <div className="bg-slate-700 p-4">
        <div className="space-y-2">
          <div className="flex items-center text-xs">
            <CalendarDays className="mr-2 h-4 w-4 text-amber-300" />
            <span>{new Date(date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center text-xs">
            <MapPin className="mr-2 h-4 w-4 text-amber-300" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-xs">
            <Users className="mr-2 h-4 w-4 text-amber-300" />
            <span>{participants} Participants</span>
          </div>
        </div>
        <span className="inline-block mt-4 px-2 py-1 bg-slate-600 text-white rounded-full text-xs font-semibold">
          {sport}
        </span>
      </div>
      <div className="bg-slate-800 p-4">
        <Link 
          to={`/tournaments/${id}`}
          className="block w-full py-2 px-4 bg-amber-300 text-black text-center rounded text-xs font-semibold hover:bg-amber-400 transition duration-300"
        >
          View Details
          <ChevronRight className="inline-block ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}