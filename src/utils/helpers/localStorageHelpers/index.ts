import { LOCALSTORAGE_KEYS } from '@utils/constants';
import { STORAGE } from '../capacitorApis';
import { IUser } from '@src/types';

export const clearAuthDataFromLocalStorage = async (): Promise<void> => {
	try {
		// clear whole localstorage data
		// await STORAGE.clear();

		// if you do not want to clear everything from localstorage you can be specific
		await Promise.all([
			STORAGE.remove(LOCALSTORAGE_KEYS.userData),
			STORAGE.remove(LOCALSTORAGE_KEYS.userAuthToken),
		]);
	} catch (error) {}
};

export const setAuthDataInLocalStorage = async ({
	userData,
	authToken,
}: {
	userData?: IUser;
	authToken?: string;
}): Promise<void> => {
	if (userData) {
		await STORAGE.set(LOCALSTORAGE_KEYS.userData, userData);
	}

	if (authToken) {
		await STORAGE.set(LOCALSTORAGE_KEYS.userAuthToken, authToken);
	}
};

export const getAuthTokenFromLocalStorage = async () => {
	return await STORAGE.get<string>(LOCALSTORAGE_KEYS.userAuthToken);
};

export const getAuthDataFromLocalStorage = async () => {
	try {
		const userData = await STORAGE.get<IUser>(LOCALSTORAGE_KEYS.userData);
		const authToken = await getAuthTokenFromLocalStorage();

		return { userData, authToken };
	} catch (error) {
		return null;
	}
};
