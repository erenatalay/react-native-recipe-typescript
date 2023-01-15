import React from 'react'
import { Text, View, StatusBar, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import CustomButton from '../../components/CustomButton'
import { icons, images, SIZES, COLORS, FONTS, constants } from '../../constants'

const Welcome = ({ navigation }: any) => {
    const renderHeader = () => {
        return (
            <View style={{
                height: SIZES.height > 700 ? "65%" : "60%"
            }}>
                <ImageBackground source={images.loginBackground}
                    style={{ flex: 1, justifyContent: "flex-end" }}
                    resizeMode="cover"
                >


                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={[
                            COLORS.transparent,
                            COLORS.black
                        ]}
                        style={{
                            height: 200,
                            justifyContent: "flex-end",
                            paddingHorizontal: SIZES.padding
                        }}
                    >
                        <Text style={{
                            ...FONTS.largeTitle,
                            width: "80%",
                            color: COLORS.white,
                            lineHeight: 45

                        }}>Cooking a Delicious Food Easily</Text>
                    </LinearGradient>
                </ImageBackground>


            </View>
        )
    }

    const renderDetail = () => {
        return (
            <View style={{
                flex: 1,
                paddingHorizontal: SIZES.padding,
            }}>
                <Text style={{
                    ...FONTS.body3,
                    marginTop: SIZES.radius,
                    width: "70%",
                    color: COLORS.gray,
                }}>Discover more than 1200 food recipes in your hands and cooking it easily!</Text>


                <View style={{ flex: 1, justifyContent: "center" }}>
                    <CustomButton
                        buttonText='Login'
                        buttonContainerStyle={{
                            paddingVertical: 15,
                            borderRadius: 20
                        }}
                        colors={[COLORS.primary, COLORS.lightGreen]}
                        onPress={() => navigation.replace("Login")}
                    />

                    <CustomButton
                        buttonContainerStyle={{
                            paddingVertical: 15,
                            borderRadius: 20,
                            borderColor : COLORS.darkLime,
                            borderWidth :3,
                            marginTop : 10
                        }}
                        buttonText='Sign Up'
                        colors={[]}
                        onPress={() => navigation.replace("Home")}
                    />
                </View>

            </View>
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.black }}>
            <StatusBar barStyle="light-content" />

            {renderHeader()}

            {renderDetail()}
        </View>
    )
}

export default Welcome;