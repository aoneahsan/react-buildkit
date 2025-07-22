# Getting Started with React BuildKit

Welcome to React BuildKit! This guide will help you get up and running with the library in your React application.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Initial Setup](#initial-setup)
- [Basic Usage](#basic-usage)
- [TypeScript Configuration](#typescript-configuration)
- [Capacitor Setup](#capacitor-setup)
- [Next Steps](#next-steps)

## Prerequisites

Before you begin, ensure you have:

- Node.js 18+ installed
- React 18.3.1+ or 19.1.0+
- TypeScript 5.0+ (recommended)
- Basic knowledge of React and TypeScript

## Installation

### 1. Install the Package

```bash
# Using yarn (recommended)
yarn add react-buildkit

# Using npm
npm install react-buildkit
```

### 2. Install Required Peer Dependencies

React BuildKit requires several peer dependencies. Install them based on your needs:

#### Core Dependencies (Required)

```bash
yarn add react @capacitor/core @capacitor/preferences formik zod
```

#### Optional Dependencies (Install as needed)

```bash
# For native mobile features
yarn add @capacitor/browser @capacitor/clipboard @capacitor/dialog @capacitor/geolocation @capacitor/toast

# For additional utilities
yarn add classnames crypto-js dayjs react-dropzone react-responsive
```

### 3. Install Type Definitions

If using TypeScript, install type definitions:

```bash
yarn add -D @types/react @types/crypto-js
```

## Initial Setup

### 1. Configure the Library

Create a configuration file in your app's entry point (e.g., `App.tsx` or `index.tsx`):

```typescript
// src/App.tsx
import { configureZRTK } from 'react-buildkit';

// Configure React BuildKit
configureZRTK({
  apiUrl: process.env.REACT_APP_API_URL || 'https://api.example.com',
  environment: process.env.NODE_ENV || 'development',
  enableLogging: process.env.NODE_ENV === 'development',
  storagePrefix: 'myapp_', // Prefix for storage keys
  encryptionKey: process.env.REACT_APP_ENCRYPTION_KEY // Optional: for encrypted storage
});
```

### 2. Setup Path Aliases (Recommended)

For cleaner imports, configure path aliases in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "react-buildkit": ["node_modules/react-buildkit"]
    }
  }
}
```

## Basic Usage

### Storage Management

React BuildKit uses Capacitor Preferences API for secure storage:

```typescript
import { STORAGE } from 'react-buildkit';

// Save user data
const saveUserData = async (userData: any) => {
  await STORAGE.set('user_data', userData);
};

// Retrieve user data
const getUserData = async () => {
  const data = await STORAGE.get('user_data');
  return data;
};

// Clear user data
const clearUserData = async () => {
  await STORAGE.remove('user_data');
};
```

### Form Validation

Use built-in validation rules with Formik:

```typescript
import { 
  ZFormik, 
  ZFormikForm, 
  validateField, 
  zValidationRuleE 
} from 'react-buildkit';

const LoginForm = () => {
  const validateEmail = (email: string) => {
    return validateField(email, [
      { rule: zValidationRuleE.REQUIRED, message: 'Email is required' },
      { rule: zValidationRuleE.EMAIL, message: 'Invalid email format' }
    ]);
  };

  return (
    <ZFormik
      initialValues={{ email: '', password: '' }}
      onSubmit={async (values) => {
        console.log('Form submitted:', values);
      }}
    >
      <ZFormikForm>
        <input name="email" type="email" />
        <input name="password" type="password" />
        <button type="submit">Login</button>
      </ZFormikForm>
    </ZFormik>
  );
};
```

### Platform Detection

Detect the platform and adjust your app accordingly:

```typescript
import { 
  isCapWeb, 
  isCapMobileApp, 
  isCapIOS, 
  isCapAndroid 
} from 'react-buildkit';

const App = () => {
  if (isCapMobileApp) {
    if (isCapIOS) {
      console.log('Running on iOS');
    } else if (isCapAndroid) {
      console.log('Running on Android');
    }
  } else if (isCapWeb) {
    console.log('Running on Web');
  }

  return <div>Your App</div>;
};
```

### Native Features

Use Capacitor native features with React BuildKit wrappers:

```typescript
import { 
  showToast, 
  showZAlert, 
  zWriteToClipboard,
  zGetCurrentPosition 
} from 'react-buildkit';

// Show a toast notification
const notify = async () => {
  await showToast('Operation successful!', 'success');
};

// Copy to clipboard
const copyText = async (text: string) => {
  await zWriteToClipboard(text);
  await showToast('Copied to clipboard!');
};

// Get user location
const getLocation = async () => {
  const position = await zGetCurrentPosition();
  console.log('Current position:', position);
};
```

## TypeScript Configuration

React BuildKit is built with TypeScript and provides comprehensive type definitions. To get the best experience:

### 1. Enable Strict Mode

In your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "strict": true,
    "strictNullChecks": true,
    "noImplicitAny": true
  }
}
```

### 2. Import Types

Import types directly from the package:

```typescript
import type { 
  IUser, 
  IApiResponse, 
  ZFormikHelpers 
} from 'react-buildkit';
```

## Capacitor Setup

If you're building a mobile app with Capacitor:

### 1. Initialize Capacitor

```bash
npm install @capacitor/cli @capacitor/core
npx cap init
```

### 2. Add Platforms

```bash
npx cap add ios
npx cap add android
```

### 3. Configure Permissions

Add required permissions to your `capacitor.config.json`:

```json
{
  "plugins": {
    "Geolocation": {
      "permissions": ["location"]
    },
    "Clipboard": {
      "permissions": ["clipboard-read", "clipboard-write"]
    }
  }
}
```

## Next Steps

Now that you have React BuildKit set up, explore these resources:

1. **[Core Concepts](./core-concepts.md)** - Understand the library architecture
2. **[API Reference](../API.md)** - Complete list of all exports
3. **[Examples](./examples.md)** - Real-world usage examples
4. **[FAQ](./faq.md)** - Common questions and solutions

## Need Help?

- 📧 Email: aoneahsan@gmail.com
- 🐛 Issues: [GitHub Issues](https://github.com/aoneahsan/react-buildkit/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/aoneahsan/react-buildkit/discussions)