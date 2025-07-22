# Core Concepts

This guide explains the core concepts and architecture of React BuildKit to help you understand how to use the library effectively.

## Table of Contents

- [Library Philosophy](#library-philosophy)
- [Architecture Overview](#architecture-overview)
- [Key Principles](#key-principles)
- [Module Organization](#module-organization)
- [Type System](#type-system)
- [Storage Strategy](#storage-strategy)
- [Cross-Platform Development](#cross-platform-development)
- [Configuration Management](#configuration-management)

## Library Philosophy

React BuildKit is built on these core philosophies:

1. **Utility-First Design** - Provides utilities and helpers, not UI components
2. **Type Safety** - Full TypeScript support with strict typing
3. **Mobile-First** - Built with Capacitor for cross-platform development
4. **Security-Conscious** - Uses secure storage, never localStorage
5. **Modular Architecture** - Import only what you need

## Architecture Overview

```
react-buildkit/
├── configure/          # Global configuration
├── enums/             # Constants and enumerations
├── types/             # TypeScript type definitions
├── utils/             # Core utility functions
│   ├── constants/     # Application constants
│   ├── helpers/       # Helper functions
│   ├── hooks/         # React hooks
│   └── messages/      # UI messages
└── packages/          # Third-party library wrappers
```

### Module Breakdown

#### 1. Configuration (`configure/`)
- Global library configuration
- Environment setup
- API URL management

#### 2. Enums (`enums/`)
- Capacitor API constants
- Generic enumerations
- React package constants
- Table column definitions

#### 3. Types (`types/`)
- TypeScript interfaces
- Type definitions for all exports
- Generic type utilities

#### 4. Utilities (`utils/`)
- **Constants**: App-wide constants, API URLs, routes
- **Helpers**: Form validation, API formatting, storage, routing
- **Hooks**: Custom React hooks for common patterns
- **Messages**: Standardized UI messages

#### 5. Package Wrappers (`packages/`)
- Enhanced Formik components
- React Dropzone integration
- React Stars rating component
- ClassNames utility

## Key Principles

### 1. Secure Storage

React BuildKit exclusively uses Capacitor Preferences API for storage:

```typescript
// ✅ Correct: Using STORAGE utility
import { STORAGE } from 'react-buildkit';
await STORAGE.set('key', value);

// ❌ Incorrect: Using localStorage
localStorage.setItem('key', value); // Never do this
```

### 2. Platform Agnostic

Write once, run everywhere:

```typescript
import { isCapMobileApp, showToast } from 'react-buildkit';

// Works on web, iOS, and Android
await showToast('Hello World!');

// Platform-specific logic when needed
if (isCapMobileApp) {
  // Mobile-specific code
}
```

### 3. Type-First Development

Everything is strictly typed:

```typescript
import type { IUser, IApiResponse } from 'react-buildkit';

// Type-safe API responses
const response: IApiResponse<IUser> = await fetchUser();
if (response.success) {
  const user: IUser = response.data;
}
```

### 4. Validation Rules

Comprehensive validation system:

```typescript
import { validateField, zValidationRuleE } from 'react-buildkit';

// Chain multiple validation rules
const errors = validateField(value, [
  { rule: zValidationRuleE.REQUIRED },
  { rule: zValidationRuleE.MIN_LENGTH, value: 8 },
  { rule: zValidationRuleE.PATTERN, value: /^[A-Z]/, message: 'Must start with uppercase' }
]);
```

## Module Organization

### Import Patterns

React BuildKit uses named exports for better tree-shaking:

```typescript
// ✅ Correct: Named imports
import { STORAGE, showToast, validateField } from 'react-buildkit';

// ❌ Incorrect: Default import
import BuildKit from 'react-buildkit'; // No default export
```

### Path Aliases

The library internally uses path aliases for clean imports:

```typescript
// Internal library structure
import { STORAGE } from '@utils/helpers/STORAGE';
import { zValidationRuleE } from '@enums/generic';
```

## Type System

### Generic Types

React BuildKit provides generic types for common patterns:

```typescript
// API Response type
interface IApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Pagination type
interface ZPaginationInfoI {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
}
```

### Utility Types

Helper types for React and Formik:

```typescript
// Formik helpers
type ZFormikHelpers<Values> = FormikHelpers<Values>;
type zSetFieldValueType = (field: string, value: any) => void;
type zSetFieldErrorType = (field: string, error: string) => void;
```

## Storage Strategy

### Encryption Support

Storage can be encrypted using crypto-js:

```typescript
import { configureZRTK } from 'react-buildkit';

configureZRTK({
  encryptionKey: 'your-secret-key',
  enableEncryption: true
});

// All storage operations are now encrypted
await STORAGE.set('sensitive_data', { password: '...' });
```

### Storage Keys

Predefined storage keys for consistency:

```typescript
import { LOCALSTORAGE_KEYS } from 'react-buildkit';

// Use predefined keys
await STORAGE.set(LOCALSTORAGE_KEYS.AUTH_TOKEN, token);
await STORAGE.set(LOCALSTORAGE_KEYS.USER_DATA, userData);
```

## Cross-Platform Development

### Platform Detection

```typescript
import { 
  isCapWeb, 
  isCapMobileApp, 
  isCapIOS, 
  isCapAndroid,
  isHybrid 
} from 'react-buildkit';

// Detect platform
if (isCapWeb) {
  // Web-specific code
} else if (isCapIOS) {
  // iOS-specific code
} else if (isCapAndroid) {
  // Android-specific code
}

// Check if running in hybrid mode
if (isHybrid) {
  // Hybrid app code
}
```

### Native API Wrappers

Unified API for native features:

```typescript
import { 
  BROWSER,
  showToast,
  zWriteToClipboard,
  zCheckPermissions 
} from 'react-buildkit';

// Open URL (works on all platforms)
await BROWSER.open({ url: 'https://example.com' });

// Check permissions before using features
const hasLocationPermission = await zCheckPermissions('location');
```

## Configuration Management

### Global Configuration

Set up once, use everywhere:

```typescript
// App initialization
import { configureZRTK } from 'react-buildkit';

configureZRTK({
  // API Configuration
  apiUrl: 'https://api.example.com',
  apiVersion: 'v1',
  
  // Environment
  environment: 'production',
  enableLogging: false,
  
  // Storage
  storagePrefix: 'myapp_',
  encryptionKey: process.env.REACT_APP_ENCRYPTION_KEY,
  
  // Features
  enableOfflineMode: true,
  syncInterval: 5000, // 5 seconds
  
  // Custom configuration
  customConfig: {
    theme: 'dark',
    language: 'en'
  }
});
```

### Accessing Configuration

```typescript
import { getConfig } from 'react-buildkit';

const config = getConfig();
console.log(config.apiUrl); // https://api.example.com
```

## Best Practices

1. **Always use TypeScript** - The library is built with TypeScript in mind
2. **Import only what you need** - Better tree-shaking and bundle size
3. **Use platform detection** - Write platform-specific code when necessary
4. **Leverage type definitions** - Import and use provided types
5. **Follow naming conventions** - Use 'Z' prefix for enhanced components
6. **Configure early** - Set up configuration at app initialization

## Next Steps

- Explore [Examples](./examples.md) for practical usage
- Check the [API Reference](../API.md) for detailed documentation
- Read the [FAQ](./faq.md) for common questions