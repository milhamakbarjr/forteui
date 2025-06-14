'use client';

import { Button } from '@forteui/core';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconBrandGithub } from '@tabler/icons-react';

export function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="border-b border-gray-200/50 bg-white/80 backdrop-blur-xl sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-main to-secondary-main rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">F</span>
                </div>
                <h1 className="text-xl font-bold text-gray-900">ForteUI</h1>
              </Link>
            </motion.div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              asChild 
              variant="outline-default" 
              size="sm"
              className="text-gray-600 hover:text-gray-900 border-transparent hover:border-gray-200"
            >
              <a 
                href="https://github.com/yourusername/forteui" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <IconBrandGithub size={18} />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </Button>
            
            <Button asChild variant="outline-default" size="sm">
              <Link href="/docs/introduction">Docs</Link>
            </Button>
            
            <Button asChild variant="primary" size="sm">
              <Link href="/docs/getting-started">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
