import { checkForDuplicateEnumValues } from 'zaions-tool-kit';

export enum ReactToastifyTypeEnum {
  info = 'info',
  success = 'success',
  warning = 'warning',
  error = 'error',
  default = 'default',
}

// Check for duplicates
checkForDuplicateEnumValues(
  ReactToastifyTypeEnum,
  'Duplicate ReactToastifyTypeEnum value found:'
);
