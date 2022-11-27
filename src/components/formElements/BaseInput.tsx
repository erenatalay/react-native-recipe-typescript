import React, { FC, HTMLProps } from 'react';
import {View,Text, TextInput,TextStyle} from "react-native";
export interface BaseInputProps extends HTMLProps<HTMLInputElement> {
  label?: string;
  type : "numeric" | "default" | "email-address" | 'number-pad',
  secureTextEntry? : boolean
  onChangeText : (text : string) => void,
  value : string,
  inputStyle?:TextStyle;
  labelStyle? : TextStyle

}
const BaseInput: FC<BaseInputProps> = (props) => {
  const { label, type, placeholder, onChangeText,value,inputStyle,secureTextEntry = false } = props;
  return (
    <View>
      {label && (
          <Text style={inputStyle}>{label}</Text>
      )}
      <TextInput style={inputStyle} secureTextEntry={secureTextEntry} keyboardType={type} value={value} placeholder={placeholder} onChangeText={onChangeText} />
    </View>
  );
};

export default BaseInput;