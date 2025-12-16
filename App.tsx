import React from 'react';
import { Header } from './components/Header';
import { PersonaContainer } from './components/PersonaContainer';
import { PersonaConfig } from './types';

const ANAM_PERSONA_CONFIG: PersonaConfig = {
  id: 'VW0mAiW-15AfcWaxIWdW9',
  name: 'Anam Assistant',
  embedUrl: 'https://lab.anam.ai/frame/VW0mAiW-15AfcWaxIWdW9',
  width: 720,
  height: 480
};

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-mlh-dark text-white">
      <Header />

      <div className="flex flex-grow overflow-hidden">
        
        {/* Main Content Area - Centered and Full Width */}
        <main className="flex-grow overflow-y-auto custom-scrollbar flex flex-col items-center">
          <div className="w-full max-w-7xl">
            
            {/* Video Section */}
            <div className="bg-black w-full p-0 lg:p-6 lg:pb-2 rounded-b-xl lg:rounded-xl overflow-hidden">
               <PersonaContainer config={ANAM_PERSONA_CONFIG} />
            </div>

            {/* Stream Info Section */}
            <div className="p-6 w-full">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                    <div className="space-y-2">
                        <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                            Open Source Hackfest: Official Opening Ceremony 🚀
                        </h1>
                        <div className="flex flex-wrap gap-2 text-sm text-gray-400">
                            <span className="text-mlh-yellow font-medium">Major League Hacking</span>
                            <span>•</span>
                            <span>Hackathon</span>
                            <span>•</span>
                            <span className="bg-mlh-hover px-2 rounded text-xs py-0.5 border border-white/10">English</span>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-6 py-2 bg-mlh-hover hover:bg-zinc-800 rounded-full font-medium transition-colors border border-white/10">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                           </svg>
                           Share Stream
                        </button>
                    </div>
                </div>

                {/* Streamer/Host Card */}
                <div className="bg-mlh-card rounded-xl p-6 border border-white/5 flex gap-4 items-start">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-mlh-blue to-mlh-red p-[2px] flex-shrink-0">
                        <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                             <img src="https://avatars.githubusercontent.com/u/7462854?s=200&v=4" alt="MLH" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="flex-grow">
                        <h3 className="text-lg font-bold">Hosted by Major League Hacking</h3>
                        <p className="text-gray-400 text-sm mt-1 max-w-3xl leading-relaxed">
                            We run the Global Hacker Community and it's our mission to empower hackers, just like you! Each year, we power over 300 weekend-long invention competitions that inspire innovation, cultivate communities and teach computer science skills to more than 1.2million developers around the world.</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs font-semibold text-zinc-300 hover:bg-zinc-700 cursor-pointer transition-colors">#Hackathon</span>
                            <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs font-semibold text-zinc-300 hover:bg-zinc-700 cursor-pointer transition-colors">#Building</span>
                            <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs font-semibold text-zinc-300 hover:bg-zinc-700 cursor-pointer transition-colors">#LearnToCode</span>
                            <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs font-semibold text-zinc-300 hover:bg-zinc-700 cursor-pointer transition-colors">#OpeningCeremony</span>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;