# Checkbox Component

A customizable checkbox component with multiple variants, sizes, and states. Built with accessibility in mind and following ForteUI design system principles.

## Features

- ✅ **Multiple Variants**: Default, Primary, Secondary, Info, Success, Warning, Error
- ✅ **Two Sizes**: Small (20px) and Medium (24px)
- ✅ **State Management**: Controlled and uncontrolled modes
- ✅ **Interactive States**: Hover, focus, disabled
- ✅ **Accessibility**: ARIA compliant, keyboard navigation
- ✅ **TypeScript**: Full type safety with comprehensive props
- ✅ **Customizable**: Custom styling through className props

## Usage

### Basic Usage

```tsx
import { Checkbox } from '@forte-ui/core';

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox 
      label="Accept terms and conditions"
      checked={checked}
      onCheckedChange={setChecked}
    />
  );
}
```

### Uncontrolled Usage

```tsx
<Checkbox 
  label="Subscribe to newsletter"
  defaultChecked={true}
  onCheckedChange={(checked) => console.log('Checked:', checked)}
/>
```

### Variants

```tsx
<Checkbox variant="default" label="Default" />
<Checkbox variant="primary" label="Primary" />
<Checkbox variant="secondary" label="Secondary" />
<Checkbox variant="info" label="Info" />
<Checkbox variant="success" label="Success" />
<Checkbox variant="warning" label="Warning" />
<Checkbox variant="error" label="Error" />
```

### Sizes

```tsx
<Checkbox size="sm" label="Small checkbox" />
<Checkbox size="md" label="Medium checkbox" />
```

### States

```tsx
<Checkbox label="Normal checkbox" />
<Checkbox label="Checked checkbox" checked={true} />
<Checkbox label="Disabled checkbox" disabled />
<Checkbox label="Disabled checked" checked={true} disabled />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "primary" \| "secondary" \| "info" \| "success" \| "warning" \| "error"` | `"default"` | The visual variant of the checkbox |
| `size` | `"sm" \| "md"` | `"md"` | The size of the checkbox |
| `label` | `string` | - | The label text displayed next to the checkbox |
| `checked` | `boolean` | - | Whether the checkbox is checked (controlled) |
| `disabled` | `boolean` | `false` | Whether the checkbox is disabled |
| `onCheckedChange` | `(checked: boolean) => void` | - | Callback fired when the checkbox state changes |
| `className` | `string` | - | Additional CSS class for the wrapper |
| `labelClassName` | `string` | - | Additional CSS class for the label |

All standard HTML input attributes are also supported through forwarding.

## Accessibility

The Checkbox component follows WAI-ARIA guidelines:

- Uses semantic `<input type="checkbox">` element
- Proper labeling with `<label>` element
- Focus management with visible focus indicators
- Keyboard navigation support (Space to toggle)
- Screen reader support with proper announcements

## Examples

### Form Integration

```tsx
import { Checkbox } from '@forte-ui/core';

function SignupForm() {
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  return (
    <form>
      <Checkbox
        variant="primary"
        label="I accept the terms and conditions"
        checked={acceptTerms}
        onCheckedChange={setAcceptTerms}
        required
      />
      
      <Checkbox
        variant="info"
        label="Subscribe to our newsletter"
        checked={newsletter}
        onCheckedChange={setNewsletter}
      />
      
      <button type="submit" disabled={!acceptTerms}>
        Sign Up
      </button>
    </form>
  );
}
```

### Custom Styling

```tsx
<Checkbox
  variant="primary"
  label="Custom styled checkbox"
  className="my-4"
  labelClassName="font-semibold text-lg"
/>
```

## Design System Integration

The Checkbox component uses ForteUI design tokens:

- **Colors**: Mapped to theme colors (primary, secondary, etc.)
- **Spacing**: Consistent with design system spacing scale
- **Typography**: Uses system font stack and type scale
- **Transitions**: Smooth 200ms transitions for state changes
- **Focus States**: Ring-based focus indicators

## Technical Notes

- Built with `class-variance-authority` for variant management
- Uses `forwardRef` for proper ref forwarding
- Supports both controlled and uncontrolled usage patterns
- Optimized with `React.memo` for performance
- TypeScript-first with comprehensive type definitions
