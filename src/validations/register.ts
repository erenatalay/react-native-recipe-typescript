import * as Yup from 'yup';

export const registerValidation = Yup.object({
  username: Yup.string()
    .max(20, 'Must be 15 characters or less')
    .min(4, 'Must be 4 characters or less')
    .required('Required'),
  email: Yup.string().email('Must be email').required('Required'),
  password: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .min(4, 'Must be 4 characters or less')
    .oneOf([Yup.ref('password_confirm'), null], 'Passwords must match')
    .required('Required'),
  password_confirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});
