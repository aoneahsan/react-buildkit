# Contributing to React BuildKit

First off, thank you for considering contributing to React BuildKit! It's people like you that make React BuildKit such a great tool. We welcome contributions from everyone, regardless of their experience level.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Style Guidelines](#style-guidelines)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Community](#community)

## Code of Conduct

By participating in this project, you agree to abide by our community standards. Please treat everyone with respect and help us maintain a positive environment for all contributors.

## Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally
3. Create a new branch for your contribution
4. Make your changes
5. Push to your fork and submit a pull request

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include:

- A clear and descriptive title
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Your environment details (OS, Node version, React version, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- A clear and descriptive title
- A detailed description of the proposed enhancement
- Examples of how it would be used
- Why this enhancement would be useful to most users

### Code Contributions

#### First-Time Contributors

Look for issues labeled `good first issue` or `help wanted`. These are great starting points for new contributors.

#### Regular Contributors

- Fix bugs
- Implement new features
- Improve documentation
- Add or improve tests
- Optimize performance

## Development Setup

### Prerequisites

- Node.js (v22.2.0 or higher)
- Yarn (v1.22.22 or higher)
- Git

### Setting Up Your Development Environment

1. Fork and clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/react-buildkit.git
   cd react-buildkit
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Build the project:
   ```bash
   yarn build
   ```

4. Run tests:
   ```bash
   yarn test
   ```

### Development Workflow

1. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and test them:
   ```bash
   yarn test
   yarn build
   ```

3. Commit your changes (see commit guidelines below)

4. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

5. Create a Pull Request

## Style Guidelines

### TypeScript Style Guide

- Use TypeScript for all new code
- Follow the existing code style
- Use meaningful variable and function names
- Add JSDoc comments for public APIs
- Ensure no TypeScript errors with `yarn build`

### Code Formatting

- Use 2 spaces for indentation
- Use single quotes for strings
- Add trailing commas in objects and arrays
- Keep lines under 100 characters when possible

### File Organization

- Place new components in `src/packages/`
- Place new utilities in `src/utils/helpers/`
- Place new types in `src/types/`
- Place new enums in `src/enums/`

## Commit Guidelines

We follow conventional commits for clear commit history:

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```
feat(storage): add support for session storage

Add a new option to use session storage instead of local storage
for temporary data that should not persist across sessions.

Closes #123
```

```
fix(validation): correct email validation regex

The previous regex was not accepting valid emails with + symbols.
This fix updates the regex to properly validate all RFC-compliant
email addresses.
```

## Pull Request Process

1. **Update Documentation**: If you've added new features, update the README.md and API documentation.

2. **Add Tests**: Ensure your changes are covered by tests. We aim for high test coverage.

3. **Update CHANGELOG.md**: Add a note about your changes under the "Unreleased" section.

4. **Pass All Checks**: Ensure all tests pass and the build succeeds:
   ```bash
   yarn test
   yarn build
   ```

5. **Request Review**: Once your PR is ready, request a review from maintainers.

6. **Address Feedback**: Be responsive to feedback and make requested changes.

### PR Title Format

Use the same format as commit messages:
- `feat: add new storage encryption options`
- `fix: resolve memory leak in useZMediaQueryScale hook`
- `docs: improve API documentation for form helpers`

## Testing

### Writing Tests

- Place tests next to the code they test
- Name test files with `.test.ts` extension
- Use descriptive test names
- Test edge cases and error conditions

### Running Tests

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test:watch

# Run tests for a specific file
yarn test path/to/file.test.ts
```

## Documentation

### Code Documentation

- Add JSDoc comments to all exported functions
- Include parameter descriptions and return types
- Add usage examples for complex functions

### README Updates

- Update the README for new features
- Keep examples up to date
- Ensure all badges are working

### API Documentation

- Update `docs/API.md` for any API changes
- Include clear descriptions and examples
- Keep the table of contents updated

## Questions?

If you have questions, please:

1. Check the [documentation](./docs)
2. Search [existing issues](https://github.com/aoneahsan/react-buildkit/issues)
3. Create a new issue with the `question` label

## Recognition

Contributors will be recognized in:
- The project README
- Release notes
- The contributors page on GitHub

Thank you for contributing to React BuildKit! 🎉