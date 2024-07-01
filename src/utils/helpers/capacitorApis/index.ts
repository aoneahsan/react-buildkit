import { Preferences } from '@capacitor/preferences';
import { Toast } from '@capacitor/toast';
import { Browser } from '@capacitor/browser';
import { ToastDurationEnum, ToastPositionEnum } from '@enums/capacitorApis';
import {
	LinkTargetEnum,
	decryptData,
	encryptData,
	ztkMessages,
} from '@zaions/tool-kit';

export const showToast = async (
	message: string = ztkMessages.general.success,
	duration: ToastDurationEnum = ToastDurationEnum.long,
	position: ToastPositionEnum = ToastPositionEnum.bottom
) => {
	await Toast.show({
		text: message,
		position,
		duration,
	});
};

export const BROWSER = {
	open: async (url: string, target: LinkTargetEnum = LinkTargetEnum.blank) => {
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
