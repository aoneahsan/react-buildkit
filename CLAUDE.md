# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is the `zaions-react-tool-kit` package - a TypeScript utility library for React applications with strong Capacitor integration for cross-platform mobile development. It provides helper functions, hooks, and utilities (NOT UI components - those are in zaions-react-ui-kit).

## Development Commands

```bash
# Install dependencies
yarn install

# Development mode with watch and package unlinking
yarn dev

# Build the library
yarn build

# Run tests
yarn test

# Deploy to npm (builds and publishes)
yarn deploy

# Link zaions-tool-kit dependency
yarn update:linked-packages

# Serve with linked packages
yarn serve
```

## Architecture

The codebase follows a utility-first design pattern with these key directories:

- `src/enums/` - Constants for Capacitor APIs, generic values, React packages, and table columns
- `src/types/` - TypeScript type definitions for all exports
- `src/utils/` - Core utility functions organized by purpose:
  - `helpers/` - Form validation, API formatting, storage, routing utilities
  - `hooks/` - React hooks for media queries, user data, search params
  - `constants/` - Application-wide constants
  - `messages/` - UI message strings
- `src/packages/` - Thin wrappers around third-party libraries (Formik, Dropzone, etc.)
- `src/configure/` - Configuration setup utilities

## Important Patterns

1. **Storage**: Always use Capacitor Preferences API, never localStorage:
   ```typescript
   import { STORAGE } from '@utils/helpers/STORAGE';
   // Uses encrypted storage with Capacitor Preferences
   ```

2. **Form Validation**: Use the comprehensive validation rules from `src/utils/helpers/validationRules.ts`

3. **API Responses**: Format using `src/utils/helpers/genericResponseFormats.ts` for consistency

4. **Platform Detection**: Use `src/utils/helpers/platforms.ts` utilities

5. **Path Aliases**: Use `@utils/*`, `@enums/*`, `@src/*` instead of relative imports

## Testing

Tests use Vitest and should be placed in:
- `src/**/*.test.ts` for unit tests alongside source files
- `tests/` for integration tests

Run a single test file:
```bash
yarn test path/to/test.test.ts
```

## Building and Publishing

The library builds to both CommonJS and ESM formats using tsup. Build outputs go to `dist/` directory.

Key build features:
- Declaration files (.d.ts) generation
- Source maps included
- Tree shaking enabled
- Target: ES2015

## Dependencies

This package requires `zaions-tool-kit` as a peer dependency. React 18.3.1+ or 19.1.0+ is also required.

## Mobile Development Focus

Heavy integration with Capacitor for cross-platform features:
- Browser, Clipboard, Dialog, Geolocation, Toast APIs
- Platform-specific utilities
- Preference storage (not localStorage)
- Mobile-first responsive design utilities