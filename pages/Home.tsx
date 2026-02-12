
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  ChevronRight, 
  TrendingUp, 
  Globe, 
  Layers, 
  Activity, 
  Lock, 
  Shield,
  Zap,
  Target,
  Search,
  Users
} from 'lucide-react';
import { SERVICES, BLOG_POSTS } from '../constants';
import PerformanceChart from '../components/PerformanceChart';

const HERO_SLIDES = [
  {
    title: "Building Wealth.",
    subtitle: "Structuring Futures.",
    description: "Institutional-grade asset management for sophisticated capital. Precision engineered for long-term alpha.",
    cta: "Explore Strategies",
    accent: "Architected.",
    bg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
  },
  {
    title: "Alternative Alpha.",
    subtitle: "Beyond Public.",
    description: "Unlock sophisticated investment vehicles including private credit and high-conviction hedge strategies.",
    cta: "View AIF Universe",
    accent: "Uncorrelated.",
    bg: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
  },
  {
    title: "Legacy Defined.",
    subtitle: "Family Wealth.",
    description: "Providing the structural integrity required for multi-generational wealth preservation and growth.",
    cta: "Consult an Advisor",
    accent: "Visionary.",
    bg: "https://images.unsplash.com/photo-1449156001437-3a1661acda22?auto=format&fit=crop&q=80&w=2000"
  }
];

const PARTNERS = [
  "Institutional Equity", "Private Credit", "Venture Capital", "Hedge Strategies", 
  "Real Estate Funds", "Fixed Income", "Global Macro", "Arbitrage", 
  "Multi-Family Office", "Direct Equity", "Structured Yield", "Quantitative Desk"
];

