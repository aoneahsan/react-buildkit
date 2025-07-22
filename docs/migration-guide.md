# Migration Guide

## Migrating from ts-react-toolkits to react-buildkit

This guide helps you migrate from the older `ts-react-toolkits` package to the new `react-buildkit` package.

## Overview

`react-buildkit` is the successor to `ts-react-toolkits` with improved TypeScript support, better configurability, and enhanced Capacitor integration.

## Installation

### Remove the old package

```bash
yarn remove ts-react-toolkits
```

### Install the new package

```bash
yarn add react-buildkit
```

## Breaking Changes

### 1. Package Name Change

All imports need to be updated:

```typescript
// Old
import { STORAGE } from 'ts-react-toolkits';

// New
import { STORAGE } from 'react-buildkit';
```

### 2. Configuration

The new package requires initialization:

```typescript
// Add this to your app's entry point
import { configureZRTK } from 'react-buildkit';

configureZRTK({
  // Your configuration options
});
```

### 3. Storage API Changes

Storage now supports optional encryption:

```typescript
// Old - always encrypted
await STORAGE.set('key', data);

// New - encrypted by default, but configurable
await STORAGE.set('key', data); // Still encrypted by default
await STORAGE.set('key', data, { encrypt: false }); // Optionally unencrypted
```

### 4. Form Validation Changes

Form validation now supports custom messages:

```typescript
// Old
validateField('email', values, errors, zValidationRuleE.email);

// New - with custom messages
validateField('email', values, errors, zValidationRuleE.email, {
  messages: {
    email: 'Custom email error message'
  }
});
```

### 5. Media Query Hook Changes

The media query hook now supports custom breakpoints:

```typescript
// Old
const mediaQueries = useZMediaQueryScale();

// New - with custom breakpoints
const mediaQueries = useZMediaQueryScale({
  breakpoints: {
    brackpoint_md: '768px'
  },
  customBreakpoints: {
    tablet: '834px'
  }
});
```

## New Features

### 1. Full Configurability

All functions now accept options to customize behavior:

- Toast notifications accept all native options
- Dialogs support custom button text
- Geolocation accepts accuracy and timeout options
- Pagination supports custom delta and dots

### 2. New Exports

Additional utilities are now exported:

- Crypto functions: `encryptData`, `decryptData`, `hashData`, `generateSecretKey`
- Validation helpers: `validateEmail`, `validatePhoneNumber`, `validateURL`
- Common enums: `ResponseCodeEnum`, `ResponseStatusEnum`, `LinkTargetEnum`

### 3. Better TypeScript Support

All option interfaces are now exported for better type safety.

## Step-by-Step Migration

1. **Update all imports** - Search and replace `ts-react-toolkits` with `react-buildkit`

2. **Add configuration** - Initialize the library in your app's entry point

3. **Review storage usage** - Decide if you need encryption for each storage operation

4. **Update form validation** - Add custom messages where needed

5. **Test thoroughly** - Ensure all functionality works as expected

## Getting Help

If you encounter issues during migration:

1. Check the [API Reference](./API.md) for detailed documentation
2. Review the [Examples](./examples.md) for usage patterns
3. Open an issue on [GitHub](https://github.com/your-repo/react-buildkit/issues)

## Version Compatibility

- `react-buildkit` v1.0.0+ is compatible with React 18.3.1+ and 19.1.0+
- Full Capacitor 6+ support
- TypeScript 5.0+ recommended