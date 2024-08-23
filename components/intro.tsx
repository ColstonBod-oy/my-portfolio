'use client';

import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import PlanetCanvas from './canvas/planet';

export default function Intro() {
  const { ref } = useSectionInView('Home');
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id='home'
      className='mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0'
    >
      <div className='flex items-center justify-center'>
        <div
          style={{
            width: '100vw',
            height: '60vh',
          }}
        >
          <PlanetCanvas />
        </div>
      </div>

      <motion.div
        className='flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href='#contact'
          className='flex items-center gap-2 py-3 text-white transition bg-gray-900 rounded-full outline-none group px-7 hover:bg-gray-950'
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{' '}
          <BsArrowRight className='transition opacity-70 group-hover:translate-x-1' />
        </Link>

        <a
          className='flex items-center gap-2 py-3 transition bg-white rounded-full outline-none cursor-pointer borderBlack group px-7 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/5'
          href='/Resume Colston Bod-oy.pdf'
          download
        >
          Download Resume{' '}
          <HiDownload className='transition opacity-60 group-hover:translate-y-1' />
        </a>

        <a
          className='flex items-center gap-2 p-4 text-gray-700 transition bg-white rounded-full cursor-pointer borderBlack hover:text-gray-950 dark:bg-white/10 dark:text-white/60 dark:hover:text-white/90'
          href='https://www.linkedin.com/in/colston-bod-oy-60a7521a4/'
          target='_blank'
        >
          <BsLinkedin />
        </a>

        <a
          className='borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-[1.35rem] text-gray-700 transition hover:text-gray-950 dark:bg-white/10 dark:text-white/60 dark:hover:text-white/90'
          href='https://github.com/ColstonBod-oy'
          target='_blank'
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
