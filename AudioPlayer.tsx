
import React, { useState, useRef } from 'react';

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const togglePlay = () => {
    if (audioRef.current && audioSrc) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Audio play blocked", e));
      }
      setIsPlaying(!isPlaying);
    } else if (!audioSrc) {
      fileInputRef.current?.click();
    }
  };

  const handleMusicUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAudioSrc(reader.result as string);
        setIsPlaying(false);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-8 sm:left-8 z-[100] flex flex-col items-start gap-2">
      <div className="flex items-center gap-2">
        <button
          onClick={togglePlay}
          className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 transform hover:scale-110 active:scale-90 ${
            isPlaying ? 'bg-[#e91e63] text-white animate-pulse' : 'bg-white text-[#e91e63]'
          } border-4 border-white`}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 sm:w-8 sm:h-8">
              <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75.75v12a.75.75 0 01-1.5 0v-12a.75.75 0 01.75-.75zm10.5 0a.75.75 0 01.75.75v12a.75.75 0 01-1.5 0v-12a.75.75 0 01.75-.75z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 sm:w-10 sm:h-10 ml-1">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
            </svg>
          )}
        </button>

        <button 
          onClick={() => fileInputRef.current?.click()}
          className="bg-white/95 backdrop-blur p-2.5 rounded-full shadow-lg border border-[#f8bbd9] text-[#e91e63] hover:bg-[#e91e63] hover:text-white transition-all active:scale-90"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
          </svg>
        </button>
      </div>

      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleMusicUpload} 
        className="hidden" 
        accept="audio/*" 
      />

      {audioSrc && (
        <audio 
          ref={audioRef} 
          src={audioSrc} 
          loop 
          onEnded={() => setIsPlaying(false)}
        />
      )}

      {audioSrc ? (
        <div className={`text-[10px] sm:text-xs font-black bg-white/95 backdrop-blur px-3 py-1.5 rounded-full shadow-lg border border-[#f8bbd9] text-[#e91e63] transition-all duration-500 whitespace-nowrap ${isPlaying ? 'opacity-100' : 'opacity-80'}`}>
          {isPlaying ? '🎶 موسيقى حبنا تعمل...' : 'جاهزة للتشغيل يا رشا ✨'}
        </div>
      ) : (
        <div className="text-[9px] sm:text-[10px] font-black bg-[#e91e63] text-white px-3 py-1 rounded-full animate-bounce shadow-lg">
          ارفع الموسيقى هنا 🎵
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;
