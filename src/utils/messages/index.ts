import backendApi from './backendApi'
import generic from './generic'
import formValidations from './formValidations'
import user from './user'

export const zrtkMessages = {
    formValidations,
    generic,
    backendApi,
    user
} as const
