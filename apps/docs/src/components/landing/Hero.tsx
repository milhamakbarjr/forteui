'use client';

import { Button, Card, Badge, Avatar, Chip, Input, Switch, Progress, Radio, Checkbox } from '@forteui/core';
import Link from 'next/link';
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
  const requiredComponents = { Button, Card, Badge, Avatar, Chip, Input, Switch, Progress, Radio, Checkbox };
  const missingComponents = Object.entries(requiredComponents).filter(([name, component]) => !component);
  
  if (missingComponents.length > 0) {
    console.error('Missing ForteUI components:', missingComponents.map(([name]) => name));
  } else {
    console.log('✅ All ForteUI components loaded successfully');
  }
}

export function Hero() {
  // Hydration-safe animation state
  const [isClient, setIsClient] = useState(false);
  const [animationsEnabled, setAnimationsEnabled] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Enable animations after component mounts to prevent hydration mismatch
    const timer = setTimeout(() => setAnimationsEnabled(true), 100);
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
    // Core components - most stable
    {
      id: 'avatar-card',
      component: (
        <Card className="p-4 bg-white/95 backdrop-blur-sm shadow-xl border border-gray-200/60">
          <div className="flex items-center gap-3">
            <Avatar 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" 
              alt="User" 
              size="md" 
            />
            <div>
              <p className="font-medium text-sm text-gray-900">Alex Chen</p>
              <p className="text-xs text-gray-500">Product Designer</p>
            </div>
          </div>
        </Card>
      ),
      position: { left: '5%', top: '20%' },
      rotation: -5,
      delay: 0.5
    },
    {
      id: 'progress-card',
      component: (
        <Card className="p-4 bg-white/95 backdrop-blur-sm shadow-xl border border-gray-200/60 w-48">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Progress</span>
              <span className="text-xs text-gray-500">78%</span>
            </div>
            <Progress value={78} className="h-2" />
          </div>
        </Card>
      ),
      position: { right: '8%', top: '15%' },
      rotation: 5,
      delay: 1.0
    },
    {
      id: 'notification-card',
      component: (
        <Card className="p-3 bg-white/95 backdrop-blur-sm shadow-xl border border-gray-200/60 border-l-4 border-l-green-500">
          <div className="flex items-center gap-2">
            <IconCheck size={16} className="text-green-500" />
            <span className="text-sm text-gray-700">Success!</span>
          </div>
        </Card>
      ),
      position: { right: '5%', top: '45%' },
      rotation: 8,
      delay: 1.5
    },
    {
      id: 'badge-collection',
      component: (
        <div className="flex gap-2 p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-gray-200/60">
          <Badge variant="success">
            <IconCheck size={12} className="mr-1" />
            Verified
          </Badge>
          <Badge variant="primary">
            <IconStar size={12} className="mr-1" />
            Premium
          </Badge>
        </div>
      ),
      position: { left: '8%', bottom: '25%' },
      rotation: -3,
      delay: 2.0
    },
    {
      id: 'search-card',
      component: (
        <Card className="p-4 bg-white/95 backdrop-blur-sm shadow-xl border border-gray-200/60 w-56">
          <div className="space-y-3">
            <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
              <IconSearch size={16} className="text-gray-400" />
              <span className="text-sm text-gray-500">Search...</span>
            </div>
            <div className="flex gap-1 flex-wrap">
              <Chip size="small" variant="outlined">Button</Chip>
              <Chip size="small" variant="filled">Card</Chip>
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
    <section className="relative min-h-screen flex items-start justify-center px-6 overflow-hidden pt-20">
      {/* Enhanced Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary-50/30" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-secondary-50/20 to-transparent" />
      
      {/* Additional background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-100/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-secondary-100/20 via-transparent to-transparent" />
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating UI Components - Only render if client-side and animations enabled */}
        <AnimatePresence>
          {isClient && floatingComponents.map(({ id, component, position, rotation, delay }) => (
            <motion.div
              key={id}
              className="absolute hidden lg:block pointer-events-auto"
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
                // Log successful animation for debugging
                console.log(`✅ Animation completed for ${id}`);
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
          <div className="hidden lg:block">
            {floatingComponents.slice(0, 3).map(({ id, component, position, rotation }) => (
              <div
                key={`fallback-${id}`}
                className="absolute pointer-events-auto opacity-80"
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
          className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto"
          variants={itemVariants}
        >
          A production-ready React component library built with TypeScript, 
          featuring comprehensive design tokens and Plus Jakarta Sans typography.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          variants={itemVariants}
        >
          <Button asChild variant="primary" size="lg" className="text-base px-8 py-4">
            <Link href="/docs/getting-started" className="flex items-center gap-2">
              Get Started
              <IconArrowRight size={18} />
            </Link>
          </Button>
          
          <Button asChild variant="outline-default" size="lg" className="text-base px-8 py-4">
            <Link href="/docs/components">View Components</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
