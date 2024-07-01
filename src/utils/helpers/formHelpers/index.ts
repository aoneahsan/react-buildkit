export const formatFormErrorsFromApiResponse = (
	errors: Record<string, string> | null
) => {
	const _errors: Record<string, string> = {};
	if (errors !== null) {
		Object.keys(errors).forEach((_key) => {
			const message = (errors ?? {})[_key];
			if (message) {
				_errors[_key] = message;
			}
		});
		return _errors;
	} else {
		return null;
	}
};
