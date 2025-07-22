import { Browser } from '@capacitor/browser';
import { Clipboard } from '@capacitor/clipboard';
import { Dialog } from '@capacitor/dialog';
import { Geolocation } from '@capacitor/geolocation';
import { Preferences } from '@capacitor/preferences';
import { Toast } from '@capacitor/toast';
import { ToastDurationEnum, ToastPositionEnum } from '@enums/capacitorApis';
import { LinkTargetEnum, ztkMessages } from '@enums/common';
import { decryptData, encryptData } from '@utils/helpers/crypto';

/**
 * Shows a toast notification with customizable options
 * @param message - The message to display in the toast
 * @param options - Optional configuration for the toast
 */
export const showToast = async (
  message: string = ztkMessages.general.success,
  options?: {
    duration?: ToastDurationEnum;
    position?: ToastPositionEnum;
    // Allow any additional native Toast options
    [key: string]: any;
  }
): Promise<void> => {
  const defaultOptions = {
    duration: ToastDurationEnum.long,
    position: ToastPositionEnum.bottom,
  };

  await Toast.show({
    text: message,
    ...defaultOptions,
    ...options, // User options override defaults
  });
};

export const BROWSER = {
  /**
   * Opens a URL in the browser with customizable options
   * @param url - The URL to open
   * @param options - Optional configuration for the browser
   */
  open: async (
    url: string,
    options?: {
      target?: LinkTargetEnum;
      windowName?: string;
      // Additional Capacitor Browser options
      toolbarColor?: string;
      presentationStyle?: 'fullscreen' | 'popover';
      width?: number;
      height?: number;
      // Allow any additional native Browser options
      [key: string]: any;
    }
  ): Promise<void> => {
    const target = options?.target || options?.windowName || LinkTargetEnum.BLANK;
    
    try {
      await Browser.open({
        url,
        windowName: target,
        ...options, // Pass all user options to native API
      });
    } catch (error) {
      window.open(url, target);
    }
  },
};

/**
 * Storage configuration options
 */
export interface StorageOptions {
  /** Whether to encrypt data (default: true) */
  encrypt?: boolean;
  /** Group/namespace for preferences (mobile only) */
  group?: string;
}

/**
 * Utility object for handling storage operations with optional encryption.
 */
export const STORAGE = {
  /**
   * Gets a value from storage
   * @param key - The key to retrieve
   * @param options - Optional configuration
   */
  get: async (key: string, options?: StorageOptions): Promise<any | null> => {
    try {
      const shouldEncrypt = options?.encrypt !== false; // Default true
      const { value } = await Preferences.get({ 
        key,
        ...(options?.group && { group: options.group })
      });

      if (value) {
        return shouldEncrypt ? decryptData(value) : JSON.parse(value);
      }
      return null;
    } catch (error) {
      return null;
    }
  },
  
  /**
   * Sets a value in storage
   * @param key - The key to store under
   * @param data - The data to store
   * @param options - Optional configuration
   */
  set: async (key: string, data: unknown, options?: StorageOptions): Promise<void> => {
    const shouldEncrypt = options?.encrypt !== false; // Default true
    const value = shouldEncrypt ? encryptData(data) : JSON.stringify(data);
    
    if (!value) {
      throw new Error(
        'Something went wrong while trying to set data in storage.'
      );
    }
    
    await Preferences.set({ 
      key, 
      value,
      ...(options?.group && { group: options.group })
    });
  },
  
  /**
   * Removes a value from storage
   * @param key - The key to remove
   * @param options - Optional configuration
   */
  remove: async (key: string, options?: StorageOptions): Promise<void> => {
    await Preferences.remove({ 
      key,
      ...(options?.group && { group: options.group })
    });
  },
  
  /**
   * Clears all values from storage
   * @param options - Optional configuration (currently unused, reserved for future use)
   */
  clear: async (options?: StorageOptions): Promise<void> => {
    // Note: Capacitor Preferences.clear() doesn't support group parameter currently
    // The options parameter is kept for future compatibility
    await Preferences.clear();
  },
};

/**
 * Displays a simple alert dialog with an optional title and message.
 *
 * @param title - The title of the alert dialog.
 * @param message - The message content of the alert dialog.
 * @returns A Promise that resolves when the alert is dismissed.
 */
