import React from 'react';
import { useLoaderData } from 'react-router-dom';

export async function loader() {
  const data = [
    {
      sport: "Basketball",
      players: [
        {
          name: "LeBron James",
          image: "https://i.ibb.co/JKZrVJL/Gajanand-Kumawat.jpg",
          program: "Sports Science",
          branch: "Strive for greatness.",
        },
        {
          name: "Stephen Curry",
          image: "https://i.ibb.co/JKZrVJL/Gajanand-Kumawat.jpg",
          program: "Business Management",
          branch: "Be the best shooter.",
        },
      ],
    },
    {
      sport: "Soccer",
      players: [
        {
          name: "Lionel Messi",
          image: "https://i.pinimg.com/736x/22/9d/86/229d8667d47b15d20a9ad459ea2041e0.jpg",
          program: "Sports Medicine",
          branch: "The greatest of all time.",
        },
        {
          name: "Cristiano Ronaldo",
          image: "https://i.pinimg.com/736x/cd/4f/59/cd4f590f83a5be0270f373ea2f6247cf.jpg",
          program: "Physical Education",
          branch: "Work hard, play hard.",
        },
      ],
    },
    {
      sport: "Tennis",
      players: [
        {
          name: "Serena Williams",
          image: "https://i.pinimg.com/736x/22/9d/86/229d8667d47b15d20a9ad459ea2041e0.jpg",
          program: "Nutrition Science",
          branch: "Champion mentality.",
        },
        {
          name: "Roger Federer",
          image: "https://i.pinimg.com/736x/cd/4f/59/cd4f590f83a5be0270f373ea2f6247cf.jpg",
          program: "Sports Management",
          branch: "Elegance on and off court.",
        },
      ],
    },
  ];

  const preloadImage = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(url);
      img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
    });
  };

  const preloadPromises = data.flatMap((sport) =>
    sport.players.map((player) => preloadImage(player.image))
  );

  await Promise.all(preloadPromises);

  return data;
}

export default function Council() {
  const data = useLoaderData();
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-amber-600 to-slate-600">
            Sports Council 2024-25
          </span>
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.map((sport, index) => (
            <Card key={index} {...sport} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ sport, players }) {
  return (
    <div className="bg-white rounded-xl font-titlefont overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 group">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-amber-900 opacity-70"></div>
        <div className="p-6 relative flex items-center justify-center">
          <h2 className="text-2xl font-bold text-white">{sport}</h2>
        </div>
      </div>
      <div className="p-6 grid gap-8">
        {players.map((player, index) => (
          <PlayerCard key={index} {...player} />
        ))}
      </div>
    </div>
  );
}

function PlayerCard({ name, image, program, branch }) {
  return (
    <div className="text-center group bg-gray-50 rounded-lg shadow transition-all duration-300 hover:shadow-lg p-4 font-titlefont">
      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-amber-600 to-slate-900 p-1 transform transition-all duration-300 group-hover:scale-110">
        <img src={image} alt={name} className="w-full h-full object-cover rounded-full" />
      </div>
      <h3 className="text-xl font-bold mb-1 text-slate-900 group-hover:text-slate-600 transition-colors duration-300">{name}</h3>
      <p className="text-sm text-slate-600 mb-1">{program}</p>
      <p className="text-base font-medium italic text-amber-500 bg-gray-700 rounded-full py-1 px-3 inline-block">
        {branch}
      </p>
    </div>
  );
}