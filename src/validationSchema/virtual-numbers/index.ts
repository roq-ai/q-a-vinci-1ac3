import * as yup from 'yup';

export const virtualNumberValidationSchema = yup.object().shape({
  number: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
