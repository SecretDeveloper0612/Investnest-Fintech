
import React from 'react';
import { motion } from 'framer-motion';
import { Target, ShieldCheck, Compass, Globe, Users, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="w-full bg-white selection:bg-[#1F4E8C] selection:text-white overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[70vh] md:min-h-[90vh] flex flex-col justify-center px-6 md:px-8 pt-32 md:pt-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.5em] text-[#1F4E8C] mb-6 md:mb-8">The Institution</span>
            <h1 className="text-4xl md:text-[100px] font-black tracking-tighter leading-[0.9] md:leading-[0.85] mb-8 md:mb-12">
              Built on <span className="text-gradient">Clarity.</span>
            </h1>
            <p className="text-lg md:text-2xl text-[#666666] leading-relaxed font-light max-w-xl">
              Defining the next generation of boutique wealth management through quantitative rigor and institutional governance.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative aspect-square md:aspect-square rounded-[2rem] md:rounded-[4rem] overflow-hidden bg-gray-50 border border-black/5"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1F4E8C]/20 to-transparent z-10" />
            <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover grayscale" alt="Office" />
            <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 z-20">
               <div className="p-6 md:p-8 bg-white/90 backdrop-blur-xl rounded-[1.5rem] md:rounded-[2rem] shadow-2xl">
                  <span className="block text-3xl md:text-4xl font-black mb-1">20+</span>
                  <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[#1F4E8C]">Years Experience</span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. VISION & MISSION CARDS */}
      <section className="py-24 md:py-40 px-6 md:px-8 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-10 md:p-20 rounded-[2.5rem] md:rounded-[4rem] border border-black/5 shadow-sm group"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#F7F9FC] group-hover:bg-[#1F4E8C] group-hover:text-white rounded-xl md:rounded-2xl flex items-center justify-center text-[#1F4E8C] mb-8 md:mb-12 transition-all">
              <Target className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h3 className="text-3xl md:text-4xl font-black mb-6 md:mb-8 tracking-tighter">Our Vision</h3>
            <p className="text-base md:text-xl text-[#666666] font-light leading-relaxed">
              To become the global standard for boutique wealth management—where data integrity meets visionary asset architecture.
            </p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-[#111111] p-10 md:p-20 rounded-[2.5rem] md:rounded-[4rem] text-white group"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 group-hover:bg-[#2BB0E3] group-hover:text-white rounded-xl md:rounded-2xl flex items-center justify-center text-[#2BB0E3] mb-8 md:mb-12 transition-all">
              <Compass className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h3 className="text-3xl md:text-4xl font-black mb-6 md:mb-8 tracking-tighter">Our Mission</h3>
            <p className="text-base md:text-xl text-white/40 font-light leading-relaxed">
              To empower HNIs and Family Offices through structural alpha, ensuring capital preservation across generational shifts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. CORE VALUES GRID */}
      <section className="py-24 md:py-40 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-32">
             <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#1F4E8C] mb-6 md:mb-8">Pillars of Trust</h2>
             <h3 className="text-3xl md:text-7xl font-black tracking-tighter leading-none mb-6">Institutional <span className="text-black/20">Standards.</span></h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { title: 'Governance', icon: <ShieldCheck />, desc: 'SEBI registered with rigorous multi-tier audit protocols.' },
              { title: 'Global Edge', icon: <Globe />, desc: 'Analysis spanning 24+ global markets for strategic perspective.' },
              { title: 'Human Capital', icon: <Users />, desc: 'Boutique team from top-tier global banking backgrounds.' },
              { title: 'Expertise', icon: <Briefcase />, desc: 'Decades of experience in alternative asset architecture.' }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 md:p-12 bg-[#F7F9FC] rounded-[2rem] md:rounded-[3rem] border border-black/5 hover:bg-[#111111] hover:text-white transition-all duration-700"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 mb-8 text-[#1F4E8C]">{item.icon}</div>
                <h4 className="text-xl md:text-2xl font-black mb-4 md:mb-6 tracking-tight">{item.title}</h4>
                <p className="text-sm opacity-50 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP */}
      <section className="py-24 md:py-40 px-6 md:px-8 bg-[#111111] overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#1F4E8C]/10 blur-[100px] md:blur-[150px] rounded-full -z-10" />
          <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#2BB0E3] mb-8 md:mb-12">The Desk</h2>
              <h3 className="text-4xl md:text-8xl font-black tracking-tighter text-white mb-8 md:mb-12 leading-none">Visionary <br /> Leadership.</h3>
              <p className="text-lg md:text-xl text-white/40 font-light leading-relaxed mb-10 md:mb-16">
                Our leaders bring combined experience from Goldman Sachs, Morgan Stanley, and premier alternative fund houses.
              </p>
              <div className="flex flex-wrap gap-3">
                 {['Quant Research', 'Asset Strategy', 'Risk Management'].map(tag => (
                   <span key={tag} className="px-5 py-2 border border-white/10 rounded-full text-[9px] font-bold uppercase tracking-widest text-white/60">{tag}</span>
                 ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4 md:gap-8 w-full">
               {[1, 2, 3, 4].map(i => (
                 <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="aspect-[4/5] bg-white/5 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden group border border-white/5"
                 >
                    <img src={`https://picsum.photos/seed/leader${i}/500/600`} className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000" alt="Leader" />
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
