
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Zap, TrendingUp, Layers, Activity } from 'lucide-react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="w-full bg-white selection:bg-[#1F4E8C] selection:text-white overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[60vh] flex flex-col justify-center px-6 md:px-8 pt-32 md:pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.5em] text-[#1F4E8C] mb-6 md:mb-8">Investment Verticals</span>
            <h1 className="text-4xl md:text-[120px] font-black tracking-tighter leading-[0.9] md:leading-[0.85] mb-8 md:mb-12">
              Strategic <span className="text-gradient"> Roadmap.</span>
            </h1>
            <p className="text-lg md:text-2xl text-[#666666] leading-relaxed font-light max-w-2xl">
              Bespoke wealth architecture spanning traditional and alternative markets for long-term alpha.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES LIST */}
      <section className="pb-24 md:pb-40 px-6 md:px-8">
        <div className="max-w-7xl mx-auto space-y-24 md:space-y-40">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.id} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 md:gap-24 items-center`}
            >
              <div className="lg:w-1/2 w-full">
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                   <div className="w-10 h-10 md:w-12 md:h-12 bg-[#F7F9FC] rounded-xl md:rounded-2xl flex items-center justify-center text-[#1F4E8C]">
                      {index === 0 ? <Layers className="w-5 h-5 md:w-6 md:h-6" /> : index === 1 ? <TrendingUp className="w-5 h-5 md:w-6 md:h-6" /> : <Activity className="w-5 h-5 md:w-6 md:h-6" />}
                   </div>
                   <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1F4E8C]">Sector {index + 1}</span>
                </div>
                <h2 className="text-3xl md:text-7xl font-black tracking-tighter mb-6 md:mb-10 leading-none">{service.title}</h2>
                <p className="text-base md:text-xl text-[#666666] leading-relaxed mb-8 md:mb-12 font-light">
                  {service.longDesc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-10 md:mb-16">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center space-x-3 md:space-x-4">
                      <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#2BB0E3] flex-shrink-0" />
                      <span className="text-xs md:text-sm font-bold text-[#111111] uppercase tracking-widest">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="inline-flex items-center justify-center bg-[#111111] text-white px-10 md:px-12 py-5 md:py-6 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#1F4E8C] transition-all group w-full sm:w-auto">
                  Consult Institutional Desk <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
              <div className="lg:w-1/2 w-full">
                 <div className="aspect-[4/3] rounded-[2rem] md:rounded-[4rem] overflow-hidden bg-gray-50 border border-black/5 shadow-xl md:shadow-2xl group">
                    <img src={`https://picsum.photos/seed/${service.id}/1000/750`} alt={service.title} className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. TRANSITION CTA */}
      <section className="py-24 md:py-40 bg-[#111111] text-white overflow-hidden text-center px-6 md:px-8">
         <div className="max-w-4xl mx-auto">
            <Zap className="w-12 h-12 md:w-16 md:h-16 text-[#2BB0E3] mx-auto mb-8 md:mb-12" />
            <h3 className="text-3xl md:text-7xl font-black tracking-tighter mb-8 md:mb-12 leading-none">Alpha discovery <span className="text-white/10">never stops.</span></h3>
            <p className="text-lg md:text-xl text-white/40 font-light mb-12 md:mb-16">
               Join our alternative asset network and access opportunities before they reach the mainstream.
            </p>
            <Link to="/contact" className="inline-block border border-white/20 text-white px-10 md:px-16 py-6 md:py-8 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all w-full sm:w-auto">
               Request Onboarding Pack
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Services;
