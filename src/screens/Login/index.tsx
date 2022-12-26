import React, { useState } from 'react'
import { Text, View, StatusBar, ImageBackground, Image, SafeAreaView, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import CustomButton from '../../components/CustomButton'
import { icons, images, SIZES, COLORS, FONTS, constants } from '../../constants'
import { useForm } from 'react-hook-form';
import { StackNavigationProp } from '@react-navigation/stack'
import PasswordInput from '../../components/formElements/PasswordInput'
import EmailInput from '../../components/formElements/EmailInput'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface LoginFormProps {
    navigation: StackNavigationProp<any>
}
const loginOptions = {
    email: {
        MESSAGE: {
            required: 'Bu Alan Zorunludur',
            minLength: '3 değerden küçük olamaz'
        },
        REQUIRED: {
            required: true,
            minLength: 3
        }
    },
    password: {
        MESSAGE: {
            required: 'Bu Alan Zorunludur',
        },
        REQUIRED: {
            required: true,
        }
    },
};

const Login: React.FC<LoginFormProps> = (props) => {

    const { navigation } = props;
    const [focus, setFocus] = useState<string>("")
    const form = useForm();
    const onSubmit = (data: Record<string, unknown>) => {
        console.log(data)
    };
    console.log(form.formState)
    const renderHeader = () => {
        return (
            <View style={{
                height: SIZES.height > 700 ? "40%" : "30%"
            }}>

                <ImageBackground source={images.loginBackground}
                    style={{ flex: 1, justifyContent: "flex-end" }}
                    resizeMode="cover"
                >
                    <View style={{ flex: 1, flexDirection: "column", justifyContent: "space-between" }}>

                        <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
                            <Image source={icons.back} style={{ width: 20, height: 20, tintColor: "white", margin: 20 }} />
                        </TouchableOpacity>
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
                    </View>

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
                <View >
                    <EmailInput
                        inputStyle={focus === "email" ? styles.activeInput : styles.pasiveInput}
                        form={form}
                        name="email"
                        placeholder={'Email'}
                        rules={loginOptions.email.REQUIRED}
                        errorMessage={loginOptions.email.MESSAGE}
                        onFocus={() => setFocus("email")}
                    />
                    <PasswordInput
                        form={form}
                        name="password"
                        inputStyle={focus === "password" ? styles.activeInput : styles.pasiveInput}
                        placeholder={'Password'}
                        onFocus={() => setFocus("password")}
                        rules={loginOptions.password.REQUIRED}
                        errorMessage={loginOptions.password.MESSAGE}
                    />


                </View>
                <View style={{ justifyContent: "center" }}>
                    <CustomButton
                        buttonText='Login'
                        buttonContainerStyle={{
                            paddingVertical: 10,
                            borderRadius: 20
                        }}
                        colors={[COLORS.primary, COLORS.primary]}
                        onPress={form.handleSubmit(onSubmit)}
                    />

                    <Text style={{ textAlign: "center", color: "black", marginTop: 5 }}>Or Login With</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 10 }}>
                        <View style={{ backgroundColor: "#1354AB", padding: 10, borderRadius: 20, marginRight: 10 }}>
                            <Image source={icons.facebook} style={{ tintColor: "white", width: 20, height: 20 }} />

                        </View>
                        <View style={{ backgroundColor: "#0AAAFD", padding: 10, borderRadius: 20, marginRight: 10 }}>
                            <Image source={icons.twitter} style={{ tintColor: "white", width: 20, height: 20 }} />

                        </View>
                        <View style={{ backgroundColor: "#F55B5B", padding: 10, borderRadius: 20 }}>
                            <Image source={icons.google} style={{ tintColor: "white", width: 20, height: 20 }} />

                        </View>
                    </View>
                </View>

            </View>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
            <StatusBar barStyle="light-content" />

            {renderHeader()}

            {renderDetail()}
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    activeInput: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS.primary
    },
    pasiveInput: {
        borderBottomWidth: 1,
        borderBottomColor: "gray"
    },
})
export default Login;