import React from "react"

import {
    View, TouchableOpacity, Text, Image
} from "react-native"
import { COLORS, FONTS, SIZES } from "../constants"
import { Category } from "../types/category"

const CategoryCard = ({ containerStyle, categoryItem, onPress }: Category) => {
    return (
        <TouchableOpacity
            onPress={() => onPress()}
            style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                padding: 10,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.gray2,
                ...containerStyle

            }}>
            <Image resizeMode="cover"
                source={categoryItem.image}
                style={{ width: 100, height: 100, borderRadius: SIZES.radius }}
            />
            <View style={{ width: "65%", paddingHorizontal: 20 }}>
                <Text style={{
                    ...FONTS.h2,
                    flex: 1,
                }}>
                    {categoryItem.name}
                </Text>

                <Text style={{
                    color: COLORS.gray,
                    ...FONTS.body4,
                }}>
                    {categoryItem.duration} | {categoryItem.serving} Serving
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default CategoryCard;