import { CONTAINS, zValidationRuleE } from '@enums/generic';
import { defaultValues } from '@utils/constants/generic';
import formValidations from '@utils/messages/formValidations';
import {
  convertToTitleCase,
  validateEmail,
  validatePhoneNumber,
  validateURL,
} from 'zaions-tool-kit';

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
  contains: CONTAINS = CONTAINS.number
): boolean => {
  switch (contains) {
    case CONTAINS.number:
      return /\d/.test(val);
    case CONTAINS.letter:
      return /[a-zA-Z]+/.test(val);
    case CONTAINS.specialSymbol:
      return /[\W_]+/.test(val);
    case CONTAINS.minCharacter:
      return val.length >= defaultValues.minCharacter;

    default:
      return /\d/.test(val);
  }
};

/**
 * Validates a specific field based on the specified validation rule and updates the errors object accordingly.
 *
 * @param fieldKey - The key of the field to be validated.
 * @param values - The object containing field values.
 * @param errorsObj - The object containing errors for each field.
 * @param validationRule - The validation rule to be applied.
 */
export const validateField = (
  fieldKey: string,
  values: Record<string, unknown>,
  errorsObj: Record<string, unknown>,
  validationRule: zValidationRuleE = zValidationRuleE.string
): void => {
  const _fieldKeyTitleCase = convertToTitleCase(fieldKey);
  const _val = String(values[fieldKey])?.trim();
  /**
   * Checking in the field key is empty then give `fieldKey is required` error message (generally for every field)
   */
  if (
    !Object.prototype.hasOwnProperty.call(values, fieldKey) ||
    _val.length === 0
  ) {
    errorsObj[fieldKey] = `${_fieldKeyTitleCase} is required`;
  } else if (
    validationRule === zValidationRuleE.email &&
    !validateEmail(_val)
  ) {
    errorsObj[fieldKey] = `${_fieldKeyTitleCase} needs to be a valid email.`;
  } else if (validationRule === zValidationRuleE.password) {
    if (!checkIfContains(_val, CONTAINS.minCharacter)) {
      errorsObj[
        fieldKey
      ] = `${_fieldKeyTitleCase} needs to be at least ${defaultValues.minCharacter} digits long.`;
    } else if (!checkIfContains(_val, CONTAINS.number)) {
      errorsObj[fieldKey] = `${_fieldKeyTitleCase} must include a digit.`;
    } else if (!checkIfContains(_val, CONTAINS.letter)) {
      errorsObj[fieldKey] = `${_fieldKeyTitleCase} must include a letter.`;
    } else if (!checkIfContains(_val, CONTAINS.specialSymbol)) {
      errorsObj[
        fieldKey
      ] = `${_fieldKeyTitleCase} must include a special character.`;
    }
  } else if (validationRule === zValidationRuleE.url && !validateURL(_val)) {
    errorsObj[fieldKey] = formValidations.urlIncorrectFormate;
  } else if (
    validationRule === zValidationRuleE.phoneNumber &&
    !validatePhoneNumber(_val)
  ) {
    errorsObj[fieldKey] = formValidations.phoneNumberRequired;
  } else if (validationRule === zValidationRuleE.otp) {
    if (
      !checkIfContains(_val, CONTAINS.minCharacter) ||
      _val?.length > defaultValues.minCharacter
    ) {
      errorsObj[
        fieldKey
      ] = `${_fieldKeyTitleCase} needs to be ${defaultValues.minCharacter} digits`;
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
 * for single filed validation use validateField function
 */
export const validateFields = (
  fieldKeys: string[],
  values: Record<string, unknown>,
  errorsObj: Record<string, unknown>,
  validationRules: zValidationRuleE[]
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
    validateField(_field, values, errorsObj, _rule);
  }
};
