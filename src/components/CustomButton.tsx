import React from 'react'
import { Text, View, StatusBar, ImageBackground, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { icons, images, SIZES, COLORS, FONTS, constants } from '../constants'
import { ButtonType } from '../types/button'

const CustomButton = ({ buttonText, buttonContainerStyle, colors, onPress }: ButtonType) => {

    if (colors.length > 0) {
        return (
            <TouchableOpacity onPress={() => onPress()}>
                <LinearGradient 
                start={{ x: 0, y: 0 }}
                 end={{ x: 1, y: 0 }} 
                 colors={colors}
                 style={{
                    ...buttonContainerStyle
                 }}
                 >
                    <Text style={{
                        ...FONTS.h3,
                        textAlign: "center",
                        color: COLORS.white,

                    }}>
                        {buttonText}
                    </Text>
                </LinearGradient>
            </TouchableOpacity>

        )
    } else {
        return (
            <TouchableOpacity style={{
                ...buttonContainerStyle
            }} onPress={() => onPress()}>

                <Text style={{
                    ...FONTS.h3,
                    textAlign: "center",
                    color: COLORS.white,

                }}>
                    {buttonText}
                </Text>
            </TouchableOpacity>
        )
    }
}

export default CustomButton;