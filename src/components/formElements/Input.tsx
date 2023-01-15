import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import { COLORS } from '../../constants'
import ErrorText from '../ErrorText'

interface IFormInput {
    name: string
    label: string
    onChangeText: (input: string, text: string) => void
    onBlur: (input: string) => void
    value: any
    keyboardType: "default" | "numeric"
    error: string | undefined
    touched: boolean | undefined
    secureTextEntry? : boolean
}

const FormInput: FC<IFormInput> = (props) => {
    const { name, label, onBlur, keyboardType, onChangeText, value, touched, error,secureTextEntry = false } = props
    return (
        <View>
            <TextInput
                label={label}
                value={value}
                onBlur={() => onBlur(name)}
                keyboardType={keyboardType}
                underlineColor={COLORS.primary}
                activeUnderlineColor={COLORS.primary}
                style={[styles.textInput, { marginBottom: 15 }]}
                secureTextEntry={secureTextEntry}
                mode={'flat'}
                onChangeText={(text: string) => onChangeText(name, text)}

            />
            <ErrorText error={error} touched={touched} />

        </View>
    )
}
const styles = StyleSheet.create({
    textInput: {
        backgroundColor: 'white',
        color: COLORS.primary,
    },
})
export default FormInput