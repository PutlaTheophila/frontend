import React from "react";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const dataSet = [
    {
      _id: "bhsnmdkuegsvhn467f",
      text: "The beautiful sunrise over the mountains fguigf  ufgiuwef iwfgb fheuigef jfgiuwef wfiugwefwef.",
      imageUrl: "https://drop.ndtv.com/albums/SPORTS/roller-coaster-_638536211386979266/638536212026489145_640x480.jpeg",
      date: "12-01-2022"
    },
    {
      _id: "yrhsnmkfhcb57cji903",
      text: "A serene beach with crystal clear water.",
      imageUrl: "https://www.hindustantimes.com/ht-img/img/2024/08/29/550x309/FBL-EURO-2024-MATCH34-UKR-BEL-387_1724943330461_1724943364252.jpg",
      date: "12-01-2022"
    },
    {
      _id: "nfteyud87shjdgkoi96t",
      text: "A bustling cityscape at night.",
      imageUrl: "https://s1.dmcdn.net/v/Wwc1u1cp_LG1xxXgT",
      date: "12-01-2022"
    },
    {
      _id: "ydhjkol98h3dgly78ui90",
      text: "A tranquil forest path in autumn.",
      imageUrl: "https://drop.ndtv.com/albums/SPORTS/roller-coaster-_638536211386979266/638536212026489145_640x480.jpeg",
      date: "12-01-2022"
    },
    {
      _id: "638jhbnmkdg67hj98h",
      text: "A field of vibrant wildflowers.",
      imageUrl: "https://drop.ndtv.com/albums/SPORTS/roller-coaster-_638536211386979266/638536212026489145_640x480.jpeg",
      date: "12-01-2022"
    },
    {
      _id: "bhsnmdkuegsvhn467",
      text: "The beautiful sunrise over the mountains.",
      imageUrl: "https://drop.ndtv.com/albums/SPORTS/roller-coaster-_638536211386979266/638536212026489145_640x480.jpeg",
      date: "12-01-2022"
    },
    {
      _id: "yrhsnmkfhcb57cji90",
      text: "A serene beach with crystal clear water.",
      imageUrl: "https://www.hindustantimes.com/ht-img/img/2024/08/29/550x309/FBL-EURO-2024-MATCH34-UKR-BEL-387_1724943330461_1724943364252.jpg",
      date: "12-01-2022"
    },
    {
      _id: "nfteyud87shjdmkoi96",
      text: "A bustling cityscape at night.",
      imageUrl: "https://s1.dmcdn.net/v/Wwc1u1cp_LG1xxXgT",
      date: "12-01-2022"
    },
    {
      _id: "ydhjkol98h3dgy78uifgeygf",
      text: "A tranquil forest path in autumn.",
      imageUrl: "https://drop.ndtv.com/albums/SPORTS/roller-coaster-_638536211386979266/638536212026489145_640x480.jpeg",
      date: "12-01-2022"
    },
    {
      _id: "638jhbnmkdg67yghjduhuf",
      text: "A field of vibrant wildflowers.",
      imageUrl: "https://drop.ndtv.com/albums/SPORTS/roller-coaster-_638536211386979266/638536212026489145_640x480.jpeg",
      date: "12-01-2022"
    }
  ];
  return dataSet;
}

export default function Events() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-900 to-blue-500">
            Events
          </span>
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.map((element) => (
            <Event key={element._id} {...element} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Event(props) {
  console.log('.......',props);
  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
      <div className="relative">
        <img 
          className="w-full h-48 object-cover" 
          src={props.imageUrl} 
          alt="Event image"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-slate-900 opacity-70"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-xs font-semibold text-amber-400 mb-1">
            {new Date(props.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
          <h2 className="text-xl font-bold text-white truncate">{props.text}</h2>
        </div>
      </div>
      <div className="p-6">
        <p className="text-slate-300 text-sm mb-4 line-clamp-3">
          {props.text}
        </p>
        <div className="flex justify-between items-center">
          <a href="#" className="text-amber-400 hover:text-teal-300 font-medium text-sm transition-colors duration-300">
            Learn More
          </a>
          <span className="text-slate-400 text-xs">ID: {props.id}</span>
        </div>
      </div>
    </div>
  );
}