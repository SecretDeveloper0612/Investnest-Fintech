
import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const data = [
  { year: '2019', value: 100, benchmark: 100 },
  { year: '2020', value: 118, benchmark: 105 },
  { year: '2021', value: 145, benchmark: 125 },
  { year: '2022', value: 142, benchmark: 118 },
  { year: '2023', value: 168, benchmark: 135 },
  { year: '2024', value: 195, benchmark: 148 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/95 backdrop-blur-xl border border-black/5 p-4 rounded-xl shadow-2xl">
        <p className="text-[10px] font-bold text-[#999999] uppercase tracking-widest mb-2">{label}</p>
        <div className="space-y-1">
          <p className="text-base font-black text-[#1F4E8C]">₹{payload[0].value} Cr</p>
          <p className="text-[10px] font-medium text-[#666666]">Benchmark: ₹{payload[1].value}</p>
        </div>
      </div>
    );
  }
  return null;
};

const PerformanceChart: React.FC = () => {
  return (
    <div className="w-full h-[300px] md:h-[450px] bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border border-black/5 shadow-2xl shadow-blue-900/5">
      <div className="mb-6 md:mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h4 className="text-lg md:text-xl font-black text-[#111111]">Strategic Alpha</h4>
          <p className="text-xs md:text-sm text-[#666666]">Growth vs Market Benchmark</p>
        </div>
        <div className="flex gap-4">
           <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1F4E8C]"></span>
              <span className="text-[9px] font-bold uppercase text-[#999999]">Investnest</span>
           </div>
           <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-200"></span>
              <span className="text-[9px] font-bold uppercase text-[#999999]">Market</span>
           </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="70%">
        <AreaChart data={data} margin={{ top: 10, right: 0, left: -30, bottom: 0 }}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1F4E8C" stopOpacity={0.15}/>
              <stop offset="95%" stopColor="#1F4E8C" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F0F0F0" />
          <XAxis 
            dataKey="year" 
            axisLine={false} 
            tickLine={false} 
            tick={{fontSize: 9, fill: '#999999', fontWeight: 600}}
            dy={15}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{fontSize: 9, fill: '#999999', fontWeight: 600}}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke="#1F4E8C" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorValue)" 
            animationDuration={2000}
          />
          <Area 
            type="monotone" 
            dataKey="benchmark" 
            stroke="#E5E7EB" 
            strokeWidth={2}
            strokeDasharray="5 5"
            fill="transparent"
            animationDuration={2500}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
