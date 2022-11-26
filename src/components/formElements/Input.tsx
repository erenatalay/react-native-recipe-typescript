import React, { FC, FormEvent } from 'react';
import {TextStyle} from "react-native";
import {
  Controller,
  FieldValues,
  UseFormReturn,
  Validate,
  ValidationRule,
  ValidationValueMessage
} from 'react-hook-form';
import { TextInput } from 'react-native-gesture-handler';
import BaseInput from './BaseInput';

export type FormRules = {
  required?: string | boolean | ValidationValueMessage<boolean>;
  min?: ValidationRule<string | number>;
  max?: ValidationRule<string | number>;
  maxLength?: number;
  minLength?: number;
  pattern?: RegExp | ValidationValueMessage<RegExp> | undefined;
  validate?: Validate<unknown> | Record<string, Validate<unknown>> | undefined;
};

export interface ErrorMessagesRules {
  required?: string;
  min?: string;
  max?: string;
  maxLength?: string;
  minLength?: string;
  pattern?: string;
  validate?: string;
}

export interface InputProps {
  form: UseFormReturn<FieldValues>;
  label?: string;
  name: `${string}`;
  defaultValue?: string;
  type : "numeric" | "default" | "email-address",
  placeholder?: string;
  onChangeText?: (input: string) => void;
  errorMessage?: ErrorMessagesRules;
  rules?: FormRules;
  required?: boolean;
  labelStyle?: TextStyle;
  inputStyle?:TextStyle;

  min?: number;
  max?: number;
}

const Input: FC<InputProps> = (props) => {
  const { form, onChangeText, inputStyle, labelStyle, placeholder,type} = props;

  const handleOnChange = (text : string,onChange: (input: string) => void) => {
    if (onChangeText) {
      onChangeText(text);
    }
    onChange(text);
  };

  return (
    <Controller
      control={form.control}
      {...props}
      render={({ field: { onChange, onBlur, value } }) => (
        <BaseInput
          value={value}
          labelStyle={labelStyle}
          inputStyle={inputStyle}
          placeholder={placeholder}
          onBlur={onBlur}
          type={type}
          onChangeText={(text: string) => handleOnChange(text,onChange)}
        />
      )}
    />
  );
};

export default Input;