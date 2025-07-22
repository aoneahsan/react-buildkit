# Examples

This page contains practical examples of using react-buildkit in your applications.

## Table of Contents

- [Basic Setup](#basic-setup)
- [Storage Examples](#storage-examples)
- [Form Validation](#form-validation)
- [Media Queries](#media-queries)
- [Capacitor Integration](#capacitor-integration)

## Basic Setup

```typescript
import { configureZRTK } from 'react-buildkit';

// Configure the library with your settings
configureZRTK({
  encryptionKey: 'your-secret-key',
  // other configuration options
});
```

## Storage Examples

### Basic Storage with Encryption (Default)

```typescript
import { STORAGE } from 'react-buildkit';

// Store data with automatic encryption
await STORAGE.set('user', { name: 'John', email: 'john@example.com' });

// Retrieve data with automatic decryption
const user = await STORAGE.get('user');
console.log(user); // { name: 'John', email: 'john@example.com' }
```

### Storage Without Encryption

```typescript
import { STORAGE } from 'react-buildkit';

// Store data without encryption
await STORAGE.set('settings', { theme: 'dark' }, { encrypt: false });

// Retrieve data without decryption
const settings = await STORAGE.get('settings', { encrypt: false });
```

## Form Validation

### Custom Validation Messages

```typescript
import { validateField, zValidationRuleE } from 'react-buildkit';

const errors = {};
const values = { email: 'invalid-email' };

validateField('email', values, errors, zValidationRuleE.email, {
  messages: {
    email: 'Please provide a valid email address for your account'
  }
});
```

### Custom Validation Rules

```typescript
import { validateField } from 'react-buildkit';

const errors = {};
const values = { username: 'ab' };

validateField('username', values, errors, undefined, {
  customValidator: (value) => {
    if (value.length < 3) {
      return 'Username must be at least 3 characters long';
    }
    if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      return 'Username can only contain letters, numbers, and underscores';
    }
    return undefined; // No error
  }
});
```

## Media Queries

### Custom Breakpoints

```typescript
import { useZMediaQueryScale } from 'react-buildkit';

const mediaQueries = useZMediaQueryScale({
  breakpoints: {
    brackpoint_md: '768px',
    brackpoint_lg: '1200px'
  },
  customBreakpoints: {
    tablet: '834px',
    desktop: '1440px'
  }
});

// Use the results
if (mediaQueries.isTablet) {
  // Tablet-specific logic
}
```

## Capacitor Integration

### Show Toast with Custom Options

```typescript
import { showToast, ToastPositionEnum } from 'react-buildkit';

await showToast('Operation completed successfully', {
  duration: 'short',
  position: ToastPositionEnum.top,
  // Any additional native options
});
```

### Geolocation with Options

```typescript
import { zGetCurrentPosition } from 'react-buildkit';

const position = await zGetCurrentPosition({
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 60000
});

console.log(`Lat: ${position.coords.latitude}, Lng: ${position.coords.longitude}`);
```

### Dialog with Custom Buttons

```typescript
import { showZConfirm } from 'react-buildkit';

const { value } = await showZConfirm({
  title: 'Delete Item',
  message: 'Are you sure you want to delete this item?',
  okButtonTitle: 'Delete',
  cancelButtonTitle: 'Keep It'
});

if (value) {
  // User clicked Delete
}
```

## More Examples Coming Soon

We're continuously adding more examples. Check back later or contribute your own examples via pull requests!