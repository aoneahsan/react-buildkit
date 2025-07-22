import { CONTAINS, zValidationRuleE } from '@enums/generic';
import { defaultValues } from '@utils/constants/generic';
import formValidations from '@utils/messages/formValidations';
import {
  convertToTitleCase,
  validateEmail,
  validatePhoneNumber,
  validateURL,
} from '@utils/helpers/common';

export const formatFormErrorsFromApiResponse = (
  errors: Record<string, string> | null
): Record<string, string> | null => {
  const _errors: Record<string, string> = {};
  if (errors !== null) {
    Object.keys(errors).forEach((_key) => {
      const message = (errors ?? {})[_key];
      if (message) {
        _errors[_key] = message;
      }
    });
    return _errors;
  } else {
    return null;
  }
};

/**
 * Checks if a string contains certain types of characters based on the specified rule.
 *
 * @param val - The string to be checked.
 * @param contains - The rule specifying the type of characters to check for (e.g., number, letter, special symbol).
 * @returns A boolean indicating whether the string contains the specified characters.
 */
export const checkIfContains = (
  val: string,
  contains: CONTAINS = CONTAINS.number,
  minCharacter?: number
): boolean => {
  switch (contains) {
    case CONTAINS.number:
      return /\d/.test(val);
    case CONTAINS.letter:
      return /[a-zA-Z]+/.test(val);
    case CONTAINS.specialSymbol:
      return /[\W_]+/.test(val);
    case CONTAINS.minCharacter:
      return val.length >= (minCharacter || defaultValues.minCharacter);

    default:
      return /\d/.test(val);
  }
};

/**
 * Validation options for field validation
 */
export interface ValidateFieldOptions {
  /** Custom validation messages */
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
  /** Minimum character length for password/OTP validation */
  minCharacter?: number;
  /** Custom validation function */
  customValidator?: (value: string) => string | undefined;
}

/**
 * Validates a specific field based on the specified validation rule and updates the errors object accordingly.
 *
 * @param fieldKey - The key of the field to be validated.
 * @param values - The object containing field values.
 * @param errorsObj - The object containing errors for each field.
 * @param validationRule - The validation rule to be applied.
 * @param options - Optional configuration for validation
 */
export const validateField = (
  fieldKey: string,
  values: Record<string, unknown>,
  errorsObj: Record<string, unknown>,
  validationRule: zValidationRuleE = zValidationRuleE.string,
  options?: ValidateFieldOptions
): void => {
  const _fieldKeyTitleCase = convertToTitleCase(fieldKey);
  const _val = String(values[fieldKey])?.trim();
  const minChar = options?.minCharacter || defaultValues.minCharacter;
  
  // Apply custom validator first if provided
  if (options?.customValidator) {
    const customError = options.customValidator(_val);
    if (customError) {
      errorsObj[fieldKey] = customError;
      return;
    }
  }
  
  /**
   * Checking if the field key is empty then give required error message
   */
  if (
    !Object.prototype.hasOwnProperty.call(values, fieldKey) ||
    _val.length === 0
  ) {
    errorsObj[fieldKey] = options?.messages?.required || `${_fieldKeyTitleCase} is required`;
  } else if (
    validationRule === zValidationRuleE.email &&
    !validateEmail(_val)
  ) {
    errorsObj[fieldKey] = options?.messages?.email || `${_fieldKeyTitleCase} needs to be a valid email.`;
  } else if (validationRule === zValidationRuleE.password) {
    if (_val.length < minChar) {
      errorsObj[fieldKey] = options?.messages?.password?.minLength || 
        `${_fieldKeyTitleCase} needs to be at least ${minChar} characters long.`;
    } else if (!checkIfContains(_val, CONTAINS.number)) {
      errorsObj[fieldKey] = options?.messages?.password?.needsNumber || 
        `${_fieldKeyTitleCase} must include a digit.`;
    } else if (!checkIfContains(_val, CONTAINS.letter)) {
      errorsObj[fieldKey] = options?.messages?.password?.needsLetter || 
        `${_fieldKeyTitleCase} must include a letter.`;
    } else if (!checkIfContains(_val, CONTAINS.specialSymbol)) {
      errorsObj[fieldKey] = options?.messages?.password?.needsSpecialChar || 
        `${_fieldKeyTitleCase} must include a special character.`;
    }
  } else if (validationRule === zValidationRuleE.url && !validateURL(_val)) {
    errorsObj[fieldKey] = options?.messages?.url || formValidations.urlIncorrectFormate;
  } else if (
    validationRule === zValidationRuleE.phoneNumber &&
    !validatePhoneNumber(_val)
  ) {
    errorsObj[fieldKey] = options?.messages?.phoneNumber || formValidations.phoneNumberRequired;
  } else if (validationRule === zValidationRuleE.otp) {
    if (_val?.length !== minChar) {
      errorsObj[fieldKey] = options?.messages?.otp || 
        `${_fieldKeyTitleCase} needs to be exactly ${minChar} digits`;
    }
  }
};

/**
 * Validates multiple fields based on the specified validation rules and updates the errors object accordingly.
 *
 * @param fieldKeys - An array of field keys to be validated.
 * @param values - The object containing field values.
 * @param errorsObj - The object containing errors for each field.
 * @param validationRules - An array of validation rules corresponding to the field keys.
 * @param options - Optional configuration for validation (applied to all fields)
 * for single filed validation use validateField function
 */
export const validateFields = (
  fieldKeys: string[],
  values: Record<string, unknown>,
  errorsObj: Record<string, unknown>,
  validationRules: zValidationRuleE[],
  options?: ValidateFieldOptions
): void => {
  if (fieldKeys.length !== validationRules.length) {
    alert({
      title: 'Invalid Request!',
      message: 'Fields and Validation Rules array length not matching.',
    });
    return;
  }
  for (let i = 0; i < fieldKeys.length; i++) {
    const _field = fieldKeys[i];
    const _rule = validationRules[i];
    validateField(_field, values, errorsObj, _rule, options);
  }
};
