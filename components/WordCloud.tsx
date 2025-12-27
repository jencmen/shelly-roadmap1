
import React from 'react';
import { EmotionalTag } from '../types';
import { Icon } from './Icon';

interface WordCloudProps {
  tags: EmotionalTag[];
}

export const WordCloud: React.FC<WordCloudProps> = ({ tags }) => {
  return (
    <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-8 border border-rose-100 text-center relative overflow-hidden">
      <div className="absolute top-0 right-0 text-rose-200 opacity-20 transform translate-x-1/4 -translate-y-1/4">
        <Icon name="Heart" size={200} />
      </div>

      <h3 className="text-xl font-bold text-rose-900 mb-6 relative z-10 flex justify-center items-center gap-2">
         <Icon name="Quote" size={20} className="text-rose-400" />
         איך החברות רואות אותי
         <Icon name="Quote" size={20} className="text-rose-400 transform rotate-180" />
      </h3>
      
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto relative z-10">
        {tags.map((tag, i) => {
          const sizeClass = tag.weight === 3 ? 'text-xl px-5 py-3' : tag.weight === 2 ? 'text-lg px-4 py-2' : 'text-base px-3 py-1';
          const colorClass = tag.weight === 3 ? 'bg-white text-rose-700 shadow-md border-rose-100' : 'bg-white/60 text-rose-800 border-rose-50';
          return (
            <span 
              key={i} 
              className={`rounded-full border transition-transform hover:scale-105 cursor-default ${sizeClass} ${colorClass} font-medium`}
            >
              {tag.text}
            </span>
          );
        })}
      </div>
    </div>
  );
};
