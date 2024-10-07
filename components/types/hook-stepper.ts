import { STEPPER_FORM_KEYS } from '../../utils/hook-stepper-constants';

export type StepperFormKeysType =
  (typeof STEPPER_FORM_KEYS)[keyof typeof STEPPER_FORM_KEYS][number];

export type StepperFormValues = {
  [FieldName in StepperFormKeysType]: FieldName extends
    | 'CompanyInfo'
    | 'FileUpload'
    | 'Chatbot'
    | 'Success'
    ? number
    : string;
};
