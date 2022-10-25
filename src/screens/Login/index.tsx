import React from 'react'
import { Text, View, StatusBar, ImageBackground, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import CustomButton from '../../components/CustomButton'
import { icons, images, SIZES, COLORS, FONTS, constants } from '../../constants'
import { useForm, Controller } from 'react-hook-form';
import Input from '../../components/Input'

const resolver: Resolver<any> = async (values) => ({
    values: values.email && values.password ? values : {},
    errors:
        !values.email && !values.password
            ? {
                email: {
                    type: 'required',
                    message: 'This is required.'
                },
                password: {
                    type: 'required',
                    message: 'This is required'
                }
            }
            : {}
});

const Login = ({ navigation }: any) => {

     

    const renderHeader = () => {
        return (
            <View style={{
                height: SIZES.height > 700 ? "40%" : "30%"
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
                            height: 150,
                            justifyContent: "center",
                            alignItems: "center",
                            paddingHorizontal: SIZES.padding,
                        }}
                    >
                        <Text style={{
                            ...FONTS.largeTitle,
                            color: COLORS.white,
                            lineHeight: 45,
                            textAlign: "center",
                            height: "100%",
                            fontWeight: "bold"

                        }}>Sign Up</Text>
                    </LinearGradient>
                </ImageBackground>


            </View>
        )
    }

    const renderDetail = () => {
        return (
            <View style={{
                flex: 1,
                paddingHorizontal: 20,
                backgroundColor: "white",
                borderTopEndRadius: 30,
                borderTopLeftRadius: 30,
                paddingTop: 20
            }}>
                <Text style={{
                    ...FONTS.h1,
                    marginTop: SIZES.radius,
                    width: "70%",
                    color: COLORS.black,
                }}>
                    Welcome
                </Text>
                <Text style={{
                    ...FONTS.body3,
                    color: COLORS.gray,
                }}>
                    Please enter account information
                </Text>
                <View style={{ flex: 1 }}>
                    <Input
                        styleContainer={{ marginTop: 10 }}
                        name={'email'}
                        type={'default'}
                        label={"Email"}
                    />

                    <Input
                        styleContainer={{ marginTop: 5 }}
                        name={'password'}
                        type={'password'}
                        label={"Password"}
                    />
                </View>
                <View style={{ flex :1, justifyContent: "center" }}>
                    <CustomButton
                        buttonText='Login'
                        buttonContainerStyle={{
                            paddingVertical: 15,
                            borderRadius: 20
                        }}
                        colors={[COLORS.primary, COLORS.primary]}
                        onPress={() => navigation.navigate("Home")}
                    />

                        <Text style={{textAlign : "center",color : "black",marginTop : 5}}>Or Login With</Text>
                        <View style={{flexDirection : "row",alignItems : "center",justifyContent : "center",marginTop : 10}}>
                            <View style={{backgroundColor : "#1354AB",padding : 10,borderRadius : 20,marginRight : 10}}>
                            <Image source={icons.facebook} style={{tintColor : "white",width : 20,height :20}}/>

                            </View>
                            <View style={{backgroundColor : "#0AAAFD",padding : 10,borderRadius : 20,marginRight : 10}}>
                            <Image source={icons.twitter} style={{tintColor : "white",width : 20,height :20}}/>

                            </View>
                            <View style={{backgroundColor : "#F55B5B",padding : 10,borderRadius : 20}}>
                            <Image source={icons.google} style={{tintColor : "white",width : 20,height :20}}/>

                            </View>
                        </View>
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

export default Login;