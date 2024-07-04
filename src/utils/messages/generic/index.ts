const formValidations = {
    // URL_INCORRECT_FORMATE
    urlIncorrectFormate:
        'Please enter a valid URL! like (https://yourlink.com) or (http://yourlink.com).',
    phoneNumberRequired: 'Phone number is require.',
    passwordNotMatch: 'Password does not match. please try again!',

    currency: 'currency is required.',
    resendCodeLimitExceeded:
        'Attempt limit exceeded, please try after some time.',
    resendCodeSuccess: 'Confirmation code resent successfully.',
    urlNotValid: 'Should be a valid URL'
} as const;

export default formValidations;
