# Security Policy

## Supported Versions

We release patches for security vulnerabilities for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |
| < 0.1.0 | :x:                |

## Reporting a Vulnerability

We take the security of React BuildKit seriously. If you have discovered a security vulnerability in our project, we appreciate your help in disclosing it to us in a responsible manner.

### Reporting Process

1. **DO NOT** create a public GitHub issue for the vulnerability.

2. **Email** your findings to `aoneahsan@gmail.com`. Please include:
   - Description of the vulnerability
   - Steps to reproduce the issue
   - Potential impact
   - Suggested fix (if any)

3. **Response Time**: You can expect an initial response within 48 hours acknowledging receipt of your report.

4. **Follow-up**: We will keep you informed about our progress in addressing the vulnerability.

### What to Expect

- **Acknowledgment**: We will acknowledge receipt of your vulnerability report within 48 hours.

- **Investigation**: We will investigate the issue and determine its impact and severity.

- **Resolution**: We will work on fixing the vulnerability and will keep you updated on our progress.

- **Disclosure**: Once the vulnerability is fixed, we will work with you to determine an appropriate disclosure timeline.

- **Credit**: We will credit you for the discovery in our release notes and security advisory (unless you prefer to remain anonymous).

## Security Best Practices

When using React BuildKit, please follow these security best practices:

### Storage Security

1. **Encryption Keys**: Always use strong, unique encryption keys in production:
   ```typescript
   // ❌ Bad - Using default key
   encryptData(data);
   
   // ✅ Good - Using custom key
   const secretKey = process.env.REACT_APP_SECRET_KEY;
   encryptData(data, secretKey);
   ```

2. **Sensitive Data**: Never store sensitive data like passwords or API keys in plain text.

3. **Key Management**: Store encryption keys securely using environment variables or secure key management services.

### Input Validation

1. **Form Validation**: Always validate user input on both client and server:
   ```typescript
   // Always validate before processing
   const error = validateField(userInput, zValidationRuleE.email);
   if (error) {
     // Handle invalid input
   }
   ```

2. **URL Validation**: Validate URLs before using them:
   ```typescript
   if (validateURL(userProvidedUrl)) {
     // Safe to use
   }
   ```

### Platform-Specific Security

1. **Capacitor Permissions**: Always check permissions before accessing sensitive APIs:
   ```typescript
   const permissions = await zCheckPermissions();
   if (permissions.location === 'granted') {
     // Safe to access location
   }
   ```

2. **Clipboard Access**: Be cautious when accessing clipboard data as it may contain sensitive information.

## Known Security Features

React BuildKit includes several security features:

1. **AES Encryption**: All storage operations use AES encryption by default
2. **Input Validation**: Comprehensive validation functions for common inputs
3. **XSS Protection**: React's built-in XSS protection for all components
4. **No Eval**: The library doesn't use `eval()` or similar unsafe functions
5. **Dependency Security**: Regular updates to dependencies to patch vulnerabilities

## Security Updates

- Security updates are released as soon as possible after a vulnerability is discovered and fixed
- Updates are announced through:
  - GitHub Security Advisories
  - NPM security advisories
  - Release notes

## Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [React Security Best Practices](https://react.dev/learn/security)
- [Capacitor Security](https://capacitorjs.com/docs/guides/security)

## Contact

For any security-related questions that don't involve reporting a vulnerability, please open a regular issue or discussion on GitHub.

---

Thank you for helping keep React BuildKit and its users safe!