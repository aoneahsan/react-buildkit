/**
 * Cryptography helper functions using crypto-js
 */

import CryptoJS from 'crypto-js';

// Default secret key - should be overridden in production
const DEFAULT_SECRET_KEY = 'react-buildkit-default-secret-2024';

/**
 * Encrypts data using AES encryption
 * @param data - The data to encrypt (can be string or object)
 * @param secretKey - The secret key for encryption (optional)
 * @returns The encrypted string
 */
export function encryptData(data: any, secretKey?: string): string {
  try {
    const key = secretKey || DEFAULT_SECRET_KEY;
    const dataString = typeof data === 'string' ? data : JSON.stringify(data);
    return CryptoJS.AES.encrypt(dataString, key).toString();
  } catch (error) {
    console.error('Encryption error:', error);
    throw new Error('Failed to encrypt data');
  }
}

/**
 * Decrypts data using AES decryption
 * @param encryptedData - The encrypted string
 * @param secretKey - The secret key for decryption (optional)
 * @param parseJSON - Whether to parse the result as JSON (default: true)
 * @returns The decrypted data
 */
export function decryptData(encryptedData: string, secretKey?: string, parseJSON: boolean = true): any {
  try {
    const key = secretKey || DEFAULT_SECRET_KEY;
    const bytes = CryptoJS.AES.decrypt(encryptedData, key);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    
    if (!decrypted) {
      throw new Error('Failed to decrypt data - invalid key or corrupted data');
    }
    
    if (parseJSON) {
      try {
        return JSON.parse(decrypted);
      } catch {
        // If JSON parsing fails, return the string
        return decrypted;
      }
    }
    
    return decrypted;
  } catch (error) {
    console.error('Decryption error:', error);
    throw new Error('Failed to decrypt data');
  }
}

/**
 * Generates a hash of the given data using SHA256
 * @param data - The data to hash
 * @returns The hash string
 */
export function hashData(data: string): string {
  return CryptoJS.SHA256(data).toString();
}

/**
 * Generates a random secret key
 * @param length - The length of the key (default: 32)
 * @returns A random secret key
 */
export function generateSecretKey(length: number = 32): string {
  const words = CryptoJS.lib.WordArray.random(length);
  return words.toString();
}