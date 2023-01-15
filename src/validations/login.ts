import * as Yup from 'yup';

export const loginValidation = Yup.object({
  username: Yup.string()
    .max(20, 'Must be 15 characters or less')
    .min(4, 'Must be 4 characters or less')
    .required('Required'),
  password: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .min(4, 'Must be 4 characters or less')
    .required('Required')
});
