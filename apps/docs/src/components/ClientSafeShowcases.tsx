'use client';

import React, { useState } from 'react';
import { Input, Checkbox, Switch, Avatar, Textarea, Radio, RadioGroup, Slider, Badge, Chip, Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription, Text, Heading, Breadcrumb, Snackbar, Progress, Button, Alert } from '@forteui/core';
import { IconX, IconUser, IconCheck, IconSettings, IconStar, IconHome, IconShoppingCart, IconEye, IconArrowRight, IconPlus, IconInfoCircle, IconAlertTriangle, IconTrash, IconEdit, IconSearch, IconMail, IconDownload, IconChevronDown } from '@tabler/icons-react';
import { ComponentShowcase } from './ComponentShowcase';

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
// Client-safe Checkbox Showcase
// Client-safe Radio Showcase
// Client-safe Slider Showcase
// Client-safe Chip Showcase
// Client-safe Card Showcase has been migrated to showcases/CardShowcase.tsx

// Client-safe Typography Showcase
// Client-safe Breadcrumb Showcase
// Client-safe Snackbar Showcase
// Client-safe Progress Showcase
// Client-safe Button Showcase
