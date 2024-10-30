import backendApi from './backendApi';
import formValidations from './formValidations';
import generic from './generic';
import user from './user';

export const zrtkMessages = {
  formValidations: formValidations as typeof formValidations,
  generic: generic as typeof generic,
  backendApi: backendApi as typeof backendApi,
  user: user as typeof user,
} as const;