const InfiniteTicker = () => {
  return (
    <div className="py-12 bg-[#F7F9FC] border-y border-black/5 overflow-hidden group">
      <div className="flex whitespace-nowrap">
        <motion.div 
          className="flex items-center space-x-16 px-8"
          animate={{ x: [0, -1920] }}
          transition={{ 
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            }
          }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {[...PARTNERS, ...PARTNERS].map((partner, idx) => (
            <div key={idx} className="flex items-center space-x-4 opacity-30 hover:opacity-100 transition-opacity cursor-default">
              <span className="text-xl md:text-2xl font-black tracking-tighter text-[#111111] uppercase">{partner}</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#1F4E8C]" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col w-full bg-white selection:bg-[#1F4E8C] selection:text-white">
      
      {/* 1. CINEMATIC HERO SLIDER */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#111111]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-black/60 z-10" />
            <motion.div 
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10, ease: "linear" }}
              style={{ backgroundImage: `url(${HERO_SLIDES[currentSlide].bg})` }}
              className="absolute inset-0 bg-cover bg-center grayscale contrast-125 brightness-75"
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-8 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            >
              <motion.div className="mb-6 md:mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#2BB0E3]">
                  {HERO_SLIDES[currentSlide].accent}
                </span>
              </motion.div>

              <h1 className="text-4xl sm:text-6xl md:text-[130px] font-black tracking-tighter leading-[0.9] md:leading-[0.8] mb-8 md:mb-12 text-white">
                {HERO_SLIDES[currentSlide].title}<br />
                <span className="text-gradient"> {HERO_SLIDES[currentSlide].subtitle}</span>
              </h1>

              <p className="text-lg md:text-2xl text-white/50 max-w-2xl mb-10 md:mb-16 font-light leading-relaxed">
                {HERO_SLIDES[currentSlide].description}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-8">
                <Link to="/services" className="bg-white text-black px-10 md:px-16 py-5 md:py-8 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#1F4E8C] hover:text-white transition-all shadow-2xl active:scale-95 text-center">
                  {HERO_SLIDES[currentSlide].cta}
                </Link>
                <Link to="/contact" className="text-white/40 hover:text-white transition-colors text-[10px] md:text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 group py-4">
                  Institutional Access <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute bottom-10 md:bottom-20 left-1/2 md:left-auto md:right-12 -translate-x-1/2 md:translate-x-0 z-30 flex md:flex-col items-center gap-6 md:gap-8">
          <div className="flex md:flex-col gap-4">
            {HERO_SLIDES.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrentSlide(i)}
                className={`transition-all rounded-full ${i === currentSlide ? 'bg-[#2BB0E3] w-8 md:w-1 h-1 md:h-20' : 'bg-white/20 w-4 md:w-1 h-1 md:h-12'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. INFINITE TICKER SECTION */}
      <InfiniteTicker />

      {/* 3. STRATEGIC BENTO */}
      <section className="py-24 md:py-40 px-6 md:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-32 max-w-2xl"
          >
            <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#1F4E8C] mb-6 md:mb-8">Expertise</h2>
            <h3 className="text-4xl md:text-8xl font-black tracking-tighter leading-none mb-6 md:mb-8">
              Strategic <span className="text-black/20">Verticles.</span>
            </h3>
            <p className="text-lg md:text-xl text-[#666666] font-light leading-relaxed">
              We leverage multi-disciplinary investment architectures to extract alpha from increasingly complex global markets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
             <motion.div 
                whileHover={{ y: -10 }}
                className="md:col-span-2 bg-[#F7F9FC] p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] border border-black/5 relative group overflow-hidden"
             >
                <Globe className="absolute -bottom-10 md:-bottom-20 -right-10 md:-right-20 w-64 md:w-[400px] h-64 md:h-[400px] text-[#1F4E8C]/5 group-hover:rotate-12 transition-transform duration-[2000ms]" />
                <div className="relative z-10">
                   <Layers className="w-10 h-10 md:w-12 md:h-12 text-[#1F4E8C] mb-8 md:mb-12" />
                   <h4 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 md:mb-8">{SERVICES[0].title}</h4>
                   <p className="text-base md:text-lg text-[#666666] max-w-md mb-8 md:mb-12 font-light">{SERVICES[0].shortDesc}</p>
                   <Link to="/services" className="flex items-center text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-[#1F4E8C] transition-colors">
                      Institutional Deep-Dive <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                   </Link>
                </div>
             </motion.div>

             <motion.div 
                whileHover={{ y: -10 }}
                className="bg-[#111111] text-white p-8 md:p-14 rounded-[2.5rem] md:rounded-[4rem] flex flex-col justify-between group"
             >
                <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-[#2BB0E3] mb-10 md:mb-14" />
                <div>
                   <h4 className="text-2xl md:text-3xl font-black tracking-tighter mb-4">{SERVICES[1].title}</h4>
                   <p className="text-white/40 text-xs md:text-sm font-light leading-relaxed mb-8 md:mb-10">{SERVICES[1].shortDesc}</p>
                   <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden mb-6 md:mb-8">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: '92%' }} className="h-full bg-[#2BB0E3]" />
                   </div>
                   <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/20">Alpha Optimized</div>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 4. PERFORMANCE DATA */}
      <section className="py-24 md:py-40 bg-[#111111] relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
               <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8 md:space-y-12"
               >
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#2BB0E3]">Quantitative Edge</h2>
                  <h3 className="text-4xl md:text-8xl font-black tracking-tighter leading-none text-white">Logic Driven <span className="text-white/10">Growth.</span></h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                     {[
                       { label: 'Asset Under Advisory', val: '₹1.5k Cr+' },
                       { label: 'Risk Mitigation', val: '99.9%' },
                       { label: 'Strategic Alpha', val: '+8.4%' },
                       { label: 'Global Vectors', val: '140+' }
                     ].map((stat, i) => (
                       <div key={i} className="p-6 md:p-8 border border-white/5 rounded-[1.5rem] md:rounded-[2.5rem] bg-white/5">
                          <div className="text-3xl md:text-4xl font-black mb-1 md:mb-2 text-white">{stat.val}</div>
                          <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/30">{stat.label}</div>
                       </div>
                     ))}
                  </div>
               </motion.div>
               <div className="relative w-full">
                  <div className="absolute inset-0 bg-[#1F4E8C]/10 blur-[100px] md:blur-[150px] rounded-full" />
                  <PerformanceChart />
               </div>
            </div>
         </div>
      </section>

      {/* 5. STRATEGIC PROCESS SECTION */}
      <section className="py-24 md:py-40 px-6 md:px-8 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#1F4E8C] mb-6 md:mb-8">The Protocol</h2>
            <h3 className="text-4xl md:text-7xl font-black tracking-tighter leading-none mb-6">Our Wealth <span className="text-black/20">Architect.</span></h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {[
              { icon: <Search />, title: "Intelligence", desc: "Rigorous quantitative and fundamental research vectors." },
              { icon: <Target />, title: "Precision", desc: "Customized asset allocation aligned with legacy goals." },
              { icon: <Shield />, title: "Governance", desc: "Tiered risk surveillance and institutional compliance." },
              { icon: <Activity />, title: "Optimization", desc: "Dynamic rebalancing to extract maximum market alpha." }
            ].map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 bg-[#F7F9FC] rounded-[2rem] flex items-center justify-center text-[#1F4E8C] mb-8 group-hover:bg-[#1F4E8C] group-hover:text-white transition-all duration-500 shadow-xl shadow-blue-900/5">
                  {/* Fixed TypeScript error by adding <any> generic to React.ReactElement cast to allow 'className' property */}
                  {React.cloneElement(step.icon as React.ReactElement<any>, { className: "w-8 h-8" })}
                </div>
                <h4 className="text-2xl font-black tracking-tighter mb-4 uppercase">{step.title}</h4>
                <p className="text-sm text-[#666666] font-light leading-relaxed">{step.desc}</p>
                {i < 3 && <div className="hidden md:block absolute top-10 -right-4 w-8 h-[1px] bg-black/10" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLIENT PROFILES SECTION */}
      <section className="py-24 md:py-40 px-6 md:px-8 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-32 gap-12">
            <div className="max-w-2xl">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#1F4E8C] mb-6 md:mb-8">Our Network</h2>
              <h3 className="text-4xl md:text-8xl font-black tracking-tighter leading-none">Who We <span className="text-[#1F4E8C]/20">Serve.</span></h3>
            </div>
            <Link to="/contact" className="group flex items-center text-sm font-bold uppercase tracking-widest text-[#111111]">
               Join The Circle <div className="ml-5 w-12 h-12 md:w-16 md:h-16 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[#111111] group-hover:text-white transition-all"><ArrowRight className="w-5 h-5 md:w-7 md:h-7" /></div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "HNIs", desc: "Sophisticated individual capital seeking structural alpha and preservation." },
              { title: "Family Offices", desc: "Multi-generational wealth architecture with focus on global reach." },
              { title: "Corporate", desc: "Institutional treasury management and structured yield optimization." },
              { title: "Foundations", desc: "Goal-aligned asset growth for long-term philanthropic integrity." }
            ].map((client, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10, backgroundColor: '#111111', color: '#ffffff' }}
                className="p-10 md:p-12 bg-white border border-black/5 rounded-[2.5rem] md:rounded-[3.5rem] transition-all duration-500 group shadow-sm"
              >
                <Users className="w-10 h-10 text-[#1F4E8C] group-hover:text-[#2BB0E3] mb-10 transition-colors" />
                <h4 className="text-2xl font-black tracking-tighter mb-4 uppercase">{client.title}</h4>
                <p className="text-sm opacity-60 font-light leading-relaxed group-hover:opacity-100">{client.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INSIGHTS SECTION */}
      <section className="py-24 md:py-40 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#1F4E8C] mb-6 md:mb-8">Intelligence Hub</h2>
            <h3 className="text-4xl md:text-7xl font-black tracking-tighter leading-none mb-6">Market <span className="text-black/20">Portal.</span></h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {BLOG_POSTS.map((post, i) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group cursor-pointer flex flex-col h-full bg-white rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border border-black/5 hover:shadow-2xl transition-all duration-700"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute top-6 md:top-8 left-6 md:left-8">
                    <span className="px-5 py-2 bg-white/95 backdrop-blur-xl rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-[#111111] shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-12 flex-grow flex flex-col justify-between">
                   <div>
                      <h4 className="text-2xl md:text-3xl font-black leading-tight mb-6 group-hover:text-[#1F4E8C] transition-colors tracking-tighter uppercase">{post.title}</h4>
                      <p className="text-[#666666] text-sm md:text-base leading-relaxed mb-10 font-light line-clamp-2">{post.excerpt}</p>
                   </div>
                   <div className="flex items-center justify-between pt-8 border-t border-black/5">
                      <span className="text-[9px] md:text-[10px] font-bold text-black/30 uppercase tracking-widest">{post.date}</span>
                      <ChevronRight className="w-5 h-5 text-[#1F4E8C] group-hover:translate-x-2 transition-transform" />
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-24 md:py-52 px-6 md:px-8 bg-white text-center relative overflow-hidden">
         <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative z-10"
         >
            <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#1F4E8C] mb-12 md:mb-16">The Century Ahead</h2>
            <h3 className="text-4xl md:text-[110px] font-black tracking-tighter leading-[0.9] md:leading-[0.8] mb-12 md:mb-16 text-[#111111]">
               Wealth <br /><span className="text-gradient">Architected.</span>
            </h3>
            <p className="text-lg md:text-2xl text-[#666666] mb-12 md:mb-20 font-light leading-relaxed">
               Secure confidential advisory on our alternative and portfolio management platforms.
            </p>
            <Link to="/contact" className="inline-block bg-[#111111] text-white px-10 md:px-20 py-5 md:py-8 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#1F4E8C] transition-all shadow-2xl w-full sm:w-auto active:scale-95">
               Request Consultation
            </Link>
         </motion.div>

         <div className="mt-20 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-3xl mx-auto border-t border-black/5 pt-12 md:pt-20">
             {['SEBI Registered', 'Pune HQ', 'Global Reach', 'Family Office Hub'].map((item) => (
               <div key={item} className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-black/20 whitespace-nowrap">{item}</div>
             ))}
          </div>
      </section>
    </div>
  );
};

export default Home;
