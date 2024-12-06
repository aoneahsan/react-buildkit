import { Browser } from '@capacitor/browser';
import { Clipboard } from '@capacitor/clipboard';
import { Dialog } from '@capacitor/dialog';
import { Geolocation } from '@capacitor/geolocation';
import { Preferences } from '@capacitor/preferences';
import { Toast } from '@capacitor/toast';
import { ToastDurationEnum, ToastPositionEnum } from '@enums/capacitorApis';
import { LinkTargetEnum, ztkMessages } from 'zaions-tool-kit';
import {
  decryptData,
  encryptData,
} from 'zaions-tool-kit/dist/require-package/crypto-js';

export const showToast = async (
  message: string = ztkMessages.general.success,
  duration: ToastDurationEnum = ToastDurationEnum.long,
  position: ToastPositionEnum = ToastPositionEnum.bottom
): Promise<void> => {
  await Toast.show({
    text: message,
    position,
    duration,
  });
};

export const BROWSER = {
  open: async (
    url: string,
    target: LinkTargetEnum = LinkTargetEnum.blank
  ): Promise<void> => {
    try {
      await Browser.open({
        url,
        windowName: target,
      });
    } catch (error) {
      window.open(url, target);
    }
  },
};

/**
 * Utility object for handling secure storage operations.
 */
export const STORAGE = {
  get: async <T>(key: string): Promise<T | null> => {
    try {
      const _val = (await Preferences.get({ key })).value;

      if (_val) {
        return decryptData<T>(_val);
      }
      return null;
    } catch (error) {
      return null;
    }
  },
  set: async (key: string, data: unknown): Promise<void> => {
    const _val = encryptData(data);
    if (_val) {
      await Preferences.set({ key, value: _val });
    } else {
      throw new Error(
        'Something Went wrong while trying to set data in localstorage.'
      );
    }
  },
  remove: async (key: string): Promise<void> => {
    await Preferences.remove({ key });
  },
  clear: async (): Promise<void> => {
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
export const showZAlert = async ({
  title = '',
  message = '',
}: {
  title?: string;
  message?: string;
}): Promise<void> => {
  await Dialog.alert({
    title,
    message,
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
export const showZConfirm = async ({
  title = '',
  message = '',
}: {
  title?: string;
  message?: string;
}): Promise<{
  value: boolean;
}> => {
  const { value } = await Dialog.confirm({
    title,
    message,
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
export const showZPrompt = async ({
  title = '',
  message = '',
}: {
  title?: string;
  message?: string;
}): Promise<{
  value: string;
  cancelled: boolean;
}> => {
  const { value, cancelled } = await Dialog.prompt({
    title,
    message,
  });
  return { value, cancelled };
};

export const zWriteToClipboard = async (value?: string): Promise<void> => {
  await Clipboard.write({
    string: value,
  });
};

export const zCheckClipboard = async (): Promise<
  import('@capacitor/clipboard').ReadResult
> => {
  const result = await Clipboard.read();

  return result;
};

export const zGetCurrentPosition = async (): Promise<
  import('@capacitor/geolocation').Position
> => {
  return await Geolocation.getCurrentPosition();
};

export const zCheckPermissions = async (): Promise<
  import('@capacitor/geolocation').PermissionStatus
> => {
  return await Geolocation.checkPermissions();
};
