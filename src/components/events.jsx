import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import { Calendar,CalendarDays, ArrowRight, MapPin, Users ,ChevronRight } from 'lucide-react';

export async function loader() {
  const dataSet = [
    {
      _id: "bhsnmdkuegsvhn467f",
      title: "Annual Inter-College Basketball Tournament",
      description: "Join us for the most anticipated basketball tournament of the year, featuring top teams from colleges across the region.",
      images: [
        "https://content.jdmagicbox.com/comp/durg/x8/9999px788.x788.230827173524.x7x8/catalogue/indian-institute-of-technology-bhilai-jeora-sirsa-durg-iit-sypb5mw9px.jpg",
        "https://pbs.twimg.com/media/FWj41NGaIAEJvhK?format=jpg&name=4096x4096",
        "https://polaris.iitbhilai.ac.in/public/images/life/life_23.jpg"
      ],
      date: "2024-03-15",
      location: "University Sports Complex",
      sport: "Basketball",
      participants: "8 college teams"
    },
    {
      _id: "yrhsnmkfhcb57cji903",
      title: "Swimming Gala: Aquatic Excellence",
      description: "Witness extraordinary aquatic performances as our college hosts the annual swimming gala, showcasing talent from various institutions.",
      images: [
        "https://content.jdmagicbox.com/comp/durg/x8/9999px788.x788.230827173524.x7x8/catalogue/indian-institute-of-technology-bhilai-jeora-sirsa-durg-iit-sypb5mw9px.jpg",
        "https://pbs.twimg.com/media/FWj41NGaIAEJvhK?format=jpg&name=4096x4096",
        "https://polaris.iitbhilai.ac.in/public/images/life/life_23.jpg"
      ],
      date: "2024-04-22",
      location: "Olympic-size Pool, Sports Center",
      sport: "Swimming",
      participants: "100+ swimmers"
    },
    // ... (additional events)
  ];

  // Preload the first image
  await Promise.all(
    dataSet.map(event => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = event.images[0];
        img.onload = resolve;
      });
    })
  );

  return dataSet;
}


export default function Events() {
  const data = useLoaderData();

  return (
    <div className="min-h-screen bg-slate-900 font-titlefont">
      <header className="bg-slate-800 text-white py-6">
        <div className="w-[85vw] mx-auto">
          <h1 className="text-3xl font-bold text-center">Sports Events</h1>
        </div>
      </header>
      <main className="w-[85vw] mx-auto py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      </main>
    </div>
  );
}

function EventCard({ event }) {
  const { _id, title, description, images, date, location, sport, participants } = event;

  return (
    <div className="bg-slate-800 text-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img className="w-full h-56 object-cover" src={images[0]} alt={title} />
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-70"></div>
        <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          {sport}
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>
      </div>
      <div className="p-4 bg-slate-700">
        <div className="space-y-2">
          <div className="flex items-center text-xs text-amber-300">
            <CalendarDays className="mr-2 h-4 w-4" />
            <span>{new Date(date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center text-xs text-amber-300">
            <MapPin className="mr-2 h-4 w-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-xs text-amber-300">
            <Users className="mr-2 h-4 w-4" />
            <span>{participants}</span>
          </div>
        </div>
      </div>
      <div className="bg-slate-800 p-4">
        <Link
          to={`/events/${_id}`}
          className="block w-full py-2 px-4 bg-amber-500 text-black text-center rounded font-semibold hover:bg-amber-600 transition duration-300"
        >
          View Details
          <ChevronRight className="inline-block ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
