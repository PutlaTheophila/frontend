import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import { Calendar, ArrowRight, MapPin } from 'lucide-react';

export async function loader() {
  const dataSet = [
    {
      _id: "bhsnmdkuegsvhn467f",
      title: "Mountain Sunrise Festival",
      description: "Experience the beautiful sunrise over the mountains in this unique festival.",
      imageUrl: "https://drop.ndtv.com/albums/SPORTS/roller-coaster-_638536211386979266/638536212026489145_640x480.jpeg",
      date: "2024-01-12",
      location: "Mountain View"
    },
    {
      _id: "yrhsnmkfhcb57cji903",
      title: "Beach Cleanup Drive",
      description: "Join us for a day of cleaning our beautiful beaches and protecting marine life.",
      imageUrl: "https://www.hindustantimes.com/ht-img/img/2024/08/29/550x309/FBL-EURO-2024-MATCH34-UKR-BEL-387_1724943330461_1724943364252.jpg",
      date: "2024-02-15",
      location: "Coastal Bay"
    },
    // ... (other events)
  ];
  return dataSet;
}

export default function Events() {
  const data = useLoaderData();

  return (
    <div className="bg-gradient-to-br from-blue-100 to-purple-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            Upcoming Events
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

function Event({ _id, title, description, imageUrl, date, location }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 group">
      <div className="relative">
        <img 
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110" 
          src={imageUrl} 
          alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-70"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center text-xs font-semibold text-yellow-300 mb-2">
            <Calendar className="w-4 h-4 mr-1" />
            {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
          <h2 className="text-xl font-bold text-white truncate group-hover:text-yellow-300 transition-colors duration-300">{title}</h2>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-slate-500 mb-4">
          <MapPin className="w-4 h-4 mr-1 text-pink-500" />
          {location}
        </div>
        <p className="text-slate-600 text-sm mb-4 line-clamp-3 group-hover:text-slate-800 transition-colors duration-300">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <Link 
            to={`/events/${_id}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-all duration-300 group-hover:translate-x-1 transform"
          >
            Learn More
            <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <span className="text-slate-400 text-xs group-hover:text-slate-600 transition-colors duration-300">ID: {_id.slice(0, 8)}</span>
        </div>
      </div>
    </div>
  );
}