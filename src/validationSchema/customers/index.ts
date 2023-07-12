import * as yup from 'yup';

export const customerValidationSchema = yup.object().shape({
  first_name: yup.string(),
  last_name: yup.string(),
  email: yup.string().required(),
  organization_id: yup.string().nullable(),
});
