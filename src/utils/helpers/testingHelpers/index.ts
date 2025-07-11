export const getTestingAttribute = (
  selector: string,
  listItemSelector?: string
): Record<string, string> => {
  const res: Record<string, string> = {};

  // selector for non-list items or generic selector for list items
  res['data-testid'] = selector;

  if (listItemSelector) {
    // list item id/specific selector
    res['data-test-item'] = listItemSelector;
  }

  return res;
};
