
import React from 'react';

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <header className="text-center space-y-4 sm:space-y-6 py-6 sm:py-10 animate-fade-in px-2">
      <div className="relative inline-block group">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black bg-gradient-to-r from-[#e91e63] via-[#ff4d94] to-[#c2185b] bg-clip-text text-transparent drop-shadow-xl transition-transform duration-500 group-hover:scale-105">
          {name} ❤️
        </h1>
        <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 text-3xl sm:text-5xl animate-bounce">💖</div>
        <div className="absolute -bottom-4 -left-6 sm:-bottom-5 sm:-left-10 text-2xl sm:text-4xl animate-pulse delay-300">🌸</div>
      </div>
      <div className="space-y-2 max-w-2xl mx-auto">
        <p className="text-xl sm:text-2xl md:text-3xl text-[#c2185b] font-bold italic opacity-95 leading-tight">
          ما زلتِ الصديقة الوفية.. والحبيبة الغالية
        </p>
        <p className="text-base sm:text-lg text-[#e91e63]/70 font-medium tracking-wide">كل عيد حب وأنتِ تسكنين نبضي</p>
      </div>
      <div className="flex justify-center gap-3 mt-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#e91e63] animate-ping delay-${i * 200}`}></div>
        ))}
      </div>
    </header>
  );
};

export default Header;
