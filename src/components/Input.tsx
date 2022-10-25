import React from 'react'
import { View,TextInput, Text} from 'react-native'
import { COLORS } from '../constants'

const Input = ({name,label,type,formState,styleContainer} : any) => {
  return (
    <View style={{flex : 1,...styleContainer}}>
        <Text style={{color : "gray"}}>{label}</Text>
        <TextInput style={{borderBottomWidth : 1,borderColor : COLORS.primary}} 
        name={name} 
        keyboardType={type} 
        {...formState}
        />
    </View>
  )
}

export default Input