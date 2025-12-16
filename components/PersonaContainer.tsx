import React, { useState } from 'react';
import { PersonaConfig } from '../types';

interface PersonaContainerProps {
  config: PersonaConfig;
}

export const PersonaContainer: React.FC<PersonaContainerProps> = ({ config }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSessionActive, setIsSessionActive] = useState(false);

  return (
    <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/5 group">
        
      {/* Loading / Buffering State */}
      {isLoading && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-zinc-900">
           <div className="w-12 h-12 border-4 border-zinc-700 border-t-mlh-red rounded-full animate-spin mb-4"></div>
           <p className="text-zinc-400 text-sm font-medium tracking-wide">CONNECTING TO FEED...</p>
        </div>
      )}

      {/* Start Session Overlay - Shows when loaded but user hasn't started interaction yet */}
      {!isLoading && !isSessionActive && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm transition-all duration-500">
              <button 
                onClick={() => setIsSessionActive(true)}
                className="group flex flex-col items-center gap-4 transition-transform hover:scale-105"
              >
                  <div className="w-20 h-20 rounded-full bg-mlh-red flex items-center justify-center shadow-lg shadow-red-500/30 ring-4 ring-white/10 group-hover:ring-white/30 transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white ml-1">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                      </svg>
                  </div>
                  <span className="text-white font-bold text-lg tracking-wide uppercase">Start Stream</span>
              </button>
          </div>
      )}

      {/* Main Iframe */}
      <iframe
        src={config.embedUrl}
        title={config.name}
        width="100%"
        height="100%"
        allow="microphone"
        onLoad={() => setIsLoading(false)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      />

      {/* LIVE Indicator - Only show when session is active */}
      {isSessionActive && (
        <div className="absolute top-6 left-6 z-10 flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-500">
           <div className="bg-mlh-red text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-lg flex items-center gap-2">
               <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
               LIVE
           </div>
        </div>
      )}
      
      {/* Interactive Hint - Only when active */}
      {isSessionActive && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            <div className="bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 shadow-xl">
               <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
               <span className="text-xs font-semibold text-gray-200">Interactive Session Active</span>
            </div>
        </div>
      )}

    </div>
  );
};