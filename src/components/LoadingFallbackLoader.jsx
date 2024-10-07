import React from 'react';

const EnhancedSportsLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white">
      <div className="relative w-64 h-64">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 border-4 border-slate-700 rounded-full animate-spin-slow"></div>
        
        {/* Inner pulsing circle */}
        <div className="absolute inset-4 bg-slate-800 rounded-full animate-pulse"></div>
        
        {/* Sports icons */}
        <div className="absolute inset-0">
          {/* Football */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-slate-700 rounded-full animate-bounce" style={{animationDelay: '0s'}}>
            <div className="absolute inset-1 border-2 border-white rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-0.5 bg-white rounded-full"></div>
            </div>
          </div>
          
          {/* Basketball */}
          <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}>
            <div className="absolute inset-0 border-2 border-white rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-0.5 bg-white rounded-full transform rotate-45"></div>
              <div className="w-10 h-0.5 bg-white rounded-full transform -rotate-45"></div>
            </div>
          </div>
          
          {/* Tennis ball */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}>
            <div className="absolute inset-0 border-2 border-white rounded-full transform rotate-45"></div>
          </div>
          
          {/* Soccer ball */}
          <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full animate-bounce" style={{animationDelay: '0.6s'}}>
            <div className="absolute inset-1 bg-slate-900 rounded-full"></div>
            <div className="absolute inset-3 bg-white rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-0.5 bg-slate-900 rounded-full transform rotate-45"></div>
              <div className="w-12 h-0.5 bg-slate-900 rounded-full transform -rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Loading text */}
      <div className="mt-8 text-2xl font-bold">
        <span className="inline-block animate-pulse">L</span>
        <span className="inline-block animate-pulse" style={{animationDelay: '0.1s'}}>o</span>
        <span className="inline-block animate-pulse" style={{animationDelay: '0.2s'}}>a</span>
        <span className="inline-block animate-pulse" style={{animationDelay: '0.3s'}}>d</span>
        <span className="inline-block animate-pulse" style={{animationDelay: '0.4s'}}>i</span>
        <span className="inline-block animate-pulse" style={{animationDelay: '0.5s'}}>n</span>
        <span className="inline-block animate-pulse" style={{animationDelay: '0.6s'}}>g</span>
        <span className="inline-block animate-bounce ml-2">.</span>
        <span className="inline-block animate-bounce ml-0.5" style={{animationDelay: '0.2s'}}>.</span>
        <span className="inline-block animate-bounce ml-0.5" style={{animationDelay: '0.4s'}}>.</span>
      </div>
    </div>
  );
};

export default EnhancedSportsLoader;