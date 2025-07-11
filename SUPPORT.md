# Support

Need help with React BuildKit? We're here to help! This document outlines where to get help and how to get the most out of your support requests.

## 📚 Documentation

Before seeking help, please check our documentation:

- [README](./README.md) - Overview and quick start guide
- [API Documentation](./docs/API.md) - Complete API reference
- [CHANGELOG](./CHANGELOG.md) - Recent changes and updates
- [Contributing Guide](./CONTRIBUTING.md) - How to contribute

## 🔍 Search First

Before creating a new issue or discussion:

1. **Search existing issues**: Your question might already be answered
   - [Open Issues](https://github.com/aoneahsan/react-buildkit/issues)
   - [Closed Issues](https://github.com/aoneahsan/react-buildkit/issues?q=is%3Aissue+is%3Aclosed)

2. **Check discussions**: Community discussions and Q&A
   - [GitHub Discussions](https://github.com/aoneahsan/react-buildkit/discussions)

## 💬 Getting Help

### GitHub Discussions (Recommended)

For general questions, ideas, and discussions:
- [Ask a question](https://github.com/aoneahsan/react-buildkit/discussions/new?category=q-a)
- [Share ideas](https://github.com/aoneahsan/react-buildkit/discussions/new?category=ideas)
- [Show and tell](https://github.com/aoneahsan/react-buildkit/discussions/new?category=show-and-tell)

### GitHub Issues

For bug reports and feature requests:
- [Report a bug](https://github.com/aoneahsan/react-buildkit/issues/new?template=bug_report.md)
- [Request a feature](https://github.com/aoneahsan/react-buildkit/issues/new?template=feature_request.md)

### Stack Overflow

For programming questions:
- Tag your question with `react-buildkit`
- Include a minimal reproducible example
- [Ask on Stack Overflow](https://stackoverflow.com/questions/tagged/react-buildkit)

## 📝 How to Ask for Help

To get the best help quickly, please provide:

### For Bug Reports

1. **Clear description** of the problem
2. **Steps to reproduce** the issue
3. **Expected behavior** vs actual behavior
4. **Error messages** (if any)
5. **Environment details**:
   ```
   - React BuildKit version:
   - React version:
   - Node.js version:
   - Operating System:
   - Browser (if applicable):
   ```
6. **Minimal reproducible example** (CodeSandbox, StackBlitz, or GitHub repo)

### For Questions

1. **What you're trying to achieve**
2. **What you've already tried**
3. **Relevant code snippets**
4. **Any error messages**

### Example of a Good Question

```markdown
Title: How to use custom encryption key with STORAGE helper?

I'm trying to use a custom encryption key with the STORAGE helper but getting an error.

What I'm trying to do:
Store user preferences with a user-specific encryption key.

What I've tried:
```typescript
const userKey = generateSecretKey();
await STORAGE.set('preferences', data, userKey); // This doesn't work
```

Error:
```
TypeError: STORAGE.set() takes 2 arguments but 3 were given
```

Environment:
- React BuildKit: 0.1.0
- React: 19.1.0
- Node.js: 22.2.0
```

## 🚀 Professional Support

For professional support, custom development, or consulting:
- Email: aoneahsan@gmail.com
- Website: [https://aoneahsan.com](https://aoneahsan.com)
- LinkedIn: [Ahsan Mahmood](https://linkedin.com/in/aoneahsan)

## 🤝 Community

Join our community:
- Star the project on [GitHub](https://github.com/aoneahsan/react-buildkit)
- Follow updates on [npm](https://www.npmjs.com/package/react-buildkit)
- Share your projects using React BuildKit

## 📬 Direct Contact

For sensitive matters (security issues, partnerships, etc.):
- Email: aoneahsan@gmail.com
- Please use "React BuildKit" in the subject line

## 🎯 Response Times

- **GitHub Issues**: Usually within 2-3 business days
- **GitHub Discussions**: Community-driven, varies
- **Security Issues**: Within 48 hours (see [SECURITY.md](./SECURITY.md))
- **Professional Support**: Based on agreement

## 📋 Support Checklist

Before reaching out, please check:

- [ ] I've read the documentation
- [ ] I've searched existing issues and discussions
- [ ] I've tried to solve it myself
- [ ] I've prepared a minimal reproducible example
- [ ] I've included all relevant information

## 🙏 Thank You

Thank you for using React BuildKit! We appreciate your patience and understanding as we work to help everyone in our community.

---

Remember: The more information you provide, the faster we can help you!