import type { FormikErrors, FormikHelpers, FormikState } from 'formik';
import type { Accept } from 'react-dropzone';

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

export { Accept as ZDropzoneAccept };

export interface ZReactStarsProps {
  className?: string;
  edit?: boolean;
  value?: number;
  count?: number;
  size?: number;
  color1?: string;
  color2?: string;
  hoverColor?: string;
  onChange?: (value: number) => void;
  disabled?: boolean; // Added disabled prop
}

export interface IStar {
  active: boolean;
  hover: boolean;
}
