
import React from 'react';
import { SummaryCardData } from '../types';
import { Icon } from './Icon';

interface SummaryCardProps {
  data: SummaryCardData;
}

export const SummaryCard: React.FC<SummaryCardProps> = ({ data }) => {
  const getTheme = (category: string) => {
    switch (category) {
      case 'strength':
        return 'bg-emerald-50 border-emerald-200 text-emerald-900 icon-emerald-600 bullet-emerald-500';
      case 'improvement':
        return 'bg-amber-50 border-amber-200 text-amber-900 icon-amber-600 bullet-amber-500';
      case 'value':
        return 'bg-rose-50 border-rose-200 text-rose-900 icon-rose-600 bullet-rose-500';
      default:
        return 'bg-slate-50 border-slate-200 text-slate-900';
    }
  };

  const theme = getTheme(data.category);
  const iconColor = theme.split(' ').find(c => c.startsWith('icon-'))?.replace('icon-', 'text-');
  const bulletColor = theme.split(' ').find(c => c.startsWith('bullet-'))?.replace('bullet-', 'bg-');

  return (
    <div className={`rounded-2xl p-6 border shadow-sm flex flex-col h-full ${theme}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2 bg-white rounded-lg shadow-sm ${iconColor}`}>
          <Icon name={data.icon} size={24} />
        </div>
        <h3 className="font-bold text-lg">{data.title}</h3>
      </div>
      
      <ul className="space-y-2 flex-grow">
        {data.items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-sm md:text-base leading-snug">
            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${bulletColor}`} />
            <span className="opacity-90">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
