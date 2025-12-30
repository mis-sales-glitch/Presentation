import { 
  PencilRuler, 
  Factory, 
  Wrench, 
  ClipboardCheck 
} from 'lucide-react';
import { Phase } from './types';

export const PHASES: Phase[] = [
  {
    id: 'concept',
    title: 'Concept Planning & Design',
    description: 'Initial blueprinting and environmental analysis.',
    icon: PencilRuler,
    position: 'left',
    color: 'bg-blue-600',
    deliverables: [
      { id: 'd1', label: 'Engineering Drawings', type: 'document' },
      { id: 'd2', label: 'Heat Loads Analysis', type: 'chart' },
      { id: 'd3', label: 'Survey Forms', type: 'form' },
      { id: 'd4', label: 'Time Charts / Gantt', type: 'chart' },
    ]
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing & Sourcing',
    description: 'Production of core components and logistics.',
    icon: Factory,
    position: 'center', // Slightly indented in sketch
    color: 'bg-indigo-600',
    deliverables: [
      { id: 'm1', label: 'System Master Plan', type: 'document' },
      { id: 'm2', label: 'Procurement Logs', type: 'form' },
    ]
  },
  {
    id: 'installation',
    title: 'Installation & Project Management',
    description: 'On-site execution and system integration.',
    icon: Wrench,
    position: 'right', // Further indented/right in sketch
    color: 'bg-violet-600',
    deliverables: [
      { id: 'i1', label: 'System Master (Execution)', type: 'document' },
      { id: 'i2', label: 'Site Safety Reports', type: 'form' },
    ]
  },
  {
    id: 'testing',
    title: 'Testing, Commissioning & Support',
    description: 'Validation, certification, and ongoing maintenance.',
    icon: ClipboardCheck,
    position: 'left', // Back to left/bottom in sketch
    color: 'bg-emerald-600',
    deliverables: [
      { id: 't1', label: 'Test Reports', type: 'document' },
      { id: 't2', label: 'Validation Certificates', type: 'certificate' },
      { id: 't3', label: 'AMC & CMC Briefs', type: 'document' },
      { id: 't4', label: 'Management System Reports', type: 'document' },
    ]
  }
];

export const SIDEBAR_TEXT = "Conceptualized, Engineered, Delivered & Supported";