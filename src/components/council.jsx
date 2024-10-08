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
          slogan: "Strive for greatness.",
        },
        {
          name: "Stephen Curry",
          image: "https://i.ibb.co/JKZrVJL/Gajanand-Kumawat.jpg",
          program: "Business Management",
          slogan: "Be the best shoote\r.",
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
          slogan: "The greatest of all time.",
        },
        {
          name: "Cristiano Ronaldo",
          image: "https://i.pinimg.com/736x/cd/4f/59/cd4f590f83a5be0270f373ea2f6247cf.jpg",
          program: "Physical Education",
          slogan: "Work hard, play hard.",
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
          slogan: "Champion mentality.",
        },
        {
          name: "Roger Federer",
          image: "https://i.pinimg.com/736x/cd/4f/59/cd4f590f83a5be0270f373ea2f6247cf.jpg",
          program: "Sports Management",
          slogan: "Elegance on and off court.",
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            Sports Council 2024-25
          </span>
        </h1>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
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
    <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
        <h2 className="text-2xl font-bold">{sport}</h2>
      </div>
      <div className="p-6 grid gap-8 sm:grid-cols-2">
        {players.map((player, index) => (
          <PlayerCard key={index} {...player} />
        ))}
      </div>
    </div>
  );
}

function PlayerCard({ name, image, program, slogan }) {
  return (
    <div className="text-center group">
      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-yellow-400 to-pink-500 p-1 transform transition-all duration-300 group-hover:scale-110">
        <img src={image} alt={name} className="w-full h-full object-cover rounded-full" />
      </div>
      <h3 className="text-xl font-bold mb-1 group-hover:text-yellow-300 transition-colors duration-300">{name}</h3>
      <p className="text-sm text-gray-400 mb-2">{program}</p>
      <p className="text-base font-medium italic text-yellow-300 bg-gray-700 rounded-full py-1 px-3 inline-block transform transition-all duration-300 group-hover:scale-105 group-hover:bg-gray-600">
        "{slogan}"
      </p>
    </div>
  );
}