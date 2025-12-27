
import React from 'react';
import { JourneyStation } from '../types';
import { Icon } from './Icon';

interface JourneyMapProps {
  stations: JourneyStation[];
}

export const JourneyMap: React.FC<JourneyMapProps> = ({ stations }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 h-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-indigo-100 text-indigo-700 rounded-lg">
          <Icon name="Map" size={20} />
        </div>
        <div>
          <h3 className="font-bold text-lg text-slate-800">מפת מסע</h3>
          <p className="text-xs text-slate-500">מהמשוב ועד להצלחה</p>
        </div>
      </div>

      <div className="relative space-y-8 pr-4">
        <div className="absolute top-2 bottom-2 right-[27px] w-0.5 bg-slate-200" />
        {stations.map((station, index) => (
          <div key={station.id} className="relative flex items-start gap-6 group">
            <div className="z-10 flex-shrink-0 w-8 h-8 rounded-full bg-indigo-50 border-2 border-indigo-200 flex items-center justify-center text-indigo-700 text-sm font-bold shadow-sm group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-colors">
              {index + 1}
            </div>
            <div className="flex-grow bg-slate-50 hover:bg-white rounded-xl p-4 border border-slate-100 hover:shadow-md transition-all duration-300">
              <h4 className="font-bold text-indigo-900 mb-3 text-lg border-b border-indigo-100 pb-2">
                {station.topic}
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex gap-2">
                  <Icon name="MessageCircle" size={16} className="text-slate-400 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-700 block text-xs uppercase tracking-wide">המשוב:</span>
                    <span className="text-slate-600">{station.feedback}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Icon name="Zap" size={16} className="text-amber-500 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-700 block text-xs uppercase tracking-wide">פעולה:</span>
                    <span className="text-slate-800 font-medium bg-amber-50 px-1 rounded">{station.action}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Icon name="Flag" size={16} className="text-emerald-500 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-700 block text-xs uppercase tracking-wide">מדד הצלחה:</span>
                    <span className="text-emerald-700">{station.metric}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
