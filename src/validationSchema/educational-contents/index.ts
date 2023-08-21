import * as yup from 'yup';

export const educationalContentValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  agency_id: yup.string().nullable().required(),
});
