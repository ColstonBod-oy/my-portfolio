import React from 'react';
import { FaAndroid } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaPhp } from 'react-icons/fa';
import { SiExpo } from 'react-icons/si';
import poblacionImg from '@/public/poblacion.png';
import parapoImg from '@/public/parapo.jpg';
import helpmateImg from '@/public/helpmate.jpg';
import ctfImg from '@/public/ctf.jpg';
import wecImg from '@/public/wec.png';
import routeImg from '@/public/route-generator.png';
import korgeeImg from '@/public/korgee.png';

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
    title: 'Freelance Web Developer',
    location: 'Baguio, PH',
    description:
      'I did freelance work and implemented a mobile-first, responsive design for a website using React, React-Bootstrap, and Parcel Bundler, while using Netlify for deployment.',
    icon: React.createElement(FaReact),
    date: '2020 - 2021',
  },
  {
    title: 'Software Engineer Intern',
    location: 'Makati, PH',
    description:
      'I worked as an intern for a startup e-commerce company that utilized CS-Cart for its development. My role involved being a web developer for the CTA of the online marketplace and launching its mobile app on the Android and iOS app stores.',
    icon: React.createElement(FaPhp),
    date: '2021 - 2022',
  },
  {
    title: 'CTO / Lead Android Developer',
    location: 'Baguio, PH',
    description:
      "I led the development of a mobile navigation app as the CTO for a startup in my university's incubator program, leveraging Mapbox APIs and SDKs.",
    icon: React.createElement(FaAndroid),
    date: '2023 - 2024',
  },
  {
    title: 'Lead React Native Developer',
    location: 'Baguio, PH',
    description:
      "I worked for an outsourcing and offshoring consulting company as part of my university's internship requirement, where I was later promoted as the company's contract-based Lead React Native Developer. I am open to full-time opportunities.",
    icon: React.createElement(SiExpo),
    date: '2024 - Present',
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
      "Served as the CTO for one of my university's startup companies, developing an app to enhance the accessibility of public utility vehicles in Baguio, Philippines.",
    tags: ['Mapbox', 'Android', 'Kotlin', 'Firebase'],
    imageUrl: parapoImg,
    linkUrl: 'https://github.com/ColstonBod-oy/para-po',
  },
  {
    title: 'Map Route Generator',
    description:
      'I created this online tool for our startup, Para Po!, to generate clean paths and display directions for custom routes using the Mapbox Map Matching API.',
    tags: ['Mapbox GL', 'JavaScript', 'Routing', 'Directions'],
    imageUrl: routeImg,
    linkUrl: 'https://colstonbod-oy.github.io/para-po-route-generator/',
  },
  {
    title: 'Korgee',
    description:
      'This is a 2D platformer game template that I built using the KorGe game engine, with Gradle and Kotlin DSL.',
    tags: ['KorGe', 'Kotlin', 'Aseprite', 'LDtk'],
    imageUrl: korgeeImg,
    linkUrl: 'https://github.com/ColstonBod-oy/korgee',
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
  {
    title: 'Wisdom eBooks Club',
    description:
      'I developed a multi-platform library system for an outsourcing and offshoring consulting company, using Tamagui, Solito, Next.js, and Expo in a monorepo architecture.',
    tags: ['Tamagui', 'Solito', 'Next', 'Expo'],
    imageUrl: wecImg,
    linkUrl:
      'https://www.canva.com/design/DAGYQNCIYOQ/bM96c4apZ6rsvhHkWtRnEQ/view?utm_content=DAGYQNCIYOQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h85b6e34d1f',
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
  'Tamagui',
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
