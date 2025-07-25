import { ZFilterOptions, ZPaginationInfoI } from '@src/types/paginationFilters';
import { ZTotalPages } from '@utils/helpers/common';

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

/**
 * Generates a pagination range based on the current page and the total number of pages.
 * @param current The current page.
 * @param total The total number of pages.
 * @returns An object containing the pagination range and range with dots.
 */
/**
 * Pagination options
 */
export interface ZPaginateOptions {
  /** Number of pages to show around the current page (default: 2) */
  delta?: number;
  /** Custom dots string (default: '...') */
  dotsString?: string;
  /** Whether to always show first and last pages (default: true) */
  showBoundaries?: boolean;
}

export const ZPaginate = (
  current: number,
  total: number,
  options?: ZPaginateOptions
): {
  range: number[];
  rangeWithDots: Array<string | number>;
} => {
  const delta = options?.delta ?? 2;
  const dotsString = options?.dotsString ?? '...';
  const showBoundaries = options?.showBoundaries !== false; // Default true
  const left = current - delta;
  const right = current + delta;
  const range: number[] = [];
  const rangeWithDots: Array<string | number> = [];
  let previousPage = 0;

  for (let i = 1; i <= total; i++) {
    const isFirstOrLast = i === 1 || i === total;
    const isInRange = i > left && i < right;
    
    if ((showBoundaries && isFirstOrLast) || isInRange || (!showBoundaries && isInRange)) {
      range.push(i);
    }
  }

  for (const currentPage of range) {
    if (previousPage) {
      if (currentPage - previousPage === 2) {
        rangeWithDots.push(previousPage + 1);
      } else if (currentPage - previousPage !== 1) {
        rangeWithDots.push(dotsString);
      }
    }
    rangeWithDots.push(currentPage);
    previousPage = currentPage;
  }

  return { range, rangeWithDots };
};

/**
 * Filters an array of data based on search criteria provided in the filters.
 *
 * @template T - The type of the data being filtered.
 *
 * @param {Object} params - The parameters for filtering data.
 * @param {T} params.data - The data to be filtered.
 * @param {ZFilterOptions} params.filters - The filter options to apply.
 * @param {string | string[]} [params.searchKey] - The key(s) to search within the data.
 *
 * @returns {Array<(T & unknown[])[number]>} The filtered data.
 */
export const ZFilterData = <T>({
  data,
  filters,
  searchKey,
  caseSensitive = true,
}: {
  data: T;
  filters: Partial<ZFilterOptions>;
  searchKey?: string | string[];
  caseSensitive?: boolean;
}): Array<(T & unknown[])[number]> => {
  let _data = null;
  if (Array.isArray(data) && data?.length > 0) {
    _data = [...data];

    if (filters?.search?.trim()?.length && searchKey !== undefined) {
      _data = _data?.filter((_item) => {
        if (typeof searchKey === 'string') {
          if (searchKey in _item) {
            if (caseSensitive) {
              return String(_item[searchKey])
                ?.trim()
                ?.toLocaleLowerCase()
                ?.includes(filters?.search ?? '');
            }
            return String(_item[searchKey])
              ?.trim()
              ?.includes(filters?.search ?? '');
          }
        } else if (Array.isArray(searchKey)) {
          return searchKey?.some((_key) => {
            if (_key in _item) {
              if (caseSensitive) {
                return String(_item[_key])
                  ?.trim()
                  ?.toLowerCase()
                  ?.includes(filters?.search?.trim() ?? '');
              }
              return String(_item[_key])
                ?.trim()
                ?.includes(filters?.search?.trim() ?? '');
            }
            return false; // Key not found in item
          });
        }

        return false;
      });
    }

    // Apply key-value filter, ignoring null, undefined, or empty string values
    if (
      filters?.keyValueFilter &&
      Object.keys(filters?.keyValueFilter).length > 0
    ) {
      _data = _data.filter((_item) =>
        Object.entries(filters?.keyValueFilter!).every(([key, value]) => {
          // Skip keys with null, undefined, or empty string values
          if (value === null || value === undefined || value === '') {
            return true;
          }
          return key in _item && _item[key] === value;
        })
      );
    }
  }

  return _data ?? [];
};

/**
 * Filters data based on provided options and search criteria.
 * @param data The data to be filtered.
 * @param filters The filter options to apply.
 * @param searchKey The key(s) to search within the data.
 * @returns An object containing the filtered data and pagination information.
 */
export const ZFilterAndPaginateData = <T>({
  data,
  filters,
  searchKey,
}: {
  data: T;
  filters: ZFilterOptions;
  searchKey?: string | string[];
}): {
  _data: Array<(T & unknown[])[number]> | null;
  _paginationInfo: ZPaginationInfoI;
} => {
  const _paginationInfo: ZPaginationInfoI = {
    currentPage: filters?.currentPage,
    canGoNext: true,
    canGoPrevious: true,
    pages: 0,
  };
  let _data = ZFilterData({
    data,
    filters,
    searchKey,
  });

  _paginationInfo.pages = ZTotalPages(_data?.length, filters?.itemPerPage);

  const { rangeWithDots } = ZPaginate(
    _paginationInfo?.currentPage,
    _paginationInfo?.pages
  );

  _paginationInfo.range = rangeWithDots;

  if (filters?.itemPerPage > 0) {
    if (
      _paginationInfo?.currentPage === _paginationInfo?.pages ||
      !_data?.length
    ) {
      _paginationInfo.canGoNext = false;
    }
    if (_paginationInfo?.currentPage < 2) {
      _paginationInfo.canGoPrevious = false;
    }

    if (filters?.itemPerPage >= _data?.length) {
      _paginationInfo.currentPage = 1;
    } else if (_paginationInfo.currentPage > _paginationInfo?.pages) {
      _paginationInfo.currentPage = _paginationInfo?.pages;
    }
    // pagination info
    _paginationInfo.from =
      (_paginationInfo?.currentPage - 1) * filters?.itemPerPage + 1;

    _paginationInfo.to = Math.min(
      _paginationInfo?.currentPage * filters?.itemPerPage,
      _data?.length
    );

    if (filters?.itemPerPage >= _data?.length) {
      _paginationInfo.from = 1;
    }
    // item to skip
    const _itemsToSkip =
      filters?.itemPerPage * (_paginationInfo?.currentPage - 1);
    _data = _data?.slice(_itemsToSkip).slice(0, filters?.itemPerPage);
  }

  return { _data, _paginationInfo };
};
