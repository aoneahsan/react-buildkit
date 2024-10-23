import backendApi from './backendApi';
import formValidations from './formValidations';
import generic from './generic';
import user from './user';

export const zrtkMessages = {
  formValidations,
  generic,
  backendApi,
  user,
} as const;
