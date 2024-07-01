import { UserAccountDataFormFieldsEnum } from '@enums/formData';
import { z as ZOD } from 'zod';

export const userAccountFormValidationSchema = ZOD.object({
	[UserAccountDataFormFieldsEnum.name]: ZOD.string()
		.trim()
		.min(1, { message: 'Name is Required.' })
		.max(255),
});
