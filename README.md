# React BuildKit

<div align="center">

[![npm version](https://img.shields.io/npm/v/react-buildkit.svg)](https://www.npmjs.com/package/react-buildkit)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3.1%20%7C%2019.1.0-blue.svg)](https://reactjs.org/)
[![Capacitor](https://img.shields.io/badge/Capacitor-7.x-blue.svg)](https://capacitorjs.com/)

A comprehensive TypeScript utility library for React applications with Capacitor integration for cross-platform mobile development. Provides helper functions, hooks, form validation, storage utilities, and more.

</div>

## 📚 Documentation

- **[Getting Started Guide](./docs/getting-started.md)** - Installation, setup, and first usage
- **[API Reference](./docs/API.md)** - Complete list of all exports with descriptions
- **[Core Concepts](./docs/core-concepts.md)** - Understanding the library architecture
- **[Examples](./docs/examples.md)** - Real-world usage examples
- **[Migration Guide](./docs/migration-guide.md)** - Migrating from ts-react-toolkits
- **[FAQ](./docs/faq.md)** - Common questions and troubleshooting

## ✨ Features

### 🧩 Utility Functions
- **Form Validation** - Comprehensive validation rules with Zod integration
- **Storage Management** - Secure storage using Capacitor Preferences API (never localStorage)
- **API Response Formatting** - Consistent API response handling
- **String Utilities** - Text manipulation, ID generation, case conversion
- **Data Filtering & Pagination** - Built-in data filtering and pagination helpers

### 🪝 Custom React Hooks
- **useZMediaQueryScale** - Responsive design hook with scale detection
- **useZFormikContext** - Enhanced Formik context with TypeScript support
- **useZDropzone** - File upload management with React Dropzone

### 📱 Capacitor Integration
- **Platform Detection** - Detect web, iOS, Android, and hybrid environments
- **Native APIs** - Toast, Dialog, Browser, Clipboard, Geolocation wrappers
- **Permission Management** - Check and request permissions
- **Cross-platform Storage** - Encrypted storage with Capacitor Preferences

### 📦 Component Wrappers
- **ZFormik** - Enhanced Formik components with TypeScript
- **ZDropzone** - File upload with drag-and-drop support
- **ZReactStars** - Star rating component
- **ZClassNames** - Conditional class name utility

### 🔧 Configuration
- **configureZRTK** - Global configuration for the library
- **Environment Constants** - API URLs, routes, storage keys
- **React Query Options** - Pre-configured options for data fetching

## 🚀 Installation

```bash
# Using yarn (recommended)
yarn add react-buildkit

# Using npm
npm install react-buildkit
```

### Peer Dependencies

This package requires the following peer dependencies:

```json
{
  "react": "^18.3.1 | ^19.1.0",
  "@capacitor/core": "^7.4.2",
  "@capacitor/preferences": "^7.0.1",
  "formik": "^2.4.6",
  "zod": "^4.0.5"
}
```

Install all required dependencies:

```bash
yarn add react react-buildkit @capacitor/core @capacitor/preferences formik zod
```

## 🎯 Quick Start

### 1. Configure the Library

```typescript
import { configureZRTK } from 'react-buildkit';

// Configure at your app's entry point
configureZRTK({
  apiUrl: 'https://api.yourdomain.com',
  environment: 'production',
  enableLogging: true
});
```

### 2. Use Storage Utilities

```typescript
import { STORAGE } from 'react-buildkit';

// Save data securely
await STORAGE.set('user_preferences', { theme: 'dark' });

// Retrieve data
const preferences = await STORAGE.get('user_preferences');

// Remove data
await STORAGE.remove('user_preferences');
```

### 3. Form Validation

```typescript
import { validateField, zValidationRuleE } from 'react-buildkit';

// Validate a single field
const emailError = validateField('user@example.com', [
  { rule: zValidationRuleE.REQUIRED },
  { rule: zValidationRuleE.EMAIL }
]);

// Use with Formik
import { ZFormik, ZFormikForm } from 'react-buildkit';

<ZFormik
  initialValues={{ email: '' }}
  onSubmit={(values) => console.log(values)}
>
  <ZFormikForm>
    {/* Your form fields */}
  </ZFormikForm>
</ZFormik>
```

### 4. Platform Detection

```typescript
import { isCapWeb, isCapMobileApp, isCapIOS, isCapAndroid } from 'react-buildkit';

if (isCapMobileApp) {
  // Mobile-specific code
  if (isCapIOS) {
    // iOS-specific code
  } else if (isCapAndroid) {
    // Android-specific code
  }
} else if (isCapWeb) {
  // Web-specific code
}
```

### 5. Native Toasts and Dialogs

```typescript
import { showToast, showZAlert, showZConfirm } from 'react-buildkit';

// Show a toast
await showToast('Operation successful!', 'success');

// Show an alert
await showZAlert('Warning', 'This action cannot be undone');

// Show a confirmation dialog
const confirmed = await showZConfirm('Delete Item', 'Are you sure?');
if (confirmed) {
  // Perform deletion
}
```

## 🔑 Key Principles

1. **Capacitor First** - Built for cross-platform development with Capacitor
2. **Type Safety** - Full TypeScript support with comprehensive types
3. **Storage Security** - Always uses Capacitor Preferences, never localStorage
4. **Modular Design** - Import only what you need
5. **React Best Practices** - Follows React patterns and conventions

## 📖 Advanced Usage

For more advanced usage examples and detailed API documentation, please refer to our [comprehensive documentation](./docs/).

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 👤 Author

**Ahsan Mahmood**
- Email: aoneahsan@gmail.com
- Website: [https://aoneahsan.com](https://aoneahsan.com)
- GitHub: [@aoneahsan](https://github.com/aoneahsan)

## 🆘 Support

- 📧 Email: aoneahsan@gmail.com
- 🐛 Issues: [GitHub Issues](https://github.com/aoneahsan/react-buildkit/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/aoneahsan/react-buildkit/discussions)

## 🙏 Acknowledgments

Special thanks to all contributors and the open-source community for making this project possible.

---

<div align="center">
Made with ❤️ by <a href="https://aoneahsan.com">Ahsan Mahmood</a>
</div>