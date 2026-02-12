
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Send, ArrowRight, ShieldCheck, Landmark, Activity, Layers } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="w-full bg-white selection:bg-[#1F4E8C] selection:text-white overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[50vh] flex flex-col justify-center px-6 md:px-8 pt-32 md:pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.5em] text-[#1F4E8C] mb-6 md:mb-8">Confidential Advisory</span>
            <h1 className="text-5xl md:text-[120px] font-black tracking-tighter leading-[0.9] md:leading-[0.85] mb-8 md:mb-12">
              Start Your <br /><span className="text-gradient">Protocol.</span>
            </h1>
            <p className="text-lg md:text-2xl text-[#666666] leading-relaxed font-light max-w-2xl">
              Connect with our institutional desk to initialize your wealth architecture roadmap.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTACT GRID */}
      <section className="pb-24 md:pb-40 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          <div className="space-y-12 md:space-y-16">
            <div className="space-y-10 md:space-y-12">
              {[
                { label: 'Pune Headquarters', val: ' Plot No 26, Rajiv Gandhi Infotech Park, Near MIDC Hinjewadi, Hinjewadi-411057', icon: <Landmark /> },
                { label: 'Confidential Email', val: 'institutional@investnest.com', icon: <Mail /> },
                { label: 'Institutional Line', val: '0124-3537261', icon: <Phone /> }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-6 md:gap-8 group"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#F7F9FC] group-hover:bg-[#1F4E8C] group-hover:text-white rounded-xl md:rounded-2xl flex items-center justify-center text-[#1F4E8C] transition-all flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-[#1F4E8C] mb-2">{item.label}</div>
                    <div className="text-lg md:text-xl font-medium tracking-tight text-[#111111]">{item.val}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-12 md:pt-16 border-t border-black/5">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/30 mb-10 md:mb-12">Onboarding Protocol</h4>
              <div className="space-y-6 md:space-y-8">
                {[
                  { step: '01', title: 'Diagnostic', icon: <Activity /> },
                  { step: '02', title: 'Architecture', icon: <Layers /> },
                  { step: '03', title: 'Deployment', icon: <Send /> }
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4 md:gap-6">
                    <div className="text-xl md:text-2xl font-black text-black/10">{step.step}</div>
                    <div className="text-[9px] md:text-xs font-bold uppercase tracking-widest">{step.title}</div>
                    <div className="flex-1 h-[1px] bg-black/5" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="p-8 md:p-16 bg-[#111111] rounded-[2rem] md:rounded-[4rem] text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#1F4E8C]/20 blur-[80px] md:blur-[100px] rounded-full -z-0" />
              <div className="relative z-10">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-16 md:py-20"
                    >
                      <ShieldCheck className="w-16 h-16 md:w-24 md:h-24 text-[#2BB0E3] mx-auto mb-8 md:mb-10" />
                      <h3 className="text-3xl md:text-4xl font-black tracking-tighter mb-4 md:mb-6">Inquiry Logged.</h3>
                      <p className="text-white/40 font-light text-base md:text-lg">An institutional advisor will initiate contact within 24 business hours.</p>
                    </motion.div>
                  ) : (
                    <motion.form key="form" onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                        <div className="space-y-3 md:space-y-4">
                          <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/30">Client Name</label>
                          <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-4 md:py-5 focus:ring-2 focus:ring-[#2BB0E3] outline-none transition-all text-sm" />
                        </div>
                        <div className="space-y-3 md:space-y-4">
                          <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/30">Email Address</label>
                          <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-4 md:py-5 focus:ring-2 focus:ring-[#2BB0E3] outline-none transition-all text-sm" />
                        </div>
                      </div>
                      <div className="space-y-3 md:space-y-4">
                        <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/30">Select Objective</label>
                        <select className="w-full bg-[#222222] border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-4 md:py-5 focus:ring-2 focus:ring-[#2BB0E3] outline-none transition-all appearance-none text-sm">
                          <option className="bg-[#111111]">AIF Allocation</option>
                          <option className="bg-[#111111]">PMS Structure</option>
                          <option className="bg-[#111111]">Family Office Advisory</option>
                        </select>
                      </div>
                      <div className="space-y-3 md:space-y-4">
                        <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/30">Bespoke Requirements</label>
                        <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-4 md:py-5 focus:ring-2 focus:ring-[#2BB0E3] outline-none transition-all resize-none text-sm"></textarea>
                      </div>
                      <button className="w-full bg-white text-black py-6 md:py-7 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em] md:tracking-[0.3em] hover:bg-[#2BB0E3] hover:text-black transition-all flex items-center justify-center gap-4">
                        Secure Submission <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
