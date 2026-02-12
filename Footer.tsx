
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="text-center py-12 space-y-4 border-t border-[#f8bbd9]">
      <div className="flex justify-center gap-4 text-2xl text-[#e91e63]">
        <span className="animate-pulse">❤️</span>
        <span className="animate-pulse delay-150">💖</span>
        <span className="animate-pulse delay-300">💗</span>
      </div>
      <p className="font-bold text-lg">صنعت بكل الحب والشوق ❤️</p>
      <p className="text-sm opacity-60">
        عيد الحب {currentYear} | ذكرى رقمية خالدة
      </p>
      <div className="pt-4 flex justify-center gap-2">
        <div className="w-8 h-8 rounded-full bg-[#e91e63] opacity-20"></div>
        <div className="w-8 h-8 rounded-full bg-[#c2185b] opacity-20"></div>
        <div className="w-8 h-8 rounded-full bg-[#f8bbd9] opacity-20"></div>
      </div>
    </footer>
  );
};

export default Footer;
