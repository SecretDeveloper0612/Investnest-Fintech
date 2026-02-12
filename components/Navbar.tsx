
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-black/5 py-4' : 'bg-transparent py-6 md:py-8'
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <img
              src={logo}
              alt="Investnest Logo"
              className="w-12 h-12 md:w-16 md:h-16 object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <span className={`text-lg md:text-xl font-bold tracking-tight transition-colors ${!scrolled && location.pathname === '/' ? 'text-white' : 'text-[#111111]'}`}>
            INVESTNEST <span className={`${!scrolled && location.pathname === '/' ? 'text-white/60' : 'text-[#1F4E8C]/60'} font-medium`}>FINTECH</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative px-5 py-2 group"
            >
              <span className={`text-sm font-medium transition-colors ${location.pathname === item.path
                ? (scrolled || location.pathname !== '/' ? 'text-[#1F4E8C]' : 'text-white')
                : (scrolled || location.pathname !== '/' ? 'text-[#666666] hover:text-[#111111]' : 'text-white/70 hover:text-white')
                }`}>
                {item.label}
              </span>
              {location.pathname === item.path && (
                <motion.div
                  layoutId="nav-underline"
                  className={`absolute bottom-0 left-5 right-5 h-0.5 rounded-full ${scrolled || location.pathname !== '/' ? 'bg-[#1F4E8C]' : 'bg-white'}`}
                />
              )}
            </Link>
          ))}
          <div className="pl-4">
            <Link
              to="/contact"
              className={`px-7 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all active:scale-95 shadow-lg ${scrolled || location.pathname !== '/'
                ? 'bg-[#111111] text-white hover:bg-[#1F4E8C]'
                : 'bg-white text-[#111111] hover:bg-[#2BB0E3] hover:text-white'
                }`}
            >
              Consultation
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-full z-[110] relative transition-colors ${isOpen ? 'text-[#111111]' : (!scrolled && location.pathname === '/' ? 'text-white' : 'text-[#111111]')}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 w-full h-screen bg-white z-[105] p-8 flex flex-col justify-between"
          >
            <div className="flex flex-col space-y-8 mt-20">
              {NAV_ITEMS.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  key={item.path}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-black tracking-tighter text-[#111111] hover:text-[#1F4E8C] transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="pb-12"
            >
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-[#111111] text-white w-full py-6 rounded-full font-bold text-lg flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
              >
                Request Access <ArrowRight className="w-5 h-5" />
              </Link>
              <div className="mt-8 pt-8 border-t border-black/5 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-black/30">
                <span>© 2024 INVESTNEST</span>
                <span>PUNE, INDIA</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
