import React from 'react';

const players = [
  {
    name: "John Doe",
    gender: "Male",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    sport: "Basketball",
    matchDetails: "Scored 32 points in the final match against IIT Madras",
  },
  {
    name: "Jane Smith",
    gender: "Female",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    sport: "Tennis",
    matchDetails: "Won the singles tournament without dropping a set",
  },
];

const PlayerCard = ({ player }) => (
  <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden">
    <div className="h-64 relative">
      <img className="w-full h-full object-cover" src={player.image} alt={player.name} />
      <div className="absolute top-0 left-0 bg-slate-900 text-white px-3 py-1 m-2 rounded-full text-xs font-semibold">
        {player.gender} Player of the Month
      </div>
    </div>
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-2">{player.name}</h2>
      <p className="text-slate-300 font-semibold mb-4">{player.sport}</p>
      <p className="text-slate-400 text-sm mb-4">{player.matchDetails}</p>
      <div className="mt-4 border-t border-slate-700 pt-4">
        <p className="text-slate-300 text-sm">
          Achievements:
        </p>
        <ul className="list-disc list-inside text-slate-400 text-sm mt-2">
          <li>Inter-IIT Sports Meet Gold Medalist</li>
          <li>College Record Holder</li>
          <li>Team Captain for 2 consecutive years</li>
        </ul>
      </div>
    </div>
  </div>
);

const PlayerOfTheMonth = () => {
  return (
    <div className="bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-white mb-12">
          Player of the Month
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {players.map((player, index) => (
            <PlayerCard key={index} player={player} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerOfTheMonth;