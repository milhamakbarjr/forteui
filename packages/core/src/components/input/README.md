# Input Component

A flexible input component with floating labels, multiple variants, and state management.

## Features

- **Variants**: Default (outline) and Filled (background-based)
- **Sizes**: Small (40px) and Medium (54px) 
- **States**: Default, hover, focus, error, disabled
- **Floating Labels**: Smart label positioning based on input state
- **Helper Text**: Support for helper text with icons
- **End Adornments**: Custom elements can be placed at the end of the input

## Usage

```tsx
import { Input } from '@forte-ui/core';

// Basic input
<Input label="Email" placeholder="Enter your email" />

// Filled variant
<Input variant="filled" label="Name" placeholder="Enter your name" />

// With helper text
<Input 
  label="Password" 
  type="password"
  helperText="Must be at least 8 characters"
  helperIcon={<InfoIcon size={16} />}
/>

// Error state
<Input 
  label="Username" 
  error
  defaultValue="invalid"
  helperText="Username already taken"
/>
```

## Props

- `variant`: "default" | "filled" | "error"
- `size`: "sm" | "md"
- `label`: string
- `helperText`: string
- `helperIcon`: ReactNode
- `endAdornment`: ReactNode
- `error`: boolean
- `disabled`: boolean

## Specifications

### Default Variant (Outline)
- Border: 1px grey outline (default), 1px text-primary (hover), 2px text-primary (focus), 2px error-main (error)
- Padding: 14px horizontal
- Border radius: 8px

### Filled Variant (Background)
- Background: grey-8% (default), grey-16% (hover/focus), error-8% (error)
- Padding: 12px horizontal
- No borders

### Label Behavior
- Floating labels move to top when focused or has value
- Disabled inputs don't float labels
- Label positioning: center (empty), top -5px (floating)
