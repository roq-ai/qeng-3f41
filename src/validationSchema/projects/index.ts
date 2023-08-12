import * as yup from 'yup';

export const projectValidationSchema = yup.object().shape({
  name: yup.string().required(),
  status: yup.string().required(),
  organization_id: yup.string().nullable(),
  superintending_engineer_id: yup.string().nullable(),
});
