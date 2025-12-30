import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Wind, ShieldCheck, Settings } from 'lucide-react';

interface Props {
  onBegin: () => void;
}

const LandingPage: React.FC<Props> = ({ onBegin }) => {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white relative overflow-hidden p-6">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
         <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
           className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600 rounded-full blur-[120px] opacity-20" 
         />
         <motion.div 
           animate={{ rotate: -360 }}
           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
           className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-indigo-600 rounded-full blur-[120px] opacity-20" 
         />
      </div>

      <div className="max-w-5xl mx-auto z-10 flex flex-col items-center text-center relative">
        
        {/* Logo Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex flex-col items-center"
        >
          {/* Custom CSS Logo Construction based on Agora CCS */}
          <div className="flex items-center gap-3 md:gap-5 mb-3 bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/5">
              {/* Left Gold Gradient Square */}
              <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-b from-yellow-400 to-yellow-600 shadow-lg shadow-yellow-500/20 rounded-sm" />
              
              {/* AGORA Text with Red 'O' */}
              <div className="flex items-center tracking-wider font-bold text-5xl md:text-7xl text-white font-sans">
                  <span>AG</span>
                  {/* Red Square 'O' */}
                  <span className="mx-1 w-9 h-9 md:w-12 md:h-12 border-[5px] md:border-[7px] border-red-600 rounded-lg" />
                  <span>RA</span>
              </div>

              {/* Right Blue Gradient Square */}
              <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-b from-blue-400 to-blue-600 shadow-lg shadow-blue-500/20 rounded-sm" />
          </div>

          {/* Subtext */}
          <h2 className="text-xl md:text-3xl font-bold tracking-[0.15em] text-slate-200 mb-4 font-sans">
              CLIMATE CONTROL SYSTEMS
          </h2>
          
          {/* Separator Line */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent mb-4" />

          {/* Tagline */}
          <p className="font-light tracking-[0.2em] text-lg text-slate-400 font-sans uppercase">
              Treating Air for Life
          </p>
        </motion.div>

        {/* Company Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-6 max-w-2xl mb-16"
        >
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-light">
            Agora specializes in turnkey <span className="text-white font-medium">climate control solutions</span>—from 
            conceptual design and precision manufacturing to installation and lifecycle support. 
            We ensure efficient, safe, and sustainable air treatment for industrial and commercial environments.
          </p>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.6 }}
           className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 w-full"
        >
          <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
            <Wind className="mb-4 text-blue-400" size={32} />
            <h3 className="font-bold text-white mb-2">Smart Cooling</h3>
            <p className="text-sm text-slate-400">Advanced heat load analysis and thermal management.</p>
          </div>
           <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
            <Settings className="mb-4 text-indigo-400" size={32} />
            <h3 className="font-bold text-white mb-2">Turnkey Execution</h3>
            <p className="text-sm text-slate-400">End-to-end project manufacturing and commissioning.</p>
          </div>
           <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
            <ShieldCheck className="mb-4 text-emerald-400" size={32} />
            <h3 className="font-bold text-white mb-2">Lifecycle Support</h3>
            <p className="text-sm text-slate-400">Comprehensive AMC, validation, and safety reporting.</p>
          </div>
        </motion.div>

        {/* Begin Button */}
        <motion.button
          onClick={onBegin}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 0.8 }}
          className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-full shadow-lg shadow-blue-600/30 flex items-center gap-3 transition-all text-lg"
        >
          Begin Presentation
          <div className="bg-white/20 p-1 rounded-full group-hover:translate-x-1 transition-transform">
             <ArrowRight size={20} />
          </div>
        </motion.button>
      </div>
      
      <div className="absolute bottom-6 text-slate-600 text-xs tracking-widest uppercase">
        <a href="http://agoraccs.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
          www.agoraccs.com
        </a>
      </div>
    </div>
  );
};

export default LandingPage;