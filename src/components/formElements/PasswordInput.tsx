import React, { FC } from 'react';
import Input, { InputProps } from './Input';

export type PasswordInputProps = Omit<InputProps, 'type'>;

const PasswordInput: FC<PasswordInputProps> = (props) => <Input {...props} type={'default'} secureTextEntry={true} />;

export default PasswordInput;
