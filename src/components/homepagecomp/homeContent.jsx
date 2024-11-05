// import HomeCardList from "./homeNewsCardList";
// import HomeImage from "./homeImage";
// import PlayerOfTheMonth from "./payerOfTheMonth";
// import TournamentsPage from "./upcomingTournaments";


// export function loader () {
    
// }

// function HomePage() {
//     return(
//         <>
//             <HomeImage/>
//             <HomeCardList/>
//             <PlayerOfTheMonth/>
//             <TournamentsPage/>
            
//         </>
//     )
// }
// export default HomePage;





import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, MapPin, Users, ChevronRight } from "lucide-react";

// export async function loader() {
//   try {
//     const [newsResponse, playersResponse, tournamentsResponse] = await Promise.all([
//       fetch('https://terabyte-kvey.onrender.com/api/v1/events')
//     //   fetch('https://api.example.com/players-of-the-month'),
//     //   fetch('https://api.example.com/upcoming-tournaments')
//     ]);

//     const news = await newsResponse.json();
//     const players = await playersResponse.json();
//     const tournaments = await tournamentsResponse.json();

//     return { news, players, tournaments };
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return { news: [], players: [], tournaments: [] };
//   }
// }

// Static data
const staticData = {
  news: [
    {
      _id: "1",
      text: "IIT Bhilai wins Inter-IIT Sports Meet 2023",
      imageUrl: "https://drop.ndtv.com/albums/SPORTS/roller-coaster-_638536211386979266/638536212026489145_640x480.jpeg",
      date: "2023-12-15"
    },
    {
      _id: "2",
      text: "New Sports Complex Inaugurated at IIT Bhilai",
      imageUrl: "https://www.hindustantimes.com/ht-img/img/2024/08/29/550x309/FBL-EURO-2024-MATCH34-UKR-BEL-387_1724943330461_1724943364252.jpg",
      date: "2023-11-30"
    },
    {
      _id: "3",
      text: "IIT Bhilai Hosts National Level Chess Tournament",
      imageUrl: "https://s1.dmcdn.net/v/Wwc1u1cp_LG1xxXgT",
      date: "2023-10-22"
    },
    {
      _id: "4",
      text: "IIT Bhilai Students Set New Records in Athletics",
      imageUrl: "https://drop.ndtv.com/albums/SPORTS/roller-coaster-_638536211386979266/638536212026489145_640x480.jpeg",
      date: "2023-09-18"
    },
    {
      _id: "5",
      text: "Annual Sports Day Celebration at IIT Bhilai",
      imageUrl: "https://drop.ndtv.com/albums/SPORTS/roller-coaster-_638536211386979266/638536212026489145_640x480.jpeg",
      date: "2023-08-05"
    }
  ],
  players: [
    {
      name: "Rahul Sharma",
      gender: "Male",
      image: "https://dsc.iitbhilai.ac.in/img/IMG_8036-min.JPG",
      sport: "Cricket",
      matchDetails: "Scored a century in the final match against IIT Madras",
    },
    {
      name: "Priya Patel",
      gender: "Female",
      image: "https://dsc.iitbhilai.ac.in/img/IMG_8036-min.JPG",
      sport: "Badminton",
      matchDetails: "Won the singles tournament without dropping a game",
    },
  ],
  tournaments: [
    {
      id: 1,
      name: "Inter-IIT Cricket Championship",
      date: "2023-07-15",
      location: "Main Sports Ground",
      participants: 16,
      sport: "Cricket",
      status: "Upcoming"
    },
    {
      id: 2,
      name: "Annual Badminton Tournament",
      date: "2023-08-05",
      location: "Indoor Sports Complex",
      participants: 32,
      sport: "Badminton",
      status: "Registration Open"
    },
    {
      id: 3,
      name: "IIT Bhilai Marathon",
      date: "2023-09-10",
      location: "Campus Grounds",
      participants: 200,
      sport: "Athletics",
      status: "Registration Closed"
    },
    {
      id: 4,
      name: "Inter-Department Football League",
      date: "2023-07-30",
      location: "Football Ground",
      participants: 64,
      sport: "Football",
      status: "Upcoming"
    }
  ]
};

function HomePage() {
  // const { news, players, tournaments } = useLoaderData();
  const { news, players, tournaments } = staticData;

  return (
    <div className="bg-slate-900 text-white font-titlefont">
      <HomeImage />
      <HomeCardList news={news} />
      <PlayerOfTheMonth players={players} />
      <TournamentsPage tournaments={tournaments} />
    </div>
  );
}

function HomeImage() {
  return (
    <div className="bg-[url('https://polaris.iitbhilai.ac.in/public/images/nsonss/nso1.jpg')] w-full md:h-[90vh] h-[40vh] bg-center bg-no-repeat bg-cover">
      <div className="bg-gradient-to-t from-slate-950 w-full h-full flex items-end">
        <h1 className="text-white font-semibold pb-[20px] text-[25px] sm:text-[40px] pl-[7px]">
          IIT Bhilai Sports | Excellence in Athletics and Academics
        </h1>
      </div>
    </div>
  );
}

