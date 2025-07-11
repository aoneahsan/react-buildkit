// Mock window object for Capacitor
(global as any).window = {
  navigator: {
    userAgent: 'test',
  },
  location: {
    href: 'http://localhost',
  },
};