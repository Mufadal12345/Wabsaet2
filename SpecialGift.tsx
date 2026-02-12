
import React, { useState } from 'react';

interface SpecialGiftProps {
  name: string;
}

const SpecialGift: React.FC<SpecialGiftProps> = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-12 sm:py-20 text-center px-4 overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-black mb-8 sm:mb-12 text-[#c2185b] tracking-tight">سر السعادة 🎁</h2>
      
      <div className="relative flex justify-center items-center h-[350px] sm:h-[450px]">
        {/* The Big Heart Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative z-10 text-[7rem] sm:text-[10rem] transition-all duration-1000 transform hover:scale-110 active:scale-90 ${isOpen ? 'scale-0' : 'scale-100'}`}
        >
          <div className="animate-pulse drop-shadow-2xl">💝</div>
          <div className="absolute inset-0 bg-[#ff1a75] blur-[50px] sm:blur-[80px] opacity-20 animate-pulse"></div>
          <p className="text-sm sm:text-lg font-black absolute -bottom-6 sm:-bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-[#e91e63] animate-bounce tracking-widest uppercase">
            اضغطي هنا يا {name}
          </p>
        </button>

        {/* The Revealed Message */}
        <div 
          className={`absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-10 bg-gradient-to-br from-white via-pink-50 to-white rounded-[2.5rem] sm:rounded-[3.5rem] border-[4px] sm:border-[6px] border-[#e91e63] shadow-2xl transition-all duration-1000 transform ${isOpen ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 rotate-45'}`}
        >
          <div className="text-4xl sm:text-6xl mb-4 sm:mb-6">🔱</div>
          <h3 className="text-2xl sm:text-4xl font-black text-[#c2185b] mb-4 sm:mb-6">{name}.. نبض الحياة</h3>
          <div className="max-w-lg space-y-4">
            <p className="text-lg sm:text-2xl leading-relaxed text-gray-800 font-bold italic">
              "في كل ثانية تمر، أدرك كم أنا محظوظ بكِ. أنتِ التي جعلتِ للصداقة طعماً، وللحب معنىً."
            </p>
            <div className="text-[#e91e63] text-2xl sm:text-4xl font-black border-y-4 border-[#e91e63]/20 py-4 my-4">
              ما زلتِ صديقتي وحبيبتي
            </div>
            <p className="text-xs sm:text-sm opacity-60 font-bold uppercase tracking-tighter">وإلى الأبد سنبقى معاً</p>
          </div>
          
          <button 
            onClick={() => setIsOpen(false)}
            className="mt-6 sm:mt-10 px-8 sm:px-10 py-3 sm:py-4 bg-[#e91e63] text-white rounded-full font-black text-base sm:text-lg hover:bg-[#c2185b] shadow-xl transition-all transform hover:-translate-y-1 active:translate-y-0"
          >
            أحبك يا رشا ❤️
          </button>
          
          {/* Icons positioned relatively to the container size */}
          <div className="absolute top-4 sm:top-10 left-4 sm:left-10 text-2xl sm:text-4xl animate-spin-slow">✨</div>
          <div className="absolute bottom-4 sm:bottom-10 right-4 sm:right-10 text-2xl sm:text-4xl animate-bounce">🔥</div>
          <div className="absolute top-4 sm:top-10 right-4 sm:right-10 text-2xl sm:text-4xl animate-pulse">🎀</div>
          <div className="absolute bottom-4 sm:bottom-10 left-4 sm:left-10 text-2xl sm:text-4xl animate-ping opacity-20">💗</div>
        </div>
      </div>
    </section>
  );
};

export default SpecialGift;
