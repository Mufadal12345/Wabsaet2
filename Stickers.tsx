
import React from 'react';

const PENGUIN_GIF = "https://media.giphy.com/media/JHxzdprX2FItgcpct5/giphy.gif";
const SMILE_GIF = "https://media.giphy.com/media/Y9bboRSDSw0CezsCji/giphy.gif";

const Stickers: React.FC = () => {
  return (
    <section className="space-y-8 bg-white/40 backdrop-blur rounded-[2.5rem] p-8 sm:p-12 border border-white/50 text-center shadow-xl">
      <div className="space-y-3">
        <h2 className="text-3xl sm:text-4xl font-black text-[#c2185b]">ركن اللطافة 💖</h2>
        <p className="text-[#c2185b]/70 font-bold text-lg">رشا.. أنتِ الأجمل دائماً</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-12">
        <div className="relative group">
          <div className="absolute -inset-6 bg-pink-200 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity animate-pulse"></div>
          <img 
            src={PENGUIN_GIF} 
            alt="Pudgy Penguin Love" 
            className="relative w-40 h-40 sm:w-56 sm:h-56 object-contain rounded-full border-8 border-white shadow-2xl transform transition-transform group-hover:scale-110 duration-500"
          />
          <div className="absolute -top-4 -right-4 text-4xl animate-bounce">💋</div>
        </div>

        <div className="hidden sm:block text-5xl text-[#e91e63]/20 font-black">+</div>

        <div className="relative group">
          <div className="absolute -inset-6 bg-rose-200 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity animate-pulse delay-700"></div>
          <img 
            src={SMILE_GIF} 
            alt="Love Smile" 
            className="relative w-40 h-40 sm:w-56 sm:h-56 object-contain rounded-full border-8 border-white shadow-2xl transform transition-transform group-hover:scale-110 duration-500"
          />
          <div className="absolute -bottom-4 -left-4 text-4xl animate-bounce delay-500">✨</div>
        </div>
      </div>
      
      <div className="pt-6">
        <p className="text-lg sm:text-xl italic text-[#c2185b] font-black border-t-2 border-dashed border-pink-200 pt-6 inline-block px-8">
          "وجودكِ في حياتي هو أجمل هدية"
        </p>
      </div>
    </section>
  );
};

export default Stickers;
