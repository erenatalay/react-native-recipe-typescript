import { BlurView } from "@react-native-community/blur"
import React from "react"

import {
    View, TouchableOpacity, Text, Image, StyleSheet, Platform
} from "react-native"
import { COLORS, FONTS, SIZES, icons } from "../constants"
import {   CategoryObject, TrendingRecipeObject } from "../types/category"


const RecipeCardDetails = ({ recipeItem }: any) => {
    return (
        <View style={{
            flex: 1,
        }}>

            <View style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <Text style={{
                    ...FONTS.h3,
                    color: COLORS.white,
                    width: "70%",
                    fontSize: 14,
                }}>
                    {recipeItem.name}
                </Text>

                <Image
                    source={recipeItem.isBooks ? icons.bookmarkFilled : icons.bookmark}
                    style={{
                        width: 25,
                        height: 25,
                        marginRight: SIZES.base,
                        tintColor: COLORS.primary

                    }}
                />
            </View>

            <Text style={{ ...FONTS.body4, color: COLORS.lightGray }}>
                {recipeItem?.duration} | {recipeItem?.serving} Serving
            </Text>
        </View>
    )
}


const RecipeCardInfo = ({ recipeItem }: any) => {
    if (Platform?.OS === "ios") {
        return (
            <BlurView
                blurType="dark"
                style={styles.recipeCardContainer}
            >
                <RecipeCardDetails
                    recipeItem={recipeItem}
                />
            </BlurView>
        )
    } else {
        return (
            <View style={{
                ...styles.recipeCardContainer,
                backgroundColor: COLORS.transparentDarkGray
            }}>
                <RecipeCardDetails
                    recipeItem={recipeItem}
                />
            </View>
        )
    }

}


const VerticalCard = ({ containerStyle, recipeItem, onPress,index }: any) => {
    return (
        <TouchableOpacity
            style={{
                ...containerStyle,
                height: 350,
                width : "100%",
                marginTop:  index === 0 ? 80 :  15,
                borderRadius: SIZES.radius,
                
            }}
            onPress={() => onPress()}
        >
            <Image
                source={recipeItem.image}
                resizeMode="contain"
                style={{
                    width : "100%",
                    height: 350,
                    borderRadius: SIZES.radius
                }}
            />
            <View style={{
                position: "absolute",
                top: 20,
                left: 15,
                paddingHorizontal: SIZES.padding,
                paddingVertical: 5,
                backgroundColor: COLORS.transparentDarkGray,
                borderRadius: SIZES.radius

            }}>
                <Text style={{
                    ...FONTS.h4,
                    color: COLORS.white,

                }}>
                    {recipeItem.category}
                </Text>
            </View>

            <RecipeCardInfo recipeItem={recipeItem} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    recipeCardContainer: {
        position: "absolute",
        bottom: 10,
        left: 10,
        right: 10,
        height: 100,
        paddingVertical: SIZES.radius,
        paddingHorizontal: SIZES.base,
        borderRadius: SIZES.radius
    }
})


export default VerticalCard;

