import React, { useState } from 'react';
import { PHASES, SIDEBAR_TEXT } from './constants';
import PhaseNode from './components/PhaseNode';
import LandingPage from './components/LandingPage';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowLeft } from 'lucide-react';

const App: React.FC = () => {
  // Navigation state to control Landing Page vs Presentation
  const [hasStarted, setHasStarted] = useState(false);
  const [activePhaseId, setActivePhaseId] = useState<string | null>('concept');

  const handlePhaseClick = (id: string) => {
    setActivePhaseId(prev => prev === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 relative">
      <AnimatePresence mode="wait">
        {!hasStarted && (
          <motion.div 
            key="landing-page"
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[60]"
          >
            <LandingPage onBegin={() => setHasStarted(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Presentation Content */}
      {hasStarted && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex min-h-screen overflow-hidden bg-slate-50"
        >
          {/* Left Sidebar */}
          <aside className="fixed left-0 top-0 bottom-0 w-16 md:w-24 bg-slate-900 text-white flex flex-col items-center py-6 z-50 shadow-2xl">
            {/* Back Button */}
            <button 
              onClick={() => setHasStarted(false)}
              className="p-3 mb-6 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white"
              title="Back to Home"
            >
              <ArrowLeft size={24} />
            </button>

            <div className="flex-1 flex items-center justify-center">
              <div 
                className="whitespace-nowrap font-bold text-lg md:text-2xl tracking-widest uppercase text-slate-400"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                <span className="text-white">{SIDEBAR_TEXT.split(',')[0]}</span>
                <span className="mx-4 text-blue-500">•</span>
                {SIDEBAR_TEXT.split(',').slice(1).join(', ')}
              </div>
            </div>
            <div className="mt-8 animate-bounce">
              <ArrowDown className="text-blue-400" />
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 ml-16 md:ml-24 p-6 md:p-12 lg:p-20 relative overflow-y-auto h-screen">
            
            {/* Background Decorative SVG Line mimicking the sketch flow */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10 z-0">
              <svg className="w-full h-full" preserveAspectRatio="none">
                <path 
                  d="M 100 100 Q 400 300 200 600 T 300 1000" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="4" 
                  className="text-slate-900 hidden md:block"
                />
              </svg>
            </div>

            <div className="max-w-4xl mx-auto relative">
              <header className="mb-12 md:mb-20">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-3 mb-2"
                >
                   <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase rounded-full tracking-wider">
                     Agora CCS
                   </span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4"
                >
                  Project Lifecycle
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-slate-500 text-lg max-w-2xl"
                >
                  An integrated approach from conceptualization to after-sales support. 
                  Click on a phase to view deliverables.
                </motion.p>
              </header>

              <div className="flex flex-col gap-4 relative">
                {PHASES.map((phase, index) => (
                  <PhaseNode
                    key={phase.id}
                    phase={phase}
                    isActive={activePhaseId === phase.id}
                    onClick={() => handlePhaseClick(phase.id)}
                    isLast={index === PHASES.length - 1}
                  />
                ))}
              </div>

              <footer className="mt-20 pt-10 border-t border-slate-200 text-slate-400 text-sm text-center">
                <p>© {new Date().getFullYear()} Agora Climate Control Systems. All processes validated.</p>
              </footer>
            </div>
          </main>
        </motion.div>
      )}
    </div>
  );
};

export default App;