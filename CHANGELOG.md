# Changelog

All notable changes to React BuildKit will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2025-01-11

### 🎉 Initial Release

This is the first official release of React BuildKit, a comprehensive TypeScript utility library for React applications with Capacitor integration.

### Added

#### Core Features
- **Complete TypeScript Support** - 100% TypeScript with comprehensive type definitions
- **Capacitor Integration** - Full support for Capacitor v7+ APIs
- **Secure Storage** - AES encrypted storage using Capacitor Preferences API
- **Form Management** - Comprehensive form validation and helpers
- **Responsive Design** - Built-in hooks for media queries
- **Platform Detection** - Utilities to detect Android, iOS, Web, and hybrid environments

#### Components
- `ZFormik` - Type-safe Formik wrapper
- `ZFormikForm` - Formik Form component wrapper
- `ZFieldArray` - Formik FieldArray wrapper
- `ZDropzone` - React Dropzone wrapper with TypeScript support
- `ZReactStars` - Customizable star rating component
- `ZClassNames` - Utility for conditional CSS classes

#### Hooks
- `useZFormikContext` - Access Formik context with TypeScript
- `useZDropzone` - Dropzone functionality hook
- `useZMediaQueryScale` - Responsive design hook with device detection

#### Helper Functions
- **Form Helpers** - `validateField`, `validateFields`, `checkIfContains`, `formatFormErrorsFromApiResponse`
- **Storage Helpers** - `STORAGE` object with encrypted get/set/remove/clear methods
- **Routing Helpers** - `setSearchParamsData`, `getSearchParamsData`, `addQueryParamsInUrl`
- **Generic Helpers** - `truncateText`, `getRandomId`, `toTitleCase`, `ZPaginate`, `ZFilterData`
- **Platform Helpers** - `isCapAndroid`, `isCapIOS`, `isCapMobileApp`, `isCapWeb`, `isHybrid`
- **Capacitor APIs** - `showToast`, `showZAlert`, `showZConfirm`, `showZPrompt`, clipboard and geolocation utilities

#### Types and Interfaces
- API response interfaces (`IApiResponse`, `IApiResponseResult`)
- Form types (`ZFormikHelpers`, validation types)
- Component prop types
- Hook return types
- Filter and pagination interfaces

#### Enums
- `ToastDurationEnum`, `ToastPositionEnum` - Toast notification options
- `zValidationRuleE` - Form field validation rules
- `CONTAINS` - Character type checking for validation
- `ReactToastifyTypeEnum` - Toast notification types
- `TableIdsEnum` - Comprehensive table column identifiers
- `ResponseCodeEnum`, `ResponseStatusEnum` - API response types
- `LinkTargetEnum` - HTML link targets
- `SearchParamKeysEnum` - URL parameter keys

#### Constants
- `LOCALSTORAGE_KEYS` - Storage key constants
- `APP_ROUTES` - Application route paths
- `API_URLS` - API endpoint URLs
- `developerDetails` - Developer information
- `mediaScales` - Media query breakpoints
- `zrtkMessages` - UI message constants

### Changed
- **Package Name** - Rebranded from `zaions-react-tool-kit` to `react-buildkit`
- **Ownership** - Transferred to Ahsan Mahmood as open-source project
- **License** - Changed from ISC to MIT
- **Dependencies** - Updated all Capacitor packages to v7.x
- **Testing** - Improved test setup with jsdom environment

### Security
- Implemented AES encryption for all storage operations
- Added proper error handling in catch blocks
- No hardcoded secrets or API keys
- Secure data handling practices throughout

### Developer Experience
- Comprehensive API documentation
- TypeScript IntelliSense support
- Tree-shakeable exports
- Zero side effects
- Small bundle size (~18KB minified + gzipped)

### Infrastructure
- GitHub Actions ready
- Comprehensive test suite
- Build system using tsup
- Support for both CommonJS and ESM
- Source maps included

## [0.0.30] - Previous Version

### Note
This was the last version under the previous package name `zaions-react-tool-kit`. For migration instructions, please see the Migration Guide.

---

For questions or issues, please visit our [GitHub repository](https://github.com/aoneahsan/react-buildkit).