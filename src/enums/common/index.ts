/**
 * Common enums used across the package
 */

/**
 * HTTP response status codes
 */
export enum ResponseCodeEnum {
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  CONFLICT = 409,
  UNPROCESSABLE_ENTITY = 422,
  TOO_MANY_REQUESTS = 429,
  INTERNAL_SERVER_ERROR = 500,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504
}

/**
 * API response status types
 */
export enum ResponseStatusEnum {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info'
}

/**
 * Link target types
 */
export enum LinkTargetEnum {
  BLANK = '_blank',
  SELF = '_self',
  PARENT = '_parent',
  TOP = '_top'
}

/**
 * Common search parameter keys
 */
export enum SearchParamKeysEnum {
  PAGE = 'page',
  LIMIT = 'limit',
  SEARCH = 'search',
  SORT = 'sort',
  ORDER = 'order',
  FILTER = 'filter',
  FROM = 'from',
  TO = 'to',
  STATUS = 'status',
  TYPE = 'type',
  CATEGORY = 'category',
  TAB = 'tab',
  VIEW = 'view',
  MODE = 'mode',
  ID = 'id',
  QUERY = 'q',
  encryptedDataSearchParam = 'data'
}

/**
 * Common message constants
 */
export const ztkMessages = {
  general: {
    loading: 'Loading...',
    error: 'An error occurred',
    success: 'Success',
    warning: 'Warning',
    info: 'Info',
    confirm: 'Confirm',
    cancel: 'Cancel',
    yes: 'Yes',
    no: 'No',
    ok: 'OK',
    close: 'Close',
    save: 'Save',
    delete: 'Delete',
    edit: 'Edit',
    add: 'Add',
    remove: 'Remove',
    submit: 'Submit',
    reset: 'Reset',
    back: 'Back',
    next: 'Next',
    previous: 'Previous',
    finish: 'Finish'
  },
  errors: {
    required: 'This field is required',
    invalid: 'Invalid value',
    network: 'Network error. Please check your connection.',
    server: 'Server error. Please try again later.',
    notFound: 'Not found',
    unauthorized: 'Unauthorized access',
    forbidden: 'Access forbidden',
    validation: 'Validation error',
    unknown: 'An unknown error occurred'
  },
  validation: {
    email: 'Please enter a valid email address',
    phone: 'Please enter a valid phone number',
    url: 'Please enter a valid URL',
    password: 'Password must meet the requirements',
    confirmPassword: 'Passwords do not match',
    min: 'Value is too small',
    max: 'Value is too large',
    minLength: 'Too short',
    maxLength: 'Too long',
    pattern: 'Invalid format'
  }
};