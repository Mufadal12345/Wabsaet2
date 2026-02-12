
import React from 'react';

const FLOWER_IMAGES = [
  { url: 'https://images.unsplash.com/photo-1496062031456-07b8f162a322?w=500&h=500&fit=crop', title: 'حب أبدي' },
  { url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&h=500&fit=crop', title: 'رقة المشاعر' },
  { url: 'https://images.unsplash.com/photo-1548611635-b6e78bb14ab3?w=500&h=500&fit=crop', title: 'وفاء مطلق' },
  { url: 'https://images.unsplash.com/photo-1559734840-f9509ee5677f?w=500&h=500&fit=crop', title: 'جمال الروح' },
  { url: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=500&h=500&fit=crop', title: 'براءة الحب' },
  { url: 'https://images.unsplash.com/photo-1494333102047-3b273a14922e?w=500&h=500&fit=crop', title: 'سحر اللقاء' },
];

const FlowerGallery: React.FC = () => {
  return (
    <section className="space-y-6 sm:space-y-8 px-2">
      <div className="text-center space-y-2">
        <h2 className="text-2xl sm:text-3xl font-black text-[#c2185b]">ورود من أجلك 💐</h2>
        <p className="text-sm sm:text-base text-[#c2185b]/70 italic">كل زهرة تحكي قصة شوق لا تنتهي لرشا</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {FLOWER_IMAGES.map((img, idx) => (
          <div key={idx} className="group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <img 
              src={img.url} 
              alt={img.title} 
              className="w-full h-40 sm:h-56 md:h-64 object-cover transform transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#c2185b]/90 via-[#c2185b]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center p-3 sm:p-4">
              <span className="text-white text-xs sm:text-base font-black tracking-wide text-center">{img.title}</span>
            </div>
            <div className="absolute top-2 right-2 text-white/50 group-hover:animate-ping text-lg">✨</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlowerGallery;
