import React from 'react';
import { motion } from 'framer-motion';
import { FileText, BarChart2, ClipboardList, Award } from 'lucide-react';
import { Deliverable } from '../types';

interface Props {
  item: Deliverable;
  index: number;
}

const DeliverableCard: React.FC<Props> = ({ item, index }) => {
  const getIcon = () => {
    switch (item.type) {
      case 'chart': return <BarChart2 size={16} />;
      case 'form': return <ClipboardList size={16} />;
      case 'certificate': return <Award size={16} />;
      default: return <FileText size={16} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="flex items-center gap-3 p-3 bg-white border border-slate-200 shadow-sm rounded-lg hover:shadow-md transition-shadow cursor-default"
    >
      <div className="text-slate-400">
        {getIcon()}
      </div>
      <span className="text-sm font-medium text-slate-700">{item.label}</span>
    </motion.div>
  );
};

export default DeliverableCard;