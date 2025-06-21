'use client';

import React, { useState } from 'react';
import { Input, Button, Text } from '@forteui/core';
import { 
  IconEye, 
  IconEyeOff, 
  IconSearch, 
  IconMail, 
  IconSettings, 
  IconAlertTriangle, 
  IconInfoCircle 
} from '@tabler/icons-react';
import { ComponentShowcase } from '../ComponentShowcase';

export function ClientSafeInputShowcase({ 
  children, 
  code
}: {
  children?: React.ReactNode;
  code?: string;
}) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(true);
  const [formData, setFormData] = useState({
    search: '',
    email: '',
    settings: '',
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (formData.username.length < 4) {
      newErrors.username = 'Username must be at least 4 characters';
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <ComponentShowcase code={code}>
      <div className="space-y-8 forte-ui">
        {/* Input States */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Input States</Text>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Placeholder text" label="Default (Empty)" />
            <Input label="With Value" defaultValue="Input value" />
            <Input label="Disabled" disabled />
            <Input 
              label="Error State" 
              error
              defaultValue="Incorrect value" 
              helperText="Please enter a valid value"
              helperIcon={<IconAlertTriangle size={16} />}
            />
          </div>
        </div>

        {/* Input Sizes */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Input Sizes</Text>
          </div>
          <div className="space-y-4">
            <Input size="sm" label="Small Input" placeholder="Small (40px height)" />
            <Input size="md" label="Medium Input" placeholder="Medium (54px height)" />
          </div>
        </div>

        {/* Input Variants */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Input Variants</Text>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Text variant="body-sm" className="font-medium text-gray-600">Default (Border-based)</Text>
              <Input label="Default Empty" placeholder="Border-based styling" />
              <Input label="Default with Value" defaultValue="Input with value" />
              <Input 
                label="Default with Error" 
                error
                defaultValue="Error value" 
                helperText="Error message"
                helperIcon={<IconAlertTriangle size={16} />}
              />
            </div>
            
            <div className="space-y-4">
              <Text variant="body-sm" className="font-medium text-gray-600">Filled (Background-based)</Text>
              <Input variant="filled" label="Filled Empty" placeholder="Background-based styling" />
              <Input variant="filled" label="Filled with Value" defaultValue="Input with value" />
              <Input 
                variant="filled" 
                label="Filled with Error" 
                error
                defaultValue="Error value" 
                helperText="Error message"
                helperIcon={<IconAlertTriangle size={16} />}
              />
            </div>
          </div>
        </div>

        {/* Helper Text & Icons */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Helper Text & Icons</Text>
          </div>
          <div className="space-y-4">
            <Input 
              label="With Helper Info" 
              placeholder="Enter username"
              helperText="Username must be at least 4 characters"
              helperIcon={<IconInfoCircle size={16} />}
            />
            <Input 
              label="With Error" 
              error
              defaultValue="123"
              helperText="Password must be at least 8 characters"
              helperIcon={<IconAlertTriangle size={16} />}
            />
          </div>
        </div>

        {/* End Adornments */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">End Adornments</Text>
          </div>
          <div className="space-y-4">
            <Input 
              label="Search" 
              placeholder="Search for anything..."
              value={formData.search}
              onChange={(e) => handleInputChange('search', e.target.value)}
              endAdornment={<IconSearch size={20} className="text-gray-500" />}
            />
            <Input 
              label="Email" 
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              endAdornment={<IconMail size={20} className="text-gray-500" />}
            />
            <Input 
              label="Settings" 
              defaultValue="Configuration options"
              endAdornment={<IconSettings size={20} className="text-gray-500" />}
            />
          </div>
        </div>

        {/* Password Toggle Examples */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Password Toggle Examples</Text>
          </div>
          <div className="space-y-4">
            <Input 
              label="Password" 
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter your password"
              endAdornment={
                <button 
                  type="button"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                  {passwordVisible ? <IconEyeOff size={20} /> : <IconEye size={20} />}
                </button>
              }
            />
            <Input 
              label="Password (Visible)" 
              type={passwordVisible2 ? "text" : "password"}
              defaultValue="my_secure_password"
              endAdornment={
                <button 
                  type="button"
                  onClick={() => setPasswordVisible2(!passwordVisible2)}
                  className="text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                  {passwordVisible2 ? <IconEyeOff size={20} /> : <IconEye size={20} />}
                </button>
              }
            />
          </div>
        </div>

        {/* Form Validation Example */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Form Validation Example</Text>
          </div>
          <div className="space-y-4 max-w-md">
            <Input 
              label="Username" 
              placeholder="Enter username"
              value={formData.username}
              onChange={(e) => handleInputChange('username', e.target.value)}
              error={!!errors.username}
              helperText={errors.username}
              helperIcon={errors.username ? <IconAlertTriangle size={16} /> : undefined}
            />
            <Input 
              label="Email" 
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
              helperIcon={errors.email ? <IconAlertTriangle size={16} /> : undefined}
            />
            <Input 
              label="Password" 
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
              helperIcon={errors.password ? <IconAlertTriangle size={16} /> : undefined}
            />
            <Button 
              onClick={validateForm}
              className="w-full"
            >
              Validate Form
            </Button>
          </div>
        </div>

        {children}
      </div>
    </ComponentShowcase>
  );
}
