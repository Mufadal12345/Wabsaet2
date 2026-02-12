
import React, { useState, useRef } from 'react';

const PhotoFrame: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative group cursor-pointer" onClick={() => fileInputRef.current?.click()}>
        <div className="w-64 h-64 md:w-80 md:h-80 bg-pink-100 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group-hover:scale-105 transition-transform duration-500 relative">
          {image ? (
            <img src={image} alt="Valentine" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-[#e91e63] p-8 text-center bg-gradient-to-tr from-pink-50 to-pink-200">
              <span className="text-5xl mb-4">📸</span>
              <p className="font-bold">اضغط لإضافة صورتنا المفضلة</p>
            </div>
          )}
          
          {/* Heart Overlay Decorative */}
          <div className="absolute inset-0 border-[16px] border-[#e91e63]/20 pointer-events-none rounded-[2.5rem]"></div>
          
          {/* Animated Roses at corner */}
          <div className="absolute -bottom-4 -right-4 text-4xl animate-pulse">🌹</div>
          <div className="absolute -top-4 -left-4 text-4xl animate-pulse delay-700">🌸</div>
        </div>
        
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleImageChange} 
          className="hidden" 
          accept="image/*" 
        />
      </div>
      <p className="text-xs text-[#c2185b]/60 italic font-medium">ذكرى لا تُنسى في إطار من الحب</p>
    </div>
  );
};

export default PhotoFrame;
