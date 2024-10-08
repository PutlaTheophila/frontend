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
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-amber-600 to-slate-600">
            Sports Events
          </span>
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.map((event) => (
            <Event key={event._id} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Event({ _id, title, description, images, date, location, sport, participants }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 group">
      <div className="relative">
        <img 
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110" 
          src={images[0]} 
          alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-70"></div>
        <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
          {sport}
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h2 className="text-xl font-bold text-white truncate group-hover:text-yellow-300 transition-colors duration-300">{title}</h2>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1 text-blue-500" />
            {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1 text-pink-500" />
            {location}
          </div>
        </div>
        <p className="text-slate-600 text-sm mb-4 line-clamp-3 group-hover:text-slate-800 transition-colors duration-300">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm text-slate-500">
            <Users className="w-4 h-4 mr-1 text-indigo-500" />
            {participants}
          </div>
          <Link 
            to={`/events/${_id}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-all duration-300 group-hover:translate-x-1 transform"
          >
            View Details
            <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}