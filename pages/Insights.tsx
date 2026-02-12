
import React from 'react';
import { motion } from 'framer-motion';
import { BLOG_POSTS } from '../constants';
import { Search, ChevronRight, Download, BookOpen } from 'lucide-react';

const Insights: React.FC = () => {
  return (
    <div className="w-full bg-white selection:bg-[#1F4E8C] selection:text-white overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[50vh] flex flex-col justify-center px-6 md:px-8 pt-32 md:pt-20">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row justify-between lg:items-end gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.5em] text-[#1F4E8C] mb-6 md:mb-8">Intelligence Reports</span>
            <h1 className="text-5xl md:text-[100px] font-black tracking-tighter leading-[0.9] md:leading-[0.85] mb-6 md:mb-8">
              The <span className="text-gradient">Portal.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#666666] font-light leading-relaxed">
               Proprietary research and market insights from our quantitative desk.
            </p>
          </motion.div>
          <div className="w-full lg:w-96 relative">
            <input 
              type="text" 
              placeholder="Search Intelligence Hub..." 
              className="w-full bg-[#F7F9FC] border-0 py-5 md:py-6 pl-14 md:pl-16 pr-6 md:pr-8 rounded-full focus:ring-2 focus:ring-[#1F4E8C] transition-all outline-none text-sm"
            />
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1F4E8C]" />
          </div>
        </div>
      </section>

      {/* 2. FEATURED REPORT */}
      <section className="py-12 md:py-20 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-[#111111] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden flex flex-col lg:flex-row relative group"
          >
             <div className="lg:w-1/2 p-8 md:p-24 flex flex-col justify-between">
                <div>
                   <span className="px-4 py-1.5 bg-[#2BB0E3] text-black rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-8 md:mb-12 inline-block">Featured Briefing</span>
                   <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-6 md:mb-8 leading-none md:leading-tight">2024 Institutional <br className="hidden md:block" /> Outlook: The Great Rebalancing.</h3>
                   <p className="text-white/40 text-base md:text-lg font-light leading-relaxed mb-8 md:mb-12">
                      An 80-page deep dive into multi-asset allocation in a higher-for-longer environment.
                   </p>
                </div>
                <button className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#2BB0E3] hover:gap-6 transition-all pb-2">
                   Download Full Report <Download className="w-4 h-4" />
                </button>
             </div>
             <div className="lg:w-1/2 overflow-hidden aspect-[4/3] lg:aspect-auto">
                <img src="https://images.unsplash.com/photo-1551288049-bbbda5366a71?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 transition-transform duration-[2000ms]" alt="Report" />
             </div>
          </motion.div>
        </div>
      </section>

      {/* 3. INSIGHTS GRID */}
      <section className="py-24 md:py-40 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {BLOG_POSTS.map((post, i) => (
              <motion.article 
                key={post.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer flex flex-col h-full bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-black/5 hover:shadow-2xl transition-all duration-700"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                   <img src={post.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" alt={post.title} />
                   <div className="absolute top-6 left-6">
                      <span className="px-4 py-1.5 bg-white/90 backdrop-blur-xl rounded-full text-[8px] md:text-[9px] font-bold uppercase tracking-widest">{post.category}</span>
                   </div>
                </div>
                <div className="p-8 md:p-12 flex-grow flex flex-col justify-between">
                   <div>
                      <h4 className="text-2xl md:text-3xl font-black tracking-tighter leading-tight mb-4 md:mb-6 group-hover:text-[#1F4E8C] transition-colors">{post.title}</h4>
                      <p className="text-[#666666] text-sm leading-relaxed mb-8 md:mb-10 font-light line-clamp-2">{post.excerpt}</p>
                   </div>
                   <div className="flex items-center justify-between pt-6 md:pt-8 border-t border-black/5">
                      <span className="text-[9px] md:text-[10px] font-bold text-black/20 uppercase tracking-widest">{post.date}</span>
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-[#111111] group-hover:text-white transition-all">
                         <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                   </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NEWSLETTER */}
      <section className="py-24 md:py-40 px-6 md:px-8 bg-[#F7F9FC]">
        <div className="max-w-4xl mx-auto text-center">
           <BookOpen className="w-12 h-12 md:w-16 md:h-16 text-[#1F4E8C] mx-auto mb-8 md:mb-12" />
           <h3 className="text-3xl md:text-7xl font-black tracking-tighter mb-8 md:mb-12 leading-none">Institutional <br /><span className="text-gradient">Briefings.</span></h3>
           <p className="text-lg md:text-xl text-[#666666] font-light mb-12 md:mb-16">
              Join 5,000+ sophisticated investors receiving our bi-weekly quant analysis.
           </p>
           <form className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-2xl mx-auto">
              <input type="email" placeholder="Work email address" className="flex-1 bg-white px-6 md:px-8 py-4 md:py-6 rounded-full border border-black/5 focus:ring-2 focus:ring-[#1F4E8C] outline-none transition-all text-sm" />
              <button className="bg-[#111111] text-white px-8 md:px-12 py-4 md:py-6 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#1F4E8C] transition-all">Subscribe</button>
           </form>
        </div>
      </section>
    </div>
  );
};

export default Insights;
