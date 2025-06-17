'use client';

import React, { useState } from 'react';
import { Input, Checkbox, Switch, Avatar, Textarea, Radio, RadioGroup, Slider, Badge, Chip, IconX, IconUser, IconCheck, IconSettings, IconStar } from '@forteui/core';
import { ComponentShowcase } from './ComponentShowcase';

// Client-safe Input Showcase
export function ClientSafeInputShowcase({ 
  children, 
  code, 
  title = "Input Variants",
  description = "Interactive input examples"
}: {
  children?: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
}) {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');

  return (
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Static inputs for initial render */}
          <Input placeholder="Enter text..." />
          <Input type="email" placeholder="Enter email..." />
          <Input type="password" placeholder="Enter password..." />
          <Input placeholder="Disabled input" disabled />
          
          {/* Interactive inputs */}
          <Input 
            placeholder="Interactive text input..." 
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
          />
          <Input 
            type="email" 
            placeholder="Interactive email..." 
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
          />
          <Input 
            type="password" 
            placeholder="Interactive password..." 
            value={value3}
            onChange={(e) => setValue3(e.target.value)}
          />
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
  description = "Interactive checkbox component examples"
}: {
  children?: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
}) {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(false);

  return (
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="space-y-4">
        <div className="space-y-3">
          <Checkbox 
            label="Accept terms and conditions"
            checked={checked1}
            onCheckedChange={setChecked1}
          />
          <Checkbox 
            label="Subscribe to newsletter" 
            checked={checked2}
            onCheckedChange={setChecked2}
          />
          <Checkbox 
            label="Disabled option" 
            disabled 
          />
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
