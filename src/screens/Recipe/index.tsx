import { BlurView } from '@react-native-community/blur';
import React, { useRef } from 'react'
import { View, Text, Image, TouchableOpacity, Platform } from "react-native"
import Animated from 'react-native-reanimated';
import Viewers from '../../components/Viewers';
import { icons, images, SIZES, COLORS, FONTS, constants, dummyData } from '../../constants'
import { Ingredient, RecipeObjectType } from '../../types/recipes';

const HEADER_HIGH = 350;
const recipeObject: Ingredient = {
    description: "",
    icon: 0,
    id: 0,
    quantity: "empty",
};

const RecipeCreatorCardDetail = ({ selectedRecipe }: any) => {
    return (
        <View style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center"
        }}>
            <View style={{
                width: 40,
                height: 40,
                marginLeft: 20
            }}>
                <Image source={selectedRecipe?.author?.profilePic}
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20
                    }}
                />
            </View>

            <View style={{
                flex: 1,
                marginHorizontal: 20,
            }}>
                <Text style={{ ...FONTS.body4, color: COLORS.lightGray2 }}>Recipe By:</Text>
                <Text style={{ ...FONTS.h3, color: COLORS.white2, }}>{selectedRecipe?.author?.name}</Text>
            </View>

            <TouchableOpacity style={{
                width: 30,
                height: 30,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 20,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: COLORS.lightGreen1
            }} onPress={() => null}>
                <Image source={icons.rightArrow}
                    style={{
                        width: 15,
                        height: 15,
                        tintColor: COLORS.lightGreen1
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

const RecipeCreatorCardInfo = ({ selectedRecipe }: any) => {
    if (Platform.OS === "ios") {
        return (
            <BlurView style={{
                flex: 1,
                borderRadius: SIZES.radius,
            }}
                blurType="dark"
            >
                <RecipeCreatorCardDetail
                    selectedRecipe={selectedRecipe}
                />
            </BlurView>
        )
    } else {
        return (
            <View style={{
                flex: 1,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.transparentBlack9,
            }}>
                <RecipeCreatorCardDetail
                    selectedRecipe={selectedRecipe}
                />
            </View>
        )
    }

}

const Recipe = ({ navigation, route }: any) => {

    const [selectedRecipe, setSelectedRecipe] = React.useState<any>({});
    const scrollY = useRef(new Animated.Value(0)).current

    React.useEffect(() => {
        let { recipe } = route.params;
        setSelectedRecipe(recipe)
    }, [])



    const renderHeaderBar = () => {
        return (
            <View style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 90,
                flexDirection: "row",
                alignItems: "flex-end",
                justifyContent: "space-between",
                paddingHorizontal: SIZES.padding,
                paddingBottom: 10
            }}>

                <Animated.View style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: COLORS.black,
                    opacity: scrollY.interpolate({
                        inputRange: [HEADER_HIGH - 100, HEADER_HIGH - 70],
                        outputRange: [0, 1]
                    })
                }} />

                <Animated.View style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    alignItems: "center",
                    justifyContent: "flex-end",
                    paddingBottom: 10,
                    opacity: scrollY.interpolate({
                        inputRange: [HEADER_HIGH - 100, HEADER_HIGH - 50],
                        outputRange: [0, 1]
                    }),
                    transform: [
                        {
                            translateY: scrollY.interpolate({
                                inputRange: [HEADER_HIGH - 100, HEADER_HIGH - 50],
                                outputRange: [50, 0],
                                extrapolate: "clamp" && undefined
                            })
                        }
                    ]
                }}>
                    <Text style={{ ...FONTS.body4, color: COLORS.lightGray }}>Recipe by:</Text>
                    <Text style={{ ...FONTS.h3, color: COLORS.white2 }}>{selectedRecipe?.author?.name}</Text>
                </Animated.View>

                <TouchableOpacity style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: 35,
                    width: 35,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: COLORS.lightGray,
                    backgroundColor: COLORS.transparentBlack5
                }}
                    onPress={() => navigation.goBack()}
                >
                    <Image source={icons.back}
                        style={{
                            width: 15,
                            height: 15,
                            tintColor: COLORS.lightGray
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: 35,
                    width: 35
                }}>
                    <Image source={selectedRecipe?.isBookmark ? icons.bookmarkFilled : icons.bookmark}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: COLORS.primary
                        }}
                    />
                </TouchableOpacity>


            </View>
        )
    }
    const renderRecipeCardHeader = () => {
        return (
            <View style={{
                alignItems: "center",
                overflow: "hidden",
                marginTop: -1000,
                paddingTop: 1000,
            }}>
                <Animated.Image
                    source={selectedRecipe?.image}
                    resizeMode="contain"
                    style={{
                        height: HEADER_HIGH,
                        width: "200%",

                        transform: [
                            {
                                translateY: scrollY.interpolate({
                                    inputRange: [-HEADER_HIGH, 0, HEADER_HIGH],
                                    outputRange: [-HEADER_HIGH / 2, 0, HEADER_HIGH * 0.75]
                                })
                            },
                            {
                                scale: scrollY.interpolate({
                                    inputRange: [-HEADER_HIGH, 0, HEADER_HIGH],
                                    outputRange: [2, 1, 0.75]
                                })
                            }
                        ],

                    }}
                />

                <Animated.View style={{
                    position: "absolute",
                    bottom: 10,
                    left: 30,
                    right: 30,
                    height: 80,
                    transform: [
                        {
                            translateY: scrollY.interpolate({
                                inputRange: [0, 170, 250],
                                outputRange: [0, 0, 100],
                                extrapolate: undefined && "clamp"
                            })
                        }
                    ]
                }}>
                    <RecipeCreatorCardInfo
                        selectedRecipe={selectedRecipe}
                    />
                </Animated.View>
            </View>
        )
    }

    const renderRecipeInfo = () => {
        return (
            <View style={{
                flexDirection: "row",
                height: 130,
                width: SIZES.width,
                paddingHorizontal: 30,
                paddingVertical: 20,
                alignItems: "center"
            }}>
                <View style={{
                    flex: 1.5,
                    justifyContent: "center"
                }}>
                    <Text style={{ ...FONTS.h2, color: COLORS.black,fontWeight : "bold" }}>{selectedRecipe?.name}</Text>
                    <Text style={{ ...FONTS.body4,marginTop : 5,color : COLORS.lightGray2 }}>
                        {selectedRecipe?.duration} | {selectedRecipe?.serving} Serving
                    </Text>
                </View>

                <View style={{flex : 1, justifyContent : "center"}}>
                    <Viewers
                    viewsList={selectedRecipe?.viewers}
                    />
                </View>
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
                        {renderRecipeInfo()}
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
                ListFooterComponent={
                    <View
                        style={{marginBottom : 100}}
                    />
                }
            />

            {renderHeaderBar()}
        </View>
    )
}

export default Recipe