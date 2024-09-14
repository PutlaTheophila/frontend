import React, { useState } from "react";
import { Link } from "react-router-dom";

const dataSet = [
  {
    _id: "bhsnmdkuegsvhn467f",
    text: "The beautiful sunrise over the mountains.",
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
    _id: "nfteyud87shjdmkoi96t",
    text: "A bustling cityscape at night.",
    imageUrl: "https://s1.dmcdn.net/v/Wwc1u1cp_LG1xxXgT",
    date: "12-01-2022"
  },
  {
    _id: "ydhjkol98h3dgy78ui90",
    text: "A tranquil forest path in autumn.",
    imageUrl: "https://drop.ndtv.com/albums/SPORTS/roller-coaster-_638536211386979266/638536212026489145_640x480.jpeg",
    date: "12-01-2022"
  },
  {
    _id: "638jhbnmkdg67yghj98h",
    text: "A field of vibrant wildflowers.",
    imageUrl: "https://drop.ndtv.com/albums/SPORTS/roller-coaster-_638536211386979266/638536212026489145_640x480.jpeg",
    date: "12-01-2022"
  }
];

export default function HomeCardList() {
  const [data, setData] = useState(dataSet);

  return (
    <div className="h-[450px] sm:h-[400px] bg-black flex w-full overflow-x-auto overflow-y-hidden items-center py-4 px-2 space-x-4 scrollbar-hide">
      {data.map((card, index) => (
        <HomeCard key={index} {...card} />
      ))}
    </div>
  );
}

function HomeCard(props) {
  return (
    <Link to={`/events/${props._id}`} className="flex-shrink-0">
      <div 
        className="h-[350px] w-[200px] sm:w-[300px] sm:h-[400px] font-titlefont rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
        style={{
          backgroundImage: `url(${props.imageUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="h-full w-full bg-gradient-to-t from-black via-black/70 to-transparent flex flex-col justify-end p-4">
          <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">
            {props.text}
          </h3>
          <p className="text-gray-300 text-sm">
            {new Date(props.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </Link>
  );
}