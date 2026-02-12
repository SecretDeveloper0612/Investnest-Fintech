
import React from 'react';
import { Shield, BarChart3, Search, Users } from 'lucide-react';
import { NavItem, Pillar, Service, BlogPost } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Strategies', path: '/services' },
  { label: 'Philosophy', path: '/philosophy' },
  { label: 'Insights', path: '/insights' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const PILLARS: Pillar[] = [
  {
    title: 'Research-Driven',
    description: 'Our decisions are anchored in rigorous, data-backed quantitative and qualitative research.',
    icon: <Search className="w-6 h-6" />,
  },
  {
    title: 'Risk-Managed',
    description: 'Capital preservation is our priority. We employ sophisticated risk mitigation frameworks.',
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: 'Transparent',
    description: 'Complete visibility into your portfolio, fees, and decision-making processes.',
    icon: <BarChart3 className="w-6 h-6" />,
  },
  {
    title: 'Client-First',
    description: 'We align our interests with yours, building long-term partnerships rooted in trust.',
    icon: <Users className="w-6 h-6" />,
  },
];

export const SERVICES: Service[] = [
  {
    id: 'aif',
    title: 'Alternative Investment Funds',
    shortDesc: 'Unlock sophisticated strategies beyond traditional markets.',
    longDesc: 'Our AIF vertical offers HNIs access to private equity, venture capital, and hedge fund strategies designed for alpha generation and portfolio diversification.',
    benefits: ['Low correlation to public markets', 'Access to institutional-grade deal flow', 'Active management'],
  },
  {
    id: 'pms',
    title: 'Portfolio Management Services',
    shortDesc: 'Personalized equity portfolios managed by experts.',
    longDesc: 'Direct equity ownership with the benefit of professional management. We focus on concentrated portfolios of high-conviction stocks.',
    benefits: ['Customized asset allocation', 'Direct ownership of securities', 'Tax-efficient structures'],
  },
  {
    id: 'mutual-funds',
    title: 'Mutual Fund Advisory',
    shortDesc: 'Scientific fund selection for consistent wealth creation.',
    longDesc: 'We move beyond simple ratings, using deep performance attribution and manager analysis to build resilient MF portfolios.',
    benefits: ['Research-backed fund selection', 'Regular rebalancing', 'Goal-based planning'],
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Q3 Market Outlook: Navigating Volatility',
    category: 'Market Commentary',
    date: 'Oct 12, 2023',
    excerpt: 'An analysis of global macroeconomic trends and their impact on Indian domestic markets.',
    image: 'https://picsum.photos/seed/market1/600/400',
  },
  {
    id: 2,
    title: 'The Rise of Private Credit in India',
    category: 'AIF Insights',
    date: 'Sep 28, 2023',
    excerpt: 'Exploring why private credit is becoming an essential component of alternative portfolios.',
    image: 'https://picsum.photos/seed/credit/600/400',
  },
  {
    id: 3,
    title: 'Value vs Growth: Finding the Equilibrium',
    category: 'Investment Strategy',
    date: 'Sep 15, 2023',
    excerpt: 'Our perspective on balancing investment styles in a changing interest rate environment.',
    image: 'https://picsum.photos/seed/value/600/400',
  },
];
