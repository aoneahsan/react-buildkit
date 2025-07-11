/**
 * Common utility functions used across the package
 */

/**
 * Checks for duplicate values in an enum object
 * @param enumObj - The enum object to check
 * @param enumName - The name of the enum for error reporting
 * @throws Error if duplicate values are found
 */
export function checkForDuplicateEnumValues(enumObj: Record<string, any>, enumName: string): void {
  const values = Object.values(enumObj);
  const uniqueValues = new Set(values);
  
  if (values.length !== uniqueValues.size) {
    const duplicates: any[] = [];
    const seen = new Set();
    
    values.forEach(value => {
      if (seen.has(value) && !duplicates.includes(value)) {
        duplicates.push(value);
      }
      seen.add(value);
    });
    
    throw new Error(`Duplicate values found in ${enumName}: ${duplicates.join(', ')}`);
  }
}

/**
 * Converts a string to title case
 * @param str - The string to convert
 * @returns The string in title case
 */
export function convertToTitleCase(str: string): string {
  if (!str) return '';
  
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Validates an email address
 * @param email - The email to validate
 * @returns true if valid, false otherwise
 */
export function validateEmail(email: string): boolean {
  if (!email) return false;
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates a phone number
 * @param phoneNumber - The phone number to validate
 * @returns true if valid, false otherwise
 */
export function validatePhoneNumber(phoneNumber: string): boolean {
  if (!phoneNumber) return false;
  
  // Remove all non-numeric characters
  const cleaned = phoneNumber.replace(/\D/g, '');
  
  // Check if it's a valid length (10-15 digits for international numbers)
  return cleaned.length >= 10 && cleaned.length <= 15;
}

/**
 * Validates a URL
 * @param url - The URL to validate
 * @returns true if valid, false otherwise
 */
export function validateURL(url: string): boolean {
  if (!url) return false;
  
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Calculates the total number of pages for pagination
 * @param totalCount - Total number of items
 * @param pageSize - Number of items per page
 * @returns Total number of pages
 */
export function ZTotalPages(totalCount: number, pageSize: number): number {
  if (totalCount <= 0 || pageSize <= 0) return 0;
  return Math.ceil(totalCount / pageSize);
}

// Re-export common enums and constants for convenience
export { ResponseCodeEnum, ResponseStatusEnum, LinkTargetEnum, SearchParamKeysEnum, ztkMessages } from '@enums/common';