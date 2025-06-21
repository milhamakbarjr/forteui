'use client';

import { Button } from '@forteui/core';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconBrandGithub, IconMenu2, IconX } from '@tabler/icons-react';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export function Header() {
  const [isClient, setIsClient] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header 
      ref={headerRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="border-b border-gray-200/50 bg-white/80 backdrop-blur-xl sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 sm:gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo-forteui-colored.svg"
                  alt="ForteUI Logo"
                  width={1358}
                  height={431}
                  className="w-auto h-8 sm:h-9"
                />
              </Link>
            </motion.div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-2 sm:gap-3">
              <Button 
                asChild 
                variant="outline-default" 
                size="sm"
                className="text-gray-600 hover:text-gray-900 border-transparent hover:border-gray-200 px-2 sm:px-3 py-2 min-h-[44px]"
              >
                <a 
                  href="https://github.com/milhamakbarjr/forteui" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 sm:gap-2"
                >
                  <IconBrandGithub size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-xs sm:text-sm">GitHub</span>
                </a>
              </Button>
              
              <Button asChild variant="outline-default" size="sm" className="px-3 sm:px-4 py-2 text-xs sm:text-sm min-h-[44px]">
                <Link href="/docs/introduction">Docs</Link>
              </Button>
            </div>
            
            {/* Get Started - Always visible */}
            <Button asChild variant="primary" size="sm" className="px-3 sm:px-4 py-2 text-xs sm:text-sm min-h-[44px]">
              <Link href="/docs/getting-started">Get Started</Link>
            </Button>
            
            {/* Mobile Menu Button - Only visible on mobile */}
            <Button
              variant="outline-default"
              size="sm"
              onClick={toggleMobileMenu}
              className="md:hidden p-2 min-h-[44px] w-11"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <IconX size={18} /> : <IconMenu2 size={18} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-4 pt-4 border-t border-gray-200/50"
          >
            <div className="flex flex-col gap-3">
              <Button 
                asChild 
                variant="outline-default" 
                size="sm"
                className="justify-start text-gray-600 hover:text-gray-900 border-transparent hover:border-gray-200 px-3 py-3 min-h-[48px] w-full"
                onClick={closeMobileMenu}
              >
                <a 
                  href="https://github.com/milhamakbarjr/forteui" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <IconBrandGithub size={18} />
                  <span className="text-sm">View on GitHub</span>
                </a>
              </Button>
              
              <Button 
                asChild 
                variant="outline-default" 
                size="sm" 
                className="justify-start px-3 py-3 text-sm min-h-[48px] w-full"
                onClick={closeMobileMenu}
              >
                <Link href="/docs/introduction" className="flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                  </svg>
                  <span>Documentation</span>
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
