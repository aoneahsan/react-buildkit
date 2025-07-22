# Frequently Asked Questions (FAQ)

## General Questions

### What is react-buildkit?

React BuildKit is a comprehensive TypeScript utility library designed specifically for React applications with strong Capacitor integration. It provides essential helper functions, hooks, and utilities for cross-platform mobile development.

### How is it different from UI component libraries?

React BuildKit focuses on utilities and helper functions, NOT UI components. For UI components, check out our separate `buildkit-ui` package.

### What platforms does it support?

React BuildKit supports:
- Web (all modern browsers)
- iOS (via Capacitor)
- Android (via Capacitor)
- Desktop (via Capacitor)

## Installation & Setup

### Why do I need to configure the library?

Configuration allows you to customize default behaviors like encryption keys and other global settings. While the library works with defaults, configuration is recommended for production apps.

### Can I use this without Capacitor?

Yes! While the library has strong Capacitor integration, all Capacitor-dependent features gracefully fallback to web alternatives when Capacitor is not available.

## Storage

### Is storage data encrypted by default?

Yes, storage data is encrypted by default using AES encryption. You can disable this by passing `{ encrypt: false }` options.

### Where is the data stored?

- **Web**: Uses localStorage as a fallback
- **Mobile**: Uses Capacitor Preferences API (native secure storage)

### Can I use a custom encryption key?

Yes, provide your own secret key when calling encryption functions or configure it globally via `configureZRTK()`.

## Form Validation

### Can I add custom validation rules?

Yes! Use the `customValidator` option in `validateField()`:

```typescript
validateField('field', values, errors, undefined, {
  customValidator: (value) => {
    // Your custom validation logic
    return errorMessage || undefined;
  }
});
```

### How do I customize error messages?

Pass custom messages via the `messages` option:

```typescript
validateField('email', values, errors, zValidationRuleE.email, {
  messages: {
    email: 'Please enter a valid company email'
  }
});
```

## Media Queries

### Can I add custom breakpoints?

Yes! Use the `customBreakpoints` option:

```typescript
const media = useZMediaQueryScale({
  customBreakpoints: {
    ultrawide: '2560px',
    tablet: '834px'
  }
});
```

### Do media queries work on mobile?

Yes, media queries work across all platforms including mobile apps built with Capacitor.

## Capacitor Integration

### What happens if Capacitor APIs fail?

All Capacitor integrations include fallbacks. For example:
- `Browser.open()` falls back to `window.open()`
- Toast notifications fall back to console logs
- Storage falls back to localStorage

### Do I need to install Capacitor plugins separately?

No, all required Capacitor plugins are listed as peer dependencies. Install them based on which features you use.

## Performance

### Is the library tree-shakeable?

Yes! The library is built with tree-shaking in mind. Only import what you use, and unused code will be removed from your bundle.

### What's the bundle size impact?

The core utilities add approximately 17-18KB to your bundle (before compression). This can be reduced further by importing only what you need.

## TypeScript

### Are TypeScript definitions included?

Yes, the library is written in TypeScript and includes complete type definitions.

### What TypeScript version is required?

TypeScript 5.0+ is recommended for the best experience, though it may work with earlier versions.

## Troubleshooting

### Why am I getting "Module not found" errors?

Ensure you're using the correct import syntax:

```typescript
// Correct
import { STORAGE } from 'react-buildkit';

// Incorrect
import STORAGE from 'react-buildkit/storage';
```

### Why is encryption/decryption failing?

Common causes:
1. Using different encryption keys for encrypt/decrypt
2. Trying to decrypt non-encrypted data
3. Corrupted stored data

### How do I debug Capacitor issues?

1. Check if Capacitor is properly initialized
2. Ensure plugins are installed: `npx cap sync`
3. Check platform-specific logs (Xcode for iOS, Android Studio for Android)

## Contributing

### How can I contribute?

We welcome contributions! Please:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request with tests

### Where do I report bugs?

Report issues on our [GitHub Issues](https://github.com/your-repo/react-buildkit/issues) page.

### Is there a roadmap?

Check our [GitHub Projects](https://github.com/your-repo/react-buildkit/projects) for planned features and improvements.