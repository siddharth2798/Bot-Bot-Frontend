import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-mlh-card border-b border-white/5 h-16 flex items-center px-4 justify-between">
      <div className="flex items-center gap-6">
        {/* MLH Logo / Branding */}
        <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-mlh-red rounded-lg flex items-center justify-center transform -rotate-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
            </div>
            <div className="flex flex-col">
                <span className="font-bold text-lg leading-none tracking-tight">MLH <span className="text-mlh-yellow">TV</span></span>
                <span className="text-[10px] text-gray-400 font-medium tracking-wider uppercase">Official Broadcast</span>
            </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
            <a href="#" className="text-white">Live</a>
            <a href="https://mlh.link/OSH" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Schedule</a>
            <a href="https://discord.mlh.io" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Discord</a>
            <a href="https://mlh.link/OSHDevpost" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Devpost</a>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden sm:flex bg-mlh-hover rounded-full px-3 py-1.5 items-center gap-2 border border-white/5">
             <div className="w-2 h-2 rounded-full bg-mlh-red animate-pulse"></div>
             <span className="text-xs font-bold text-gray-200">LIVE NOW</span>
        </div>
        <button className="bg-mlh-yellow text-mlh-dark font-bold text-sm px-4 py-2 rounded-full hover:bg-yellow-400 transition-colors">
            Log In
        </button>
      </div>
    </header>
  );
};