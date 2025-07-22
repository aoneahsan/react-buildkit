# React BuildKit API Documentation

Complete API reference for all exported functions, hooks, components, types, and constants.

## Table of Contents

- [Configuration](#configuration)
- [Enums](#enums)
- [Components](#components)
- [Hooks](#hooks)
- [Helper Functions](#helper-functions)
- [Types and Interfaces](#types-and-interfaces)
- [Constants](#constants)

## Configuration

### `configureZRTK(config: Partial<IConfigParams>): void`

Configures the React BuildKit library with custom settings.

```typescript
import { configureZRTK } from 'react-buildkit';

configureZRTK({
  // Configuration options
});
```

## Enums

### Capacitor API Enums

#### `ToastDurationEnum`
- `long` - 'long' duration
- `short` - 'short' duration

#### `ToastPositionEnum`
- `top` - 'top' position
- `bottom` - 'bottom' position
- `center` - 'center' position

### Generic Enums

#### `CONTAINS`
Used for validation rule checking:
- `number` - Check if string contains numbers
- `letter` - Check if string contains letters
- `specialSymbol` - Check if string contains special symbols
- `minCharacter` - Check minimum character length

#### `zValidationRuleE`
Form field validation rule types:
- `string` - Generic string validation
- `username` - Username validation
- `email` - Email validation
- `password` - Password validation
- `confirm_password` - Password confirmation validation
- `url` - URL validation
- `phoneNumber` - Phone number validation
- `otp` - OTP validation
- `accountId` - Account ID validation
- `subject` - Subject field validation
- `message` - Message field validation
- `linkTitle` - Link title validation

### React Package Enums

#### `ReactToastifyTypeEnum`
Toast notification types:
- `info` - Information toast
- `success` - Success toast
- `warning` - Warning toast
- `error` - Error toast
- `default` - Default toast

### Table Enums

#### `TableIdsEnum`
Comprehensive enum with 64 table column identifiers (ID, NAME, EMAIL, PHONE, etc.)

### Common Enums

#### `ResponseCodeEnum`
HTTP response status codes (200, 201, 400, 401, 403, 404, 500, etc.)

#### `ResponseStatusEnum`
API response status types:
- `SUCCESS` - 'success'
- `ERROR` - 'error'
- `WARNING` - 'warning'
- `INFO` - 'info'

#### `LinkTargetEnum`
HTML link target values:
- `BLANK` - '_blank'
- `SELF` - '_self'
- `PARENT` - '_parent'
- `TOP` - '_top'

#### `SearchParamKeysEnum`
Common URL search parameter keys (page, limit, search, sort, filter, etc.)

## Components

### Form Components (Formik Wrappers)

#### `ZFormik`
Wrapper for Formik component with TypeScript support.

```typescript
<ZFormik
  initialValues={{ email: '' }}
  onSubmit={(values) => console.log(values)}
>
  {/* Form content */}
</ZFormik>
```

#### `ZFormikForm`
Wrapper for Formik Form component.

```typescript
<ZFormikForm>
  {/* Form fields */}
</ZFormikForm>
```

#### `ZFieldArray`
Wrapper for Formik FieldArray component.

```typescript
<ZFieldArray name="items">
  {(arrayHelpers) => (
    // Array field content
  )}
</ZFieldArray>
```

### Utility Components

#### `ZClassNames`
Utility for conditional CSS class names.

```typescript
const className = ZClassNames('base-class', {
  'active': isActive,
  'disabled': isDisabled
}, 'additional-class');
```

#### `ZDropzone`
React Dropzone wrapper component.

```typescript
<ZDropzone onDrop={(files) => console.log(files)}>
  {({ getRootProps, getInputProps }) => (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drop files here</p>
    </div>
  )}
</ZDropzone>
```

#### `ZReactStars`
Star rating component.

```typescript
<ZReactStars
  count={5}
  value={3.5}
  onChange={(rating) => console.log(rating)}
  size={24}
  color="#ffd700"
/>
```

## Hooks

### `useZFormikContext<T>()`
Hook to access Formik context with TypeScript support.

```typescript
const formik = useZFormikContext<MyFormValues>();
```

### `useZDropzone(options?)`
Hook for dropzone functionality.

```typescript
const { getRootProps, getInputProps, isDragActive } = useZDropzone({
  accept: { 'image/*': [] },
  maxFiles: 3
});
```

### `useZMediaQueryScale(options?: MediaQueryScaleOptions)`
Hook for responsive design with customizable media queries.

```typescript
// Basic usage
const mediaQueries = useZMediaQueryScale();

// With custom breakpoints
const mediaQueries = useZMediaQueryScale({
  breakpoints: {
    brackpoint_md: '768px',
    brackpoint_lg: '1200px'
  },
  customBreakpoints: {
    tablet: '834px',
    desktop: '1440px',
    ultrawide: '2560px'
  },
  queryOptions: {
    orientation: 'landscape'
  }
});

// Access results
if (mediaQueries.isTablet) {
  // Tablet-specific logic
}
```

**Returns:**
- All standard breakpoint checks (is2XlScale, isXlScale, isLgScale, etc.)
- Below breakpoint checks (isBelow2XlScale, isBelowXlScale, etc.)
- Fixed pixel breakpoints (is1300pxScale, is1200pxScale, etc.)
- Custom breakpoint results (based on your customBreakpoints)

## Helper Functions

### Platform Detection

#### `isCapAndroid(): boolean`
Returns true if running on Capacitor Android.

#### `isCapIOS(): boolean`
Returns true if running on Capacitor iOS.

#### `isCapMobileApp(): boolean`
Returns true if running on any Capacitor mobile app.

#### `isCapWeb(): boolean`
Returns true if running on Capacitor web.

#### `isHybrid(): boolean`
Returns true if running in hybrid mode.

### Capacitor APIs

#### `showToast(message?, options?): Promise<void>`
Shows a native toast notification with customizable options.

```typescript
// Simple usage
await showToast('Hello World');

// With options
await showToast('Hello World', {
  duration: ToastDurationEnum.long,
  position: ToastPositionEnum.bottom,
  // Any additional native Toast options
});
```

#### `showZAlert(options?: ZAlertOptions): Promise<void>`
Shows a native alert dialog with customizable options.

```typescript
await showZAlert({ 
  title: 'Alert', 
  message: 'This is an alert message',
  buttonTitle: 'Got it!'
  // Any additional native Dialog options
});
```

#### `showZConfirm(options?: ZConfirmOptions): Promise<{ value: boolean }>`
Shows a native confirmation dialog with customizable options.

```typescript
const { value } = await showZConfirm({ 
  title: 'Confirm', 
  message: 'Are you sure?',
  okButtonTitle: 'Yes, Delete',
  cancelButtonTitle: 'Keep It'
  // Any additional native Dialog options
});
```

#### `showZPrompt(options?: ZPromptOptions): Promise<{ value: string; cancelled: boolean }>`
Shows a native prompt dialog with full customization.

```typescript
const result = await showZPrompt({ 
  title: 'Enter Name', 
  message: 'Please enter your name',
  inputPlaceholder: 'John Doe',
  inputText: 'Default Value',
  okButtonTitle: 'Save',
  cancelButtonTitle: 'Discard'
  // Any additional native Dialog options
});
```

#### `zWriteToClipboard(value: string | ZClipboardWriteOptions): Promise<void>`
Writes content to clipboard with support for multiple formats.

```typescript
// Simple text
await zWriteToClipboard('Hello World');

// Advanced options
await zWriteToClipboard({
  string: 'Hello World',
  label: 'Greeting',
  // Additional clipboard options
});
```

#### `zCheckClipboard(): Promise<{ value: string; type: string }>`
Reads clipboard content.

#### `zGetCurrentPosition(options?: ZGeolocationOptions): Promise<GeolocationPosition>`
Gets current geolocation with customizable accuracy and timeout.

```typescript
const position = await zGetCurrentPosition({
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 60000
  // Any additional native Geolocation options
});
```

#### `zCheckPermissions(): Promise<PermissionStatus>`
Checks geolocation permissions.

### Browser Helper

#### `BROWSER.open(url: string, target?: LinkTargetEnum): Promise<void>`
Opens URL in browser.

```typescript
await BROWSER.open('https://example.com', LinkTargetEnum.BLANK);
```

### Storage Helper

#### `STORAGE.get(key: string, options?: StorageOptions): Promise<any | null>`
Gets data from storage with optional encryption.

```typescript
// Get encrypted data (default)
const userData = await STORAGE.get('user');

// Get unencrypted data
const settings = await STORAGE.get('settings', { encrypt: false });

// Use mobile storage group
const data = await STORAGE.get('key', { group: 'myapp.settings' });
```

#### `STORAGE.set(key: string, data: unknown, options?: StorageOptions): Promise<void>`
Sets data in storage with optional encryption.

```typescript
// Set encrypted data (default)
await STORAGE.set('user', userData);

// Set unencrypted data
await STORAGE.set('theme', 'dark', { encrypt: false });

// Use mobile storage group
await STORAGE.set('key', data, { group: 'myapp.settings' });
```

#### `STORAGE.remove(key: string, options?: StorageOptions): Promise<void>`
Removes data from storage.

#### `STORAGE.clear(options?: StorageOptions): Promise<void>`
Clears all storage data.

### Form Helpers

#### `formatFormErrorsFromApiResponse(errors: Record<string, string> | null): Record<string, string> | null`
Formats API error responses for form display.

#### `checkIfContains(val: string, contains?: CONTAINS): boolean`
Checks if string contains specified character types.

```typescript
checkIfContains('abc123', CONTAINS.number); // true
checkIfContains('abc', CONTAINS.number); // false
```

#### `validateField(fieldKey: string, values: Record<string, unknown>, errorsObj: Record<string, unknown>, validationRule?: zValidationRuleE, options?: ValidateFieldOptions): void`
Validates a single form field with customizable messages and rules.

```typescript
const errors = {};
const values = { email: 'test@example' };

// Basic validation
validateField('email', values, errors, zValidationRuleE.email);

// With custom messages
validateField('email', values, errors, zValidationRuleE.email, {
  messages: {
    email: 'Please enter a valid company email'
  }
});

// With custom validator
validateField('username', values, errors, undefined, {
  customValidator: (value) => {
    if (value.length < 3) return 'Username too short';
    return undefined;
  }
});
```

#### `validateFields(fieldKeys: string[], values: Record<string, unknown>, errorsObj: Record<string, unknown>, validationRules: zValidationRuleE[], options?: ValidateFieldOptions): void`
Validates multiple fields at once.

#### `validateFields(values: Record<string, any>, validationRules: Record<string, zValidationRuleE | undefined>): Record<string, string>`
Validates multiple form fields.

```typescript
const errors = validateFields(
  { email: 'invalid', password: '123' },
  { email: zValidationRuleE.email, password: zValidationRuleE.password }
);
```

### Generic Helpers

#### `truncateText(str?: string, length?: number): string`
Truncates text to specified length with ellipsis.

```typescript
truncateText('Long text here', 10); // 'Long text...'
```

#### `getRandomId(): string`
Generates a random ID string.

#### `toTitleCase(str: string): string`
Converts string to title case.

```typescript
toTitleCase('hello world'); // 'Hello World'
```

#### `ZPaginate(current: number, total: number): { range: number[]; rangeWithDots: Array<string | number> }`
Generates pagination range.

#### `ZFilterData<T>({ data, filters, searchKey, caseSensitive? }): Array<T>`
Filters array data based on search criteria.

```typescript
const filtered = ZFilterData({
  data: users,
  filters: { search: 'john' },
  searchKey: ['name', 'email']
});
```

#### `ZFilterAndPaginateData<T>({ data, filters, searchKey }): { _data: Array<T>; _paginationInfo: ZPaginationInfoI }`
Filters and paginates data.

### Common Helpers

#### `checkForDuplicateEnumValues(enumObj: Record<string, any>, enumName: string): void`
Checks for duplicate values in enum (throws error if found).

#### `convertToTitleCase(str: string): string`
Converts string to title case (alternative implementation).

#### `validateEmail(email: string): boolean`
Validates email format.

#### `validatePhoneNumber(phoneNumber: string): boolean`
Validates phone number format.

#### `validateURL(url: string): boolean`
Validates URL format.

#### `ZTotalPages(totalCount: number, pageSize: number): number`
Calculates total pages for pagination.

### Crypto Helpers

#### `encryptData(data: any, secretKey?: string): string`
Encrypts data using AES encryption.

#### `decryptData(encryptedData: string, secretKey?: string, parseJSON?: boolean): any`
Decrypts data using AES decryption.

#### `hashData(data: string): string`
Generates SHA256 hash of data.

#### `generateSecretKey(length?: number): string`
Generates random secret key.

### Local Storage Helpers

#### `clearAuthDataFromLocalStorage(): Promise<void>`
Clears authentication data from storage.

#### `setAuthDataInLocalStorage({ userData?, authToken? }): Promise<void>`
Sets authentication data in storage.

#### `getAuthTokenFromLocalStorage(): Promise<string | null>`
Gets authentication token from storage.

#### `getAuthDataFromLocalStorage(): Promise<{ userData: IUser | null; authToken: string | null } | null>`
Gets all authentication data from storage.

### Routing Helpers

#### `setSearchParamsData(data: unknown, setSearchParams: Function, options?: SetSearchParamsOptions): void`
Sets data in URL search params with optional encryption.

```typescript
// Set encrypted data (default)
setSearchParamsData({ filter: 'active' }, setSearchParams);

// Set unencrypted data
setSearchParamsData({ page: 1 }, setSearchParams, { encrypt: false });

// Use custom param key
setSearchParamsData(data, setSearchParams, { 
  paramKey: 'state',
  encrypt: false 
});
```

#### `getSearchParamsData<T>(searchParams: URLSearchParams, options?: GetSearchParamsOptions): T | null`
Gets data from URL search params with optional decryption.

```typescript
// Get encrypted data (default)
const data = getSearchParamsData<FilterData>(searchParams);

// Get unencrypted data
const page = getSearchParamsData<number>(searchParams, { encrypt: false });

// Use custom param key
const state = getSearchParamsData(searchParams, { 
  paramKey: 'state',
  encrypt: false 
});
```

#### `addQueryParamsInUrl(url: string, queryParams: Record<string, string> | null): string`
Adds query parameters to URL.

#### `formatRoutesMatchResult(routesMatch: string[] | undefined): RouteMatchResult`
Formats route matching results.

### Testing Helpers

#### `getTestingAttribute(selector: string, listItemSelector?: string): Record<string, string>`
Generates testing attributes for components.

```typescript
const attrs = getTestingAttribute('login-form', 'submit-button');
// { 'data-testid': 'login-form', 'data-test-item': 'submit-button' }
```

### Error Reporting

#### `reportError(error: unknown, errorInfo?: unknown): void`
Reports errors for logging/monitoring.

## Types and Interfaces

### API Response Types

```typescript
interface IApiResponseResult<T> {
  data?: T;
  authToken?: string;
  dataList?: T;
}

interface IApiResponse<T> {
  errors: Record<string, string> | null;
  result: IApiResponseResult<T> | null;
  message: string;
  success: boolean;
  status: ResponseStatusEnum;
  code: ResponseCodeEnum;
}
```

### Option Interfaces

```typescript
interface StorageOptions {
  encrypt?: boolean; // Whether to encrypt data (default: true)
  group?: string; // Group/namespace for preferences (mobile only)
}

interface ZAlertOptions {
  title?: string;
  message?: string;
  buttonTitle?: string;
  [key: string]: any; // Additional native options
}

interface ZConfirmOptions {
  title?: string;
  message?: string;
  okButtonTitle?: string;
  cancelButtonTitle?: string;
  [key: string]: any;
}

interface ZPromptOptions {
  title?: string;
  message?: string;
  okButtonTitle?: string;
  cancelButtonTitle?: string;
  inputPlaceholder?: string;
  inputText?: string;
  [key: string]: any;
}

interface ZClipboardWriteOptions {
  string?: string;
  image?: string;
  url?: string;
  label?: string;
  [key: string]: any;
}

interface ZGeolocationOptions {
  enableHighAccuracy?: boolean;
  timeout?: number;
  maximumAge?: number;
  [key: string]: any;
}

interface ValidateFieldOptions {
  messages?: {
    required?: string;
    email?: string;
    password?: {
      minLength?: string;
      needsNumber?: string;
      needsLetter?: string;
      needsSpecialChar?: string;
    };
    url?: string;
    phoneNumber?: string;
    otp?: string;
  };
  minCharacter?: number;
  customValidator?: (value: string) => string | undefined;
}

interface SetSearchParamsOptions {
  encrypt?: boolean;
  paramKey?: string;
}

interface GetSearchParamsOptions {
  encrypt?: boolean;
  paramKey?: string;
}

interface MediaQueryScaleOptions {
  breakpoints?: {
    brackpoint_2xl?: string;
    brackpoint_xl?: string;
    brackpoint_lg?: string;
    brackpoint_md?: string;
    brackpoint_sm?: string;
    brackpoint_xs?: string;
  };
  customBreakpoints?: Record<string, string>;
  queryOptions?: {
    orientation?: 'portrait' | 'landscape';
    [key: string]: any;
  };
}

interface ZPaginateOptions {
  delta?: number;
  dotsString?: string;
  showBoundaries?: boolean;
}
```

### Hook Return Types

```typescript
interface useZMediaQueryScaleReturnInterface {
  scale: number;
  screenWidth: number;
  defaultScale: number;
  largeScale: number;
  extraLargeScale: number;
  isMobile: boolean;
  isTablet: boolean;
  isLaptop: boolean;
  isDesktop: boolean;
  isFullHDDesktop: boolean;
  is2KDesktop: boolean;
  is4KDesktop: boolean;
}
```

### Component Props Types

```typescript
interface IStar {
  isActive?: boolean;
  isHalf?: boolean;
  isHalfHidden?: boolean;
  willBeActive?: boolean;
  isDisabled?: boolean;
}

interface ZReactStarsProps {
  className?: string;
  edit?: boolean;
  half?: boolean;
  value?: number;
  count?: number;
  char?: string | React.ReactElement | React.Component;
  size?: number;
  color?: string;
  activeColor?: string;
  emptyIcon?: React.ReactElement | React.Component | null;
  halfIcon?: React.ReactElement | React.Component | null;
  filledIcon?: React.ReactElement | React.Component | null;
  a11y?: boolean;
  onChange?: (value: number) => void;
}
```

### Form Types

```typescript
type ZFormikHelpers<Values> = FormikHelpers<Values>;
type zSetFieldValueType<T> = (field: string, value: any, shouldValidate?: boolean) => Promise<void | FormikErrors<T>>;
type zSetFieldErrorType = (field: string, message: string | undefined) => void;
type zResetFormType<T> = (nextState?: Partial<FormikState<T>>) => void;
```

### Filter and Pagination Types

```typescript
interface ZFilterOptions {
  search?: string;
  currentPage: number;
  itemPerPage: number;
  keyValueFilter?: Record<string, any>;
}

interface ZPaginationInfoI {
  currentPage: number;
  canGoNext: boolean;
  canGoPrevious: boolean;
  pages: number;
  range?: Array<string | number>;
  from?: number;
  to?: number;
}
```

### User Data Types

```typescript
interface IUser {
  id?: string;
  name?: string;
  email?: string;
  // Additional user properties
}
```

## Constants

### `LOCALSTORAGE_KEYS`
Keys for local storage:
- `userData` - User data key
- `userAuthToken` - Auth token key
- `resetPassword` - Reset password key

### `APP_ROUTES`
Application route paths:
- `wildCard` - '*'
- `rootRoute` - '/'
- `home` - '/home'
- `register` - '/register'
- `login` - '/login'
- `myAccount` - '/my-account'
- `resetPassword` - '/forget-password'

### `API_URLS`
API endpoint URLs:
- `register` - '/register'
- `login` - '/login'
- `logout` - '/logout'
- `getUserData` - '/getUserData'
- `updateUserData` - '/updateUserData'
- `updateUserStatus` - '/updateUserStatus'

### `developerDetails`
Developer information:
- `portfolioWebsite` - 'https://aoneahsan.com'
- `updatedResume` - 'https://aoneahsan.com/resume'
- `updatedCV` - 'https://aoneahsan.com/cv'
- `linkedinProfile` - 'https://linkedin.com/in/aoneahsan'
- `githubProfile` - 'https://github.com/aoneahsan'

### `defaultValues`
Default configuration values:
- `minCharacter` - 6

### `mediaScales`
Media query scale breakpoints

### `reactQueryOptions`
React Query default options

### `zrtkMessages`
Comprehensive message constants for UI:
- `general` - General messages (loading, error, success, etc.)
- `errors` - Error messages
- `validation` - Validation messages

### Style Constants
- `defaultStyles` - Default component styles
- `disabledStyles` - Disabled state styles
- `parentStyles` - Parent container styles