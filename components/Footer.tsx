
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 md:pt-32 pb-12 border-t border-black/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 lg:gap-32">
        <div className="col-span-1 sm:col-span-2">
          <Link to="/" className="flex items-center space-x-3 mb-6 md:mb-8">
            <img
              src={logo}
              alt="Investnest Logo"
              className="w-8 h-8 md:w-10 md:h-10 object-contain"
            />
            <span className="text-xl md:text-2xl font-bold tracking-tight">
              INVESTNEST <span className="text-[#1F4E8C]/60 font-medium">FINTECH</span>
            </span>
          </Link>
          <p className="text-[#666666] max-w-sm mb-8 md:mb-10 leading-relaxed text-base md:text-lg font-light">
            Defining the future of boutique asset management through disciplined engineering and visionary strategies.
          </p>
          <div className="flex space-x-3">
            <a href="#" className="p-2.5 md:p-3 bg-[#F7F9FC] rounded-full hover:bg-[#1F4E8C] hover:text-white transition-all">
              <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a href="#" className="p-2.5 md:p-3 bg-[#F7F9FC] rounded-full hover:bg-[#1F4E8C] hover:text-white transition-all">
              <Twitter className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#111111] mb-6 md:mb-8">Expertise</h4>
          <ul className="space-y-3 md:space-y-4">
            <li><Link to="/services" className="text-[#666666] hover:text-[#111111] transition-colors text-sm font-medium">Alternative Funds</Link></li>
            <li><Link to="/services" className="text-[#666666] hover:text-[#111111] transition-colors text-sm font-medium">Portfolio Management</Link></li>
            <li><Link to="/services" className="text-[#666666] hover:text-[#111111] transition-colors text-sm font-medium">Mutual Fund Advisory</Link></li>
            <li><Link to="/philosophy" className="text-[#666666] hover:text-[#111111] transition-colors text-sm font-medium">Risk Methodology</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#111111] mb-6 md:mb-8">Contact</h4>
          <ul className="space-y-5 md:space-y-6">
            <li className="flex items-start space-x-3 md:space-x-4">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#1F4E8C] flex-shrink-0 mt-0.5" />
              <span className="text-xs md:text-sm text-[#666666] leading-relaxed">Building no 04, Fusa road, Pune</span>
            </li>
            <li className="flex items-center space-x-3 md:space-x-4">
              <Phone className="w-4 h-4 md:w-5 md:h-5 text-[#1F4E8C] flex-shrink-0" />
              <span className="text-xs md:text-sm text-[#666666] font-medium">+91 22 4560 9000</span>
            </li>
            <li className="flex items-center space-x-3 md:space-x-4">
              <Mail className="w-4 h-4 md:w-5 md:h-5 text-[#1F4E8C] flex-shrink-0" />
              <span className="text-xs md:text-sm text-[#666666] font-medium">hello@investnest.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-8 mt-20 md:mt-32 pt-10 md:pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="max-w-2xl">
          <p className="text-[9px] md:text-[10px] font-medium text-[#999999] leading-relaxed uppercase tracking-widest">
            Investnest Fintech is a SEBI registered investment advisor. Investment in securities market are subject to market risks. Read all related documents carefully before investing.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 md:gap-8 whitespace-nowrap">
          <Link to="#" className="text-[9px] md:text-[10px] font-bold text-[#999999] uppercase tracking-widest hover:text-[#111111]">Privacy</Link>
          <Link to="#" className="text-[9px] md:text-[10px] font-bold text-[#999999] uppercase tracking-widest hover:text-[#111111]">Terms</Link>
          <span className="text-[9px] md:text-[10px] font-bold text-[#999999] uppercase tracking-widest">© 2024 Investnest</span>
          <span className="text-[9px] md:text-[10px] font-bold text-[#999999] uppercase tracking-widest">
            Developed by | <a href="https://preettech.com/" target="_blank" rel="noopener noreferrer" className="text-[#1F4E8C] hover:text-[#111111] transition-colors">Preet Tech</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
