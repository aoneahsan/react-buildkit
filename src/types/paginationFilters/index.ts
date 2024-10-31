export interface ZFilterOptions {
  search?: string;
  showAll?: string;
  itemPerPage: number;
  currentPage: number;
  keyValueFilter?: Record<string, any>;
}

export interface ZPaginationInfoI {
  from?: number;
  to?: number;
  range?: Array<string | number>;
  currentPage: number;
  canGoPrevious: boolean;
  canGoNext: boolean;
  pages?: number;
}
