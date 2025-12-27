import React from 'react';
import { InsightItem } from '../types';
import { Icon } from './Icon';

interface InsightCardProps {
  item: InsightItem;
}

export const InsightCard: React.FC<InsightCardProps> = ({ item }) => {
  const getColors = (category: string) => {
    switch (category) {
      case 'strength':
        return 'bg-emerald-50 border-emerald-100 text-emerald-900 icon-emerald-600';
      case 'improvement':
        return 'bg-amber-50 border-amber-100 text-amber-900 icon-amber-600';
      case 'value':
        return 'bg-rose-50 border-rose-100 text-rose-900 icon-rose-600';
      default:
        return 'bg-gray-50 border-gray-100 text-gray-900';
    }
  };

  const colors = getColors(item.category);
  // Extract just the color part for the icon class since we can't interpolate nicely in the switch
  const iconColorClass = colors.split(' ').find(c => c.startsWith('icon-'))?.replace('icon-', 'text-') || 'text-gray-600';

  return (
    <div className={`p-5 rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 ${colors}`}>
      <div className="flex items-start gap-4">
        <div className={`p-2 rounded-lg bg-white bg-opacity-60 shadow-sm ${iconColorClass}`}>
          <Icon name={item.icon} size={24} />
        </div>
        <div>
          <h3 className="font-bold text-lg mb-1">{item.title}</h3>
          <p className="text-sm opacity-80 leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  );
};