function HomeCardList({ news }) {
  return (
    <div className="h-[450px] sm:h-[400px] bg-black flex w-full overflow-x-auto overflow-y-hidden items-center py-4 px-2 space-x-4 scrollbar-hide">
      {news.map((card, index) => (
        <HomeCard key={index} {...card} />
      ))}
    </div>
  );
}

function HomeCard({ _id, text, imageUrl, date }) {
  return (
    <Link to={`/events/${_id}`} className="flex-shrink-0">
      <div 
        className="h-[350px] w-[200px] sm:w-[300px] sm:h-[400px] rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="h-full w-full bg-gradient-to-t from-black via-black/70 to-transparent flex flex-col justify-end p-4">
          <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">
            {text}
          </h3>
          <p className="text-gray-300 text-sm">
            {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </Link>
  );
}

const players = [
    {
      name: "Rahul Sharma",
      stream: "Engineering",
      branch: "Computer Science",
      year: "3rd Year",
      college: "IIT Delhi",
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRN_YLneDIMiLFQizeNOh3Y9bQs4a5nzAoD24ROXw-6zVQ7UZ-l",
      achievements: [
        "Best Paper Award at IEEE Conference",
        "1st place in National Coding Championship",
        "Developed AI model for healthcare"
      ]
    },
    {
      name: "Priya Patel",
      stream: "Medicine",
      branch: "MBBS",
      year: "4th Year",
      college: "AIIMS Mumbai",
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRN_YLneDIMiLFQizeNOh3Y9bQs4a5nzAoD24ROXw-6zVQ7UZ-l",
      achievements: [
        "Published research in top medical journal",
        "Innovator award for telemedicine project",
        "Volunteer of the Year at city hospital"
      ]
    }
  ];
  
  const PlayerCard = ({ player }) => {
    return (
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-b from-gray-900 to-black shadow-md md:shadow-lg md:hover:shadow-xl transition-all duration-300 md:w-80">
        <div className="relative aspect-[3/4]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black"></div>
          <img
            src={player.image}
            alt={`${player.name}`}
            className="h-full w-full object-cover transition-transform duration-500 md:hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
            <h3 className="mb-1 text-xl font-bold md:text-2xl tracking-tight">{player.name}</h3>
            <p className="mb-2 text-sm md:text-base font-medium text-amber-400">{player.stream}</p>
            <p className="mb-1 text-xs md:text-sm text-gray-300">{player.branch} | {player.year}</p>
            <p className="mb-4 text-xs md:text-sm text-gray-400">{player.college}</p>
            <div className="mb-4 space-y-1 md:space-y-2">
              {player.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-1 md:gap-2">
                  <svg className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0 text-amber-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-xs md:text-sm text-gray-300">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const PlayerOfTheMonth = () => {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Student of the Month
            </h2>
            <p className="text-gray-400">October 2024</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
            {players.map((player, index) => (
              <PlayerCard key={index} player={player} />
            ))}
          </div>
          <div className="mt-8 flex justify-center gap-2">
            <div className="h-2 w-8 rounded-full bg-amber-500"></div>
            <div className="h-2 w-2 rounded-full bg-gray-700"></div>
            <div className="h-2 w-2 rounded-full bg-gray-700"></div>
          </div>
        </div>
      </div>
    );
  };
  
  
// function PlayerCard({ player }) {
//   return (
//     <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden">
//       <div className="h-64 relative">
//         <img className="w-full h-full object-cover" src={player.image} alt={player.name} />
//         <div className="absolute top-0 left-0 bg-slate-900 text-white px-3 py-1 m-2 rounded-full text-xs font-semibold">
//           {player.gender} Player of the Month
//         </div>
//       </div>
//       <div className="p-6">
//         <h3 className="text-2xl font-bold text-white mb-2">{player.name}</h3>
//         <p className="text-slate-300 font-semibold mb-4">{player.sport}</p>
//         <p className="text-slate-400 text-sm mb-4">{player.matchDetails}</p>
//         <div className="mt-4 border-t border-slate-700 pt-4">
//           <p className="text-slate-300 text-sm">
//             Achievements:
//           </p>
//           <ul className="list-disc list-inside text-slate-400 text-sm mt-2">
//             <li>Inter-IIT Sports Meet Gold Medalist</li>
//             <li>College Record Holder</li>
//             <li>Team Captain for 2 consecutive years</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

function TournamentsPage({ tournaments }) {
  return (
    <div className="min-h-screen bg-slate-900">
      <header className="bg-slate-900 text-white py-6">
        <div className="w-[85vw] mx-auto">
          <h2 className="text-2xl font-bold flex items-center justify-center">UPCOMING TOURNAMENTS</h2>
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
    "Registration Open": "bg-yellow-500",
    "Registration Closed": "bg-red-500",
    "Completed": "bg-gray-500"
  };

  return (
    <div className="bg-slate-800 text-white rounded-lg shadow-2xl overflow-hidden">
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
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

export default HomePage;
