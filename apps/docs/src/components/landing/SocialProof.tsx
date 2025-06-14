'use client';

import { motion } from 'framer-motion';
import { Card, Avatar, Badge } from '@forteui/core';
import { IconQuote, IconStar, IconUsers, IconDownload, IconCode } from '@tabler/icons-react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Frontend Lead",
    company: "TechCorp",
    avatar: "/api/placeholder/40/40",
    quote: "ForteUI has transformed our development workflow. The components are beautifully designed and incredibly easy to customize.",
    rating: 5
  },
  {
    name: "Mike Rodriguez", 
    role: "Product Designer",
    company: "StartupXYZ",
    avatar: "/api/placeholder/40/40",
    quote: "The design system is comprehensive and the documentation is top-notch. Our team loves working with ForteUI.",
    rating: 5
  },
  {
    name: "Alex Kim",
    role: "Full Stack Developer",
    company: "InnovateLab",
    avatar: "/api/placeholder/40/40", 
    quote: "TypeScript support and accessibility features make ForteUI the perfect choice for production applications.",
    rating: 5
  }
];

const stats = [
  {
    icon: IconDownload,
    value: "10k+",
    label: "Monthly Downloads",
    color: "text-blue-600"
  },
  {
    icon: IconUsers,
    value: "500+",
    label: "Active Developers",
    color: "text-green-600"
  },
  {
    icon: IconCode,
    value: "17",
    label: "Components",
    color: "text-purple-600"
  },
  {
    icon: IconStar,
    value: "4.9",
    label: "GitHub Stars",
    color: "text-yellow-600"
  }
];

export function SocialProof() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-50 border border-secondary-200 rounded-full text-secondary-700 text-sm font-medium mb-6">
            <IconUsers size={16} />
            <span>Trusted by Developers</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Join the Growing Community
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gray-50 flex items-center justify-center ${stat.color}`}>
                  <stat.icon size={24} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            What Developers Say
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 h-full bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-gray-300 transition-colors">
                  <div className="flex items-center mb-4">
                    <IconQuote size={20} className="text-primary-400 mr-2" />
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <IconStar key={i} size={14} className="text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10 bg-gradient-to-br from-primary-200 to-secondary-200" />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-500 text-xs">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            <Badge variant="secondary" className="px-4 py-2">
              TypeScript Ready
            </Badge>
            <Badge variant="success" className="px-4 py-2">
              WCAG 2.1 AA
            </Badge>
            <Badge variant="info" className="px-4 py-2">
              Tree Shakeable
            </Badge>
            <Badge variant="warning" className="px-4 py-2">
              Zero Dependencies
            </Badge>
          </div>
          
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            Trusted by teams at startups and enterprises worldwide. 
            Join thousands of developers building better user interfaces with ForteUI.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
