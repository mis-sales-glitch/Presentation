import React from 'react';
import { motion } from 'framer-motion';
import { Phase } from '../types';
import DeliverableCard from './DeliverableCard';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface Props {
  phase: Phase;
  isActive: boolean;
  onClick: () => void;
  isLast: boolean;
}

const PhaseNode: React.FC<Props> = ({ phase, isActive, onClick, isLast }) => {
  const Icon = phase.icon;

  // Determine alignment classes based on the 'position' property to mimic the sketch flow
  const containerClasses = `
    flex flex-col md:flex-row gap-8 relative z-10
    ${phase.position === 'left' ? 'md:items-start' : ''}
    ${phase.position === 'center' ? 'md:pl-32' : ''}
    ${phase.position === 'right' ? 'md:pl-64' : ''}
  `;

  return (
    <div className={`relative pb-16 ${containerClasses}`}>
       {/* Connecting Line (Vertical) */}
      {!isLast && (
        <div className="absolute left-8 top-16 bottom-0 w-0.5 border-l-2 border-dashed border-slate-300 md:hidden" />
      )}
      
      {/* Interaction Target */}
      <div className="flex flex-col gap-4 max-w-md">
        <motion.div
          layout
          onClick={onClick}
          className={`
            group relative flex items-center gap-4 p-2 pr-6 rounded-full cursor-pointer transition-all duration-300
            ${isActive ? 'bg-white shadow-xl ring-2 ring-offset-2 ring-blue-500' : 'bg-white/50 hover:bg-white hover:shadow-lg'}
          `}
        >
          {/* Circular Icon */}
          <div className={`
            w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg shrink-0
            ${phase.color}
          `}>
            <Icon size={28} strokeWidth={1.5} />
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <h3 className={`text-lg font-bold leading-tight ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>
              {phase.title}
            </h3>
            {isActive && (
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-xs text-slate-500 mt-1"
              >
                {phase.description}
              </motion.p>
            )}
          </div>
          
          <div className="text-slate-400">
            {isActive ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
          </div>
        </motion.div>

        {/* Deliverables (The Rectangles in Sketch) */}
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="pl-8 md:pl-20 flex flex-col gap-2"
          >
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Key Deliverables
            </div>
            {phase.deliverables.map((item, idx) => (
              <DeliverableCard key={item.id} item={item} index={idx} />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PhaseNode;