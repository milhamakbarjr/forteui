'use client';

import { Button, Card, Badge, Avatar, Chip, Input, Switch, Progress, Radio, Checkbox, Pagination, Alert } from '@forteui/core';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FloatingComponentWrapper } from './FloatingComponentWrapper';
import { 
  IconArrowRight, 
  IconSparkles, 
  IconBell,
  IconSearch,
  IconHeart,
  IconStar,
  IconCheck,
  IconWifi,
  IconSettings,
  IconDownload,
  IconTrendingUp
} from '@tabler/icons-react';

// Runtime validation to ensure components are properly imported
if (typeof window !== 'undefined') {
  const requiredComponents = { Button, Card, Badge, Chip, Input, Switch, Progress, Radio, Checkbox, Alert };
  const missingComponents = Object.entries(requiredComponents).filter(([name, component]) => !component);
  
  if (missingComponents.length > 0) {
    console.error('Missing ForteUI components:', missingComponents.map(([name]) => name));
  }
}

export function Hero() {
  // Hydration-safe animation state
  const [isClient, setIsClient] = useState(false);
  const [animationsEnabled, setAnimationsEnabled] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Enable animations after component mounts to prevent hydration mismatch
    const timer = setTimeout(() => {
      setAnimationsEnabled(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

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

  // Simplified floating components for better stability
  const floatingComponents = [
    // Avatar component showcase
    {
      id: 'avatar-card',
      component: (
        <Card className="p-4 bg-white/95 backdrop-blur-sm shadow-xl border border-gray-200/60">
          <div className="flex items-center gap-3">
            <Avatar 
              size="md" 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
              fallback="AC"
            />
            <div>
              <p className="font-medium text-sm text-gray-900">Alex Chen</p>
              <p className="text-xs text-gray-500">Product Designer</p>
            </div>
            <Badge variant="success">Active</Badge>
          </div>
        </Card>
      ),
      position: { left: '3%', top: '25%' },
      rotation: -5,
      delay: 0.5
    },
    // Switch component showcase
    {
      id: 'switch-card',
      component: (
        <Card className="p-5 bg-white/95 backdrop-blur-sm shadow-xl border border-gray-200/60 min-w-[200px]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                <IconSettings size={16} className="text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Preferences</p>
                <p className="text-xs text-gray-500">Customize your experience</p>
              </div>
            </div>
            <div className="space-y-3 pt-2 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Dark mode</span>
                <Switch defaultChecked={true} size="small" color="primary" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Notifications</span>
                <Switch defaultChecked={false} size="small" color="primary" />
              </div>
            </div>
          </div>
        </Card>
      ),
      position: { left: '15%', top: '8%' },
      rotation: -8,
      delay: 0.8
    },
    // Progress component showcase
    {
      id: 'progress-card',
      component: (
        <Card className="p-4 bg-white/95 backdrop-blur-sm shadow-xl border border-gray-200/60 w-56">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Upload Progress</span>
              <span className="text-xs text-gray-500">78%</span>
            </div>
            <Progress value={78} variant="linear" color="primary" size="md" />
            <div className="flex gap-2">
              <Chip size="small" variant="filled" color="info">Uploading</Chip>
              <Chip size="small" variant="outlined" color="default">3.2 MB</Chip>
            </div>
          </div>
        </Card>
      ),
      position: { right: '8%', top: '15%' },
      rotation: 5,
      delay: 1.0
    },
    // Alert component showcase
    {
      id: 'alert-card',
      component: (
        <Alert severity="success" className="shadow-xl border border-green-200/60 bg-white/95 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <span className="text-sm text-green-800 font-medium">Project saved successfully!</span>
          </div>
        </Alert>
      ),
      position: { right: '5%', top: '45%' },
      rotation: 8,
      delay: 1.5
    },
    // Pagination component showcase
    {
      id: 'pagination-card',
      component: (
        <Card className="p-5 bg-white/95 backdrop-blur-sm shadow-xl border border-gray-200/60 min-w-[300px]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-violet-200 rounded-xl flex items-center justify-center">
                <IconArrowRight size={16} className="text-purple-600" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900">Navigation</h4>
                <p className="text-xs text-gray-500">Page 15 of 100 results</p>
              </div>
            </div>
            <div className="pt-2 border-t border-gray-100 flex justify-center">
              <Pagination
                currentPage={15}
                totalPages={100}
                onPageChange={() => {}}
                variant="rounded"
                size="small"
                siblingCount={1}
              />
            </div>
          </div>
        </Card>
      ),
      position: { left: '12%', bottom: '15%' },
      rotation: -3,
      delay: 2.0
    },
    // Input and Chip component showcase
    {
      id: 'search-card',
      component: (
        <Card className="p-4 bg-white/95 backdrop-blur-sm shadow-xl border border-gray-200/60 w-64">
          <div className="space-y-3">
            <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
              <IconSearch size={16} className="text-gray-400" />
              <span className="text-sm text-gray-500">Search components...</span>
            </div>
            <div className="flex gap-1 flex-wrap">
              <Chip size="small" variant="outlined" color="default">Button</Chip>
              <Chip size="small" variant="filled" color="primary">Card</Chip>
              <Chip size="small" variant="outlined" color="secondary">Input</Chip>
            </div>
          </div>
        </Card>
      ),
      position: { right: '15%', bottom: '20%' },
      rotation: -6,
      delay: 2.5
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 flex items-start justify-center px-4 sm:px-6 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating UI Components - Only render if client-side and animations enabled */}
        <AnimatePresence>
          {isClient && floatingComponents.map(({ id, component, position, rotation, delay }) => (
            <motion.div
              key={id}
              className="absolute hidden xl:block pointer-events-auto"
              style={{
                ...position,
                transform: `rotate(${rotation}deg)`,
                zIndex: 10,
              }}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={animationsEnabled ? { 
                opacity: 1, 
                y: [0, -6, 0], 
                scale: 1,
                rotate: [rotation, rotation + 1, rotation - 1, rotation],
              } : { opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                opacity: { duration: 1, delay },
                scale: { duration: 1, delay },
                rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay }
              }}
              whileHover={{ 
                scale: 1.05,
                rotate: rotation + 3,
                transition: { duration: 0.2 }
              }}
              onAnimationComplete={() => {
                // Simple completion tracking
                if (process.env.NODE_ENV === 'development') {
                  console.log(`Animation completed for ${id}`);
                }
              }}
            >
              <FloatingComponentWrapper componentId={id}>
                {component}
              </FloatingComponentWrapper>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {/* Fallback static components for better compatibility */}
        {!isClient && (
          <div className="hidden xl:block">
            {floatingComponents.slice(0, 2).map(({ id, component, position, rotation }) => (
              <div
                key={`fallback-${id}`}
                className="absolute pointer-events-auto opacity-60"
                style={{
                  ...position,
                  transform: `rotate(${rotation}deg)`,
                  zIndex: 10,
                }}
              >
                {component}
              </div>
            ))}
          </div>
        )}
      </div>

      <motion.div 
        className="relative max-w-6xl mx-auto text-center z-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary-50 border border-primary-200 rounded-full text-primary-700 text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            <IconSparkles size={14} className="sm:w-4 sm:h-4" />
            <span>17 Production-Ready Components</span>
          </div>
        </motion.div>

        <motion.h1 
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight"
          variants={itemVariants}
        >
          Build beautiful interfaces{' '}
          <br className="hidden sm:block" />
          with{' '}
          <motion.span 
            className="text-transparent bg-clip-text bg-gradient-to-r from-primary-main via-secondary-main to-primary-main"
            style={{
              backgroundSize: '200% 100%',
              backgroundPosition: '0%'
            }}
            animate={animationsEnabled ? {
              backgroundPosition: ['0%', '100%', '0%']
            } : {}}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            ForteUI
          </motion.span>
        </motion.h1>

        <motion.p 
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto"
          variants={itemVariants}
        >
          A production-ready React component library built with TypeScript, 
          featuring comprehensive design tokens.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8"
          variants={itemVariants}
        >
          <Button asChild variant="primary" size="lg" className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
            <Link href="/docs/getting-started" className="flex items-center justify-center gap-2">
              Get Started
              <IconArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
            </Link>
          </Button>
          
          <Button asChild variant="outline-default" size="lg" className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
            <Link href="/docs/introduction" className="flex items-center justify-center gap-2">View Components</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
