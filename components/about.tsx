'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import Image from 'next/image';

export default function About() {
  const { ref } = useSectionInView('About', 0.4);

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] scroll-mt-28 leading-8 sm:mb-40'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <div className='flex items-center justify-center'>
        <Image
          src='/my-face.jpg'
          alt='Colston portrait'
          width='192'
          height='192'
          quality='95'
          priority={true}
          className='mb-8 h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl'
        />
      </div>
      <SectionHeading>About me</SectionHeading>
      <p className='text-justify indent-8'>
        Hello, I'm Colston 👋.{' '}
        <span className='italic'>A Computer Science Student</span> 📖 /{' '}
        <span className='underline'>React & Android Developer</span> 👨‍💻. My
        journey as an aspiring developer began at a very young age, during my
        first year of junior high school, where I learned to write simple
        scripts using <span className='font-medium'>Visual Basic</span>.{' '}
        <span className='italic'>In my senior years of high school</span>, I
        started taking programming seriously and became a self-taught Web
        Developer.
      </p>

      <p className='mb-3 text-justify indent-8'>
        I also tried Game Development, but eventually, I got really into
        creating mobile apps, which became my primary area of expertise. I am
        proficient with technologies such as{' '}
        <span className='font-medium'>
          React, Next.js, React Native, Expo, Firebase, and Laravel
        </span>
        . I am currently seeking for{' '}
        <span className='font-medium'>internships or full-time positions</span>.
      </p>

      <p className='text-justify indent-8'>
        <span className='italic'>When I'm not coding</span>, I enjoy playing
        video games, watching movies, and going out for long walks. I also enjoy{' '}
        <span className='font-medium'>learning new things</span>. I am currently
        learning about{' '}
        <span className='font-medium'>
          Machine Learning, Data Science, and Cybersecurity
        </span>{' '}
        through CTF challenges.
      </p>
    </motion.section>
  );
}
