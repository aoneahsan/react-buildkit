export const truncateText = (str?: string, length: number = 250): string => {
	if (str && str.length <= length) {
		return str;
	} else {
		return str ? str?.substring(0, length) + '...' : '';
	}
};

export const getRandomId = (): string => {
	return (
		new Date().getTime() + Math.round(Math.random() * 1000000)
	).toString();
};

export const toTitleCase = (str: string): string => {
	return str.replace(/\w\S*/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
};
