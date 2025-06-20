'use client';

import React, { useState } from 'react';
import { Input, Checkbox, Switch, Avatar, Textarea, Radio, RadioGroup, Slider, Badge, Chip, Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription, Text, Heading, Breadcrumb, Snackbar, Progress, Button } from '@forteui/core';
import { IconX, IconUser, IconCheck, IconSettings, IconStar, IconHome, IconShoppingCart, IconEye, IconEyeOff, IconArrowRight, IconPlus, IconInfoCircle, IconAlertTriangle, IconTrash, IconEdit, IconSearch, IconMail, IconDownload, IconChevronDown } from '@tabler/icons-react';
import { ComponentShowcase } from './ComponentShowcase';

// Client-safe Input Showcase
export function ClientSafeInputShowcase({ 
  children, 
  code, 
  title = "Input Examples",
  description = "Comprehensive input examples with multiple states, variants, sizes, and interactive features"
}: {
  children?: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
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
    <ComponentShowcase title={title} description={description} code={code}>
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

// Client-safe Form Controls Showcase
export function ClientSafeFormControlsShowcase({ 
  children, 
  code, 
  title = "Form Controls",
  description = "Interactive form control examples"
}: {
  children?: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
}) {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [switched1, setSwitched1] = useState(false);
  const [switched2, setSwitched2] = useState(true);

  return (
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="space-y-4">
        {/* Static controls */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms-static" />
            <label htmlFor="terms-static">Accept terms and conditions</label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="notifications-static" />
            <label htmlFor="notifications-static">Enable notifications</label>
          </div>
        </div>
        
        {/* Interactive controls */}
        <div className="space-y-3 border-t pt-4">
          <h4 className="font-medium">Interactive Examples:</h4>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="terms-interactive" 
              checked={checked1}
              onCheckedChange={setChecked1}
            />
            <label htmlFor="terms-interactive">
              Interactive checkbox (checked: {checked1.toString()})
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="terms-interactive-2" 
              checked={checked2}
              onCheckedChange={setChecked2}
            />
            <label htmlFor="terms-interactive-2">
              Pre-checked checkbox (checked: {checked2.toString()})
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch 
              id="notifications-interactive" 
              checked={switched1}
              onCheckedChange={setSwitched1}
            />
            <label htmlFor="notifications-interactive">
              Interactive switch (on: {switched1.toString()})
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch 
              id="notifications-interactive-2" 
              checked={switched2}
              onCheckedChange={setSwitched2}
            />
            <label htmlFor="notifications-interactive-2">
              Pre-enabled switch (on: {switched2.toString()})
            </label>
          </div>
        </div>
        {children}
      </div>
    </ComponentShowcase>
  );
}

// Client-safe Avatar Showcase
export function ClientSafeAvatarShowcase({ 
  children, 
  code, 
  title = "Avatar Component Showcase",
  description = "Comprehensive avatar examples with sizes, variants, shapes, status indicators, and advanced features"
}: {
  children?: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
}) {
  return (
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="space-y-8 forte-ui">
        {/* Basic States - Avatar Sizes */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Avatar Sizes (24px - 64px)</Text>
          </div>
          <div className="flex items-center gap-6 flex-wrap">
            <div className="text-center">
              <Avatar size="xs" fallback="XS" />
              <Text variant="caption" className="block mt-2 text-gray-600">XS (24px)</Text>
            </div>
            <div className="text-center">
              <Avatar size="sm" fallback="SM" />
              <Text variant="caption" className="block mt-2 text-gray-600">SM (32px)</Text>
            </div>
            <div className="text-center">
              <Avatar size="md" fallback="MD" />
              <Text variant="caption" className="block mt-2 text-gray-600">MD (40px)</Text>
            </div>
            <div className="text-center">
              <Avatar size="lg" fallback="LG" />
              <Text variant="caption" className="block mt-2 text-gray-600">LG (48px)</Text>
            </div>
            <div className="text-center">
              <Avatar size="xl" fallback="XL" />
              <Text variant="caption" className="block mt-2 text-gray-600">XL (64px)</Text>
            </div>
          </div>
        </div>

        {/* Variants - Color Options */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Color Variants</Text>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="text-center">
              <Avatar variant="default" fallback="DE" />
              <Text variant="caption" className="block mt-2 text-gray-600">Default</Text>
            </div>
            <div className="text-center">
              <Avatar variant="primary" fallback="PR" />
              <Text variant="caption" className="block mt-2 text-gray-600">Primary</Text>
            </div>
            <div className="text-center">
              <Avatar variant="secondary" fallback="SE" />
              <Text variant="caption" className="block mt-2 text-gray-600">Secondary</Text>
            </div>
            <div className="text-center">
              <Avatar variant="info" fallback="IN" />
              <Text variant="caption" className="block mt-2 text-gray-600">Info</Text>
            </div>
            <div className="text-center">
              <Avatar variant="success" fallback="SU" />
              <Text variant="caption" className="block mt-2 text-gray-600">Success</Text>
            </div>
            <div className="text-center">
              <Avatar variant="warning" fallback="WA" />
              <Text variant="caption" className="block mt-2 text-gray-600">Warning</Text>
            </div>
            <div className="text-center">
              <Avatar variant="error" fallback="ER" />
              <Text variant="caption" className="block mt-2 text-gray-600">Error</Text>
            </div>
          </div>
        </div>

        {/* Interactive Features - Shape Options */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Shape Options</Text>
          </div>
          <div className="flex items-center gap-6 flex-wrap">
            <div className="text-center">
              <Avatar shape="circular" variant="primary" fallback="CI" />
              <Text variant="caption" className="block mt-2 text-gray-600">Circular</Text>
            </div>
            <div className="text-center">
              <Avatar shape="rounded" variant="primary" fallback="RO" />
              <Text variant="caption" className="block mt-2 text-gray-600">Rounded</Text>
            </div>
            <div className="text-center">
              <Avatar shape="square" variant="primary" fallback="SQ" />
              <Text variant="caption" className="block mt-2 text-gray-600">Square</Text>
            </div>
          </div>
        </div>

        {/* Custom Styling - Status Indicators */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Status Indicators</Text>
          </div>
          <div className="flex items-center gap-6 flex-wrap">
            <div className="text-center">
              <Avatar 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
                alt="Online User" 
                fallback="ON"
                status="online" 
                size="md" 
                shape="circular" 
              />
              <Text variant="caption" className="block mt-2 text-gray-600">Online</Text>
            </div>
            <div className="text-center">
              <Avatar 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
                alt="Away User" 
                fallback="AW"
                status="away" 
                size="md" 
                shape="circular" 
              />
              <Text variant="caption" className="block mt-2 text-gray-600">Away</Text>
            </div>
            <div className="text-center">
              <Avatar 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face" 
                alt="Busy User" 
                fallback="BU"
                status="busy" 
                size="md" 
                shape="circular" 
              />
              <Text variant="caption" className="block mt-2 text-gray-600">Busy</Text>
            </div>
            <div className="text-center">
              <Avatar 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" 
                alt="Offline User" 
                fallback="OF"
                status="offline" 
                size="md" 
                shape="circular" 
              />
              <Text variant="caption" className="block mt-2 text-gray-600">Offline</Text>
            </div>
          </div>
        </div>

        {/* Design Specifications - Fallback Handling */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Fallback Handling</Text>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="text-center">
              <Avatar variant="primary" fallback="John Doe" />
              <Text variant="caption" className="block mt-2 text-gray-600">Name Extraction</Text>
            </div>
            <div className="text-center">
              <Avatar variant="secondary" fallback="Jane Smith" />
              <Text variant="caption" className="block mt-2 text-gray-600">Initials</Text>
            </div>
            <div className="text-center">
              <Avatar 
                src="https://invalid-image-url.jpg" 
                alt="Broken Image"
                fallback="BR"
                variant="error"
              />
              <Text variant="caption" className="block mt-2 text-gray-600">Broken Image</Text>
            </div>
            <div className="text-center">
              <Avatar variant="info" fallback="+" size="md" />
              <Text variant="caption" className="block mt-2 text-gray-600">Add More</Text>
            </div>
          </div>
        </div>

        {/* Advanced Usage - Mixed Combinations */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Advanced Combinations</Text>
          </div>
          <div className="space-y-4">
            {/* Avatar Group */}
            <div className="flex items-center gap-2">
              <Text variant="caption" className="text-gray-600 min-w-[80px]">Avatar Group:</Text>
              <div className="flex -space-x-2">
                <Avatar 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
                  fallback="JD" 
                  size="md" 
                  className="border-2 border-white" 
                />
                <Avatar 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
                  fallback="AB" 
                  size="md" 
                  className="border-2 border-white" 
                />
                <Avatar 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face" 
                  fallback="CD" 
                  size="md" 
                  className="border-2 border-white" 
                />
                <Avatar 
                  fallback="+3" 
                  size="md" 
                  variant="default"
                  className="border-2 border-white" 
                />
              </div>
            </div>

            {/* Mixed Shapes & Status */}
            <div className="flex items-center gap-2">
              <Text variant="caption" className="text-gray-600 min-w-[80px]">Mixed Styles:</Text>
              <div className="flex items-center gap-3">
                <Avatar size="sm" shape="rounded" variant="primary" fallback="XS" status="online" />
                <Avatar size="md" shape="circular" variant="secondary" fallback="MD" status="away" />
                <Avatar size="lg" shape="square" variant="success" fallback="LG" status="busy" />
              </div>
            </div>
          </div>
        </div>

        {children}
      </div>
    </ComponentShowcase>
  );
}

// Client-safe Checkbox Showcase
export function ClientSafeCheckboxShowcase({ 
  children, 
  code, 
  title = "Checkbox Examples",
  description = "Comprehensive checkbox examples with multiple states, variants, sizes, and interactive features"
}: {
  children?: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
}) {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionChange = (option: string, checked: boolean) => {
    if (checked) {
      setSelectedOptions(prev => [...prev, option]);
    } else {
      setSelectedOptions(prev => prev.filter(item => item !== option));
    }
  };

  const options = [
    { id: 'newsletter', label: 'Subscribe to newsletter', variant: 'primary' as const },
    { id: 'updates', label: 'Receive product updates', variant: 'info' as const },
    { id: 'marketing', label: 'Marketing communications', variant: 'success' as const },
    { id: 'analytics', label: 'Analytics and performance', variant: 'warning' as const }
  ];

  return (
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="space-y-8 forte-ui">
        {/* Basic Checkbox States */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Basic Checkbox States</Text>
          </div>
          <div className="space-y-3">
            <Checkbox label="Default checkbox" />
            <Checkbox label="Checked by default" checked />
            <Checkbox label="Disabled checkbox" disabled />
            <Checkbox label="Disabled and checked" checked disabled />
          </div>
        </div>

        {/* Checkbox Sizes */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Checkbox Sizes</Text>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Text variant="body-sm" className="font-medium text-gray-600">Small (20px)</Text>
              <Checkbox size="sm" label="Small checkbox" />
            </div>
            <div className="space-y-2">
              <Text variant="body-sm" className="font-medium text-gray-600">Medium (24px)</Text>
              <Checkbox size="md" label="Medium checkbox" />
            </div>
          </div>
        </div>

        {/* Color Variants */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Checkbox Color Variants</Text>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Text variant="body-sm" className="font-medium text-gray-600">Neutral & Brand Colors</Text>
              <div className="space-y-3">
                <Checkbox variant="default" label="Default variant" checked />
                <Checkbox variant="primary" label="Primary variant" checked />
                <Checkbox variant="secondary" label="Secondary variant" checked />
              </div>
            </div>
            
            <div className="space-y-4">
              <Text variant="body-sm" className="font-medium text-gray-600">Semantic Colors</Text>
              <div className="space-y-3">
                <Checkbox variant="info" label="Info variant" checked />
                <Checkbox variant="success" label="Success variant" checked />
                <Checkbox variant="warning" label="Warning variant" checked />
                <Checkbox variant="error" label="Error variant" checked />
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Examples */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Interactive Examples</Text>
          </div>
          
          {/* Single Checkbox with State */}
          <div className="space-y-4">
            <Text variant="body-sm" className="font-medium text-gray-600">Single Checkbox with State</Text>
            <div className="space-y-3">
              <Checkbox 
                checked={isChecked}
                onCheckedChange={setIsChecked}
                label="I agree to the terms and conditions"
                variant="primary"
              />
              <Text variant="body-sm" className="text-gray-500">
                Status: {isChecked ? 'Agreed' : 'Not agreed'}
              </Text>
            </div>
          </div>

          {/* Checkbox Group with Multiple Selection */}
          <div className="space-y-4">
            <Text variant="body-sm" className="font-medium text-gray-600">Checkbox Group with Multiple Selection</Text>
            <div className="space-y-4">
              <Text variant="body-sm" className="font-medium text-gray-700">Select your preferences:</Text>
              <div className="space-y-3">
                {options.map(option => (
                  <Checkbox
                    key={option.id}
                    label={option.label}
                    variant={option.variant}
                    checked={selectedOptions.includes(option.id)}
                    onCheckedChange={(checked: boolean) => handleOptionChange(option.id, checked)}
                  />
                ))}
              </div>
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <Text variant="body-sm" className="font-medium text-gray-700">Selected options:</Text>
                <Text variant="body-sm" className="text-gray-600">
                  {selectedOptions.length > 0 ? selectedOptions.join(', ') : 'None selected'}
                </Text>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Styling */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Custom Styling</Text>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Checkbox 
              label="Custom label styling" 
              labelClassName="text-purple-600 font-semibold"
              variant="primary"
            />
            <Checkbox 
              label="Custom checkbox styling" 
              className="border-2 border-purple-300 rounded-lg"
              variant="secondary"
            />
          </div>
        </div>

        {/* Design Specifications */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Design Specifications</Text>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 space-y-4">
            <Heading level={3} className="text-lg text-gray-900">Checkbox Design Specifications</Heading>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Text variant="body-sm" className="font-semibold text-gray-900">Sizes</Text>
                <div className="space-y-1 text-sm text-gray-700">
                  <div>• Small: 20px × 20px</div>
                  <div>• Medium: 24px × 24px (default)</div>
                  <div>• Checkbox icon scales with container size</div>
                  <div>• Label maintains consistent text size</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Text variant="body-sm" className="font-semibold text-gray-900">Interaction States</Text>
                <div className="space-y-1 text-sm text-gray-700">
                  <div>• Unchecked: Border outline with semantic color</div>
                  <div>• Checked: Filled background with check icon</div>
                  <div>• Hover: 8% opacity background with color</div>
                  <div>• Focus: Ring outline for keyboard navigation</div>
                  <div>• Disabled: 40% opacity, no interaction</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="space-y-2">
                <Text variant="body-sm" className="font-semibold text-gray-900">Color Variants</Text>
                <div className="space-y-1 text-sm text-gray-700">
                  <div>• Default: Action color (#657686)</div>
                  <div>• Primary: Brand primary (#0690F4)</div>
                  <div>• Secondary: Brand secondary (#9138FF)</div>
                  <div>• Info: Info semantic (#00BEE0)</div>
                  <div>• Success: Success semantic (#22B954)</div>
                  <div>• Warning: Warning semantic (#FFAD05)</div>
                  <div>• Error: Error semantic (#FF5833)</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Text variant="body-sm" className="font-semibold text-gray-900">Accessibility Features</Text>
                <div className="space-y-1 text-sm text-gray-700">
                  <div>• Proper ARIA role attributes</div>
                  <div>• Keyboard navigation support</div>
                  <div>• Focus visible state for keyboard users</div>
                  <div>• Screen reader announcements</div>
                  <div>• Label association with input</div>
                  <div>• Sufficient color contrast ratio</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {children}
      </div>
    </ComponentShowcase>
  );
}

// Client-safe Switch Showcase
export function ClientSafeSwitchShowcase({ 
  children, 
  code, 
  title = "Switch Examples",
  description = "Interactive switch toggle examples"
}: {
  children?: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
}) {
  const [basicStates, setBasicStates] = useState({
    notifications: false,
    darkMode: true,
    autoSave: false,
    newsletter: false,
    rememberMe: true,
    twoFactor: false,
  });

  const [semanticStates, setSemanticStates] = useState({
    default: false,
    primary: true,
    secondary: true,
    info: true,
    success: true,
    warning: true,
    error: true,
  });

  const [sizeStates, setSizeStates] = useState({
    small: true,
    medium: true,
  });

  const [interactiveStates, setInteractiveStates] = useState({
    unchecked: false,
    checked: true,
    disabled: false,
    disabledChecked: true,
  });

  return (
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="space-y-8 forte-ui">
        {/* Basic States */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <h3 className="text-lg font-semibold text-gray-900">Basic States</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Settings Toggle</h4>
              <div className="space-y-3">
                <Switch
                  label="Enable notifications"
                  checked={basicStates.notifications}
                  onCheckedChange={(checked) =>
                    setBasicStates(prev => ({ ...prev, notifications: checked }))
                  }
                  color="primary"
                  size="medium"
                />
                <Switch
                  label="Dark mode"
                  checked={basicStates.darkMode}
                  onCheckedChange={(checked) =>
                    setBasicStates(prev => ({ ...prev, darkMode: checked }))
                  }
                  color="secondary"
                  size="medium"
                />
                <Switch
                  label="Auto-save drafts"
                  checked={basicStates.autoSave}
                  onCheckedChange={(checked) =>
                    setBasicStates(prev => ({ ...prev, autoSave: checked }))
                  }
                  color="success"
                  size="medium"
                />
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Form Controls</h4>
              <div className="space-y-3">
                <Switch
                  label="Subscribe to newsletter"
                  checked={basicStates.newsletter}
                  onCheckedChange={(checked) =>
                    setBasicStates(prev => ({ ...prev, newsletter: checked }))
                  }
                  color="info"
                  size="medium"
                />
                <Switch
                  label="Remember me"
                  checked={basicStates.rememberMe}
                  onCheckedChange={(checked) =>
                    setBasicStates(prev => ({ ...prev, rememberMe: checked }))
                  }
                  color="primary"
                  size="small"
                />
                <Switch
                  label="Enable two-factor authentication"
                  checked={basicStates.twoFactor}
                  onCheckedChange={(checked) =>
                    setBasicStates(prev => ({ ...prev, twoFactor: checked }))
                  }
                  color="warning"
                  size="medium"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sizes */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <h3 className="text-lg font-semibold text-gray-900">Sizes</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium text-gray-700">Small</h4>
              <Switch
                label="Small Switch"
                size="small"
                color="primary"
                checked={sizeStates.small}
                onCheckedChange={(checked) =>
                  setSizeStates(prev => ({ ...prev, small: checked }))
                }
              />
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-gray-700">Medium</h4>
              <Switch
                label="Medium Switch"
                size="medium"
                color="primary"
                checked={sizeStates.medium}
                onCheckedChange={(checked) =>
                  setSizeStates(prev => ({ ...prev, medium: checked }))
                }
              />
            </div>
          </div>
        </div>

        {/* Variants */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <h3 className="text-lg font-semibold text-gray-900">Semantic Color Variants</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-gray-700">Default</h4>
              <Switch
                label="Default"
                color="default"
                checked={semanticStates.default}
                onCheckedChange={(checked) =>
                  setSemanticStates(prev => ({ ...prev, default: checked }))
                }
              />
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-700">Primary</h4>
              <Switch
                label="Primary"
                color="primary"
                checked={semanticStates.primary}
                onCheckedChange={(checked) =>
                  setSemanticStates(prev => ({ ...prev, primary: checked }))
                }
              />
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-700">Secondary</h4>
              <Switch
                label="Secondary"
                color="secondary"
                checked={semanticStates.secondary}
                onCheckedChange={(checked) =>
                  setSemanticStates(prev => ({ ...prev, secondary: checked }))
                }
              />
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-700">Info</h4>
              <Switch
                label="Info"
                color="info"
                checked={semanticStates.info}
                onCheckedChange={(checked) =>
                  setSemanticStates(prev => ({ ...prev, info: checked }))
                }
              />
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-700">Success</h4>
              <Switch
                label="Success"
                color="success"
                checked={semanticStates.success}
                onCheckedChange={(checked) =>
                  setSemanticStates(prev => ({ ...prev, success: checked }))
                }
              />
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-700">Warning</h4>
              <Switch
                label="Warning"
                color="warning"
                checked={semanticStates.warning}
                onCheckedChange={(checked) =>
                  setSemanticStates(prev => ({ ...prev, warning: checked }))
                }
              />
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-700">Error</h4>
              <Switch
                label="Error"
                color="error"
                checked={semanticStates.error}
                onCheckedChange={(checked) =>
                  setSemanticStates(prev => ({ ...prev, error: checked }))
                }
              />
            </div>
          </div>
        </div>

        {/* Interactive States */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <h3 className="text-lg font-semibold text-gray-900">Interactive States</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-gray-700">Unchecked</h4>
              <Switch
                label="Unchecked"
                color="primary"
                checked={interactiveStates.unchecked}
                onCheckedChange={(checked) =>
                  setInteractiveStates(prev => ({ ...prev, unchecked: checked }))
                }
              />
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-700">Checked</h4>
              <Switch
                label="Checked"
                color="primary"
                checked={interactiveStates.checked}
                onCheckedChange={(checked) =>
                  setInteractiveStates(prev => ({ ...prev, checked: checked }))
                }
              />
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-700">Disabled Unchecked</h4>
              <Switch
                label="Disabled"
                color="primary"
                checked={interactiveStates.disabled}
                onCheckedChange={(checked) =>
                  setInteractiveStates(prev => ({ ...prev, disabled: checked }))
                }
                disabled
              />
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-700">Disabled Checked</h4>
              <Switch
                label="Disabled"
                color="primary"
                checked={interactiveStates.disabledChecked}
                onCheckedChange={(checked) =>
                  setInteractiveStates(prev => ({ ...prev, disabledChecked: checked }))
                }
                disabled
              />
            </div>
          </div>
        </div>

        {/* Custom Styling */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-pink-500"></div>
            <h3 className="text-lg font-semibold text-gray-900">Custom Styling</h3>
          </div>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium text-gray-700">Label Positioning</h4>
                <div className="space-y-2">
                  <Switch
                    label="Label on right"
                    color="primary"
                    checked={true}
                    labelPosition="right"
                  />
                  <Switch
                    label="Label on left"
                    color="primary"
                    checked={true}
                    labelPosition="left"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-gray-700">Without Labels</h4>
                <div className="flex items-center gap-3">
                  <Switch
                    color="primary"
                    checked={true}
                    aria-label="Toggle primary setting"
                  />
                  <Switch
                    color="success"
                    checked={true}
                    aria-label="Toggle success setting"
                  />
                  <Switch
                    color="warning"
                    checked={false}
                    aria-label="Toggle warning setting"
                  />
                  <Switch
                    color="secondary"
                    size="small"
                    checked={true}
                    aria-label="Toggle small setting"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Design Specifications */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
            <h3 className="text-lg font-semibold text-gray-900">Design Specifications</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Dimensions</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Small: 25px × 18px track, 10px thumb</li>
                <li>• Medium: 33px × 20px track, 14px thumb</li>
                <li>• Track padding: 3px on all sides</li>
                <li>• Border radius: Fully rounded (500px)</li>
                <li>• Container height: 24px (small), 38px (medium)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Spacing & Typography</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Label gap: 7px (small), 9px (medium)</li>
                <li>• Font: Plus Jakarta Sans, 14px, 400 weight</li>
                <li>• Line height: 22px</li>
                <li>• Thumb translation: 7px (small), 13px (medium)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Colors</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Unchecked background: grey.48</li>
                <li>• Checked background: Semantic color variants</li>
                <li>• Thumb: white (#ffffff)</li>
                <li>• Label: text.primary (#1F2933)</li>
                <li>• Disabled label: grey.500 (#93A1AE)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Interaction States</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Hover: 8% opacity overlay of semantic color</li>
                <li>• Focus: Ring with 2px offset in semantic color</li>
                <li>• Disabled: 48% opacity, no interactions</li>
                <li>• Transition: 200ms ease-in-out for all changes</li>
              </ul>
            </div>
          </div>
        </div>

        {children}
      </div>
    </ComponentShowcase>
  );
}

// Client-safe Textarea Showcase
export function ClientSafeTextareaShowcase({ 
  children, 
  code, 
  title = "Textarea Examples",
  description = "Interactive textarea component examples"
}: {
  children?: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
}) {
  return (
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="space-y-8 forte-ui">
        {/* Basic States */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <h3 className="text-lg font-semibold text-gray-900">Textarea States</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Default Variant States</h4>
              <div className="space-y-4">
                <Textarea placeholder="Enter your message..." label="Default (Empty)" />
                <Textarea 
                  label="With Value" 
                  defaultValue="This is a sample message with some content to show how the textarea behaves with text."
                />
                <Textarea label="Disabled" disabled />
                <Textarea 
                  label="Error State" 
                  error
                  defaultValue="Short message"
                  helperText="Message must be at least 20 characters long"
                  helperIcon={<IconAlertTriangle size={16} />}
                />
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Filled Variant States</h4>
              <div className="space-y-4">
                <Textarea variant="filled" label="Filled (Empty)" placeholder="Enter your message..." />
                <Textarea 
                  variant="filled"
                  label="Filled with Value" 
                  defaultValue="This is a sample message with some content to show how the textarea behaves with text."
                />
                <Textarea variant="filled" label="Filled Disabled" disabled />
                <Textarea 
                  variant="filled"
                  label="Filled Error" 
                  error
                  defaultValue="Short message"
                  helperText="Message must be at least 20 characters long"
                  helperIcon={<IconAlertTriangle size={16} />}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sizes */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <h3 className="text-lg font-semibold text-gray-900">Textarea Sizes</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="font-medium text-gray-700">Small</h4>
              <Textarea size="sm" label="Small" placeholder="Small size (60px min-height)" />
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-700">Medium</h4>
              <Textarea size="md" label="Medium" placeholder="Medium size (98px min-height)" />
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-700">Large</h4>
              <Textarea size="lg" label="Large" placeholder="Large size (120px min-height)" />
            </div>
          </div>
        </div>

        {/* Variants */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <h3 className="text-lg font-semibold text-gray-900">Variants</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium text-gray-700">Default (Outline-based)</h4>
              <Textarea 
                label="Default Variant" 
                placeholder="Outline-based textarea with border focus"
                defaultValue="This uses the default variant with outline-based styling."
              />
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-gray-700">Filled (Background-based)</h4>
              <Textarea 
                variant="filled"
                label="Filled Variant" 
                placeholder="Background-based textarea with fill focus"
                defaultValue="This uses the filled variant with background-based styling."
              />
            </div>
          </div>
        </div>

        {/* Interactive Examples */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <h3 className="text-lg font-semibold text-gray-900">Helper Text & Icons</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium text-gray-700">With Helper Info</h4>
              <Textarea 
                label="With Helper Info" 
                placeholder="Tell us about yourself..."
                helperText="This information will be displayed on your public profile"
                helperIcon={<IconInfoCircle size={16} />}
              />
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-gray-700">With Error</h4>
              <Textarea 
                label="With Error" 
                error
                defaultValue="Basic requirements"
                helperText="Please provide more detailed requirements (min 50 characters)"
                helperIcon={<IconAlertTriangle size={16} />}
              />
            </div>
          </div>
        </div>

        {/* Custom Features */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-pink-500"></div>
            <h3 className="text-lg font-semibold text-gray-900">Custom Features</h3>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-gray-700 mb-3">Custom Height</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Textarea 
                  label="3 Rows" 
                  rows={3}
                  placeholder="Fixed height with 3 rows"
                />
                <Textarea 
                  label="6 Rows" 
                  rows={6}
                  placeholder="Fixed height with 6 rows"
                />
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-3">Resize Behavior</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Textarea 
                  label="Resize Vertical (Default)" 
                  placeholder="Can be resized vertically (resize-y)"
                  className="resize-y"
                />
                <Textarea 
                  label="No Resize" 
                  placeholder="Cannot be resized (resize-none)"
                  className="resize-none"
                />
                <Textarea 
                  label="Resize Both" 
                  placeholder="Can be resized in both directions (resize)"
                  className="resize"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Design Specifications */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
            <h3 className="text-lg font-semibold text-gray-900">Design Specifications</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Outline Variant (Border-based)</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Default: 1px outline, rgba(147, 161, 174, 0.20)</li>
                <li>• Hover: 1px outline, #1F2933 (text-primary)</li>
                <li>• Focus: 2px outline, #1F2933 (text-primary)</li>
                <li>• Error: 2px outline, #FF5833 (error-main)</li>
                <li>• Disabled: 1px outline + 50% opacity</li>
                <li>• Padding: 14px all around</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Filled Variant (Background-based)</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Default: grey-8 background (rgba(147, 161, 174, 0.08))</li>
                <li>• Hover: grey-16 background (rgba(147, 161, 174, 0.16))</li>
                <li>• Focus: grey-16 background (rgba(147, 161, 174, 0.16))</li>
                <li>• Error: error-8 background (rgba(255, 88, 51, 0.08))</li>
                <li>• Disabled: grey-8 background + 50% opacity</li>
                <li>• Padding: 12px all around</li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <h4 className="font-semibold text-gray-900 mb-3">Common Properties</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Border Radius: 8px</li>
                <li>• Min Heights: Small (60px), Medium (98px), Large (120px)</li>
                <li>• Typography: 15px font size, Plus Jakarta Sans</li>
                <li>• Resize: Vertical only (resize-y) by default</li>
                <li>• Floating label behavior: Same as Input component</li>
                <li>• Helper Text: 12px font size, 16px icon</li>
              </ul>
            </div>
          </div>
        </div>

        {children}
      </div>
    </ComponentShowcase>
  );
}

// Client-safe Radio Showcase
export function ClientSafeRadioShowcase({ 
  children, 
  code, 
  title = "Radio Examples",
  description = "Comprehensive radio examples with multiple states, variants, sizes, and interactive features"
}: {
  children?: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
}) {
  const [selectedOption, setSelectedOption] = useState('option1');
  const [selectedPriority, setSelectedPriority] = useState('medium');
  const [selectedPlan, setSelectedPlan] = useState('basic');
  const [selectedTheme, setSelectedTheme] = useState('light');

  const priorityOptions = [
    { value: 'low', label: 'Low Priority', variant: 'info' as const },
    { value: 'medium', label: 'Medium Priority', variant: 'warning' as const },
    { value: 'high', label: 'High Priority', variant: 'error' as const },
    { value: 'critical', label: 'Critical Priority', variant: 'error' as const }
  ];

  return (
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="space-y-8 forte-ui">
        {/* Basic Radio States */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Basic Radio States</Text>
          </div>
          <div className="space-y-3">
            <Radio label="Default radio" name="basic-states-1" value="default" />
            <Radio label="Checked by default" name="basic-states-2" value="checked" checked />
            <Radio label="Disabled radio" name="basic-states-3" value="disabled" disabled />
            <Radio label="Disabled and checked" name="basic-states-4" value="disabled-checked" checked disabled />
          </div>
        </div>

        {/* Radio Sizes */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Radio Sizes</Text>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Text variant="body-sm" className="font-medium text-gray-600">Small (20px)</Text>
              <Radio size="sm" label="Small radio" name="size-small" value="small" variant="primary" />
            </div>
            <div className="space-y-2">
              <Text variant="body-sm" className="font-medium text-gray-600">Medium (24px)</Text>
              <Radio size="md" label="Medium radio" name="size-medium" value="medium" variant="primary" />
            </div>
          </div>
        </div>

        {/* Color Variants */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Radio Color Variants</Text>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Text variant="body-sm" className="font-medium text-gray-600">Neutral & Brand Colors</Text>
              <div className="space-y-3">
                <Radio variant="default" label="Default variant" name="colors-1" value="default" checked />
                <Radio variant="primary" label="Primary variant" name="colors-2" value="primary" checked />
                <Radio variant="secondary" label="Secondary variant" name="colors-3" value="secondary" checked />
              </div>
            </div>
            
            <div className="space-y-4">
              <Text variant="body-sm" className="font-medium text-gray-600">Semantic Colors</Text>
              <div className="space-y-3">
                <Radio variant="info" label="Info variant" name="colors-4" value="info" checked />
                <Radio variant="success" label="Success variant" name="colors-5" value="success" checked />
                <Radio variant="warning" label="Warning variant" name="colors-6" value="warning" checked />
                <Radio variant="error" label="Error variant" name="colors-7" value="error" checked />
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Examples */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Interactive Examples</Text>
          </div>
          
          {/* Radio Group Example */}
          <div className="space-y-4">
            <Text variant="body-sm" className="font-medium text-gray-600">Radio Group Example - Single Selection</Text>
            <div className="space-y-4">
              <RadioGroup
                value={selectedOption}
                onValueChange={setSelectedOption}
                name="preferences"
                variant="primary"
              >
                <Radio value="option1" label="Enable notifications" />
                <Radio value="option2" label="Enable email updates" />
                <Radio value="option3" label="Enable SMS alerts" />
                <Radio value="option4" label="Disable all communications" />
              </RadioGroup>
              <div className="mt-4 p-3 bg-gray-50 rounded">
                <Text variant="body-sm" className="font-medium">Selected option:</Text>
                <Text variant="body-sm" className="text-gray-600">
                  {selectedOption}
                </Text>
              </div>
            </div>
          </div>

          {/* Semantic Colors Priority Example */}
          <div className="space-y-4">
            <Text variant="body-sm" className="font-medium text-gray-600">Semantic Colors Example - Priority Selection</Text>
            <div className="space-y-4">
              <div className="space-y-3">
                {priorityOptions.map(option => (
                  <Radio
                    key={option.value}
                    value={option.value}
                    label={option.label}
                    variant={option.variant}
                    name="priority"
                    checked={selectedPriority === option.value}
                    onCheckedChange={() => setSelectedPriority(option.value)}
                  />
                ))}
              </div>
              <div className="mt-4 p-3 bg-gray-50 rounded">
                <Text variant="body-sm" className="font-medium">Selected priority:</Text>
                <Text variant="body-sm" className="text-gray-600">
                  {priorityOptions.find(opt => opt.value === selectedPriority)?.label || 'None'}
                </Text>
              </div>
            </div>
          </div>

          {/* Additional Interactive Examples */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Text variant="body-sm" className="font-medium text-gray-600">Plan Selection</Text>
              <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan}>
                <Radio value="basic" label="Basic Plan - $9/month" />
                <Radio value="pro" label="Pro Plan - $19/month" variant="primary" />
                <Radio value="enterprise" label="Enterprise Plan - $49/month" variant="secondary" />
              </RadioGroup>
              <Text variant="body-sm" className="text-gray-500">Selected: {selectedPlan}</Text>
            </div>

            <div className="space-y-4">
              <Text variant="body-sm" className="font-medium text-gray-600">Theme Preference</Text>
              <RadioGroup value={selectedTheme} onValueChange={setSelectedTheme}>
                <Radio value="light" label="Light Theme" variant="primary" />
                <Radio value="dark" label="Dark Theme" variant="secondary" />
                <Radio value="auto" label="Auto (System)" variant="info" />
              </RadioGroup>
              <Text variant="body-sm" className="text-gray-500">Selected: {selectedTheme}</Text>
            </div>
          </div>
        </div>

        {/* Custom Styling */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Custom Styling</Text>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Radio 
              label="Custom label styling" 
              labelClassName="text-purple-600 font-semibold"
              variant="primary"
              name="custom-1"
              value="custom-label"
            />
            <Radio 
              label="Custom radio styling" 
              className="border-2 border-purple-300 rounded-lg"
              variant="secondary"
              name="custom-2"
              value="custom-radio"
            />
          </div>
        </div>

        {/* Design Specifications */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Design Specifications</Text>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 space-y-4">
            <Heading level={3} className="text-lg text-gray-900">Radio Component Design Specifications</Heading>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Text variant="body-sm" className="font-semibold text-gray-900">Color Variants</Text>
                <div className="space-y-1 text-sm text-gray-700">
                  <div>• Default: Action color (#657686)</div>
                  <div>• Primary: Brand primary (#0690F4)</div>
                  <div>• Secondary: Brand secondary (#9138FF)</div>
                  <div>• Info: Info semantic (#00BEE0)</div>
                  <div>• Success: Success semantic (#22B954)</div>
                  <div>• Warning: Warning semantic (#FFAD05)</div>
                  <div>• Error: Error semantic (#FF5833)</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Text variant="body-sm" className="font-semibold text-gray-900">Interactive States</Text>
                <div className="space-y-1 text-sm text-gray-700">
                  <div>• Unchecked: Default ring outline</div>
                  <div>• Unchecked Hovered: 8% background</div>
                  <div>• Disabled: Action-disabled color</div>
                  <div>• Checked: Filled center with color</div>
                  <div>• Checked Hovered: 8% background</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Text variant="body-sm" className="font-semibold text-gray-900">Features</Text>
                <div className="space-y-1 text-sm text-gray-700">
                  <div>• Two sizes: Small (20px), Medium (24px)</div>
                  <div>• Radio groups for single selection</div>
                  <div>• Native form integration</div>
                  <div>• Accessibility compliant (ARIA)</div>
                  <div>• Keyboard navigation support</div>
                  <div>• Plus Jakarta Sans typography</div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 space-y-2">
              <Text variant="body-sm" className="font-semibold text-gray-900">Design Tokens Used</Text>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-600">
                <div>• primary-main, primary-8</div>
                <div>• secondary-main, secondary-8</div>
                <div>• success-main, success-8</div>
                <div>• warning-main, warning-8</div>
                <div>• error-main, error-8</div>
                <div>• info-main, info-8</div>
                <div>• action-active, action-disabled</div>
                <div>• grey-8 (hover backgrounds)</div>
              </div>
            </div>
          </div>
        </div>

        {children}
      </div>
    </ComponentShowcase>
  );
}

// Client-safe Slider Showcase
export function ClientSafeSliderShowcase({ 
  children, 
  code, 
  title = "Slider Examples",
  description = "Interactive slider component with customizable ranges, steps, and display options"
}: {
  children?: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
}) {
  // Basic States
  const [defaultValue, setDefaultValue] = useState(30);
  const [labeledValue, setLabeledValue] = useState(75);
  const [showValueSlider, setShowValueSlider] = useState(45);
  
  // Range Configurations
  const [temperatureValue, setTemperatureValue] = useState(22);
  const [priceValue, setPriceValue] = useState(250);
  const [ratingValue, setRatingValue] = useState(3.5);
  
  // Interactive Features
  const [controlledValue, setControlledValue] = useState(60);
  const [callbackValue, setCallbackValue] = useState(40);
  const [lastEndValue, setLastEndValue] = useState(40);
  
  // Performance Demo
  const [performanceValue, setPerformanceValue] = useState(500);

  const handleChangeEnd = (value: number) => {
    setLastEndValue(value);
  };

  return (
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="space-y-8 forte-ui">
        {/* Section 1: Basic States */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 rounded bg-blue-500"></div>
            <h3 className="text-lg font-semibold">Basic States</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Default Slider</h4>
              <Slider
                value={defaultValue}
                onChange={setDefaultValue}
                className="w-full"
              />
              <p className="text-sm text-gray-600">Current value: {defaultValue}</p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">With Label</h4>
              <Slider
                label="Volume"
                value={labeledValue}
                onChange={setLabeledValue}
                className="w-full"
              />
              <p className="text-sm text-gray-600">Volume: {labeledValue}%</p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">With Value Display</h4>
              <Slider
                label="Brightness"
                showValue
                value={showValueSlider}
                onChange={setShowValueSlider}
                className="w-full"
              />
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Disabled State</h4>
              <Slider
                label="Disabled"
                disabled
                defaultValue={60}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Range Configurations */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 rounded bg-green-500"></div>
            <h3 className="text-lg font-semibold">Range Configurations</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Temperature Range (16-30°C, step: 0.5)</h4>
              <Slider
                label="Temperature"
                showValue
                value={temperatureValue}
                onChange={setTemperatureValue}
                min={16}
                max={30}
                step={0.5}
                className="w-full"
              />
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Price Range (0-1000, step: 25)</h4>
              <Slider
                label="Price Range"
                showValue
                value={priceValue}
                onChange={setPriceValue}
                min={0}
                max={1000}
                step={25}
                className="w-full"
              />
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Rating (0-5, step: 0.5)</h4>
              <Slider
                label="Rating"
                showValue
                value={ratingValue}
                onChange={setRatingValue}
                min={0}
                max={5}
                step={0.5}
                className="w-full"
              />
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Large Range (0-10000, step: 100)</h4>
              <Slider
                label="Budget"
                showValue
                defaultValue={2500}
                min={0}
                max={10000}
                step={100}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Interactive Features */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 rounded bg-orange-500"></div>
            <h3 className="text-lg font-semibold">Interactive Features</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Controlled Slider</h4>
              <Slider
                label="Controlled Value"
                value={controlledValue}
                onChange={setControlledValue}
                showValue
                className="w-full"
              />
              <p className="text-sm text-gray-600">Controlled value: {controlledValue}</p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">With Change End Callback</h4>
              <Slider
                label="Callback Example"
                value={callbackValue}
                onChange={setCallbackValue}
                onChangeEnd={handleChangeEnd}
                showValue
                className="w-full"
              />
              <p className="text-sm text-gray-600">Last end value: {lastEndValue}</p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Uncontrolled Slider</h4>
              <Slider
                label="Uncontrolled"
                defaultValue={75}
                showValue
                className="w-full"
              />
              <p className="text-sm text-gray-500">Uses defaultValue prop</p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Real-time Updates</h4>
              <Slider
                label="Live Updates"
                defaultValue={50}
                onChange={(value) => console.log('Live value:', value)}
                showValue
                className="w-full"
              />
              <p className="text-sm text-gray-500">Check console for live updates</p>
            </div>
          </div>
        </div>

        {/* Section 4: Performance Demo */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 rounded bg-purple-500"></div>
            <h3 className="text-lg font-semibold">Performance Demo</h3>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-gray-700">Smooth Dragging Test</h4>
            <Slider
              label="Drag me smoothly!"
              showValue
              value={performanceValue}
              onChange={setPerformanceValue}
              min={0}
              max={1000}
              step={1}
              className="w-full"
            />
            <p className="text-sm text-gray-500">
              This slider uses pointer events and requestAnimationFrame for smooth performance.
            </p>
          </div>
        </div>

        {/* Section 5: Custom Styling */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 rounded bg-pink-500"></div>
            <h3 className="text-lg font-semibold">Custom Styling</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Custom Width</h4>
              <Slider
                label="Custom Width"
                defaultValue={40}
                showValue
                className="w-3/4"
              />
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">With Custom Container</h4>
              <div className="p-4 bg-gray-50 rounded-lg">
                <Slider
                  label="In Container"
                  defaultValue={60}
                  showValue
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 6: Design Specifications */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 rounded bg-indigo-500"></div>
            <h3 className="text-lg font-semibold">Design Specifications</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-3">Performance Features</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Pointer events for better touch support</li>
                <li>• RequestAnimationFrame for smooth dragging</li>
                <li>• Direct DOM updates during drag</li>
                <li>• Ref-based state to avoid re-renders</li>
                <li>• Pointer capture for reliable dragging</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-3">Accessibility Features</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Full keyboard navigation (arrows, home/end, page up/down)</li>
                <li>• ARIA attributes (role, aria-valuemin/max/now)</li>
                <li>• Focus management with ring indicator</li>
                <li>• Screen reader support</li>
                <li>• Disabled state handling</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-3">Design Tokens</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• bg-primary-main for active fill</li>
                <li>• bg-grey-300 for track background</li>
                <li>• shadow-md and shadow-lg for elevation</li>
                <li>• Consistent spacing and sizing</li>
                <li>• Proper disabled state colors</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-3">Available Props</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• value, defaultValue for controlled/uncontrolled</li>
                <li>• min, max, step for range configuration</li>
                <li>• label, showValue for display options</li>
                <li>• disabled for state control</li>
                <li>• onChange, onChangeEnd for event handling</li>
              </ul>
            </div>
          </div>
        </div>
        
        {children}
      </div>
    </ComponentShowcase>
  );
}

// Client-safe Badge Showcase
export function ClientSafeBadgeShowcase({ 
  children, 
  code, 
  title = "Badge Examples",
  description = "Badge wrapper component for displaying count numbers or dot indicators on top of child elements"
}: {
  children?: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
}) {
  // Interactive state for counter examples
  const [notificationCount, setNotificationCount] = useState(3);
  const [messageCount, setMessageCount] = useState(12);
  const [cartCount, setCartCount] = useState(0);

  const incrementNotifications = () => setNotificationCount(prev => prev + 1);
  const incrementMessages = () => setMessageCount(prev => prev + 1);
  const incrementCart = () => setCartCount(prev => prev + 1);
  const resetCounts = () => {
    setNotificationCount(0);
    setMessageCount(0);
    setCartCount(0);
  };

  return (
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="space-y-8 forte-ui">
        {/* Section 1: Basic States */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 rounded bg-blue-500"></div>
            <h3 className="text-lg font-semibold">Basic States</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Number Badges</h4>
              <div className="flex items-center gap-6">
                <Badge variant="primary" count={5}>
                  <IconMail size={24} className="text-gray-700" />
                </Badge>
                <Badge variant="success" count={12}>
                  <IconShoppingCart size={24} className="text-gray-700" />
                </Badge>
                <Badge variant="warning" count={99}>
                  <IconSearch size={24} className="text-gray-700" />
                </Badge>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Dot Badges</h4>
              <div className="flex items-center gap-6">
                <Badge variant="success" type="dot">
                  <IconUser size={24} className="text-gray-700" />
                </Badge>
                <Badge variant="warning" type="dot">
                  <IconSettings size={24} className="text-gray-700" />
                </Badge>
                <Badge variant="error" type="dot">
                  <IconInfoCircle size={24} className="text-gray-700" />
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Variant Coverage */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 rounded bg-purple-500"></div>
            <h3 className="text-lg font-semibold">All Variant Colors</h3>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-gray-700">Number Badge Variants</h4>
            <div className="flex items-center gap-6 flex-wrap">
              <Badge variant="default" count={1}>
                <IconMail size={24} className="text-gray-700" />
              </Badge>
              <Badge variant="primary" count={5}>
                <IconMail size={24} className="text-gray-700" />
              </Badge>
              <Badge variant="secondary" count={12}>
                <IconShoppingCart size={24} className="text-gray-700" />
              </Badge>
              <Badge variant="info" count={8}>
                <IconInfoCircle size={24} className="text-gray-700" />
              </Badge>
              <Badge variant="success" count={3}>
                <IconCheck size={24} className="text-gray-700" />
              </Badge>
              <Badge variant="warning" count={99}>
                <IconAlertTriangle size={24} className="text-gray-700" />
              </Badge>
              <Badge variant="error" count={100}>
                <IconX size={24} className="text-gray-700" />
              </Badge>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-gray-700">Dot Badge Variants</h4>
            <div className="flex items-center gap-6 flex-wrap">
              <Badge variant="default" type="dot">
                <IconMail size={24} className="text-gray-700" />
              </Badge>
              <Badge variant="primary" type="dot">
                <IconMail size={24} className="text-gray-700" />
              </Badge>
              <Badge variant="secondary" type="dot">
                <IconShoppingCart size={24} className="text-gray-700" />
              </Badge>
              <Badge variant="info" type="dot">
                <IconInfoCircle size={24} className="text-gray-700" />
              </Badge>
              <Badge variant="success" type="dot">
                <IconCheck size={24} className="text-gray-700" />
              </Badge>
              <Badge variant="warning" type="dot">
                <IconAlertTriangle size={24} className="text-gray-700" />
              </Badge>
              <Badge variant="error" type="dot">
                <IconX size={24} className="text-gray-700" />
              </Badge>
            </div>
          </div>
        </div>

        {/* Section 3: Interactive Features */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 rounded bg-orange-500"></div>
            <h3 className="text-lg font-semibold">Interactive Features</h3>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Overflow Handling (99+ Display)</h4>
              <div className="flex items-center gap-6 flex-wrap">
                <div className="flex flex-col items-center gap-2">
                  <Badge variant="primary" count={99}>
                    <IconMail size={24} className="text-gray-700" />
                  </Badge>
                  <span className="text-xs text-gray-600">count={99}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Badge variant="primary" count={100}>
                    <IconMail size={24} className="text-gray-700" />
                  </Badge>
                  <span className="text-xs text-gray-600">count={100}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Badge variant="primary" count={999}>
                    <IconMail size={24} className="text-gray-700" />
                  </Badge>
                  <span className="text-xs text-gray-600">count={999}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Badge variant="primary" count={1234}>
                    <IconMail size={24} className="text-gray-700" />
                  </Badge>
                  <span className="text-xs text-gray-600">count={1234}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Interactive Counter Examples</h4>
              <div className="flex items-center gap-6 flex-wrap">
                <div className="flex flex-col items-center gap-2">
                  <Badge variant="error" count={notificationCount}>
                    <IconMail size={32} className="text-gray-700 cursor-pointer hover:text-gray-900 transition-colors" />
                  </Badge>
                  <button 
                    onClick={incrementNotifications}
                    className="text-xs bg-blue-100 hover:bg-blue-200 px-2 py-1 rounded"
                  >
                    Add Notification ({notificationCount})
                  </button>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <Badge variant="primary" count={messageCount}>
                    <IconShoppingCart size={32} className="text-gray-700 cursor-pointer hover:text-gray-900 transition-colors" />
                  </Badge>
                  <button 
                    onClick={incrementMessages}
                    className="text-xs bg-green-100 hover:bg-green-200 px-2 py-1 rounded"
                  >
                    Add Message ({messageCount})
                  </button>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <Badge variant="success" count={cartCount} showZero>
                    <IconShoppingCart size={32} className="text-gray-700 cursor-pointer hover:text-gray-900 transition-colors" />
                  </Badge>
                  <button 
                    onClick={incrementCart}
                    className="text-xs bg-orange-100 hover:bg-orange-200 px-2 py-1 rounded"
                  >
                    Add to Cart ({cartCount})
                  </button>
                </div>

                <button 
                  onClick={resetCounts}
                  className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded self-end"
                >
                  Reset All
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Advanced Features */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 rounded bg-green-500"></div>
            <h3 className="text-lg font-semibold">Advanced Features</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">showZero Prop</h4>
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center gap-2">
                  <Badge variant="primary" count={0}>
                    <IconMail size={24} className="text-gray-700" />
                  </Badge>
                  <span className="text-xs text-gray-600">Hidden (default)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Badge variant="primary" count={0} showZero>
                    <IconMail size={24} className="text-gray-700" />
                  </Badge>
                  <span className="text-xs text-gray-600">showZero={true}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Custom max Prop</h4>
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center gap-2">
                  <Badge variant="warning" count={150} max={50}>
                    <IconAlertTriangle size={24} className="text-gray-700" />
                  </Badge>
                  <span className="text-xs text-gray-600">max={50}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Badge variant="error" count={1500} max={999}>
                    <IconX size={24} className="text-gray-700" />
                  </Badge>
                  <span className="text-xs text-gray-600">max={999}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Custom Styling */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 rounded bg-pink-500"></div>
            <h3 className="text-lg font-semibold">Custom Styling</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Different Icon Sizes</h4>
              <div className="flex items-center gap-6">
                <Badge variant="primary" count={3}>
                  <IconMail size={16} className="text-gray-700" />
                </Badge>
                <Badge variant="primary" count={3}>
                  <IconMail size={24} className="text-gray-700" />
                </Badge>
                <Badge variant="primary" count={3}>
                  <IconMail size={32} className="text-gray-700" />
                </Badge>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Custom Child Elements</h4>
              <div className="flex items-center gap-6">
                <Badge variant="error" count={5}>
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <IconUser size={20} className="text-blue-700" />
                  </div>
                </Badge>
                <Badge variant="success" type="dot">
                  <Button variant="outline-primary" size="sm">
                    Profile
                  </Button>
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6: Design Specifications */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 rounded bg-indigo-500"></div>
            <h3 className="text-lg font-semibold">Design Specifications</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-3">Badge Positioning</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Absolute positioning with CSS top/right offsets</li>
                <li>• Number badges: -top-2, dynamic right positioning</li>
                <li>• Dot badges: -top-1.5, -right-1.5 for consistent placement</li>
                <li>• White border (2px) for separation from background</li>
                <li>• Automatic positioning adjustment based on count length</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-3">Typography & Sizing</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Font size: 12px (text-xs) with font-bold weight</li>
                <li>• Minimum size: 20px height/width for number badges</li>
                <li>• Dot badges: 10px width/height (w-2.5 h-2.5)</li>
                <li>• Padding: 6px horizontal for number badges (px-1.5)</li>
                <li>• Fully rounded corners (rounded-full)</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-3">Overflow Handling</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Default max: 99 (shows "99+" for counts ≥ 100)</li>
                <li>• Customizable max prop for different overflow points</li>
                <li>• Dynamic positioning based on formatted count length</li>
                <li>• Single digit: -right-3, Double/triple: -right-4/-right-6</li>
                <li>• Maintains readability with automatic width adjustment</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-3">Accessibility & Props</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• children (ReactNode): Required wrapper content</li>
                <li>• count (number): Badge count value</li>
                <li>• showZero (boolean): Show badge when count is 0</li>
                <li>• max (number): Maximum before showing "max+"</li>
                <li>• type ("number" | "dot"): Badge display type</li>
                <li>• variant: 7 semantic colors available</li>
              </ul>
            </div>
          </div>
        </div>
        
        {children}
      </div>
    </ComponentShowcase>
  );
}

// Client-safe Chip Showcase
export function ClientSafeChipShowcase({ 
  children, 
  code, 
  title = "Chip Variants",
  description = "Interactive chip components with variants, sizes, and action icons"
}: {
  children?: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
}) {
  const [removedChips, setRemovedChips] = useState<string[]>([]);

  const handleRemoveChip = (chipId: string) => {
    setRemovedChips(prev => [...prev, chipId]);
  };

  const isChipRemoved = (chipId: string) => removedChips.includes(chipId);

  return (
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="forte-ui space-y-8">
        {/* Basic Variants */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Filled Variants</h4>
          <div className="flex flex-wrap gap-3">
            <Chip variant="filled" color="default" size="medium">Default</Chip>
            <Chip variant="filled" color="primary" size="medium">Primary</Chip>
            <Chip variant="filled" color="secondary" size="medium">Secondary</Chip>
            <Chip variant="filled" color="success" size="medium">Success</Chip>
            <Chip variant="filled" color="warning" size="medium">Warning</Chip>
            <Chip variant="filled" color="error" size="medium">Error</Chip>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Outlined Variants</h4>
          <div className="flex flex-wrap gap-3">
            <Chip variant="outlined" color="default" size="medium">Default</Chip>
            <Chip variant="outlined" color="primary" size="medium">Primary</Chip>
            <Chip variant="outlined" color="secondary" size="medium">Secondary</Chip>
            <Chip variant="outlined" color="success" size="medium">Success</Chip>
            <Chip variant="outlined" color="warning" size="medium">Warning</Chip>
            <Chip variant="outlined" color="error" size="medium">Error</Chip>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Soft Variants</h4>
          <div className="flex flex-wrap gap-3">
            <Chip variant="soft" color="default" size="medium">Default</Chip>
            <Chip variant="soft" color="primary" size="medium">Primary</Chip>
            <Chip variant="soft" color="secondary" size="medium">Secondary</Chip>
            <Chip variant="soft" color="success" size="medium">Success</Chip>
            <Chip variant="soft" color="warning" size="medium">Warning</Chip>
            <Chip variant="soft" color="error" size="medium">Error</Chip>
          </div>
        </div>

        {/* Sizes */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Sizes</h4>
          <div className="flex flex-wrap items-center gap-3">
            <Chip variant="filled" color="primary" size="small">Small</Chip>
            <Chip variant="filled" color="primary" size="medium">Medium</Chip>
          </div>
        </div>

        {/* With Icons */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">With Icons</h4>
          <div className="flex flex-wrap gap-3">
            <Chip 
              variant="filled" 
              color="primary" 
              size="medium"
              startIcon={<IconUser />}
            >
              User
            </Chip>
            <Chip 
              variant="outlined" 
              color="secondary" 
              size="medium"
              startIcon={<IconSettings />}
            >
              Settings
            </Chip>
            <Chip 
              variant="soft" 
              color="success" 
              size="medium"
              startIcon={<IconCheck />}
            >
              Completed
            </Chip>
          </div>
        </div>

        {/* Interactive Removable Chips */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Removable Chips</h4>
          <div className="flex flex-wrap gap-3">
            {!isChipRemoved('react') && (
              <Chip 
                variant="filled" 
                color="primary" 
                size="medium"
                endIcon={<IconX />}
                onEndIconClick={() => handleRemoveChip('react')}
              >
                React
              </Chip>
            )}
            {!isChipRemoved('typescript') && (
              <Chip 
                variant="outlined" 
                color="info" 
                size="medium"
                endIcon={<IconX />}
                onEndIconClick={() => handleRemoveChip('typescript')}
              >
                TypeScript
              </Chip>
            )}
            {!isChipRemoved('tailwind') && (
              <Chip 
                variant="soft" 
                color="secondary" 
                size="medium"
                endIcon={<IconX />}
                onEndIconClick={() => handleRemoveChip('tailwind')}
              >
                Tailwind CSS
              </Chip>
            )}
          </div>
          {removedChips.length > 0 && (
            <button 
              onClick={() => setRemovedChips([])}
              className="text-sm text-blue-600 hover:text-blue-800 underline"
            >
              Reset removed chips
            </button>
          )}
        </div>

        {/* Advanced: Both Icons */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">With Both Icons</h4>
          <div className="flex flex-wrap gap-3">
            <Chip 
              variant="filled" 
              color="warning" 
              size="medium"
              startIcon={<IconStar />}
              endIcon={<IconX />}
              onStartIconClick={() => console.log('Star clicked')}
              onEndIconClick={() => console.log('Remove favorite')}
            >
              Favorite
            </Chip>
          </div>
        </div>

        {children}
      </div>
    </ComponentShowcase>
  );
}

// Client-safe Card Showcase
export function ClientSafeCardShowcase({ 
  children, 
  code, 
  title = "Card Examples",
  description = "Versatile card component with multiple variants, padding options, and composition patterns following Figma specifications"
}: {
  children?: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
}) {
  return (
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="space-y-8 forte-ui">
        {/* Section 1: Card Variants */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 rounded bg-blue-500"></div>
            <h3 className="text-lg font-semibold">Card Variants</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Default Card</CardTitle>
                <CardDescription>Standard card with default styling and shadow.</CardDescription>
              </CardHeader>
              <CardContent>
                <Text variant="body-sm">
                  This is the default card variant with standard padding and shadow-sm.
                </Text>
              </CardContent>
              <CardFooter>
                <Button size="sm">Action</Button>
              </CardFooter>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Elevated Card</CardTitle>
                <CardDescription>Card with enhanced shadow for emphasis.</CardDescription>
              </CardHeader>
              <CardContent>
                <Text variant="body-sm">
                  This elevated card uses shadow-md for a more prominent appearance.
                </Text>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="primary">Learn More</Button>
              </CardFooter>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <Card variant="outlined">
              <CardHeader>
                <CardTitle>Outlined Card</CardTitle>
                <CardDescription>Card with prominent border and no shadow.</CardDescription>
              </CardHeader>
              <CardContent>
                <Text variant="body-sm">
                  This outlined card emphasizes the border instead of using shadows.
                </Text>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="outline-primary">View Details</Button>
              </CardFooter>
            </Card>

            <Card variant="filled">
              <CardHeader>
                <CardTitle>Filled Card</CardTitle>
                <CardDescription>Card with subtle background fill.</CardDescription>
              </CardHeader>
              <CardContent>
                <Text variant="body-sm">
                  This filled card uses a light background color instead of white.
                </Text>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="text-primary">Learn More</Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Section 2: Card Padding Options */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 rounded bg-green-500"></div>
            <h3 className="text-lg font-semibold">Card Padding Options</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card padding="sm">
              <CardHeader padding="sm">
                <CardTitle>Small Padding</CardTitle>
                <CardDescription>Compact layout (16px)</CardDescription>
              </CardHeader>
              <CardContent padding="sm">
                <Text variant="body-sm">Compact card content with reduced spacing</Text>
              </CardContent>
              <CardFooter padding="sm">
                <Button size="sm" variant="soft-primary">Action</Button>
              </CardFooter>
            </Card>
            
            <Card padding="md">
              <CardHeader padding="md">
                <CardTitle>Medium Padding</CardTitle>
                <CardDescription>Default layout (24px)</CardDescription>
              </CardHeader>
              <CardContent padding="md">
                <Text variant="body-sm">Standard card content with balanced spacing</Text>
              </CardContent>
              <CardFooter padding="md">
                <Button size="sm" variant="soft-primary">Action</Button>
              </CardFooter>
            </Card>
            
            <Card padding="lg">
              <CardHeader padding="lg">
                <CardTitle>Large Padding</CardTitle>
                <CardDescription>Spacious layout (32px)</CardDescription>
              </CardHeader>
              <CardContent padding="lg">
                <Text variant="body-sm">Expanded card content with generous spacing</Text>
              </CardContent>
              <CardFooter padding="lg">
                <Button size="sm" variant="soft-primary">Action</Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Section 3: Card Composition Patterns */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 rounded bg-purple-500"></div>
            <h3 className="text-lg font-semibold">Card Composition Patterns</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Card</CardTitle>
                <CardDescription>Header + Content + Footer</CardDescription>
              </CardHeader>
              <CardContent>
                <Text variant="body-sm">
                  This is the most common card pattern with all three main sections:
                  CardHeader, CardContent, and CardFooter.
                </Text>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="primary">Primary Action</Button>
                <Button size="sm" variant="outline-default">Secondary Action</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardContent className="pt-5">
                <Text variant="body-sm">
                  This card uses only CardContent without a header or footer,
                  useful for simpler content display with minimal structure.
                </Text>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Header Only</CardTitle>
                <CardDescription>Card with just a header component</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Header + Footer</CardTitle>
                <CardDescription>Card with header and footer (no content)</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button size="sm" variant="primary">Action</Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Section 4: Complex Card Examples */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 rounded bg-orange-500"></div>
            <h3 className="text-lg font-semibold">Complex Card Examples</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="elevated">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>User Profile</CardTitle>
                  <Button variant="icon-default" size="icon-sm">
                    <IconSettings size={16} />
                  </Button>
                </div>
                <CardDescription>Interactive card with custom layout</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                      <IconUser size={24} />
                    </div>
                  </div>
                  <div>
                    <Text variant="body" className="font-medium">Jane Smith</Text>
                    <Text variant="body-sm" className="text-gray-600">Product Designer</Text>
                  </div>
                </div>
                <div className="flex gap-3 mb-4">
                  <Button variant="soft-primary" size="sm" className="flex-1">
                    <IconUser size={16} />
                    <span>Follow</span>
                  </Button>
                  <Button variant="secondary" size="sm" className="flex-1">
                    <IconStar size={16} />
                    <span>Favorite</span>
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <Button variant="text-primary" size="sm" className="ml-auto">
                  <span>View Profile</span>
                  <IconArrowRight size={16} />
                </Button>
              </CardFooter>
            </Card>

            <Card variant="outlined">
              <CardHeader>
                <CardTitle>Contact Form</CardTitle>
                <CardDescription>Example form inside card</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input label="Name" placeholder="Enter your name" />
                <Input label="Email" placeholder="Enter your email" />
                <Textarea
                  label="Message"
                  placeholder="How can we help you?"
                  rows={3}
                />
              </CardContent>
              <CardFooter className="flex justify-end gap-3">
                <Button variant="outline-default">Cancel</Button>
                <Button variant="primary">Submit</Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Section 5: Custom Features */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 rounded bg-pink-500"></div>
            <h3 className="text-lg font-semibold">Custom Features</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <IconHome size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Documents</h3>
                    <p className="text-sm text-gray-500">24 files</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <div className="text-center py-8">
                  <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
                  <p className="text-gray-600 mb-6">Get started with your new dashboard.</p>
                  <Button variant="primary">Get Started</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Section 6: Design Specifications */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 rounded bg-indigo-500"></div>
            <h3 className="text-lg font-semibold">Design Specifications</h3>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-4">
            <Heading level={3} className="text-lg text-gray-900">Card Design Specifications</Heading>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Text variant="body-sm" className="font-semibold text-gray-900">Card Variants</Text>
                <div className="space-y-1 text-sm text-gray-700">
                  <div>• Default: White background with shadow-sm</div>
                  <div>• Elevated: White background with shadow-md</div>
                  <div>• Outlined: White background, 2px border, no shadow</div>
                  <div>• Filled: Light gray background (gray-50), no shadow</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Text variant="body-sm" className="font-semibold text-gray-900">Padding Options</Text>
                <div className="space-y-1 text-sm text-gray-700">
                  <div>• Small: 16px padding (compact layout)</div>
                  <div>• Medium: 24px padding (default layout)</div>
                  <div>• Large: 32px padding (spacious layout)</div>
                  <div>• Custom: Any padding value via className</div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Text variant="body-sm" className="font-semibold text-gray-900">Component Structure</Text>
                <div className="space-y-1 text-sm text-gray-700">
                  <div>• CardHeader: Title and optional description</div>
                  <div>• CardContent: Main content area</div>
                  <div>• CardFooter: Action buttons and controls</div>
                  <div>• All sections are optional and composable</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Text variant="body-sm" className="font-semibold text-gray-900">Design Tokens</Text>
                <div className="space-y-1 text-sm text-gray-700">
                  <div>• Border Radius: 8px (rounded-lg)</div>
                  <div>• Box Shadow: shadow-sm (default), shadow-md (elevated)</div>
                  <div>• Border: 2px solid gray-200 (outlined)</div>
                  <div>• Background: white or gray-50 (filled)</div>
                  <div>• Typography: Plus Jakarta Sans</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {children}
      </div>
    </ComponentShowcase>
  );
}

// Client-safe Typography Showcase
export function ClientSafeTypographyShowcase({ 
  children, 
  code, 
  title = "Typography Examples",
  description = "Interactive typography system with headings, text variants, and color options"
}: {
  children?: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
}) {
  const [selectedHeadingLevel, setSelectedHeadingLevel] = useState<1 | 2 | 3 | 4 | 5 | 6>(2);
  const [selectedTextVariant, setSelectedTextVariant] = useState<'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'body-sm' | 'caption'>('body');
  const [selectedColor, setSelectedColor] = useState<'primary' | 'secondary' | 'brand' | 'white'>('primary');
  const [customText, setCustomText] = useState('Your custom text here');

  return (
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="forte-ui space-y-8">
        {/* Heading Levels */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Heading Levels</h4>
          <div className="space-y-3">
            <Heading level={1}>Heading Level 1</Heading>
            <Heading level={2}>Heading Level 2</Heading>
            <Heading level={3}>Heading Level 3</Heading>
            <Heading level={4}>Heading Level 4</Heading>
            <Heading level={5}>Heading Level 5</Heading>
            <Heading level={6}>Heading Level 6</Heading>
          </div>
        </div>

        {/* Text Variants */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Text Variants</h4>
          <div className="space-y-3">
            <Text variant="display">Display Text - Large and bold for major headings</Text>
            <Text variant="h1">H1 Text - Primary heading style</Text>
            <Text variant="h2">H2 Text - Secondary heading style</Text>
            <Text variant="h3">H3 Text - Tertiary heading style</Text>
            <Text variant="body">Body Text - Default paragraph text</Text>
            <Text variant="body-sm">Body Small - Smaller paragraph text</Text>
            <Text variant="caption">Caption Text - Small descriptive text</Text>
          </div>
        </div>

        {/* Color Variants */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Color Variants</h4>
          <div className="space-y-3">
            <Text variant="body" color="primary">Primary text color</Text>
            <Text variant="body" color="secondary">Secondary text color</Text>
            <Text variant="body" color="brand">Brand text color</Text>
            <div className="bg-gray-800 p-3 rounded">
              <Text variant="body" color="white">White text on dark background</Text>
            </div>
          </div>
        </div>

        {/* Interactive Typography Editor */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Interactive Typography Editor</h4>
          <div className="space-y-4 p-4 border rounded-lg bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium mb-1">Heading Level:</label>
                <select 
                  value={selectedHeadingLevel} 
                  onChange={(e) => setSelectedHeadingLevel(Number(e.target.value) as any)}
                  className="w-full text-xs border rounded px-2 py-1"
                >
                  <option value="1">Level 1</option>
                  <option value="2">Level 2</option>
                  <option value="3">Level 3</option>
                  <option value="4">Level 4</option>
                  <option value="5">Level 5</option>
                  <option value="6">Level 6</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">Text Variant:</label>
                <select 
                  value={selectedTextVariant} 
                  onChange={(e) => setSelectedTextVariant(e.target.value as any)}
                  className="w-full text-xs border rounded px-2 py-1"
                >
                  <option value="display">Display</option>
                  <option value="h1">H1</option>
                  <option value="h2">H2</option>
                  <option value="h3">H3</option>
                  <option value="h4">H4</option>
                  <option value="h5">H5</option>
                  <option value="h6">H6</option>
                  <option value="body">Body</option>
                  <option value="body-sm">Body Small</option>
                  <option value="caption">Caption</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">Color:</label>
                <select 
                  value={selectedColor} 
                  onChange={(e) => setSelectedColor(e.target.value as any)}
                  className="w-full text-xs border rounded px-2 py-1"
                >
                  <option value="primary">Primary</option>
                  <option value="secondary">Secondary</option>
                  <option value="brand">Brand</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-medium mb-1">Custom Text:</label>
              <input 
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                className="w-full text-sm border rounded px-3 py-2"
                placeholder="Enter your text here..."
              />
            </div>

            <div className="space-y-4 p-4 bg-white rounded border">
              <div>
                <Text variant="caption" color="secondary" className="block mb-2">Preview Heading:</Text>
                <Heading level={selectedHeadingLevel} color={selectedColor}>
                  {customText}
                </Heading>
              </div>
              <div>
                <Text variant="caption" color="secondary" className="block mb-2">Preview Text:</Text>
                <Text variant={selectedTextVariant} color={selectedColor}>
                  {customText}
                </Text>
              </div>
            </div>
          </div>
        </div>

        {/* Typography Scale */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Typography Scale</h4>
          <div className="space-y-4 p-4 border rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Text variant="caption" color="secondary" className="block mb-3">Headings:</Text>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Heading level={1} className="flex-1">H1</Heading>
                    <Text variant="caption" color="secondary">48px</Text>
                  </div>
                  <div className="flex items-center justify-between">
                    <Heading level={2} className="flex-1">H2</Heading>
                    <Text variant="caption" color="secondary">36px</Text>
                  </div>
                  <div className="flex items-center justify-between">
                    <Heading level={3} className="flex-1">H3</Heading>
                    <Text variant="caption" color="secondary">30px</Text>
                  </div>
                  <div className="flex items-center justify-between">
                    <Heading level={4} className="flex-1">H4</Heading>
                    <Text variant="caption" color="secondary">24px</Text>
                  </div>
                  <div className="flex items-center justify-between">
                    <Heading level={5} className="flex-1">H5</Heading>
                    <Text variant="caption" color="secondary">20px</Text>
                  </div>
                  <div className="flex items-center justify-between">
                    <Heading level={6} className="flex-1">H6</Heading>
                    <Text variant="caption" color="secondary">18px</Text>
                  </div>
                </div>
              </div>
              <div>
                <Text variant="caption" color="secondary" className="block mb-3">Body Text:</Text>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Text variant="display" className="flex-1">Display</Text>
                    <Text variant="caption" color="secondary">48px</Text>
                  </div>
                  <div className="flex items-center justify-between">
                    <Text variant="body" className="flex-1">Body</Text>
                    <Text variant="caption" color="secondary">16px</Text>
                  </div>
                  <div className="flex items-center justify-between">
                    <Text variant="body-sm" className="flex-1">Body Small</Text>
                    <Text variant="caption" color="secondary">14px</Text>
                  </div>
                  <div className="flex items-center justify-between">
                    <Text variant="caption" className="flex-1">Caption</Text>
                    <Text variant="caption" color="secondary">12px</Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {children}
      </div>
    </ComponentShowcase>
  );
}

// Client-safe Breadcrumb Showcase
export function ClientSafeBreadcrumbShowcase({ 
  children, 
  code, 
  title = "Breadcrumb Component",
  description = "Navigation breadcrumb with text and icon variants following ForteUI design specifications"
}: {
  children?: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
}) {
  return (
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="space-y-8 forte-ui">
        {/* Text Variant */}
        <div className="space-y-4">
          <Text variant="caption" color="secondary" className="mb-3 block">Text Variant (Default)</Text>
          <div className="space-y-4">
            <Breadcrumb
              variant="text"
              items={[
                { label: 'Home', href: '/' },
                { label: 'Products', href: '/products' },
                { label: 'Smartphones' }
              ]}
            />
            
            <Breadcrumb
              variant="text"
              items={[
                { label: 'Dashboard', href: '/dashboard' },
                { label: 'Settings', href: '/dashboard/settings' },
                { label: 'Profile', href: '/dashboard/settings/profile' },
                { label: 'Edit Profile' }
              ]}
            />
          </div>
        </div>

        {/* Icon Variant */}
        <div className="space-y-4">
          <Text variant="caption" color="secondary" className="mb-3 block">Icon Variant</Text>
          <div className="space-y-4">
            <Breadcrumb
              variant="icon"
              items={[
                { label: 'Home', href: '/', icon: IconHome },
                { label: 'Products', href: '/products', icon: IconShoppingCart },
                { label: 'Smartphones', icon: IconUser }
              ]}
            />
            
            <Breadcrumb
              variant="icon"
              items={[
                { label: 'Dashboard', href: '/dashboard', icon: IconHome },
                { label: 'Users', href: '/dashboard/users', icon: IconUser },
                { label: 'Settings', href: '/dashboard/settings', icon: IconSettings },
                { label: 'Profile', icon: IconUser }
              ]}
            />
          </div>
        </div>

        {/* Interactive Navigation */}
        <div className="space-y-4">
          <Text variant="caption" color="secondary" className="mb-3 block">Interactive Navigation</Text>
          <div className="space-y-4">
            <Breadcrumb
              items={[
                { 
                  label: 'Home', 
                  onClick: () => alert('Navigate to Home') 
                },
                { 
                  label: 'Products', 
                  onClick: () => alert('Navigate to Products') 
                },
                { 
                  label: 'Current Page' 
                }
              ]}
            />
            
            <Breadcrumb
              variant="icon"
              items={[
                { 
                  label: 'Dashboard', 
                  icon: IconHome,
                  onClick: () => alert('Navigate to Dashboard') 
                },
                { 
                  label: 'Analytics', 
                  icon: IconStar,
                  onClick: () => alert('Navigate to Analytics') 
                },
                { 
                  label: 'Reports',
                  icon: IconEye
                }
              ]}
            />
          </div>
        </div>

        {/* Custom Separator */}
        <div className="space-y-4">
          <Text variant="caption" color="secondary" className="mb-3 block">Custom Separator</Text>
          <div className="space-y-4">
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Documentation', href: '/docs' },
                { label: 'Components', href: '/docs/components' },
                { label: 'Breadcrumb' }
              ]}
              separator={<IconArrowRight size={12} className="text-gray-400" />}
            />
            
            <Breadcrumb
              variant="icon"
              items={[
                { label: 'Admin', href: '/admin', icon: IconSettings },
                { label: 'Users', href: '/admin/users', icon: IconUser },
                { label: 'John Doe', icon: IconUser }
              ]}
              separator={<span className="text-gray-400 text-sm">/</span>}
            />
          </div>
        </div>

        {/* Real-world Examples */}
        <div className="space-y-4">
          <Text variant="caption" color="secondary" className="mb-3 block">Real-world Examples</Text>
          <div className="space-y-6">
            <div className="space-y-3">
              <Text variant="body-sm" className="mb-2 block font-medium">E-commerce Product Page</Text>
              <div className="bg-gray-50 p-4 rounded-lg">
                <Breadcrumb
                  variant="icon"
                  items={[
                    { label: 'Home', href: '/', icon: IconHome },
                    { label: 'Electronics', href: '/electronics', icon: IconSettings },
                    { label: 'Smartphones', href: '/electronics/smartphones', icon: IconUser },
                    { label: 'iPhone 15 Pro', icon: IconStar }
                  ]}
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <Text variant="body-sm" className="mb-2 block font-medium">Admin Dashboard</Text>
              <div className="bg-gray-50 p-4 rounded-lg">
                <Breadcrumb
                  items={[
                    { label: 'Dashboard', href: '/admin' },
                    { label: 'Content Management', href: '/admin/content' },
                    { label: 'Blog Posts', href: '/admin/content/posts' },
                    { label: 'Edit: "Getting Started Guide"' }
                  ]}
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <Text variant="body-sm" className="mb-2 block font-medium">Documentation Site</Text>
              <div className="bg-gray-50 p-4 rounded-lg">
                <Breadcrumb
                  variant="icon"
                  items={[
                    { label: 'Docs', href: '/docs', icon: IconHome },
                    { label: 'Components', href: '/docs/components', icon: IconSettings },
                    { label: 'Navigation', href: '/docs/components/navigation', icon: IconArrowRight },
                    { label: 'Breadcrumb', icon: IconArrowRight }
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Design Specifications */}
        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
          <Text variant="body-sm" className="font-medium mb-3 block">Design Specifications:</Text>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <Text variant="body-sm" className="font-medium mb-2 block">Typography:</Text>
              <ul className="space-y-1">
                <li>• Font: Public Sans (font-sans)</li>
                <li>• Size: 14px (text-sm)</li>
                <li>• Weight: 400 (font-normal)</li>
                <li>• Line Height: 22px</li>
              </ul>
            </div>
            <div>
              <Text variant="body-sm" className="font-medium mb-2 block">Colors:</Text>
              <ul className="space-y-1">
                <li>• Active: text-primary (#1F2933)</li>
                <li>• Current: text-disabled</li>
                <li>• Hover: text-primary-600</li>
              </ul>
            </div>
            <div>
              <Text variant="body-sm" className="font-medium mb-2 block">Spacing:</Text>
              <ul className="space-y-1">
                <li>• Item Gap: 16px (gap-4)</li>
                <li>• Icon-Text Gap: 4px (gap-1)</li>
                <li>• Icon Size: 20px × 20px</li>
              </ul>
            </div>
            <div>
              <Text variant="body-sm" className="font-medium mb-2 block">Features:</Text>
              <ul className="space-y-1">
                <li>• Two variants: text, icon</li>
                <li>• Custom separators</li>
                <li>• ARIA compliant</li>
                <li>• Keyboard navigation</li>
              </ul>
            </div>
          </div>
        </div>

        {children}
      </div>
    </ComponentShowcase>
  );
}

// Client-safe Snackbar Showcase
export function ClientSafeSnackbarShowcase({ 
  children, 
  code, 
  title = "Snackbar Examples",
  description = "Snackbar component for displaying brief notifications with optional actions, following Figma specifications"
}: {
  children?: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
}) {
  const [triggerSnackbar, setTriggerSnackbar] = useState<string | null>(null);

  const handleAction = (type: string) => {
    console.log(`${type} action clicked`);
    // Auto-hide after action
    if (triggerSnackbar === type) {
      setTriggerSnackbar(null);
    }
  };

  const handleClose = (type: string) => {
    console.log(`${type} snackbar closed`);
    setTriggerSnackbar(null);
  };

  return (
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="space-y-8 forte-ui">
        {/* Default Variant - Dark Theme */}
        <div className="space-y-4">
          <Text variant="body-sm" className="font-medium">Default Variant - Dark Theme with Close Button:</Text>
          
          <div className="space-y-4">
            <div className="p-3 bg-gray-50 rounded">
              <Text variant="body-sm" className="mb-2 text-gray-600">Default Dark Snackbar</Text>
              <Snackbar
                variant="default"
                severity="default"
                message="This is a default message!"
                closable
                onClose={() => handleClose('default')}
              />
            </div>
          </div>
        </div>

        {/* Action Variant - Semantic Colors */}
        <div className="space-y-4">
          <Text variant="body-sm" className="font-medium">Action Variant - Semantic Colors with Action Buttons:</Text>
          
          <div className="space-y-4">
            <div className="p-3 bg-gray-50 rounded">
              <Text variant="body-sm" className="mb-2 text-gray-600">Info Snackbar with Action</Text>
              <Snackbar
                variant="action"
                severity="info"
                message="This is a info message!"
                actionLabel="Action"
                onAction={() => handleAction('info')}
              />
            </div>

            <div className="p-3 bg-gray-50 rounded">
              <Text variant="body-sm" className="mb-2 text-gray-600">Success Snackbar with Action</Text>
              <Snackbar
                variant="action"
                severity="success"
                message="This is a success message!"
                actionLabel="Action"
                onAction={() => handleAction('success')}
              />
            </div>

            <div className="p-3 bg-gray-50 rounded">
              <Text variant="body-sm" className="mb-2 text-gray-600">Warning Snackbar with Action</Text>
              <Snackbar
                variant="action"
                severity="warning"
                message="This is a warning message!"
                actionLabel="Action"
                onAction={() => handleAction('warning')}
              />
            </div>

            <div className="p-3 bg-gray-50 rounded">
              <Text variant="body-sm" className="mb-2 text-gray-600">Error Snackbar with Action</Text>
              <Snackbar
                variant="action"
                severity="error"
                message="This is a error message!"
                actionLabel="Action"
                onAction={() => handleAction('error')}
              />
            </div>
          </div>
        </div>

        {/* Default Variant with Semantic Icons and Close */}
        <div className="space-y-4">
          <Text variant="body-sm" className="font-medium">Default Variant - Semantic Icons with Close Button:</Text>
          
          <div className="space-y-4">
            <div className="p-3 bg-gray-50 rounded">
              <Text variant="body-sm" className="mb-2 text-gray-600">Info with Close</Text>
              <Snackbar
                variant="default"
                severity="info"
                message="This is a info message with close!"
                closable
                onClose={() => handleClose('info-close')}
              />
            </div>

            <div className="p-3 bg-gray-50 rounded">
              <Text variant="body-sm" className="mb-2 text-gray-600">Success with Close</Text>
              <Snackbar
                variant="default"
                severity="success"
                message="This is a success message with close!"
                closable
                onClose={() => handleClose('success-close')}
              />
            </div>

            <div className="p-3 bg-gray-50 rounded">
              <Text variant="body-sm" className="mb-2 text-gray-600">Warning with Close</Text>
              <Snackbar
                variant="default"
                severity="warning"
                message="This is a warning message with close!"
                closable
                onClose={() => handleClose('warning-close')}
              />
            </div>

            <div className="p-3 bg-gray-50 rounded">
              <Text variant="body-sm" className="mb-2 text-gray-600">Error with Close</Text>
              <Snackbar
                variant="default"
                severity="error"
                message="This is a error message with close!"
                closable
                onClose={() => handleClose('error-close')}
              />
            </div>
          </div>
        </div>

        {/* Interactive Examples */}
        <div className="space-y-4">
          <Text variant="body-sm" className="font-medium">Interactive Examples:</Text>
          
          <div className="space-y-4">
            <div className="p-3 bg-gray-50 rounded">
              <Text variant="body-sm" className="mb-3 text-gray-600">Trigger Different Snackbars</Text>
              
              <div className="flex flex-wrap gap-3 mb-4">
                <button
                  className="px-4 py-2 bg-primary-main text-white rounded-lg hover:bg-primary-dark transition-colors"
                  onClick={() => setTriggerSnackbar('interactive-info')}
                >
                  Show Info Action
                </button>
                <button
                  className="px-4 py-2 bg-success-main text-white rounded-lg hover:bg-success-dark transition-colors"
                  onClick={() => setTriggerSnackbar('interactive-success')}
                >
                  Show Success Action
                </button>
                <button
                  className="px-4 py-2 bg-warning-main text-gray-800 rounded-lg hover:bg-warning-dark transition-colors"
                  onClick={() => setTriggerSnackbar('interactive-warning')}
                >
                  Show Warning Action
                </button>
                <button
                  className="px-4 py-2 bg-error-main text-white rounded-lg hover:bg-error-dark transition-colors"
                  onClick={() => setTriggerSnackbar('interactive-error')}
                >
                  Show Error Action
                </button>
              </div>

              {/* Interactive Snackbars */}
              <div className="space-y-3">
                {triggerSnackbar === 'interactive-info' && (
                  <Snackbar
                    variant="action"
                    severity="info"
                    message="Interactive info message triggered!"
                    actionLabel="Undo"
                    onAction={() => handleAction('interactive-info')}
                    closable
                    onClose={() => setTriggerSnackbar(null)}
                  />
                )}
                
                {triggerSnackbar === 'interactive-success' && (
                  <Snackbar
                    variant="action"
                    severity="success"
                    message="Operation completed successfully!"
                    actionLabel="View Details"
                    onAction={() => handleAction('interactive-success')}
                    closable
                    onClose={() => setTriggerSnackbar(null)}
                  />
                )}
                
                {triggerSnackbar === 'interactive-warning' && (
                  <Snackbar
                    variant="action"
                    severity="warning"
                    message="Please review your input before proceeding!"
                    actionLabel="Review"
                    onAction={() => handleAction('interactive-warning')}
                    closable
                    onClose={() => setTriggerSnackbar(null)}
                  />
                )}
                
                {triggerSnackbar === 'interactive-error' && (
                  <Snackbar
                    variant="action"
                    severity="error"
                    message="Something went wrong. Please try again!"
                    actionLabel="Retry"
                    onAction={() => handleAction('interactive-error')}
                    closable
                    onClose={() => setTriggerSnackbar(null)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Real-world Scenarios */}
        <div className="space-y-4">
          <Text variant="body-sm" className="font-medium">Real-world Scenarios:</Text>
          
          <div className="space-y-4">
            <div className="p-3 bg-gray-50 rounded">
              <Text variant="body-sm" className="mb-2 text-gray-600">Form Submission Success</Text>
              <Snackbar
                variant="action"
                severity="success"
                message="Form submitted successfully!"
                actionLabel="View"
                onAction={() => handleAction('form-success')}
              />
            </div>

            <div className="p-3 bg-gray-50 rounded">
              <Text variant="body-sm" className="mb-2 text-gray-600">Network Error with Retry</Text>
              <Snackbar
                variant="action"
                severity="error"
                message="Failed to save changes"
                actionLabel="Retry"
                onAction={() => handleAction('error-retry')}
              />
            </div>

            <div className="p-3 bg-gray-50 rounded">
              <Text variant="body-sm" className="mb-2 text-gray-600">File Upload Warning</Text>
              <Snackbar
                variant="default"
                severity="warning"
                message="File size is larger than recommended"
                closable
                onClose={() => handleClose('file-warning')}
              />
            </div>

            <div className="p-3 bg-gray-50 rounded">
              <Text variant="body-sm" className="mb-2 text-gray-600">Task Notification</Text>
              <Snackbar
                variant="default"
                severity="info"
                message="Background sync completed"
                closable
                onClose={() => handleClose('sync-info')}
              />
            </div>
          </div>
        </div>

        {children}
      </div>
    </ComponentShowcase>
  );
}

// Client-safe Progress Showcase
export function ClientSafeProgressShowcase({ 
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
  React.useEffect(() => {
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

// Client-safe Button Showcase
export function ClientSafeButtonShowcase({ 
  children, 
  code, 
  title = "Button Component",
  description = "Button component with multiple variants, sizes, states, and rich icon support following ForteUI design specifications"
}: {
  children?: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
}) {
  const [loading, setLoading] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleAsyncAction = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setClickCount(prev => prev + 1);
    }, 2000);
  };

  return (
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="space-y-8">
        {/* Contained Button Variants */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Contained Button Variants</h4>
          <div className="flex flex-wrap gap-3">
            <Button variant="default" size="md">Default</Button>
            <Button variant="primary" size="md">Primary</Button>
            <Button variant="secondary" size="md">Secondary</Button>
            <Button variant="info" size="md">Info</Button>
            <Button variant="success" size="md">Success</Button>
            <Button variant="warning" size="md">Warning</Button>
            <Button variant="error" size="md">Error</Button>
          </div>
        </div>

        {/* Button Sizes */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Button Sizes</h4>
          <div className="flex items-center gap-4">
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="md">Medium</Button>
            <Button variant="primary" size="lg">Large</Button>
          </div>
        </div>

        {/* Outline Button Variants */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Outline Button Variants</h4>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline-default">Default</Button>
            <Button variant="outline-primary">Primary</Button>
            <Button variant="outline-info">Info</Button>
            <Button variant="outline-success">Success</Button>
            <Button variant="outline-warning">Warning</Button>
            <Button variant="outline-error">Error</Button>
          </div>
        </div>

        {/* Text Button Variants */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Text Button Variants</h4>
          <div className="flex flex-wrap gap-3">
            <Button variant="text-default">Default</Button>
            <Button variant="text-primary">Primary</Button>
            <Button variant="text-info">Info</Button>
            <Button variant="text-success">Success</Button>
            <Button variant="text-warning">Warning</Button>
            <Button variant="text-error">Error</Button>
          </div>
        </div>

        {/* Soft Button Variants */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Soft Button Variants</h4>
          <div className="flex flex-wrap gap-3">
            <Button variant="soft-default">Default</Button>
            <Button variant="soft-primary">Primary</Button>
            <Button variant="soft-info">Info</Button>
            <Button variant="soft-success">Success</Button>
            <Button variant="soft-warning">Warning</Button>
            <Button variant="soft-error">Error</Button>
          </div>
        </div>

        {/* Button States */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Button States</h4>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" disabled>Primary Disabled</Button>
            <Button variant="outline-primary" disabled>Outline Disabled</Button>
            <Button variant="text-primary" disabled>Text Disabled</Button>
            <Button variant="soft-primary" disabled>Soft Disabled</Button>
          </div>
        </div>

        {/* Buttons with Leading Icons */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Buttons with Leading Icons</h4>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">
              <IconPlus size={16} />
              <span>Add Item</span>
            </Button>
            <Button variant="info">
              <IconInfoCircle size={16} />
              <span>Info</span>
            </Button>
            <Button variant="success">
              <IconCheck size={16} />
              <span>Success</span>
            </Button>
            <Button variant="error">
              <IconTrash size={16} />
              <span>Delete</span>
            </Button>
          </div>
        </div>

        {/* Buttons with Trailing Icons */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Buttons with Trailing Icons</h4>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">
              <span>Next</span>
              <IconArrowRight size={16} />
            </Button>
            <Button variant="secondary">
              <span>Dropdown</span>
              <IconChevronDown size={16} />
            </Button>
            <Button variant="success">
              <span>Download</span>
              <IconDownload size={16} />
            </Button>
          </div>
        </div>

        {/* Icon-Only Buttons */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Icon-Only Buttons</h4>
          <div className="flex flex-wrap gap-3">
            <Button variant="icon-default" size="icon-md">
              <IconHome className="w-6 h-6" />
            </Button>
            <Button variant="icon-primary" size="icon-md">
              <IconUser className="w-6 h-6" />
            </Button>
            <Button variant="icon-info" size="icon-md">
              <IconInfoCircle className="w-6 h-6" />
            </Button>
            <Button variant="icon-success" size="icon-md">
              <IconCheck className="w-6 h-6" />
            </Button>
            <Button variant="icon-warning" size="icon-md">
              <IconAlertTriangle className="w-6 h-6" />
            </Button>
            <Button variant="icon-error" size="icon-md">
              <IconX className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Icon Button Sizes */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Icon Button Sizes</h4>
          <div className="flex items-center gap-4">
            <Button variant="icon-primary" size="icon-lg">
              <IconPlus className="w-8 h-8" />
            </Button>
            <Button variant="icon-primary" size="icon-md">
              <IconPlus className="w-6 h-6" />
            </Button>
            <Button variant="icon-primary" size="icon-sm">
              <IconPlus className="w-5 h-5" />
            </Button>
            <Button variant="icon-primary" size="icon-xs">
              <IconPlus className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Icon Button Use Cases */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Icon Button Use Cases</h4>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-3">
              <Button variant="icon-primary" size="icon-sm">
                <IconEdit className="w-5 h-5" />
              </Button>
              <span className="text-sm text-gray-600">Edit</span>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="icon-error" size="icon-sm">
                <IconTrash className="w-5 h-5" />
              </Button>
              <span className="text-sm text-gray-600">Delete</span>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="icon-info" size="icon-sm">
                <IconSearch className="w-5 h-5" />
              </Button>
              <span className="text-sm text-gray-600">Search</span>
            </div>
          </div>
        </div>

        {/* Interactive Examples */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Interactive Examples</h4>
          <div className="space-y-4">
            <div className="flex gap-4 items-center">
              <Button 
                variant="primary" 
                onClick={handleAsyncAction}
                disabled={loading}
              >
                {loading ? 'Processing...' : `Clicked ${clickCount} times`}
              </Button>
              <Button 
                variant="secondary" 
                onClick={() => setClickCount(0)}
                disabled={loading}
              >
                Reset
              </Button>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg text-sm">
              <strong>Status:</strong> {loading ? 'Processing...' : 'Ready'} |
              <strong> Click Count:</strong> {clickCount}
            </div>
          </div>
        </div>

        {/* Design Specifications */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Design Specifications</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-gray-50 rounded-lg">
            <div>
              <h5 className="text-sm font-medium mb-2">Contained Button Specs</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Height: Small (32px), Medium (40px), Large (48px)</li>
                <li>• Border Radius: 6px (default), 8px (large)</li>
                <li>• Font: Plus Jakarta Sans Medium</li>
                <li>• Font Size: 14px (sm), 15px (md), 16px (lg)</li>
                <li>• Hover State: 8% opacity color blend</li>
                <li>• Focus Ring: 2px solid primary-lighter</li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-medium mb-2">Icon Button Specs</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Shape: Circular (border-radius: 500px)</li>
                <li>• Sizes: XS (28px), SM (36px), MD (40px), LG (48px)</li>
                <li>• Icon Sizes: 16px, 20px, 24px, 32px</li>
                <li>• Hover State: 8% opacity background</li>
                <li>• Focus Ring: 2px solid with color-lighter</li>
              </ul>
            </div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h5 className="text-sm font-medium mb-2">Interaction States</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Default: Base styling with semantic colors</li>
              <li>• Hover: 8% darken/lighten overlay effect</li>
              <li>• Pressed: 16% darken/lighten overlay effect</li>
              <li>• Focus: 2px outline ring in color-light variant</li>
              <li>• Disabled: 0.5 opacity with no-events pointer</li>
            </ul>
          </div>
        </div>
      </div>
      {children}
    </ComponentShowcase>
  );
}
