
import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import { CLUSTER_DATA } from '../constants';
import { Icon } from './Icon';

export const RoadmapChart: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-2">
         <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
            <Icon name="Activity" size={20} />
          </div>
         <div>
            <h3 className="font-bold text-lg text-slate-800">מפת החוזקות</h3>
            <p className="text-xs text-slate-500">המשולש: מוח, לב ורגליים</p>
         </div>
      </div>
      
      <div className="flex-grow min-h-[300px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={CLUSTER_DATA}>
            <PolarGrid stroke="#e2e8f0" />
            <PolarAngleAxis 
              dataKey="subject" 
              tick={{ fill: '#475569', fontSize: 13, fontWeight: 500 }} 
            />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
            <Radar
              name="עוצמה"
              dataKey="A"
              stroke="#6366f1"
              strokeWidth={3}
              fill="#6366f1"
              fillOpacity={0.2}
            />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
        
        <div className="absolute bottom-0 right-0 left-0 flex justify-center gap-6 text-xs text-slate-500">
           <div className="flex items-center gap-1">
             <span className="w-2 h-2 rounded-full bg-blue-500"></span> מוח
           </div>
           <div className="flex items-center gap-1">
             <span className="w-2 h-2 rounded-full bg-rose-500"></span> לב
           </div>
           <div className="flex items-center gap-1">
             <span className="w-2 h-2 rounded-full bg-emerald-500"></span> רגליים
           </div>
        </div>
      </div>
    </div>
  );
};
