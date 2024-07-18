export interface ZFilterOptions {
    search?: string;
    showAll?: string;
    itemPerPage: number;
    currentPage: number;
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
