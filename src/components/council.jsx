import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Trophy, Award, Users , Star, ChevronRight} from 'lucide-react';

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

  return {
    featured: [
      {
        name: "Michael Jordan",
        image: "https://i.pinimg.com/736x/22/9d/86/229d8667d47b15d20a9ad459ea2041e0.jpg",
        role: "Honorary President",
        sport: "Basketball",
        quote: "Talent wins games, but teamwork and intelligence win championships.",
      },
      {
        name: "Simone Biles",
        image: "https://i.pinimg.com/736x/22/9d/86/229d8667d47b15d20a9ad459ea2041e0.jpg",
        role: "Vice President",
        sport: "Gymnastics",
        quote: "I'm not the next Usain Bolt or Michael Phelps. I'm the first Simone Biles.",
      }
    ],
    sports: data
  };
}

export default function Council() {
  const { featured, sports } = useLoaderData();
  return (
    <div className="bg-gradient-to-br from-slate-100 to-slate-200 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-amber-600 to-slate-600">
              Sports Council 2024-25
            </span>
          </h1>
          <p className="text-slate-600 text-xl max-w-3xl mx-auto">
            Empowering athletes, fostering excellence, and promoting sportsmanship across our campus.
          </p>
        </header>

        {/* Featured Members */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          {featured.map((member, index) => (
            <FeaturedCard key={index} {...member} />
          ))}
        </div>

        <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Sport Representatives</h2>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {sports.map((sport, index) => (
            <Card key={index} {...sport} />
          ))}
        </div>
      </div>
    </div>
  );
}

function FeaturedCard({ name, image, role, sport, quote }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl group">
      <div className="relative h-64">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-1">{name}</h3>
          <p className="text-amber-400 font-semibold mb-1">{role}</p>
          <p className="text-slate-300">{sport}</p>
        </div>
      </div>
      <div className="p-6">
        <blockquote className="italic text-slate-600 mb-4">"{quote}"</blockquote>
        <button className="text-amber-600 font-semibold group-hover:text-amber-700 transition-colors duration-300 flex items-center">
          Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}

function Card({ sport, players }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl group">
      <div className="relative h-48 bg-gradient-to-r from-slate-800 to-amber-700">
        <div className="absolute inset-0 opacity-20 bg-pattern"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Trophy className="w-24 h-24 text-white opacity-20" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h2 className="text-3xl font-bold text-white">{sport}</h2>
        </div>
      </div>
      <div className="p-6 space-y-8">
        {players.map((player, index) => (
          <PlayerCard key={index} {...player} />
        ))}
      </div>
    </div>
  );
}

function PlayerCard({ name, image, program, branch }) {
  return (
    <div className="flex items-center space-x-4 group">
      <div className="flex-shrink-0 w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-amber-400 to-slate-700 p-1 shadow-lg transition-all duration-300 group-hover:scale-105">
        <img src={image} alt={name} className="w-full h-full object-cover rounded-full" />
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-bold mb-1 text-slate-800 group-hover:text-amber-600 transition-colors duration-300">{name}</h3>
        <p className="text-sm text-slate-600 mb-2 flex items-center">
          <Users className="w-4 h-4 mr-1 text-amber-500" />
          {program}
        </p>
        <p className="text-sm font-medium text-slate-700 bg-slate-100 rounded-full py-1 px-3 inline-flex items-center">
          <Award className="w-4 h-4 mr-1 text-amber-500" />
          {branch}
        </p>
      </div>
    </div>
  );
}