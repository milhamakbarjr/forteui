'use client';

import React, { useState } from 'react';
import { Input, Checkbox, Switch, Avatar, Textarea, Radio, RadioGroup } from '@forteui/core';
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
          />
          <Switch 
            label="Dark mode" 
            checked={enabled2}
            onCheckedChange={setEnabled2}
          />
          <Switch 
            label="Auto-save"
            checked={enabled3}
            onCheckedChange={setEnabled3}
          />
          <Switch 
            label="Disabled option" 
            disabled 
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
          />
          
          <Textarea 
            label="Additional Notes"
            placeholder="Optional notes..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
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
