
import React, { useState, useRef } from 'react';

const PhotoAlbum: React.FC = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      (Array.from(files) as File[]).forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPhotos(prev => [...prev, reader.result as string]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removePhoto = (index: number) => {
    setPhotos(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white/40 backdrop-blur-xl rounded-[2rem] sm:rounded-[3rem] p-5 sm:p-8 border border-white/50 shadow-2xl space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h3 className="text-xl sm:text-2xl font-black text-[#c2185b]">ألبوم ذكرياتنا 📸</h3>
        <button 
          onClick={() => fileInputRef.current?.click()}
          className="w-full sm:w-auto bg-[#e91e63] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#c2185b] transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95"
        >
          <span>إضافة صور</span>
          <span className="text-xl">+</span>
        </button>
      </div>

      <input 
        type="file" 
        multiple 
        ref={fileInputRef} 
        onChange={handleUpload} 
        className="hidden" 
        accept="image/*" 
      />

      {photos.length === 0 ? (
        <div 
          className="h-48 sm:h-72 border-4 border-dashed border-[#f8bbd9] rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center text-[#c2185b]/50 group cursor-pointer hover:bg-white/30 transition-all p-4 text-center" 
          onClick={() => fileInputRef.current?.click()}
        >
          <span className="text-5xl sm:text-6xl mb-2 group-hover:scale-110 transition-transform">🖼️</span>
          <p className="font-bold text-sm sm:text-base">اضغطي هنا لإضافة أجمل صور رشا</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
          {photos.map((photo, idx) => (
            <div key={idx} className="relative group aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
              <img src={photo} alt="Memory" className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" />
              <button 
                onClick={() => removePhoto(idx)}
                className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-red-500/80 text-white w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity backdrop-blur-sm"
              >
                ×
              </button>
              <div className="absolute inset-0 bg-[#e91e63]/10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"></div>
            </div>
          ))}
        </div>
      )}
      <p className="text-center text-xs sm:text-sm italic text-[#c2185b]/60 px-4">"كل صورة هي لحظة حب لا تتكرر في حياة رشا"</p>
    </div>
  );
};

export default PhotoAlbum;
