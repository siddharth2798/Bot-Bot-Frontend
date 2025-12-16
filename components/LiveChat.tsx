import React, { useEffect, useRef, useState } from 'react';

const MOCK_MESSAGES = [
  { user: "Sarah_Dev", color: "text-blue-400", text: "Hyped for this opening ceremony! 🚀" },
  { user: "HackerOne", color: "text-mlh-yellow", text: "Is the repo public yet?" },
  { user: "DesignNinja", color: "text-pink-400", text: "That intro sequence was smooth." },
  { user: "Pythonista", color: "text-green-400", text: "Happy hacking everyone! 🐍" },
  { user: "ReactFan", color: "text-cyan-400", text: "Components looking crisp." },
  { user: "BuilderBob", color: "text-orange-400", text: "Team format or solo?" },
  { user: "ML_Wizard", color: "text-purple-400", text: "Ready to train some models." },
  { user: "CyberPunk", color: "text-red-400", text: "Lets goooooo!!!" },
];

export const LiveChat: React.FC = () => {
  const [messages, setMessages] = useState(MOCK_MESSAGES.slice(0, 4));
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate incoming chat messages
    const interval = setInterval(() => {
      const randomMsg = MOCK_MESSAGES[Math.floor(Math.random() * MOCK_MESSAGES.length)];
      const newMsg = { ...randomMsg, id: Date.now() };
      
      setMessages(prev => {
        const next = [...prev, newMsg];
        if (next.length > 50) next.shift(); // Keep buffer small
        return next;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-full bg-mlh-card border-l border-white/5 w-full lg:w-80 flex-shrink-0">
        <div className="p-4 border-b border-white/5 flex justify-between items-center">
            <h3 className="font-bold text-sm uppercase tracking-wider text-gray-300">Live Chat</h3>
            <button className="text-gray-500 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
            </button>
        </div>
        
        <div className="flex-grow overflow-y-auto p-4 space-y-3" ref={scrollRef}>
            {messages.map((msg, idx) => (
                <div key={idx} className="text-sm animate-fade-in">
                    <span className={`font-bold ${msg.color} mr-2`}>{msg.user}:</span>
                    <span className="text-gray-300">{msg.text}</span>
                </div>
            ))}
        </div>

        <div className="p-4 border-t border-white/5 bg-mlh-dark/50">
            <div className="relative">
                <input 
                    type="text" 
                    placeholder="Send a message..." 
                    className="w-full bg-mlh-hover text-white rounded-lg pl-4 pr-10 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-mlh-yellow border border-transparent"
                />
                <button className="absolute right-2 top-2 text-gray-400 hover:text-mlh-yellow">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                    </svg>
                </button>
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>Slow mode on</span>
                <span className="text-mlh-yellow cursor-pointer hover:underline">Guidelines</span>
            </div>
        </div>
    </div>
  );
};