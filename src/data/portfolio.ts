import type { PersonalInfo, SkillGroup, Project, StatItem, NavLink, ExperienceItem, EducationItem } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Truptimayee Sahu',
  title: 'Full Stack Developer',
  tagline: 'Building scalable, pixel-perfect web applications — from payment gateways to geolocation-powered marketplaces.',
  location: 'Bhubaneswar, Odisha',
  email: 'truptisahu51@gmail.com',
  github: 'https://github.com/Truptimayee22',
  linkedin: 'https://linkedin.com/in/truptimayee-sahu-b01175230',
  availableForFreelance: true,
};

export const navLinks: NavLink[] = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Experience', to: 'experience' },
  { label: 'Education', to: 'education' },
  { label: 'Contact', to: 'contact' },
];

export const aboutStats: StatItem[] = [
  { value: '2+', label: 'Years Experience' },
  { value: '4+', label: 'Projects Shipped' },
  { value: '9.09', label: 'CGPA' },
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    icon: '🎨',
    color: '#c8f565',
    skills: ['React.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: '#f5c542',
    skills: ['Node.js', 'Express', 'TypeScript', 'REST APIs', 'JWT Auth', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'Tools & Infra',
    icon: '☁️',
    color: '#00D4FF',
    skills: ['Git', 'GitHub', 'AWS', 'Vite', 'Drizzle ORM', 'PhonePe API', 'Shiprocket'],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Student Ecosystem',
    description: 'A full-stack hyper-local marketplace connecting students with nearby services within a 10 km radius using Leaflet.js geolocation. Includes vendor dashboards, order tracking via Shiprocket API, and PhonePe payment integration.',
    tech: ['React.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Drizzle ORM', 'Leaflet.js', 'PhonePe', 'Shiprocket'],
    metrics: ['Hyper-local marketplace', 'Shiprocket tracking', 'PhonePe payment integration'],
    type: 'Full Stack',
    featured: true,
    github: '#',
    live: '#',
  },
  {
    id: 2,
    title: 'Bidyasagar Classes',
    description: 'A comprehensive EdTech platform for competitive exam prep. Features a responsive student dashboard, batch management, online tests, assignment tracking, and secure payment/admission — backed by JWT authentication and MongoDB.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'Tailwind CSS', 'Material UI'],
    metrics: ['Exam Prep EdTech', 'JWT Auth & Roles', 'Responsive dashboards'],
    type: 'Full Stack',
    featured: true,
    github: '#',
    live: '#',
  },
  {
    id: 3,
    title: 'Travoinspire',
    description: 'Corporate panel UI for a travel platform — built with TypeScript and React, integrated with AWS for scalable and secure hosting. Focus on performance-first architecture and responsive modern design.',
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'AWS'],
    metrics: ['Corporate dashboard', 'AWS integration', 'Performance-focused'],
    type: 'Frontend',
    featured: false,
    github: '#',
    live: '#',
  },
  {
    id: 4,
    title: 'Dodeel',
    description: 'Full-stack platform built on the MERN stack with AWS integration. Designed with a user-centric philosophy — prioritizing usability, engagement, and scalable infrastructure for real-world product demands.',
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'AWS'],
    metrics: ['MERN Stack SaaS', 'AWS architecture', 'User-centric UI'],
    type: 'Full Stack',
    featured: false,
    github: '#',
    live: '#',
  },
];

export const experiences: ExperienceItem[] = [
  {
    role: 'React & Full Stack Developer',
    company: 'Gravitones',
    period: 'May 2024 — Present',
    location: 'Bhubaneswar, India',
    points: [
      'Developed and maintained full-stack web apps using React.js, TypeScript, and Node.js — scalable and high-performance.',
      'Integrated RESTful APIs into frontend applications for seamless data communication and UX.',
      'Implemented secure payment gateway integrations for reliable transaction processing.',
      'Built and optimised admin dashboards and management panels for operational workflows.',
      'Implemented authentication, role-based access control, and JWT-based security.',
      'Collaborated with cross-functional teams on feature delivery, bug fixes, and performance improvements.',
      'Optimised UI responsiveness using modern frontend best practices.',
    ],
  },
];

export const education: EducationItem = {
  degree: 'Master of Computer Applications',
  school: 'GIET University — Gunupur, Odisha',
  period: 'October 2021 – March 2023',
  cgpa: '9.09',
};
