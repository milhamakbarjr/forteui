'use client';

import { Button } from '@forteui/core';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconBrandGithub, IconBrandTwitter, IconHeart, IconArrowUp } from '@tabler/icons-react';

const footerLinks = {
  documentation: [
    { label: 'Introduction', href: '/docs/introduction' },
    { label: 'Getting Started', href: '/docs/getting-started' },
    { label: 'Components', href: '/docs/components' },
    { label: 'Design System', href: '/docs/design-system' }
  ],
  resources: [
    { label: 'GitHub', href: 'https://github.com/milhamakbarjr/forteui' },
    { label: 'NPM Package', href: 'https://npmjs.com/package/@forteui/core' },
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
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-main to-secondary-main rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">F</span>
                  </div>
                  <h3 className="text-xl font-bold">ForteUI</h3>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                  A modern React component library built for production applications 
                  with comprehensive design system and accessibility features.
                </p>

                <div className="flex items-center gap-4">
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button 
                      asChild 
                      variant="outline-default" 
                      size="sm"
                      className="border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white"
                    >
                      <a 
                        href="https://github.com/milhamakbarjr/forteui" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <IconBrandGithub size={16} />
                        Star on GitHub
                      </a>
                    </Button>
                  </motion.div>

                  {/* <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    className="w-9 h-9 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <IconBrandTwitter size={16} className="text-gray-400 hover:text-white" />
                  </motion.a> */}
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
                <h4 className="font-semibold mb-4 text-white">Documentation</h4>
                <ul className="space-y-3">
                  {footerLinks.documentation.map((link) => (
                    <li key={link.label}>
                      <Link 
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
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
                <h4 className="font-semibold mb-4 text-white">Resources</h4>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link) => (
                    <li key={link.label}>
                      <a 
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
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
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-sm text-gray-400"
              >
                <span>&copy; 2024 ForteUI. Built with</span>
                <IconHeart size={16} className="text-red-500" />
                <span>and Next.js</span>
              </motion.div>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToTop}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-300 hover:text-white transition-colors text-sm"
              >
                <IconArrowUp size={16} />
                Back to top
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
