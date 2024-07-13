import React from 'react';

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
      <small className='mb-2 block text-xs'>
        &copy; 2030 Colston Bod-oy. All rights reserved.
      </small>
      <span className='text-xs'>Credits: </span>
      <a
        className='text-xs'
        href='https://www.flaticon.com/free-icons/birthday-and-party'
        title='birthday and party icons'
      >
        Birthday and party icons created by Pixel perfect - Flaticon,
      </a>
      <br />
      <a
        className='text-xs'
        href='https://sketchfab.com/3d-models/low-poly-little-prince-0c9a4830e94f4b10b8ec7b4a6e7370d3'
        title='little prince 3d model'
      >
        This work is based on "Low Poly Little Prince"
        (https://sketchfab.com/3d-models/low-poly-little-prince-0c9a4830e94f4b10b8ec7b4a6e7370d3)
      </a>
      <br />
      <a
        className='text-xs'
        href='https://sketchfab.com/Jimmy.Reilly'
        title='Jimmy Reilly'
      >
        by JimmyReilly (https://sketchfab.com/Jimmy.Reilly)
      </a>{' '}
      <a
        className='text-xs'
        href='http://creativecommons.org/licenses/by/4.0/'
        title='cc license'
      >
        licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
      </a>
      <p className='text-xs'>
        <span className='font-semibold'>About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
