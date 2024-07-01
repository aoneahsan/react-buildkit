export const getTestingAttribute = (
	selector: string,
	listItemSelector?: string
) => {
	const res: Record<string, string> = {};

	// selector for non-list items or generic selector for list items
	res['zaions-ets'] = selector;

	if (listItemSelector) {
		// list item id/specific selector
		res['zaions-lets'] = listItemSelector;
	}

	return res;
};
