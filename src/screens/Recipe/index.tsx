import React, { useRef } from 'react'
import { View, Text, Image, TouchableOpacity, Platform } from "react-native"
import Animated from 'react-native-reanimated';
import { icons, images, SIZES, COLORS, FONTS, constants, dummyData } from '../../constants'
import { Ingredient, RecipeObjectType } from '../../types/recipes';

const HEADER_HIGH = 350;
const recipeObject: Ingredient = {
    description: "",
    icon: 0,
    id: 0,
    quantity: "empty",
};
const Recipe = ({ navigation, route }: any) => {

    const [selectedRecipe, setSelectedRecipe] = React.useState<any>({});
    const scrollY = useRef(new Animated.Value(0)).current

    React.useEffect(() => {
        let { recipe } = route.params;
        console.log(recipe)
        setSelectedRecipe(recipe)
    }, [])

    const renderRecipeCardHeader = () => {
        return (
            <View style={{
                alignItems: "center",
                overflow : "hidden",
                marginTop : -1000,
                paddingTop : 1000,
            }}>
                <Animated.Image
                    source={selectedRecipe?.image}
                    resizeMode="contain"
                    style={{
                        height : HEADER_HIGH,
                        width : "200%",
                        
                        transform : [
                            {
                                translateY : scrollY.interpolate({
                                    inputRange : [-HEADER_HIGH,0,HEADER_HIGH],
                                    outputRange : [-HEADER_HIGH/2,0,HEADER_HIGH * 0.75]
                                })
                            },
                            {
                                scale : scrollY.interpolate({
                                    inputRange : [-HEADER_HIGH,0,HEADER_HIGH],
                                    outputRange : [2,1,0.75]
                                })
                            }
                        ],
                    
                    }}
                    />
            </View>
        )
    }
    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.white,
        }}>
            <Animated.FlatList
                data={selectedRecipe?.ingredients}
                keyExtractor={(item: Ingredient) => `${item.id}`}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {renderRecipeCardHeader()}
                    </View>
                }
                scrollEventThrottle={16}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { y: scrollY } } }
                ], { useNativeDriver: true })}
                renderItem={({ item }) => {
                    return (
                        <View style={{
                            flexDirection: "row",
                            paddingHorizontal: 30,
                            marginVertical: 5,
                        }}>
                            <View style={{
                                alignItems: "center",
                                justifyContent: "center",
                                width: 50,
                                height: 50,
                                borderRadius: 5,
                                backgroundColor: COLORS.lightGray
                            }}>

                                <Image source={item.icon}
                                    style={{ height: 50, width: 40 }}

                                />
                            </View>

                            <View style={{
                                flex: 1,
                                paddingHorizontal: 20,
                                justifyContent: "center"
                            }}>

                                <Text style={{ ...FONTS.body3, color: "black" }}>
                                    {item.description}
                                </Text>
                            </View>

                            <View style={{
                                alignItems: "flex-end",
                                justifyContent: "center"
                            }}>

                                <Text style={{ ...FONTS.body3, color: "black" }}>{item.quantity}</Text>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default Recipe