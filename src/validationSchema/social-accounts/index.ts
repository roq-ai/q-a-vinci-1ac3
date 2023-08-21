import * as yup from 'yup';

export const socialAccountValidationSchema = yup.object().shape({
  platform: yup.string().required(),
  username: yup.string().required(),
  password: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
