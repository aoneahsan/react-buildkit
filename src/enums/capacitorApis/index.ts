import { checkForDuplicateEnumValues } from '@utils/helpers/common';

export enum ToastDurationEnum {
  long = 'long',
  short = 'short',
}

export enum ToastPositionEnum {
  top = 'top',
  bottom = 'bottom',
  center = 'center',
}

// Check for duplicates
checkForDuplicateEnumValues(
  ToastDurationEnum,
  'Duplicate ToastDurationEnum value found:'
);

// Check for duplicates
checkForDuplicateEnumValues(
  ToastPositionEnum,
  'Duplicate ToastPositionEnum value found:'
);
