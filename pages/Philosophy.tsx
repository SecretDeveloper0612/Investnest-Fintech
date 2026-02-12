
import React from 'react';
import { motion } from 'framer-motion';
import { PILLARS } from '../constants';
import { Activity, Shield, Zap, Search } from 'lucide-react';

const Philosophy: React.FC = () => {
  return (
    <div className="w-full bg-white selection:bg-[#1F4E8C] selection:text-white overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[60vh] md:min-h-[80vh] flex flex-col justify-center px-6 md:px-8 pt-32 md:pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.5em] text-[#1F4E8C] mb-6 md:mb-8">The Edge</span>
            <h1 className="text-4xl md:text-[120px] font-black tracking-tighter leading-[0.9] md:leading-[0.85] mb-8 md:mb-12">
              Logic First. <br /><span className="text-gradient">Alpha Next.</span>
            </h1>
            <p className="text-lg md:text-2xl text-[#666666] leading-relaxed font-light max-w-2xl">
              Investment success is not serendipity—it is the direct outcome of disciplined quantitative modeling and extreme macro diligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. PILLARS GRID */}
      <section className="py-24 md:py-40 px-6 md:px-8 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {PILLARS.map((pillar, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5 }}
              className="bg-white p-10 md:p-20 rounded-[2.5rem] md:rounded-[4rem] border border-black/5 shadow-sm group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#F7F9FC] group-hover:bg-[#1F4E8C] group-hover:text-white rounded-xl md:rounded-2xl flex items-center justify-center text-[#1F4E8C] mb-8 md:mb-12 transition-all">
                {pillar.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-6 md:mb-8 tracking-tighter">{pillar.title}</h3>
              <p className="text-base md:text-xl text-[#666666] font-light leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. QUANT EDGE SECTION */}
      <section className="py-24 md:py-40 bg-[#111111] text-white relative overflow-hidden px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
             <div>
                <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#2BB0E3] mb-8 md:mb-12">Methodology</h2>
                <h3 className="text-4xl md:text-8xl font-black tracking-tighter mb-8 md:mb-12 leading-none">Quantitative <br /><span className="text-white/10">Architecture.</span></h3>
                <p className="text-lg md:text-xl text-white/40 font-light leading-relaxed mb-10 md:mb-16">
                   Our "Double-Filter" protocol eliminates cognitive bias. We validate institutional fundamental research through an advanced quantitative overlay.
                </p>
                <div className="space-y-4 md:space-y-6">
                   {[
                     { label: 'Alpha Discovery', icon: <Search className="w-4 h-4" /> },
                     { label: 'Risk Attribution', icon: <Shield className="w-4 h-4" /> },
                     { label: 'Scenario Modeling', icon: <Activity className="w-4 h-4" /> },
                     { label: 'Tail-Risk Hedging', icon: <Zap className="w-4 h-4" /> }
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-4 md:gap-6 p-5 md:p-6 border border-white/5 bg-white/5 rounded-2xl md:rounded-3xl group hover:border-[#2BB0E3] transition-all">
                        <div className="w-10 h-10 bg-[#2BB0E3]/10 text-[#2BB0E3] rounded-xl flex items-center justify-center">{item.icon}</div>
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/80">{item.label}</span>
                     </div>
                   ))}
                </div>
             </div>
             <div className="relative w-full overflow-hidden">
                <div className="absolute -inset-10 md:-inset-20 bg-[#1F4E8C]/20 blur-[100px] md:blur-[150px] rounded-full" />
                <div className="relative z-10 p-6 md:p-12 bg-white/5 border border-white/10 rounded-[2rem] md:rounded-[4rem] backdrop-blur-3xl overflow-x-auto">
                   <pre className="text-[10px] md:text-[11px] leading-relaxed font-mono text-[#2BB0E3]/60">
                     {`// OPTIMIZATION_MODEL_v4.2
fn allocate_capital(risk: f32) {
  let alpha = 0.084;
  let corr = 0.15;
  
  for signal in signals {
    if signal.v > 0.95 {
      let score = signal.mom * signal.vol_inv;
      execute(score, risk);
    }
  }
}
// ACTIVE: 24/7`}
                   </pre>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. PERFORMANCE CULTURE */}
      <section className="py-24 md:py-40 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#1F4E8C] mb-12 md:mb-16">Alignment</h2>
           <h3 className="text-3xl md:text-7xl font-black tracking-tighter mb-8 md:mb-12">Interests in <span className="text-gradient">Sync.</span></h3>
           <p className="text-lg md:text-2xl text-[#666666] font-light leading-relaxed mb-12 md:mb-16">
              Our fee structures are performance-weighted. We only succeed when our clients' wealth targets are exceeded.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-10 md:gap-20 border-t border-black/5 pt-12 md:pt-16">
              <div>
                 <div className="text-3xl md:text-4xl font-black mb-1">0%</div>
                 <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[#1F4E8C]">Conflict Interest</div>
              </div>
              <div>
                 <div className="text-3xl md:text-4xl font-black mb-1">100%</div>
                 <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[#1F4E8C]">Transparency</div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Philosophy;
