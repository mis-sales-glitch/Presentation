import { LucideIcon } from 'lucide-react';

export interface Deliverable {
  id: string;
  label: string;
  type: 'document' | 'chart' | 'form' | 'certificate';
}

export interface Phase {
  id: string;
  title: string;
  description?: string;
  icon: LucideIcon;
  deliverables: Deliverable[];
  position: 'left' | 'center' | 'right';
  color: string;
}