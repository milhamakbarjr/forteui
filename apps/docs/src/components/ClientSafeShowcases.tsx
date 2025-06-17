'use client';

import React, { useState } from 'react';
import { Input, Checkbox, Switch, Avatar, Textarea, Radio, RadioGroup, Slider, Badge, Chip, IconX, IconUser, IconCheck, IconSettings, IconStar, Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription, Text, Heading } from '@forteui/core';
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
