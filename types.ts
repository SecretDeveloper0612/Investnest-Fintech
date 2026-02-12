
// Added React import to support React.ReactNode type
import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Pillar {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
}