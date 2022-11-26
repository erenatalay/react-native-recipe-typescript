import React, { FC } from 'react';
import Input, { InputProps } from './Input';

export interface TextInputProps extends Omit<InputProps, 'type'> {
  type?: string;
}

const TextInput: FC<TextInputProps> = (props) => <Input {...props} type={'default'} />;

export default TextInput;