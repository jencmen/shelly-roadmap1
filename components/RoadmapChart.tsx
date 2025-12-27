
import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  Legend
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
            <h3 className="font-bold text-lg text-slate-800">מפת חוזקות מול אתגרים</h3>
            <p className="text-xs text-slate-500">תמונת מצב רב-ממדית</p>
         </div>
      </div>
      
      <div className="flex-grow min-h-[350px] relative mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={CLUSTER_DATA}>
            <PolarGrid stroke="#e2e8f0" />
            <PolarAngleAxis 
              dataKey="subject" 
              tick={{ fill: '#475569', fontSize: 12, fontWeight: 600 }} 
            />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
            
            <Radar
              name="חוזקות"
              dataKey="strength"
              stroke="#6366f1"
              strokeWidth={3}
              fill="#6366f1"
              fillOpacity={0.25}
            />
            
            <Radar
              name="אתגרים/פערים"
              dataKey="challenge"
              stroke="#f59e0b"
              strokeWidth={3}
              fill="#f59e0b"
              fillOpacity={0.25}
            />
            
            <Tooltip 
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              formatter={(value, name) => [value, name === 'strength' ? 'חוזקה' : 'רמת אתגר']}
            />
            <Legend verticalAlign="bottom" height={36}/>
          </RadarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 pt-4 border-t border-slate-100 flex justify-center gap-6 text-[10px] md:text-xs text-slate-400 font-medium">
         <div className="flex items-center gap-1">
           <span className="w-2 h-2 rounded-full bg-blue-500 opacity-60"></span> מוח
         </div>
         <div className="flex items-center gap-1">
           <span className="w-2 h-2 rounded-full bg-rose-500 opacity-60"></span> לב
         </div>
         <div className="flex items-center gap-1">
           <span className="w-2 h-2 rounded-full bg-emerald-500 opacity-60"></span> רגליים
         </div>
      </div>
    </div>
  );
};