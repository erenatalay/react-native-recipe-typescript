import React from "react"
import { View, Image, TextInput } from "react-native"
import { StyleProps } from "react-native-reanimated"
import { icons, images, SIZES, COLORS, FONTS, constants, dummyData } from '../constants'

interface ISearchBar {
    searchStyle?: StyleProps,
}

const SearchBar: React.FC<ISearchBar> = ({ searchStyle }) => {

    return (

        <View style={
            {
                ...searchStyle,
               
            }}>
            <Image source={icons.search}
                style={{ width: 20, height: 20, tintColor: COLORS.gray }}
            />

            <TextInput style={{ ...FONTS.body3, marginLeft: SIZES.radius, }}
                placeholderTextColor={COLORS.gray}
                placeholder="Search Recipes"
            />
        </View>

    )
}
export default SearchBar;