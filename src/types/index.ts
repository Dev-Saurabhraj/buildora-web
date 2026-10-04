import { ReactNode } from 'react';

export interface ChipData {
  id: string;
  label: string;
  iconBg: string;
  iconColor: string;
  icon: ReactNode;
  initialX: number;
  initialY: number;
  rotation: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
}

export interface Pillar {
  icon: ReactNode;
  label: string;
}

export interface CaseStudy {
  id: string;
  name: string;
  tags: string[];
}
