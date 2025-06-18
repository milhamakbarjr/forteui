'use client';

import { Button } from '@forteui/core';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconBrandGithub, IconBrandTwitter, IconHeart, IconArrowUp } from '@tabler/icons-react';
import Image from 'next/image';

const footerLinks = {
  documentation: [
    { label: 'Introduction', href: '/docs/introduction' },
    { label: 'Getting Started', href: '/docs/getting-started' },
    { label: 'Components', href: '/docs/components' },
    { label: 'Design System', href: '/docs/design-system' }
  ],
  resources: [
    { label: 'GitHub', href: 'https://github.com/milhamakbarjr/forteui' },
    { label: 'NPM Package', href: 'https://www.npmjs.com/package/forteui-core' },
    // { label: 'Changelog', href: '/changelog' },
    // { label: 'Contributing', href: '/contributing' }
  ],
  // community: [
  //   { label: 'Discord', href: '#' },
  //   { label: 'Twitter', href: '#' },
  //   { label: 'Discussions', href: '#' },
  //   { label: 'Report Issues', href: '#' }
  // ]
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500" />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <Image
                    src="/logo-forteui-main.svg"
                    alt="ForteUI Logo"
                    width={1358}
                    height={431}
                    className="w-auto h-8 sm:h-9"
                  />
                </div>
                
                <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed max-w-md text-sm sm:text-base">
                  A modern React component library built for production applications 
                  with comprehensive design system.
                </p>

                <div className="flex items-center gap-3 sm:gap-4">
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button 
                      asChild 
                      variant="outline-default" 
                      size="sm"
                      className="border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white min-h-[44px] px-3 sm:px-4"
                    >
                      <a 
                        href="https://github.com/milhamakbarjr/forteui" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <IconBrandGithub size={14} className="sm:w-4 sm:h-4" />
                        <span className="text-xs sm:text-sm">Star on GitHub</span>
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Links Sections */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h4 className="font-semibold mb-3 sm:mb-4 text-white text-sm sm:text-base">Documentation</h4>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.documentation.map((link) => (
                    <li key={link.label}>
                      <Link 
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="font-semibold mb-3 sm:mb-4 text-white text-sm sm:text-base">Resources</h4>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.resources.map((link) => (
                    <li key={link.label}>
                      <a 
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Community Section - Commented out until setup is complete */}
            {/* <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h4 className="font-semibold mb-4 text-white">Community</h4>
                <ul className="space-y-3">
                  {footerLinks.community.map((link) => (
                    <li key={link.label}>
                      <a 
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-xs sm:text-sm text-gray-400"
              >
                <span>&copy; 2024 ForteUI. Built with</span>
                <IconHeart size={14} className="sm:w-4 sm:h-4 text-red-500" />
                <span>and Next.js</span>
              </motion.div>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToTop}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-300 hover:text-white transition-colors text-xs sm:text-sm min-h-[44px]"
              >
                <IconArrowUp size={14} className="sm:w-4 sm:h-4" />
                <span>Back to top</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
