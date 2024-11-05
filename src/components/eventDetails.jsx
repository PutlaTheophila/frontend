import React, { useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, MapPin, Users, Clock, Award, Star, ChevronLeft } from 'lucide-react';

export async function loader({ params }) {
  // Mock data for event details
  const id = params.id;
  const res = await fetch(`https://terabyte-kvey.onrender.com/api/v1/events/${id}`, {
    method: 'GET',
    credentials: 'include'
  });
  const data = await res.json();
  const eventData = data.event;

  const preloadImages = async (imageUrls) => {
    const imagePromises = imageUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(url);
        img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
      });
    });

    return Promise.all(imagePromises);
  };

  try {
    // Wait for all images to preload
    await preloadImages(eventData.images);
    return eventData; // Return event data only after images are loaded
  } catch (error) {
    console.error('Error preloading images:', error);
    return eventData; // In case of error, return the data anyway
  }
}

export default function EventDetails() {
  const event = useLoaderData();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % event.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + event.images.length) % event.images.length);
  };

  return (
    <div className="bg-gradient-to-br from-slate-100 to-slate-200 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative h-[32rem] md:h-[40rem]">
            <img
              className="w-full h-full object-cover object-center"
              src={event.images[currentImageIndex]}
              alt={`${event.title} - Image ${currentImageIndex + 1}`}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/80"></div>
            <div className="absolute top-4 left-4 bg-amber-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
              {event.sport}
            </div>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-3 transition-colors duration-300"
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-3 transition-colors duration-300"
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </button>
          </div>
          <div className="relative bg-white p-8 -mt-20 mx-4 rounded-xl shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">{event.title}</h1>
            <div className="flex flex-wrap items-center text-sm text-slate-600 mb-4">
              <div className="flex items-center mr-6 mb-2">
                <Calendar className="w-5 h-5 mr-2 text-amber-500" />
                {new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
              <div className="flex items-center mr-6 mb-2">
                <MapPin className="w-5 h-5 mr-2 text-amber-500" />
                {event.location}
              </div>
              <div className="flex items-center mb-2">
                <Users className="w-5 h-5 mr-2 text-amber-500" />
                {event.participants}
              </div>
            </div>
            <p className="text-slate-700 mb-8 text-lg leading-relaxed">{event.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-100 p-6 rounded-xl shadow-inner">
                <div className="flex items-center mb-4">
                  <Clock className="w-8 h-8 text-amber-500 mr-3" />
                  <h3 className="font-bold text-slate-800 text-xl">Schedule</h3>
                </div>
                <p className="text-slate-600">{event.schedule}</p>
              </div>
              <div className="bg-slate-100 p-6 rounded-xl shadow-inner">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-amber-500 mr-3" />
                  <h3 className="font-bold text-slate-800 text-xl">Organizer</h3>
                </div>
                <p className="text-slate-600">{event.organizer}</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-slate-200 to-slate-300 p-6 rounded-xl mb-8">
              <h3 className="font-bold text-slate-800 text-xl mb-4 flex items-center">
                <Star className="w-6 h-6 mr-2 text-amber-500" />
                Event Highlights
              </h3>
              <ul className="list-disc list-inside text-slate-700 space-y-2">
                <li>World-class athletes competing</li>
                <li>State-of-the-art venue</li>
                <li>Live entertainment and music</li>
                <li>Gourmet food and beverage options</li>
              </ul>
            </div>
            <div className="flex justify-between items-center">
              <Link
                to="/events"
                className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors duration-300"
              >
                <ChevronLeft className="w-5 h-5 mr-1" />
                Back to Events
              </Link>
              {/* <button className="px-8 py-3 bg-amber-500 text-white font-bold rounded-full hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Register Now
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}