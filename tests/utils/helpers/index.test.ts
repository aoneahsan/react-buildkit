import { describe, test, expect } from 'vitest';
import { 
  truncateText, 
  getRandomId, 
  toTitleCase
} from '../../../src/utils/helpers/generic';
import { 
  checkForDuplicateEnumValues,
  convertToTitleCase,
  validateEmail,
  validatePhoneNumber,
  validateURL,
  ZTotalPages
} from '../../../src/utils/helpers/common';

describe('Generic Helper Functions', () => {
  test('truncateText should truncate long text with ellipsis', () => {
    const longText = 'This is a very long text that needs to be truncated';
    expect(truncateText(longText, 20)).toBe('This is a very long ...');
    expect(truncateText('Short text', 20)).toBe('Short text');
    expect(truncateText(undefined, 20)).toBe('');
  });

  test('getRandomId should generate unique IDs', () => {
    const id1 = getRandomId();
    const id2 = getRandomId();
    expect(id1).toBeTruthy();
    expect(id2).toBeTruthy();
    expect(id1).not.toBe(id2);
  });

  test('toTitleCase should convert text to title case', () => {
    expect(toTitleCase('hello world')).toBe('Hello World');
    expect(toTitleCase('HELLO WORLD')).toBe('Hello World');
    expect(toTitleCase('hELLo WoRLD')).toBe('Hello World');
  });
});

describe('Common Helper Functions', () => {
  test('convertToTitleCase should handle various inputs', () => {
    expect(convertToTitleCase('hello world')).toBe('Hello World');
    expect(convertToTitleCase('HELLO WORLD')).toBe('Hello World');
    expect(convertToTitleCase('')).toBe('');
  });

  test('validateEmail should validate email addresses', () => {
    expect(validateEmail('test@example.com')).toBe(true);
    expect(validateEmail('user@domain.co.uk')).toBe(true);
    expect(validateEmail('invalid.email')).toBe(false);
    expect(validateEmail('@example.com')).toBe(false);
    expect(validateEmail('test@')).toBe(false);
    expect(validateEmail('')).toBe(false);
  });

  test('validatePhoneNumber should validate phone numbers', () => {
    expect(validatePhoneNumber('1234567890')).toBe(true);
    expect(validatePhoneNumber('+1-234-567-8900')).toBe(true);
    expect(validatePhoneNumber('123')).toBe(false);
    expect(validatePhoneNumber('')).toBe(false);
  });

  test('validateURL should validate URLs', () => {
    expect(validateURL('https://example.com')).toBe(true);
    expect(validateURL('http://test.com/path')).toBe(true);
    expect(validateURL('not-a-url')).toBe(false);
    expect(validateURL('')).toBe(false);
  });

  test('ZTotalPages should calculate total pages correctly', () => {
    expect(ZTotalPages(100, 10)).toBe(10);
    expect(ZTotalPages(95, 10)).toBe(10);
    expect(ZTotalPages(0, 10)).toBe(0);
    expect(ZTotalPages(100, 0)).toBe(0);
    expect(ZTotalPages(-10, 10)).toBe(0);
  });

  test('checkForDuplicateEnumValues should detect duplicates', () => {
    const validEnum = { A: 'a', B: 'b', C: 'c' };
    expect(() => checkForDuplicateEnumValues(validEnum, 'TestEnum')).not.toThrow();

    const duplicateEnum = { A: 'a', B: 'b', C: 'a' };
    expect(() => checkForDuplicateEnumValues(duplicateEnum, 'TestEnum')).toThrow('Duplicate values found in TestEnum: a');
  });
});