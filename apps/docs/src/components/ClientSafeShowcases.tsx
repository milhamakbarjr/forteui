'use client';

import React, { useState } from 'react';
import { Input, Checkbox, Switch, Avatar, Textarea, Radio, RadioGroup, Slider, Badge, Chip, IconX, IconUser, IconCheck, IconSettings, IconStar, IconHome, IconShoppingCart, IconEye, IconEyeOff, IconArrowRight, Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription, Text, Heading, Breadcrumb, Snackbar, Progress, Button, IconPlus, IconInfoCircle, IconAlertTriangle, IconTrash, IconEdit, IconSearch, IconMail, IconDownload, IconChevronDown } from '@forteui/core';
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
  title = "Avatar Variants",
  description = "Different avatar sizes and styles"
}: {
  children?: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
}) {
  return (
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="flex flex-wrap gap-4 items-center">
        <Avatar size="sm">
          <span>SM</span>
        </Avatar>
        <Avatar>
          <span>MD</span>
        </Avatar>
        <Avatar size="lg">
          <span>LG</span>
        </Avatar>
        <Avatar size="xl">
          <span>XL</span>
        </Avatar>
        
        {/* Avatars with fallback initials */}
        <Avatar size="sm">
          <span>JD</span>
        </Avatar>
        <Avatar>
          <span>AB</span>
        </Avatar>
        <Avatar size="lg">
          <span>CD</span>
        </Avatar>
        <Avatar size="xl">
          <span>EF</span>
        </Avatar>
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
  const [enabled1, setEnabled1] = useState(false);
  const [enabled2, setEnabled2] = useState(true);
  const [enabled3, setEnabled3] = useState(true);

  return (
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="space-y-4">
        <div className="space-y-3">
          <Switch 
            label="Enable notifications"
            checked={enabled1}
            onCheckedChange={setEnabled1}
            color="primary"
          />
          <Switch 
            label="Dark mode" 
            checked={enabled2}
            onCheckedChange={setEnabled2}
            color="secondary"
          />
          <Switch 
            label="Auto-save"
            checked={enabled3}
            onCheckedChange={setEnabled3}
            color="success"
          />
          <Switch 
            label="Disabled option" 
            disabled 
            color="default"
          />
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
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('Great product! I love the design and functionality.');
  const [notes, setNotes] = useState('');

  return (
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="space-y-6">
        <div className="space-y-4">
          <Textarea 
            label="Message"
            placeholder="Enter your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
          />
          
          <Textarea 
            label="Feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={3}
            helperText={`${feedback.length}/500 characters`}
            variant="default"
          />
          
          <Textarea 
            label="Additional Notes"
            placeholder="Optional notes..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
            variant="filled"
          />
          
          <Textarea 
            label="Error State"
            value="This has an error"
            error
            helperText="This field has an error"
            rows={2}
          />
          
          <Textarea 
            label="Disabled Textarea"
            value="This textarea is disabled"
            disabled
            rows={2}
          />
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
  description = "Interactive radio component examples"
}: {
  children?: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
}) {
  const [selectedPlan, setSelectedPlan] = useState('basic');
  const [selectedTheme, setSelectedTheme] = useState('light');
  const [selectedSize, setSelectedSize] = useState('medium');

  return (
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="space-y-6">
        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-3">Choose your plan:</h4>
            <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan}>
              <Radio value="basic" label="Basic Plan - $9/month" />
              <Radio value="pro" label="Pro Plan - $19/month" />
              <Radio value="enterprise" label="Enterprise Plan - $49/month" />
            </RadioGroup>
            <p className="text-sm text-gray-600 mt-2">Selected: {selectedPlan}</p>
          </div>

          <div>
            <h4 className="font-medium mb-3">Theme preference:</h4>
            <RadioGroup value={selectedTheme} onValueChange={setSelectedTheme}>
              <Radio value="light" label="Light Theme" variant="primary" />
              <Radio value="dark" label="Dark Theme" variant="secondary" />
              <Radio value="auto" label="Auto (System)" variant="info" />
            </RadioGroup>
            <p className="text-sm text-gray-600 mt-2">Selected: {selectedTheme}</p>
          </div>

          <div>
            <h4 className="font-medium mb-3">Size options:</h4>
            <RadioGroup value={selectedSize} onValueChange={setSelectedSize}>
              <Radio value="small" label="Small" size="sm" />
              <Radio value="medium" label="Medium" size="md" />
              <Radio value="disabled" label="Disabled Option" disabled />
            </RadioGroup>
            <p className="text-sm text-gray-600 mt-2">Selected: {selectedSize}</p>
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
  description = "Interactive slider component examples"
}: {
  children?: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
}) {
  const [volume, setVolume] = useState(75);
  const [temperature, setTemperature] = useState(22);
  const [brightness, setBrightness] = useState(50);
  const [progress, setProgress] = useState(30);

  return (
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="space-y-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-3">
              Volume: {volume}%
            </label>
            <Slider
              value={volume}
              onChange={setVolume}
              min={0}
              max={100}
              step={1}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-3">
              Temperature: {temperature}°C
            </label>
            <Slider
              value={temperature}
              onChange={setTemperature}
              min={16}
              max={30}
              step={0.5}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-3">
              Brightness: {brightness}%
            </label>
            <Slider
              value={brightness}
              onChange={setBrightness}
              min={0}
              max={100}
              step={5}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-3">
              Progress: {progress}% (Disabled)
            </label>
            <Slider
              value={progress}
              onChange={setProgress}
              min={0}
              max={100}
              disabled
            />
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
  description = "Interactive badge component examples"
}: {
  children?: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
}) {
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
      <div className="space-y-8">
        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-3">Badge Variants</h4>
            <div className="flex flex-wrap gap-6 items-center">
              <Badge variant="default" count={1}>
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs">📧</div>
              </Badge>
              <Badge variant="primary" count={5}>
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs">🔔</div>
              </Badge>
              <Badge variant="secondary" count={12}>
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs">💬</div>
              </Badge>
              <Badge variant="success" count={3}>
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs">✅</div>
              </Badge>
              <Badge variant="warning" count={99}>
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs">⚠️</div>
              </Badge>
              <Badge variant="error" count={100}>
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs">❌</div>
              </Badge>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">Interactive Badge Counters</h4>
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex flex-col items-center gap-2">
                <Badge variant="error" count={notificationCount}>
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm">🔔</div>
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
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-sm">💬</div>
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
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-sm">🛒</div>
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
                className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded"
              >
                Reset All
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">Dot Badges</h4>
            <div className="flex flex-wrap gap-6 items-center">
              <Badge variant="success" type="dot">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">👤</div>
              </Badge>
              <Badge variant="warning" type="dot">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">⚙️</div>
              </Badge>
              <Badge variant="error" type="dot">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">🚨</div>
              </Badge>
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
  description = "Interactive card component examples with variants and composition patterns"
}: {
  children?: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
}) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<'default' | 'elevated' | 'outlined' | 'filled'>('default');
  const [selectedPadding, setSelectedPadding] = useState<'sm' | 'md' | 'lg'>('md');

  return (
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="forte-ui space-y-8">
        {/* Card Variants */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Card Variants</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="default">
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
                <button className="px-3 py-1 text-sm bg-blue-100 hover:bg-blue-200 rounded">Action</button>
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
                <button className="px-3 py-1 text-sm bg-blue-500 text-white hover:bg-blue-600 rounded">Learn More</button>
              </CardFooter>
            </Card>

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
                <button className="px-3 py-1 text-sm border border-blue-500 text-blue-500 hover:bg-blue-50 rounded">View Details</button>
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
                <button className="px-3 py-1 text-sm text-blue-500 hover:text-blue-700 underline">Learn More</button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Padding Options */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Padding Options</h4>
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
                <button className="px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded">Action</button>
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
                <button className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded">Action</button>
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
                <button className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded">Action</button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Interactive Example */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Interactive Card</h4>
          <Card variant={selectedVariant} padding={selectedPadding}>
            <CardHeader>
              <CardTitle>Interactive Product Card</CardTitle>
              <CardDescription>Try different variants and padding options below</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Text variant="body-sm">
                  This card updates based on your selections. Choose different variants and padding to see the changes.
                </Text>
                <div className="flex gap-4">
                  <div>
                    <label className="block text-xs font-medium mb-1">Variant:</label>
                    <select 
                      value={selectedVariant} 
                      onChange={(e) => setSelectedVariant(e.target.value as any)}
                      className="text-xs border rounded px-2 py-1"
                    >
                      <option value="default">Default</option>
                      <option value="elevated">Elevated</option>
                      <option value="outlined">Outlined</option>
                      <option value="filled">Filled</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">Padding:</label>
                    <select 
                      value={selectedPadding} 
                      onChange={(e) => setSelectedPadding(e.target.value as any)}
                      className="text-xs border rounded px-2 py-1"
                    >
                      <option value="sm">Small</option>
                      <option value="md">Medium</option>
                      <option value="lg">Large</option>
                    </select>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex gap-2">
                <button 
                  onClick={() => setLiked(!liked)}
                  className={`px-3 py-1 text-sm rounded ${
                    liked ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'
                  } hover:bg-red-200`}
                >
                  {liked ? '❤️ Liked' : '🤍 Like'}
                </button>
                <button 
                  onClick={() => setBookmarked(!bookmarked)}
                  className={`px-3 py-1 text-sm rounded ${
                    bookmarked ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                  } hover:bg-blue-200`}
                >
                  {bookmarked ? '🔖 Saved' : '📑 Save'}
                </button>
              </div>
            </CardFooter>
          </Card>
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
