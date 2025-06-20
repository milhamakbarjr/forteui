'use client';

import React, { useState } from 'react';
import { Button, Input, Alert, Avatar, Badge, Checkbox, Switch, Card } from '@forteui/core';
import { ComponentShowcase } from './ComponentShowcase';
import { ClientOnly } from './ClientOnly';

export function ButtonShowcase() {
  return (
    <ComponentShowcase title="Button Examples" description="Interactive button examples with different variants and states.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="outline-default">Outline Button</Button>
        <ClientOnly>
          <Button variant="primary" onClick={() => alert('Primary clicked!')}>
            Primary (Interactive)
          </Button>
          <Button variant="outline-primary" onClick={() => alert('Outline clicked!')}>
            Outline Primary
          </Button>
          <Button variant="error" onClick={() => alert('Error clicked!')}>
            Error Button
          </Button>
        </ClientOnly>
        <Button disabled>
          Disabled Button
        </Button>
      </div>
    </ComponentShowcase>
  );
}

export function InputShowcase({ 
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
  return (
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input placeholder="Enter text..." />
          <Input type="email" placeholder="Enter email..." />
          <Input type="password" placeholder="Enter password..." />
          <Input placeholder="Disabled input" disabled />
          <ClientOnly>
            <InteractiveInputs />
          </ClientOnly>
        </div>
        {children}
      </div>
    </ComponentShowcase>
  );
}

function InteractiveInputs() {
  const [value, setValue] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Input 
        placeholder="Interactive text input..." 
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Input 
        type="email" 
        placeholder="Interactive email..." 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input 
        type="password" 
        placeholder="Interactive password..." 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </>
  );
}

export function FormControlsShowcase({ 
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
  return (
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms-static" />
          <label htmlFor="terms-static">Accept terms and conditions</label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="notifications-static" />
          <label htmlFor="notifications-static">Enable notifications</label>
        </div>
        <ClientOnly>
          <InteractiveFormControls />
        </ClientOnly>
        {children}
      </div>
    </ComponentShowcase>
  );
}

function InteractiveFormControls() {
  const [checked, setChecked] = useState(false);
  const [switched, setSwitched] = useState(false);

  return (
    <>
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="terms-interactive" 
          checked={checked}
          onCheckedChange={setChecked}
        />
        <label htmlFor="terms-interactive">Interactive checkbox (checked: {checked.toString()})</label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch 
          id="notifications-interactive" 
          checked={switched}
          onCheckedChange={setSwitched}
        />
        <label htmlFor="notifications-interactive">Interactive switch (on: {switched.toString()})</label>
      </div>
    </>
  );
}

export function AlertShowcase({ 
  children, 
  code, 
  title = "Alert Variants",
  description = "Different alert types and styles"
}: {
  children?: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
}) {
  return (
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="space-y-4">
        <Alert variant="default">
          <h4>Default Alert</h4>
          <p>This is a default alert message.</p>
        </Alert>
        <Alert variant="filled">
          <h4>Filled Alert</h4>
          <p>This is a filled alert message.</p>
        </Alert>
        <Alert variant="outline">
          <h4>Outline Alert</h4>
          <p>This is an outline alert message.</p>
        </Alert>
        {children}
      </div>
    </ComponentShowcase>
  );
}

export function AvatarShowcase({ 
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

export function BadgeShowcase({ 
  children, 
  code, 
  title = "Badge Variants",
  description = "Different badge types and styles"
}: {
  children?: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
}) {
  return (
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="flex flex-wrap gap-2">
        <Badge variant="default">Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="primary">Primary</Badge>
        {children}
      </div>
    </ComponentShowcase>
  );
}
