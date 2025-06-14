'use client';

import { Button } from '@forteui/core';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconBrandGithub } from '@tabler/icons-react';
import { useState, useEffect } from 'react';

export function Header() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <motion.header 
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
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-primary-main to-secondary-main rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs sm:text-sm">F</span>
                </div>
                <h1 className="text-lg sm:text-xl font-bold text-gray-900">ForteUI</h1>
              </Link>
            </motion.div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-3">
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
            
            <Button asChild variant="primary" size="sm" className="px-3 sm:px-4 py-2 text-xs sm:text-sm min-h-[44px]">
              <Link href="/docs/getting-started">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
