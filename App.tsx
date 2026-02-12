
import React, { useState } from 'react';
import Header from './components/Header';
import LoveLetter from './components/LoveLetter';
import PhotoAlbum from './components/PhotoAlbum';
import FlowerGallery from './components/FlowerGallery';
import InteractiveStickers from './components/InteractiveStickers';
import SpecialGift from './components/SpecialGift';
import Footer from './components/Footer';
import BackgroundHearts from './components/BackgroundHearts';
import AudioPlayer from './components/AudioPlayer';

const App: React.FC = () => {
  const [userName, setUserName] = useState<string>('رشا');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`transition-colors duration-500 min-h-screen ${isDarkMode ? 'bg-[#2a0a15] text-pink-100' : 'bg-gradient-to-b from-white to-[#fdf2f8]'}`}>
      <BackgroundHearts />
      <AudioPlayer />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 space-y-12 sm:space-y-20">
        <div className="flex justify-between items-center gap-4">
          <div className="text-[#e91e63] font-bold text-lg sm:text-xl drop-shadow-sm truncate">رشا ❤️ حبيبتي</div>
          <button 
            onClick={toggleTheme}
            className="p-2.5 sm:p-3 rounded-full bg-white/60 backdrop-blur shadow-lg border border-[#e91e63] hover:bg-[#e91e63] hover:text-white transition-all transform hover:rotate-12 active:scale-90"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>

        <Header name="رشا" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-8 sm:space-y-12 order-2 lg:order-1">
            <LoveLetter userName={userName} setUserName={setUserName} />
            <InteractiveStickers />
          </div>
          <div className="lg:col-span-7 space-y-8 sm:space-y-12 order-1 lg:order-2">
            <PhotoAlbum />
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#e91e63]/20 to-transparent"></div>

        <FlowerGallery />

        <SpecialGift name="رشا" />

        <Footer />
      </div>
    </div>
  );
};

export default App;
