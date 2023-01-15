import React, { useState } from 'react'
import { Text, View, StatusBar, ImageBackground, Image, SafeAreaView, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import CustomButton from '../../components/CustomButton'
import { icons, images, SIZES, COLORS, FONTS, constants } from '../../constants'
import { StackNavigationProp } from '@react-navigation/stack'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useFormik } from 'formik';
import FormInput from '../../components/formElements/Input'
import { RegisterRequest } from '../../types/request/register'
import { registerValidation } from '../../validations/register'
interface RegisterProps {
    navigation: StackNavigationProp<any>
}

const Register: React.FC<RegisterProps> = (props) => {
    const { navigation } = props;
    const [focus, setFocus] = useState<string>("")
    const { handleBlur, handleSubmit, values, touched, errors, setFieldValue, handleChange } = useFormik({
        initialValues:  {
            username: '',        
            email : '',
            password : '',
            password_confirm : ''
        } as RegisterRequest,
        validationSchema: registerValidation,
        onSubmit: (values: RegisterRequest) => {
            console.log(values)
        }
    })
    const _changeText = (field: string, text: string) => {
        setFieldValue(field, text)
        handleChange(field)
    }
    const _blurText = (field: string) => {
        handleBlur(field)
    }
    const renderHeader = () => {
        return (
            <View style={{
                height: SIZES.height > 700 ? "30%" : "30%"
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
                {/* <Text style={{
                  ...FONTS.h1,
                  marginTop: SIZES.radius,
                  width: "70%",
                  color: COLORS.black,
              }}>
                  Welcome
              </Text> */}

                <KeyboardAvoidingView >
                    <FormInput
                        name={'username'}
                        label={'Username'}
                        value={values.username}
                        onBlur={_blurText}
                        keyboardType={'default'}
                        onChangeText={_changeText}
                        error={errors.username}
                        touched={touched.username}
                    />
                    <FormInput
                        name={'email'}
                        label={'Email'}
                        value={values.email}
                        onBlur={_blurText}
                        keyboardType={'email-address'}
                        onChangeText={_changeText}
                        error={errors.email}
                        touched={touched.email}
                    />
                    <FormInput
                        name={'password'}
                        label={'Password'}
                        value={values.password}
                        onBlur={_blurText}
                        keyboardType={'default'}
                        onChangeText={_changeText}
                        secureTextEntry={true}
                        error={errors.password}
                        touched={touched.password}
                    />

                    <FormInput
                        name={'password_confirm'}
                        label={'Password Confirm'}
                        value={values.password_confirm}
                        onBlur={_blurText}
                        keyboardType={'default'}
                        onChangeText={_changeText}
                        secureTextEntry={true}
                        error={errors.password_confirm}
                        touched={touched.password_confirm}
                    />
                </KeyboardAvoidingView>
                <View style={{ justifyContent: "center" }}>
                    <CustomButton
                        buttonText='Login'
                        buttonContainerStyle={{
                            paddingVertical: 10,
                            borderRadius: 20
                        }}
                        colors={[COLORS.primary, COLORS.primary]}
                        onPress={() => handleSubmit()}
                    />

                    <Text style={{ textAlign: "center", color: "black", marginTop: 5 }}>Or Register With</Text>
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

export default Register