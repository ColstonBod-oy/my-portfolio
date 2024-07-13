'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import Image from 'next/image';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40'
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
      <p className='mb-3'>
        I am currently in my third year of taking my BS in Computer Science
        course. My journey as a developer began at a very young age during my
        1st year of junior high school when we were taught to write simple
        scripts using <span className='font-medium'>Visual Basic</span>.{' '}
        <span className='italic'>In my senior years of high school</span>, I
        started taking programming seriously and became a self-taught Web
        Developer.
        <br />I also dabbled in Game Development, but eventually, I discovered{' '}
        <span className='underline'>Mobile Development</span>, which became the
        area I am most passionate about. I am proficient with technologies such
        as{' '}
        <span className='font-medium'>
          React, Next.js, React Native, Expo, Firebase, PHP, and Laravel
        </span>
        . I am currently seeking for an{' '}
        <span className='font-medium'>internship or a full-time position</span>{' '}
        as a Web or Mobile Developer.
      </p>

      <p>
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