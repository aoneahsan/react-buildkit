import { LoginFormFieldsEnum, RegisterFormFieldsEnum } from '@enums/formData';

export interface ILoginFormData {
	[LoginFormFieldsEnum.email]: string;
	[LoginFormFieldsEnum.password]: string;
}

export interface IRegisterFormData extends ILoginFormData {
	[RegisterFormFieldsEnum.name]: string;
	[RegisterFormFieldsEnum.passwordConfirmation]: string;
}

export interface ISelectOption {
	label: string;
	value: string;
}
