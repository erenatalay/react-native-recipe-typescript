import React from 'react'
import { View, Text, Image } from "react-native"
import { icons, images, SIZES, COLORS, FONTS, constants, dummyData } from '../constants'

const Viewers = ({ viewsList }: any) => {
    if (viewsList?.length === 0) {
        return (
            <View style={{
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Text style={{
                    ...FONTS.body4,
                    color: COLORS.lightGray2,

                }}>
                    Be the first one to try this
                </Text>
            </View>
        )
    } else if (viewsList?.length <= 4) {
        return (
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
                marginBottom: 10,
            }}>
                {viewsList?.map((item: any, index: number) => (
                    <View key={index}
                        style={{
                            height: 50,
                            width: 50,
                            marginLeft: index == 0 ? 0 : -20
                        }}
                    >
                        <Image
                            source={item.profilePic}
                            style={{ width: 50, height: 50, borderRadius: 25 }}
                        />
                    </View>
                ))}
                
            </View>
        )
    } else {
        return (
            <View>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    marginBottom: 10
                }}>
                    {viewsList?.map((item: any, index: number) => {
                        if (index <= 2) {
                            return (
                                <View key={index} style={{
                                    width: 50,
                                    height: 50,
                                    marginLeft: index === 0 ? 0 : -20
                                }}>
                                    <Image source={item.profilePic}
                                        style={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: 25
                                        }}
                                    />
                                </View>
                            )
                        }
                        if (index == 3) {
                            return (
                                <View key={index}
                                    style={{
                                        width: 50,
                                        height: 50,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginLeft: -20,
                                        borderRadius: 25,
                                        backgroundColor: COLORS.primary
                                    }}
                                >
                                    <Text
                                        style={{
                                            ...FONTS.body4,
                                            color: COLORS.white,

                                        }}
                                    >{viewsList?.length - 3}+</Text>
                                </View>
                            )
                        }
                    })
                    }
                </View>
                <Text style={{
                    ...FONTS.body4,
                    color: COLORS.lightGray2,
                    textAlign: "right",
                    lineHeight: 18
                }}>{viewsList?.length} people</Text>
                <Text style={{
                    ...FONTS.body4,
                    color: COLORS.lightGray2,
                    textAlign: "right",
                    lineHeight: 18,
                }}>Aldreay try this</Text>
            </View>
        )
    }

}

export default Viewers