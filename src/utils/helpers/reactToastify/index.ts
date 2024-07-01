import { ReactToastifyTypeEnum } from '@enums/reactPackages';
import { ztkMessages } from '@zaions/tool-kit';
import { ToastContent, ToastOptions, toast } from 'react-toastify';

export const showNotification = (
	content: ToastContent,
	type: ReactToastifyTypeEnum = ReactToastifyTypeEnum.success,
	options?: ToastOptions
) => {
	toast(content, {
		...options,
		position: options?.position ?? 'top-right',
		type: type,
	});
};

export const showSuccessNotification = (
	message: ToastContent = ztkMessages.general.success,
	options?: ToastOptions
) => {
	showNotification(message, ReactToastifyTypeEnum.success, options);
};

export const showErrorNotification = (
	message: ToastContent = ztkMessages.general.failed,
	options?: ToastOptions
) => {
	showNotification(message, ReactToastifyTypeEnum.error, options);
};
