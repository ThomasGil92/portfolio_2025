"use client";
import {
  Home,
  BookOpen,
  Github,
  Linkedin,
  Youtube,

  // Sun,
} from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

const scrollToSection = (sectionId: string) => {
  if (sectionId.startsWith('#')) {
    sectionId = sectionId.substring(1);
  }
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className='fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200 dark:border-gray-700 z-50'>
      <div className='flex items-center gap-6'>
        <Link
       
          href='/#hero'
          className='text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors'
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault();
              scrollToSection('hero');
            }
          }}
        >
          <Home size={20} aria-label='Home' />
        </Link>
        <div className='h-5 w-px bg-gray-200 dark:bg-gray-700' />
        <Link
          href='#about'
          className='text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors'
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault();
              scrollToSection('about');
            }
          }}
        >
          <BookOpen size={20} aria-label='About' />
        </Link>
        <div className='h-5 w-px bg-gray-200 dark:bg-gray-700' />
        <Link
          href='https://github.com/ThomasGil92'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors'
        >
          <Github size={20} aria-label='GitHub' />
        </Link>
        <div className='h-5 w-px bg-gray-200 dark:bg-gray-700' />
        <Link
          href='https://www.linkedin.com/in/thomas-gil-dev/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors'
        >
          <Linkedin size={20} aria-label='LinkedIn' />
        </Link>

        <div className='h-5 w-px bg-gray-200 dark:bg-gray-700' />
        <Link
          href='https://www.youtube.com/@neocode_js'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors'
        >
          <Youtube size={20} aria-label='YouTube' />
        </Link>
        <div className='h-5 w-px bg-gray-200 dark:bg-gray-700' />
        <Link
          href='https://medium.com/@tgil849'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors'
        >
          <svg width='20' height='20' viewBox='0 0 24 24' fill='currentColor'>
            <path d='M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.55 5.75-1.23 5.75-.68 0-1.22-2.58-1.22-5.75s.54-5.75 1.22-5.75C23.45 6.25 24 8.83 24 12z' />
          </svg>
        </Link>
        {/*  <div className='h-5 w-px bg-gray-200 dark:bg-gray-700' />
        <button className='text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors'>
          <Sun size={20} aria-label='Toggle theme' />
        </button> */}
      </div>
    </nav>
  );
}
