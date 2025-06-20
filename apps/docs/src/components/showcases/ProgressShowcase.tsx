'use client';

import React, { useState, useEffect } from 'react';
import { Progress } from '@forteui/core';
import { ComponentShowcase } from '../ComponentShowcase';

export function ProgressShowcase({ 
  children, 
  code, 
  title = "Progress Component",
  description = "Progress indicators with linear and circular variants using semantic colors"
}: {
  children?: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
}) {
  const [animatedValue, setAnimatedValue] = useState(0);

  // Animate progress for demo
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValue(prev => (prev >= 100 ? 0 : prev + 10));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="space-y-8">
        {/* Linear Progress - Basic Colors */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Linear Progress - Basic Colors</h4>
          <div className="space-y-3">
            <Progress variant="linear" value={80} color="default" />
            <Progress variant="linear" value={65} color="primary" />
            <Progress variant="linear" value={45} color="secondary" />
            <Progress variant="linear" value={90} color="info" />
            <Progress variant="linear" value={75} color="success" />
            <Progress variant="linear" value={55} color="warning" />
            <Progress variant="linear" value={35} color="error" />
          </div>
        </div>

        {/* Linear Progress - Different Sizes */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Linear Progress - Sizes</h4>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">Small (8px height)</p>
              <Progress variant="linear" value={60} color="primary" size="sm" />
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Medium (4px height)</p>
              <Progress variant="linear" value={60} color="primary" size="md" />
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Large (6px height)</p>
              <Progress variant="linear" value={60} color="primary" size="lg" />
            </div>
          </div>
        </div>

        {/* Linear Progress - Custom Labels */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Linear Progress - Custom Labels</h4>
          <div className="space-y-3">
            <Progress variant="linear" value={85} color="success" label="Upload Complete" />
            <Progress variant="linear" value={45} color="warning" label="In Progress..." />
            <Progress variant="linear" value={75} color="success" showLabel={false} />
          </div>
        </div>

        {/* Circular Progress - All Colors */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Circular Progress - All Colors</h4>
          <div className="flex flex-wrap gap-6">
            <Progress variant="circular" value={80} color="default" />
            <Progress variant="circular" value={80} color="primary" />
            <Progress variant="circular" value={80} color="secondary" />
            <Progress variant="circular" value={80} color="info" />
            <Progress variant="circular" value={80} color="success" />
            <Progress variant="circular" value={80} color="warning" />
            <Progress variant="circular" value={80} color="error" />
          </div>
        </div>

        {/* Circular Progress - Sizes */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Circular Progress - Sizes</h4>
          <div className="flex items-center gap-8">
            <div className="text-center">
              <Progress variant="circular" value={75} color="primary" size="sm" />
              <p className="text-xs text-gray-600 mt-2">Small (32px)</p>
            </div>
            <div className="text-center">
              <Progress variant="circular" value={75} color="primary" size="md" />
              <p className="text-xs text-gray-600 mt-2">Medium (44px)</p>
            </div>
            <div className="text-center">
              <Progress variant="circular" value={75} color="primary" size="lg" />
              <p className="text-xs text-gray-600 mt-2">Large (56px)</p>
            </div>
          </div>
        </div>

        {/* Circular Progress - Custom Labels */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Circular Progress - Custom Labels</h4>
          <div className="flex flex-wrap gap-6">
            <Progress variant="circular" value={100} color="success" label="Done" size="lg" />
            <Progress variant="circular" value={45} color="info" label="45/100" size="lg" />
            <Progress variant="circular" value={90} color="warning" showLabel={false} size="md" />
          </div>
        </div>

        {/* Interactive Progress */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Interactive Progress (Animated)</h4>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 min-w-fit">Linear:</span>
              <Progress variant="linear" value={animatedValue} color="primary" />
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 min-w-fit">Circular:</span>
              <Progress variant="circular" value={animatedValue} color="secondary" />
            </div>
          </div>
        </div>

        {/* Progress States */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Progress States</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h5 className="text-sm font-medium">Linear States</h5>
              <Progress variant="linear" value={0} color="error" label="0% - Not Started" />
              <Progress variant="linear" value={25} color="warning" label="25% - Getting Started" />
              <Progress variant="linear" value={50} color="info" label="50% - Halfway" />
              <Progress variant="linear" value={75} color="primary" label="75% - Almost Done" />
              <Progress variant="linear" value={100} color="success" label="100% - Complete!" />
            </div>
            <div className="space-y-3">
              <h5 className="text-sm font-medium">Circular States</h5>
              <div className="flex flex-wrap gap-4">
                <Progress variant="circular" value={0} color="error" />
                <Progress variant="circular" value={25} color="warning" />
                <Progress variant="circular" value={50} color="info" />
                <Progress variant="circular" value={75} color="primary" />
                <Progress variant="circular" value={100} color="success" />
              </div>
            </div>
          </div>
        </div>

        {/* Accessibility Features */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Accessibility Features</h4>
          <div className="space-y-3">
            <Progress 
              variant="linear" 
              value={65} 
              color="primary" 
              aria-label="File upload progress"
              label="Uploading document.pdf"
            />
            <Progress 
              variant="circular" 
              value={85} 
              color="success" 
              aria-label="System initialization progress"
              label="85%"
            />
          </div>
        </div>
      </div>
      {children}
    </ComponentShowcase>
  );
}
