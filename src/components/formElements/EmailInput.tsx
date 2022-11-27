import React, { FC } from 'react';
import Input, { InputProps } from './Input';

export interface EmailInputProps extends Omit<InputProps, 'type'> {
  type?: string;

}

const EmailInput: FC<EmailInputProps> = (props) => <Input {...props} type={'email-address'} />;

export default EmailInput;