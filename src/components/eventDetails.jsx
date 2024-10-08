import React, { useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { Calendar, MapPin, Users, ArrowLeft, ArrowRight } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-100">
      <div className="bg-slate-800 text-white rounded-lg shadow-2xl max-w-4xl mx-auto overflow-hidden">
        <div className="relative h-96">
          <img
            className="w-full h-full object-cover"
            src={event.images[currentImageIndex]}
            alt={`${event.title} - Image ${currentImageIndex + 1}`}
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute top-4 left-4 bg-amber-300 text-black text-sm font-bold px-3 py-1 rounded-full">
            {event.sport}
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <h1 className="text-3xl font-bold text-white">{event.title}</h1>
          </div>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 transition-colors duration-300"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 transition-colors duration-300"
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="p-8 bg-slate-800 text-white">
          <div className="flex flex-wrap items-center text-sm mb-6 text-amber-300">
            <div className="flex items-center mr-6 mb-2">
              <Calendar className="w-5 h-5 mr-2" />
              {new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            <div className="flex items-center mr-6 mb-2">
              <MapPin className="w-5 h-5 mr-2" />
              {event.location}
            </div>
            <div className="flex items-center mb-2">
              <Users className="w-5 h-5 mr-2" />
              {event.participants}
            </div>
          </div>
          <p className="text-gray-300 mb-6">{event.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-700 p-4 rounded-lg">
              <h3 className="font-semibold text-amber-300 mb-2">Schedule</h3>
              <p className="text-gray-300">{event.schedule}</p>
            </div>
            <div className="bg-slate-700 p-4 rounded-lg">
              <h3 className="font-semibold text-amber-300 mb-2">Organizer</h3>
              <p className="text-gray-300">{event.organizer}</p>
            </div>
            <div className="bg-slate-700 p-4 rounded-lg">
              <h3 className="font-semibold text-amber-300 mb-2">Ticket Price</h3>
              <p className="text-gray-300">{event.ticketPrice}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <Link
              to="/events"
              className="inline-flex items-center text-amber-300 hover:text-amber-400 font-medium transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-1" />
              Back to Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
