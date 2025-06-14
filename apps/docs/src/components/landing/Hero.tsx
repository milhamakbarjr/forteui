'use client';

import { Button, Card, Badge, Avatar, Chip, Input, Switch, Progress, Radio, Checkbox } from '@forteui/core';
import Link from 'next/link';
import { motion } from 'framer-motion';
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

  const floatingComponents = [
    // Top row - well spaced
    {
      id: 'avatar-card',
      component: (
        <Card className="p-4 bg-white/95 backdrop-blur-sm shadow-xl border border-gray-200/60">
          <div className="flex items-center gap-3">
            <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="User" size="md" />
            <div>
              <p className="font-medium text-sm text-gray-900">Alex Chen</p>
              <p className="text-xs text-gray-500">Product Designer</p>
            </div>
          </div>
        </Card>
      ),
      position: { left: '5%', top: '15%' },
      rotation: -8,
      delay: 0.5,
      duration: 12,
      zIndex: 10
    },
    {
      id: 'progress-card',
      component: (
        <Card className="p-4 bg-white/95 backdrop-blur-sm shadow-xl border border-gray-200/60 w-48">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Upload Progress</span>
              <span className="text-xs text-gray-500">78%</span>
            </div>
            <Progress value={78} className="h-2" />
          </div>
        </Card>
      ),
      position: { right: '6%', top: '12%' },
      rotation: 6,
      delay: 1.2,
      duration: 10,
      zIndex: 12
    },
    
    // Middle left column
    {
      id: 'switch-card',
      component: (
        <Card className="p-4 bg-white/95 backdrop-blur-sm shadow-xl border border-gray-200/60">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <IconWifi size={16} className="text-blue-500" />
                <span className="text-sm font-medium text-gray-700">WiFi</span>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <IconBell size={16} className="text-orange-500" />
                <span className="text-sm font-medium text-gray-700">Notifications</span>
              </div>
              <Switch />
            </div>
          </div>
        </Card>
      ),
      position: { left: '2%', top: '45%' },
      rotation: -12,
      delay: 2,
      duration: 14,
      zIndex: 8
    },
    {
      id: 'stats-mini',
      component: (
        <Card className="p-3 bg-white/95 backdrop-blur-sm shadow-xl border border-gray-200/60">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <IconTrendingUp size={16} className="text-green-600" />
            </div>
            <div>
              <p className="text-lg font-bold text-gray-900">2.4k</p>
              <p className="text-xs text-gray-500">Downloads today</p>
            </div>
          </div>
        </Card>
      ),
      position: { left: '8%', top: '75%' },
      rotation: 15,
      delay: 2.8,
      duration: 11,
      zIndex: 9
    },

    // Middle right column  
    {
      id: 'notification-toast',
      component: (
        <Card className="p-3 bg-white/95 backdrop-blur-sm shadow-xl border border-gray-200/60 border-l-4 border-l-green-500">
          <div className="flex items-center gap-2">
            <IconCheck size={16} className="text-green-500" />
            <span className="text-sm text-gray-700">Component installed successfully!</span>
          </div>
        </Card>
      ),
      position: { right: '4%', top: '40%' },
      rotation: 8,
      delay: 1.8,
      duration: 13,
      zIndex: 11
    },
    {
      id: 'radio-group',
      component: (
        <Card className="p-4 bg-white/95 backdrop-blur-sm shadow-xl border border-gray-200/60">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700 mb-3">Theme Preference</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Radio name="theme" value="light" defaultChecked />
                <span className="text-sm text-gray-600">Light</span>
              </div>
              <div className="flex items-center gap-2">
                <Radio name="theme" value="dark" />
                <span className="text-sm text-gray-600">Dark</span>
              </div>
            </div>
          </div>
        </Card>
      ),
      position: { right: '10%', top: '65%' },
      rotation: -10,
      delay: 3.2,
      duration: 9,
      zIndex: 7
    },

    // Bottom row
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
          <Badge variant="warning">
            <IconDownload size={12} className="mr-1" />
            New
          </Badge>
        </div>
      ),
      position: { left: '25%', bottom: '18%' },
      rotation: 4,
      delay: 2.5,
      duration: 15,
      zIndex: 6
    },
    {
      id: 'search-input',
      component: (
        <Card className="p-4 bg-white/95 backdrop-blur-sm shadow-xl border border-gray-200/60 w-64">
          <div className="space-y-3">
            <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
              <IconSearch size={16} className="text-gray-400" />
              <span className="text-sm text-gray-500">Search components...</span>
            </div>
            <div className="flex gap-1 flex-wrap">
              <Chip size="small" variant="outlined">Button</Chip>
              <Chip size="small" variant="outlined">Input</Chip>
              <Chip size="small" variant="filled">Card</Chip>
            </div>
          </div>
        </Card>
      ),
      position: { right: '20%', bottom: '15%' },
      rotation: -7,
      delay: 1.5,
      duration: 12,
      zIndex: 13
    },

    // Edge components (partially visible for dynamic effect)
    {
      id: 'settings-panel',
      component: (
        <Card className="p-4 bg-white/95 backdrop-blur-sm shadow-xl border border-gray-200/60">
          <div className="flex items-center gap-3">
            <IconSettings size={20} className="text-gray-600" />
            <div>
              <p className="text-sm font-medium text-gray-700">System Settings</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-xs text-gray-500">3 updates available</span>
              </div>
            </div>
          </div>
        </Card>
      ),
      position: { left: '-5%', top: '35%' }, // Partially off-screen 
      rotation: -15,
      delay: 4,
      duration: 16,
      zIndex: 5
    },
    {
      id: 'action-buttons',
      component: (
        <Card className="p-3 bg-white/95 backdrop-blur-sm shadow-xl border border-gray-200/60">
          <div className="flex gap-2">
            <Button size="sm" variant="primary">
              <IconHeart size={14} className="mr-1" />
              Like
            </Button>
            <Button size="sm" variant="outline-default">
              <IconSettings size={14} className="mr-1" />
              Config
            </Button>
          </div>
        </Card>
      ),
      position: { right: '-8%', top: '25%' }, // Partially off-screen
      rotation: 12,
      delay: 3.5,
      duration: 8,
      zIndex: 14
    }
  ];

  return (
    <section className="relative min-h-screen flex items-start justify-center px-6 overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary-50/30" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-secondary-50/20 to-transparent" />
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating UI Components */}
        {floatingComponents.map(({ id, component, position, rotation, delay, duration, zIndex }) => (
          <motion.div
            key={id}
            className="absolute hidden lg:block pointer-events-auto"
            style={{
              ...position,
              transform: `rotate(${rotation}deg)`,
              zIndex: zIndex,
            }}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              y: [0, -8, 0], 
              scale: 1,
              rotate: [rotation, rotation + 2, rotation - 2, rotation],
            }}
            transition={{
              opacity: { duration: 1, delay },
              scale: { duration: 1, delay },
              rotate: { duration: duration, repeat: Infinity, ease: "easeInOut" },
              y: { duration: duration, repeat: Infinity, ease: "easeInOut", delay }
            }}
            whileHover={{ 
              scale: 1.05,
              rotate: rotation + 5,
              transition: { duration: 0.2 }
            }}
          >
            {component}
          </motion.div>
        ))}
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
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
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
      </motion.div>
    </section>
  );
}