/**
 * Alert dialog options
 */
export interface ZAlertOptions {
  title?: string;
  message?: string;
  buttonTitle?: string;
  // Allow any additional native Dialog options
  [key: string]: any;
}

export const showZAlert = async (
  options: ZAlertOptions = {}
): Promise<void> => {
  const defaultOptions = {
    title: '',
    message: '',
    buttonTitle: 'OK',
  };

  await Dialog.alert({
    ...defaultOptions,
    ...options, // User options override defaults
  });
};

/**
 * Displays a confirmation dialog with an optional title and message.
 *
 * @param title - The title of the confirmation dialog.
 * @param message - The message content of the confirmation dialog.
 * @returns A Promise that resolves to an object containing the boolean value indicating the user's choice.
 * `{ value: true }` if confirmed, `{ value: false }` if canceled.
 */
/**
 * Confirm dialog options
 */
export interface ZConfirmOptions {
  title?: string;
  message?: string;
  okButtonTitle?: string;
  cancelButtonTitle?: string;
  // Allow any additional native Dialog options
  [key: string]: any;
}

export const showZConfirm = async (
  options: ZConfirmOptions = {}
): Promise<{
  value: boolean;
}> => {
  const defaultOptions = {
    title: '',
    message: '',
    okButtonTitle: 'OK',
    cancelButtonTitle: 'Cancel',
  };

  const { value } = await Dialog.confirm({
    ...defaultOptions,
    ...options, // User options override defaults
  });
  return { value };
};

/**
 * Displays a prompt dialog with an optional title and message.
 *
 * @param title - The title of the prompt dialog.
 * @param message - The message content of the prompt dialog.
 * @returns A Promise that resolves to an object containing the entered value and a boolean indicating whether the prompt was canceled.
 * `{ value: enteredValue, cancelled: false }` if a value is entered, `{ value: '', cancelled: true }` if canceled.
 */
/**
 * Prompt dialog options
 */
export interface ZPromptOptions {
  title?: string;
  message?: string;
  okButtonTitle?: string;
  cancelButtonTitle?: string;
  inputPlaceholder?: string;
  inputText?: string;
  // Allow any additional native Dialog options
  [key: string]: any;
}

export const showZPrompt = async (
  options: ZPromptOptions = {}
): Promise<{
  value: string;
  cancelled: boolean;
}> => {
  const defaultOptions = {
    title: '',
    message: '',
    okButtonTitle: 'OK',
    cancelButtonTitle: 'Cancel',
    inputPlaceholder: '',
    inputText: '',
  };

  const { value, cancelled } = await Dialog.prompt({
    ...defaultOptions,
    ...options, // User options override defaults
  });
  return { value, cancelled };
};

/**
 * Clipboard write options
 */
export interface ZClipboardWriteOptions {
  string?: string;
  image?: string;
  url?: string;
  label?: string;
  // Allow any additional native Clipboard options
  [key: string]: any;
}

export const zWriteToClipboard = async (
  value?: string | ZClipboardWriteOptions
): Promise<void> => {
  if (typeof value === 'string') {
    await Clipboard.write({
      string: value,
    });
  } else {
    await Clipboard.write(value || {});
  }
};

export const zCheckClipboard = async (): Promise<
  import('@capacitor/clipboard').ReadResult
> => {
  const result = await Clipboard.read();

  return result;
};

/**
 * Geolocation position options
 */
export interface ZGeolocationOptions {
  enableHighAccuracy?: boolean;
  timeout?: number;
  maximumAge?: number;
  // Allow any additional native Geolocation options
  [key: string]: any;
}

export const zGetCurrentPosition = async (
  options?: ZGeolocationOptions
): Promise<import('@capacitor/geolocation').Position> => {
  const defaultOptions = {
    enableHighAccuracy: false,
    timeout: 10000,
    maximumAge: 0,
  };

  return await Geolocation.getCurrentPosition({
    ...defaultOptions,
    ...options, // User options override defaults
  });
};

export const zCheckPermissions = async (): Promise<
  import('@capacitor/geolocation').PermissionStatus
> => {
  return await Geolocation.checkPermissions();
};
