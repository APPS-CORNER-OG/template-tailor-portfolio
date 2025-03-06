
import { ReactNode } from 'react';

export type TemplateColor = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
};

export type TemplateFonts = {
  heading: string;
  body: string;
};

export type TemplateLayout = 'single-page' | 'multi-page' | 'card-based' | 'timeline';

export type TemplateType = 'modern' | 'minimal' | 'creative' | 'professional';

export interface Portfolio {
  personal: {
    fullName: string;
    title: string;
    bio: string;
    avatar: string;
    email: string;
    phone: string;
    location: string;
  };
  experience: Array<{
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
    achievements: string[];
  }>;
  education: Array<{
    id: string;
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  skills: Array<{
    id: string;
    name: string;
    level: number; // 1-5
    category: string;
  }>;
  projects: Array<{
    id: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
    link: string;
    featured: boolean;
  }>;
  testimonials: Array<{
    id: string;
    name: string;
    position: string;
    company: string;
    text: string;
    avatar: string;
  }>;
  social: Array<{
    id: string;
    platform: string;
    url: string;
    icon: string;
  }>;
}

export interface Template {
  id: string;
  name: string;
  type: TemplateType;
  description: string;
  thumbnail: string;
  colors: TemplateColor;
  fonts: TemplateFonts;
  layout: TemplateLayout;
  features: string[];
  premium: boolean;
}

export const defaultPortfolio: Portfolio = {
  personal: {
    fullName: 'John Doe',
    title: 'Product Designer & Developer',
    bio: 'I am a passionate designer and developer with a focus on creating beautiful and functional digital experiences.',
    avatar: '',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA'
  },
  experience: [
    {
      id: '1',
      company: 'Design Studio',
      position: 'Senior UI/UX Designer',
      startDate: '2020-01',
      endDate: 'Present',
      description: 'Leading design projects for various clients and collaborating with development teams.',
      achievements: [
        'Redesigned the company website, increasing conversion by 30%',
        'Established design system used across all projects',
        'Mentored junior designers'
      ]
    }
  ],
  education: [
    {
      id: '1',
      institution: 'University of Design',
      degree: 'Bachelor of Arts',
      field: 'Graphic Design',
      startDate: '2014-09',
      endDate: '2018-06',
      description: 'Focused on digital design and interactive media'
    }
  ],
  skills: [
    {
      id: '1',
      name: 'UI Design',
      level: 5,
      category: 'Design'
    },
    {
      id: '2',
      name: 'React',
      level: 4,
      category: 'Development'
    },
    {
      id: '3',
      name: 'Figma',
      level: 5,
      category: 'Tools'
    }
  ],
  projects: [
    {
      id: '1',
      title: 'E-commerce Redesign',
      description: 'Complete redesign of an e-commerce platform focused on improving user experience and conversion.',
      tags: ['UI/UX', 'E-commerce', 'Figma'],
      image: '',
      link: 'https://example.com/project',
      featured: true
    }
  ],
  testimonials: [
    {
      id: '1',
      name: 'Jane Smith',
      position: 'CEO',
      company: 'TechStart Inc.',
      text: 'John delivered exceptional design work that perfectly captured our brand vision while improving our user experience.',
      avatar: ''
    }
  ],
  social: [
    {
      id: '1',
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/johndoe',
      icon: 'linkedin'
    },
    {
      id: '2',
      platform: 'Twitter',
      url: 'https://twitter.com/johndoe',
      icon: 'twitter'
    },
    {
      id: '3',
      platform: 'Dribbble',
      url: 'https://dribbble.com/johndoe',
      icon: 'dribbble'
    }
  ]
};

export const templates: Template[] = [
  {
    id: 'modern-1',
    name: 'Sleek',
    type: 'modern',
    description: 'A sleek, contemporary design with bold typography and ample white space.',
    thumbnail: '/templates/modern.jpg',
    colors: {
      primary: '#0A84FF',
      secondary: '#F2F2F7',
      accent: '#34C759',
      background: '#FFFFFF',
      text: '#1C1C1E'
    },
    fonts: {
      heading: 'sans',
      body: 'sans'
    },
    layout: 'single-page',
    features: ['Animated transitions', 'Sticky navigation', 'Project gallery'],
    premium: false
  },
  {
    id: 'minimal-1',
    name: 'Pure',
    type: 'minimal',
    description: 'An ultra-minimalist approach focusing on content with subtle design elements.',
    thumbnail: '/templates/minimal.jpg',
    colors: {
      primary: '#000000',
      secondary: '#F5F5F5',
      accent: '#DDDDDD',
      background: '#FFFFFF',
      text: '#333333'
    },
    fonts: {
      heading: 'display',
      body: 'sans'
    },
    layout: 'single-page',
    features: ['Content-focused', 'Elegant typography', 'Subtle animations'],
    premium: false
  },
  {
    id: 'creative-1',
    name: 'Vivid',
    type: 'creative',
    description: 'An expressive template with unique layouts and visual elements for creative professionals.',
    thumbnail: '/templates/creative.jpg',
    colors: {
      primary: '#FF3B30',
      secondary: '#A2845E',
      accent: '#5E5CE6',
      background: '#FAFAFA',
      text: '#222222'
    },
    fonts: {
      heading: 'display',
      body: 'sans'
    },
    layout: 'card-based',
    features: ['Unique layouts', 'Bold color options', 'Interactive elements'],
    premium: true
  },
  {
    id: 'professional-1',
    name: 'Executive',
    type: 'professional',
    description: 'A refined, business-focused template that conveys professionalism and expertise.',
    thumbnail: '/templates/professional.jpg',
    colors: {
      primary: '#1E5180',
      secondary: '#F0F4F8',
      accent: '#007AFF',
      background: '#FFFFFF',
      text: '#1C1C1E'
    },
    fonts: {
      heading: 'sans',
      body: 'sans'
    },
    layout: 'multi-page',
    features: ['Business-focused sections', 'Clean layout', 'PDF resume integration'],
    premium: true
  }
];

// Mock function to get a template by ID
export const getTemplateById = (id: string): Template | undefined => {
  return templates.find(template => template.id === id);
};
