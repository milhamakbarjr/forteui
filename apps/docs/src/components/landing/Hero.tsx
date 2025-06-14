'use client';

import { Button } from '@forteui/core';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconArrowRight, IconSparkles, IconCode, IconPalette } from '@tabler/icons-react';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const floatingIcons = [
    { icon: IconCode, delay: 0, x: -20, y: -30 },
    { icon: IconPalette, delay: 1, x: 20, y: -20 },
    { icon: IconSparkles, delay: 2, x: -15, y: 25 }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary-50/30" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-secondary-50/20 to-transparent" />
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map(({ icon: Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            className="absolute text-primary-200"
            style={{
              left: `${20 + (index * 30)}%`,
              top: `${30 + (index * 20)}%`,
            }}
            animate={{
              y: [y, y - 10, y],
              x: [x, x + 5, x],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: delay,
              ease: "easeInOut"
            }}
          >
            <Icon size={24} />
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="relative max-w-6xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-200 rounded-full text-primary-700 text-sm font-medium mb-8">
            <IconSparkles size={16} />
            <span>17 Production-Ready Components</span>
          </div>
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight"
          variants={itemVariants}
        >
          Build beautiful interfaces{' '}
          <br className="hidden sm:block" />
          with{' '}
          <motion.span 
            className="text-transparent bg-clip-text bg-gradient-to-r from-primary-main via-secondary-main to-primary-main bg-size-200 bg-pos-0"
            animate={{
              backgroundPosition: ['0%', '100%', '0%']
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: '200% 100%'
            }}
          >
            ForteUI
          </motion.span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto"
          variants={itemVariants}
        >
          A production-ready React component library built with TypeScript, 
          featuring comprehensive design tokens and Plus Jakarta Sans typography.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild variant="primary" size="lg" className="text-base px-8 py-4">
              <Link href="/docs/getting-started" className="flex items-center gap-2">
                Get Started
                <IconArrowRight size={18} />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild variant="outline-default" size="lg" className="text-base px-8 py-4">
              <Link href="/docs/components">View Components</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Feature highlights */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-600 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          {[
            { label: "TypeScript", icon: "🔷" },
            { label: "Accessible", icon: "♿" },
            { label: "Mobile First", icon: "📱" },
            { label: "Open Source", icon: "🌟" }
          ].map((feature, index) => (
            <motion.div 
              key={feature.label}
              className="flex items-center gap-2 justify-center"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-primary-main">{feature.icon}</span>
              <span className="font-medium">{feature.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
