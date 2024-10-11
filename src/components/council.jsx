import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Trophy, Award, Users , Star, ChevronRight , Mail} from 'lucide-react';

export async function loader() {


  const res = await fetch(`https://terabyte-kvey.onrender.com/api/v1/coordinators`, {
      method: 'GET',
      credentials: 'include',
  });
  const response = await res.json();
  const data = response.data;
  // const data = [
  //   {
  //     sport: "Basketball",
  //     players: [
  //       {
  //         name: "LeBron James",
  //         image: "https://i.ibb.co/JKZrVJL/Gajanand-Kumawat.jpg",
  //         program: "Sports Science",
  //         branch: "Strive for greatness.",
  //       },
  //       {
  //         name: "Stephen Curry",
  //         image: "https://i.ibb.co/JKZrVJL/Gajanand-Kumawat.jpg",
  //         program: "Business Management",
  //         branch: "Be the best shooter.",
  //       },
  //     ],
  //   },
  //   {
  //     sport: "Soccer",
  //     players: [
  //       {
  //         name: "Lionel Messi",
  //         image: "https://i.pinimg.com/736x/22/9d/86/229d8667d47b15d20a9ad459ea2041e0.jpg",
  //         program: "Sports Medicine",
  //         branch: "The greatest of all time.",
  //       },
  //       {
  //         name: "Cristiano Ronaldo",
  //         image: "https://i.pinimg.com/736x/cd/4f/59/cd4f590f83a5be0270f373ea2f6247cf.jpg",
  //         program: "Physical Education",
  //         branch: "Work hard, play hard.",
  //       },
  //     ],
  //   },
  //   {
  //     sport: "Tennis",
  //     players: [
  //       {
  //         name: "Serena Williams",
  //         image: "https://i.pinimg.com/736x/22/9d/86/229d8667d47b15d20a9ad459ea2041e0.jpg",
  //         program: "Nutrition Science",
  //         branch: "Champion mentality.",
  //       },
  //       {
  //         name: "Roger Federer",
  //         image: "https://i.pinimg.com/736x/cd/4f/59/cd4f590f83a5be0270f373ea2f6247cf.jpg",
  //         program: "Sports Management",
  //         branch: "Elegance on and off court.",
  //       },
  //     ],
  //   },
  // ];

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
        name: "Dr.Anurag Singh",
        image: "https://i.ibb.co/Mf7r8vM/anurag.jpg",
        role: "Faculty Incharge",
        sport: "Faculty",
        email: "anurags@iitbhilai.ac.in",
        description: "Dr. Anurag Singh, the Faculty Incharge of Sports at IIT Bhilai, is instrumental in promoting and managing sports initiatives within the institute. He fosters a vibrant sports culture by encouraging student participation and excellence in athletics. Dr. Singh's leadership inspires teamwork, discipline, and healthy competition, significantly contributing to the overall development of the student community at IIT Bhilai.",
      },
      {
        name: "Aditya Prakash",
        image: "https://i.ibb.co/pdK1C40/Aditya-Prakash.webp",
        role: "General Secretary Of Sports",
        sport: "Student",
        email: "adityaparkash@iitbhilai.ac.in",
        description: "Meet Aditya Prakash, a third-year B.Tech student at IIT Bhilai and the General Secretary of Sports. He plays a key role in organizing and promoting sports activities across the institute. With a passion for both academics and athletics, Aditya works to foster an inclusive sports culture, inspiring fellow students to participate and excel. His leadership reflects the dynamic and enthusiastic spirit of IIT Bhilai!",
      }
    ],
    sports: data
  };
}

export default function Council() {
  const { featured, sports } = useLoaderData();
  return (
    <div className="bg-gradient-to-br from-slate-100 to-slate-200 min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-titlefont">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold mb-4">
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

function FeaturedCard({ name, image, role, sport, email, description }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl group">
      <div className="md:flex">
        <div className="md:w-2/5 relative">
          <img src={image} alt={name} className="w-full h-64 md:h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent md:bg-gradient-to-t"></div>
        </div>
        <div className="md:w-3/5 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-1 text-slate-800 font-titlefont">{name}</h3>
            <p className="text-amber-600 font-semibold mb-1 font-titlefont">{role}</p>
            <p className="text-slate-600 mb-4 font-titlefont">{sport}</p>
            <p className="text-slate-700 mb-4 font-titlefont">{description}</p>
          </div>
          <div className="flex items-center text-slate-600">
            <Mail className="w-5 h-5 mr-2 text-amber-500" />
            <a href={`mailto:${email}`} className="hover:text-amber-600 transition-colors duration-300 font-titlefont">{email}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ sport, players }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl group font-titlefont">
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
      <div className="flex-shrink-0 w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-amber-400 to-slate-700 p-1 shadow-lg transition-all duration-300 group-hover:scale-105 font-titlefont">
        <img src={image} alt={name} className="w-full h-full object-cover rounded-full" />
      </div>
      <div className="flex-grow">
        <div className='flex-col items-center justify-center'>
        <h3 className="text-xl font-bold mb-1 text-slate-800 group-hover:text-amber-600  font-titlefont transition-colors duration-300">{name}</h3>
        <p className="text-sm text-slate-600 mb-2 flex items-center font-titlefont">
          <Users className="w-4 h-4 mr-1 text-amber-500" />
          {program}
        </p>
        <p className="text-sm font-medium text-slate-700 bg-slate-100 rounded-full py-1 px-3 inline-flex  font-titlefont items-center">
          <Award className="w-4 h-4 mr-1 text-amber-500" />
          {branch}
        </p>
        </div>
      </div>
    </div>
  );
}