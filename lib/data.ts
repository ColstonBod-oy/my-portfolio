import React from 'react';
import { FaAndroid } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaPhp } from 'react-icons/fa';
import poblacionImg from '@/public/poblacion.png';
import parapoImg from '@/public/parapo.jpg';
import helpmateImg from '@/public/helpmate.jpg';
import ctfImg from '@/public/ctf.jpg';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Freelance Web Developer (Remote)',
    location: 'Baguio, PH',
    description:
      'I did freelance work and implemented a mobile-first, responsive design for a website using React, React-Bootstrap, and Parcel Bundler, while using Netlify for deployment.',
    icon: React.createElement(FaReact),
    date: '2020 - 2021',
  },
  {
    title: 'Web / Mobile Dev Intern (Remote)',
    location: 'Makati, PH',
    description:
      'I worked as an intern for a startup e-commerce company that utilized CS-Cart for its development. My role involved being a web developer for the CTA of our online marketplace and launching our mobile app on the Android and iOS app stores.',
    icon: React.createElement(FaPhp),
    date: '2021 - 2022',
  },
  {
    title: 'Android Mobile Developer (Part Time)',
    location: 'Baguio, PH',
    description:
      "I am currently working part-time as a CTO for one of the startups in our university's incubator program, where I use Mapbox APIs to develop a mobile navigation app. I am open to full-time opportunities.",
    icon: React.createElement(FaAndroid),
    date: '2023 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'Poblacion.ph',
    description:
      "I worked as a web and mobile dev intern on this startup project for 9 months. It's an e-commerce platform for local businesses in the Philippines.",
    tags: ['CS-Cart', 'JavaScript', 'PHP', 'React Native'],
    imageUrl: poblacionImg,
    linkUrl: 'https://youtu.be/FyKWEZ_4oYM?t=1115',
  },
  {
    title: 'Para Po!',
    description:
      "I'm currently working as the CTO of a start-up company. It's a navigation app designed to make public utility vehicles in the Philippines more accessible.",
    tags: ['Mapbox', 'Android', 'Kotlin', 'Firebase'],
    imageUrl: parapoImg,
    linkUrl:
      'https://www.facebook.com/photo?fbid=868688585300072&set=pcb.863545652481032',
  },
  {
    title: 'Helpmate',
    description:
      'This is my thesis project, a mobile app that enables communication through the use of Bluetooth Low Energy (BLE). It has audio and text sending capabilities.',
    tags: ['Nearby Connections API', 'Android', 'Java', 'Material UI'],
    imageUrl: helpmateImg,
    linkUrl: 'https://github.com/ColstonBod-oy/helpmate',
  },
  {
    title: 'Hack4Gov 2024',
    description:
      'I participated in Hack4Gov 2024, my first CTF challenge, where our team finished as the 3rd runner-up. The challenge was in Jeopardy-style format.',
    tags: ['Web Exploitation', 'NetSec', 'Cryptography', 'Forensics'],
    imageUrl: ctfImg,
    linkUrl:
      'https://www.facebook.com/photo/?fbid=490579350209886&set=pcb.490580930209728',
  },
] as const;

export const skillsData = [
  'Java',
  'Kotlin',
  'Javascript',
  'Typescript',
  'React',
  'React Native',
  'Expo',
  'Next.js',
  'Framer Motion',
  'Tailwind CSS',
  'SQL',
  'PHP',
  'Laravel',
  'Firebase',
  'Python',
  'Pandas',
  'NumPy',
  'Matplotlib',
  'TensorFlow',
  'Scikit-Learn',
] as const;
