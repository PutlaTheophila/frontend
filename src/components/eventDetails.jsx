import React, { useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, MapPin, Users, Clock, DollarSign, Award, Star, ChevronLeft } from 'lucide-react';

export async function loader({ params }) {
    // Mock data for event details
    const eventData = {
      _id: params.id,
      title: "Annual Inter-College Basketball Tournament",
      description: "Join us for the most anticipated basketball tournament of the year, featuring top teams from colleges across the region. This high-energy event will showcase the best of collegiate basketball, with intense competition, skillful plays, and the spirit of sportsmanship.",
      images: [
        "https://content.jdmagicbox.com/comp/durg/x8/9999px788.x788.230827173524.x7x8/catalogue/indian-institute-of-technology-bhilai-jeora-sirsa-durg-iit-sypb5mw9px.jpg",
        "https://pbs.twimg.com/media/FWj41NGaIAEJvhK?format=jpg&name=4096x4096",
        "https://polaris.iitbhilai.ac.in/public/images/life/life_23.jpg"
      ],
      date: "2024-03-15",
      location: "University Sports Complex",
      sport: "Basketball",
      participants: "8 college teams",
      schedule: "Preliminary rounds: March 15-16, Semi-finals: March 17, Finals: March 18",
      organizer: "Inter-Collegiate Sports Committee",
      ticketPrice: "$10 for students, $15 for adults",
    };
  
    // Preload all images
    const preloadImages = async (imageUrls) => {
      const imagePromises = imageUrls.map((url) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = url;
          img.onload = () => resolve(url); // Resolve when image loads
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
      <div className="bg-gradient-to-br from-slate-300 via-slate-100 to-amber-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="relative h-[28rem]">
              <img 
                className="w-full h-full object-cover" 
                src={event.images[currentImageIndex]} 
                alt={`${event.title} - Image ${currentImageIndex + 1}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                {event.sport}
              </div>
              <div className="absolute bottom-8 left-8 right-8">
                <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">{event.title}</h1>
                <div className="flex flex-wrap items-center text-sm text-white/90">
                  <div className="flex items-center mr-6 mb-2">
                    <Calendar className="w-5 h-5 mr-2 text-blue-300" />
                    {new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                  <div className="flex items-center mr-6 mb-2">
                    <MapPin className="w-5 h-5 mr-2 text-pink-300" />
                    {event.location}
                  </div>
                  <div className="flex items-center mb-2">
                    <Users className="w-5 h-5 mr-2 text-indigo-300" />
                    {event.participants}
                  </div>
                </div>
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
            <div className="p-8">
              <p className="text-slate-700 mb-8 text-lg leading-relaxed">{event.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-2xl shadow-inner">
                  <div className="flex items-center mb-4">
                    <Clock className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="font-bold text-blue-800 text-xl">Schedule</h3>
                  </div>
                  <p className="text-slate-600">{event.schedule}</p>
                </div>
                <div className="bg-green-50 p-6 rounded-2xl shadow-inner">
                  <div className="flex items-center mb-4">
                    <Award className="w-8 h-8 text-green-600 mr-3" />
                    <h3 className="font-bold text-green-800 text-xl">Organizer</h3>
                  </div>
                  <p className="text-slate-600">{event.organizer}</p>
                </div>
                <div className="bg-yellow-50 p-6 rounded-2xl shadow-inner">
                  <div className="flex items-center mb-4">
                    <DollarSign className="w-8 h-8 text-yellow-600 mr-3" />
                    <h3 className="font-bold text-yellow-800 text-xl">Ticket Price</h3>
                  </div>
                  <p className="text-slate-600">{event.ticketPrice}</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-2xl mb-8">
                <h3 className="font-bold text-purple-800 text-xl mb-4 flex items-center">
                  <Star className="w-6 h-6 mr-2 text-purple-600" />
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
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
                >
                  <ChevronLeft className="w-5 h-5 mr-1" />
                  Back to Events
                </Link>
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }