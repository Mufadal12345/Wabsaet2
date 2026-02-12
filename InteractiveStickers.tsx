
import React, { useState } from 'react';

interface Sticker {
  id: string;
  url: string;
  label: string;
  type: 'cute' | 'fast';
}

const STICKER_LIST: Sticker[] = [
  { id: 'penguin', url: "https://media.giphy.com/media/JHxzdprX2FItgcpct5/giphy.gif", label: "قبلات رشا", type: 'cute' },
  { id: 'bears', url: "https://media.giphy.com/media/SYo1DFS8NLhhqzzjMU/giphy.gif", label: "دببة الحب", type: 'cute' },
  { id: 'cuddle', url: "https://media.giphy.com/media/FvPr1G9virFmffGWYH/giphy.gif", label: "حضن دافئ", type: 'cute' },
  { id: 'smile', url: "https://media.giphy.com/media/Y9bboRSDSw0CezsCji/giphy.gif", label: "ابتسامة قلب", type: 'cute' },
  { id: 'forever', url: "https://media.giphy.com/media/mnR01wfMUTo9hGXUvl/giphy.gif", label: "حب أبدي", type: 'cute' },
  { id: 'rocket', url: "https://media.giphy.com/media/kgkhv2DP5SFGf90j0m/giphy.gif", label: "صاروخ الحب", type: 'fast' },
];

const InteractiveStickers: React.FC = () => {
  const [activeElements, setActiveElements] = useState<{ x: number; y: number; id: number; url: string; type: string }[]>([]);

  const triggerSticker = (sticker: Sticker) => {
    const id = Date.now() + Math.random();
    const x = Math.random() * 70 + 15; // Range from 15% to 85%
    const y = 60 + Math.random() * 20; // Start near the bottom of the section
    
    setActiveElements(prev => [...prev, { x, y, id, url: sticker.url, type: sticker.type }]);
    
    setTimeout(() => {
      setActiveElements(prev => prev.filter(item => item.id !== id));
    }, 3500);
  };

  return (
    <section className="bg-white/40 backdrop-blur-xl rounded-[2.5rem] p-6 sm:p-10 border border-white/60 shadow-2xl relative overflow-hidden min-h-[450px]">
      <div className="text-center mb-8 relative z-10">
        <h2 className="text-2xl sm:text-4xl font-black text-[#c2185b] drop-shadow-sm">لوحة مشاعر رشا ✨</h2>
        <p className="text-sm sm:text-lg text-[#e91e63]/70 font-bold italic mt-2">انقري على الملصقات لتطير في عالمكِ</p>
      </div>

      {/* Stickers Selection Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-6 relative z-10">
        {STICKER_LIST.map((sticker) => (
          <button
            key={sticker.id}
            onClick={() => triggerSticker(sticker)}
            className="group flex flex-col items-center gap-2 transition-all duration-300 transform hover:scale-110 active:scale-90"
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/80 rounded-2xl sm:rounded-[2rem] shadow-lg border-2 border-pink-100 flex items-center justify-center overflow-hidden group-hover:border-[#e91e63] group-hover:shadow-[#e91e63]/20">
              <img 
                src={sticker.url} 
                alt={sticker.label} 
                className="w-full h-full object-cover p-1"
              />
              <div className="absolute inset-0 bg-[#e91e63]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <span className="text-[10px] sm:text-xs font-black text-[#c2185b] bg-white/60 px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {sticker.label}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <div className="px-6 py-2 rounded-full bg-[#e91e63]/10 border border-[#e91e63]/20 text-[#e91e63] text-xs sm:text-sm font-black animate-pulse">
           جربي الضغط على أكثر من واحد معاً! 💝
        </div>
      </div>

      {/* Floating Elements Layer */}
      {activeElements.map(el => (
        <div 
          key={el.id}
          className={`absolute pointer-events-none z-20 ${el.type === 'fast' ? 'animate-fly-rocket' : 'animate-float-sticker'}`}
          style={{ 
            left: `${el.x}%`, 
            top: `${el.y}%`,
          }}
        >
          <img 
            src={el.url} 
            alt="Flying Emotion" 
            className="w-24 h-24 sm:w-40 sm:h-40 drop-shadow-2xl"
          />
        </div>
      ))}

      <style>{`
        @keyframes float-sticker {
          0% { 
            transform: translateY(0) scale(0.6) rotate(0deg); 
            opacity: 0; 
          }
          15% { opacity: 1; transform: translateY(-20px) scale(1) rotate(5deg); }
          100% { 
            transform: translateY(-400px) scale(1.4) rotate(-15deg); 
            opacity: 0; 
          }
        }
        @keyframes fly-rocket {
          0% { 
            transform: translate(0, 0) scale(0.5) rotate(45deg); 
            opacity: 0; 
          }
          10% { opacity: 1; transform: translate(10px, -20px) scale(1) rotate(45deg); }
          100% { 
            transform: translate(100px, -600px) scale(2) rotate(45deg); 
            opacity: 0; 
          }
        }
        .animate-float-sticker {
          animation: float-sticker 3.5s forwards cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .animate-fly-rocket {
          animation: fly-rocket 2.5s forwards ease-in;
        }
      `}</style>
    </section>
  );
};

export default InteractiveStickers;
