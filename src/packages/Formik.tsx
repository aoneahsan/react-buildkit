import { Formik, Form, FieldArray, useFormikContext } from 'formik';
import type { FormikErrors, FormikState, FormikHelpers } from 'formik';

export {
	Formik as ZFormik,
	Form as ZFormikForm,
	// eslint-disable-next-line react-refresh/only-export-components
	useFormikContext as useZFormikContext,
	FieldArray as ZFieldArray,
};

// Types
export type ZFormikHelpers<Value> = FormikHelpers<Value>;

export type zSetFieldErrorType = (
	field: string,
	message: string | undefined
) => void;

export type zSetFieldValueType = (
	field: string,
	value: unknown,
	shouldValidate?: boolean | undefined
	// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
) => Promise<void | FormikErrors<unknown>>;

export type zResetFormType<T> = (
	nextState?: Partial<FormikState<T>> | undefined
) => void;
