
import React, { useState } from 'react';

interface LoveLetterProps {
  userName: string;
  setUserName: (name: string) => void;
}

const LoveLetter: React.FC<LoveLetterProps> = ({ userName, setUserName }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [customText, setCustomText] = useState(
    `حبيبتي رشا.. أنتِ لستِ فقط شريكة أيامي، بل أنتِ صديقتي المفضلة التي أبوح لها بكل أسراري. أحب كيف أن علاقتنا بدأت بصدق الصداقة ونمت لتصبح أعمق حب عرفه قلبي. شكراً لأنكِ ما زلتِ هنا، تملئين عالمي بالدفء والجمال. كل عام وأنتِ حبيبتي وصديقتي الأبدية.`
  );

  return (
    <div className="bg-white/70 backdrop-blur-md border border-[#f8bbd9] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-pink-100 rounded-bl-full -z-10 opacity-50"></div>
      
      <div className="space-y-4 sm:space-y-6">
        <div className="flex flex-col gap-1 sm:gap-2">
          <label className="text-[10px] sm:text-xs font-bold text-[#e91e63] uppercase tracking-wider">إلى الملكة:</label>
          <div className="text-2xl sm:text-3xl font-black text-[#c2185b] border-b-2 border-[#f8bbd9] pb-1 truncate">
            {userName} ❤️
          </div>
        </div>

        <div className={`overflow-hidden transition-all duration-700 ${isExpanded ? 'max-h-[500px]' : 'max-h-24 sm:max-h-28'}`}>
          <textarea
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            className="w-full bg-transparent border-none focus:ring-0 text-lg sm:text-xl leading-relaxed italic text-gray-800 resize-none h-48 sm:h-60 font-serif overflow-auto"
            placeholder="اكتب هنا رسالتك لرشا..."
          />
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-pink-50 text-[#e91e63] px-5 py-2 rounded-full font-bold hover:bg-[#e91e63] hover:text-white transition-all flex items-center gap-2 text-xs sm:text-sm mx-auto shadow-sm active:scale-95"
        >
          {isExpanded ? 'إغلاق الظرف' : 'افتحي الرسالة ✉️'}
        </button>
      </div>

      <div className="mt-6 sm:mt-8 pt-4 border-t border-dashed border-[#f8bbd9] text-xs sm:text-sm text-[#c2185b]/70 flex items-center justify-between font-bold italic">
        <span>مع كل حبي، للأبد</span>
        <div className="flex gap-1">💖 رشا 💖</div>
      </div>
    </div>
  );
};

export default LoveLetter;
