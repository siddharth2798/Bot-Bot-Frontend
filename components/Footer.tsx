import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 mt-auto border-t border-white/5 bg-slate-950/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-slate-500 text-xs">
          Powered by <a href="https://anam.ai" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:text-brand-400 transition-colors font-semibold">Anam AI</a>. 
          Experience real-time digital human interaction.
        </p>
      </div>
    </footer>
  );
};