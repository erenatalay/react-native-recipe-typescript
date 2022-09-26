import React, { ReactNode } from "react"
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from "react-native"

import {
    createDrawerNavigator,
    DrawerContentComponentProps,
    DrawerContentScrollView,
    useDrawerProgress

} from "@react-navigation/drawer"

import {
    COLORS,
    FONTS,
    SIZES,
    icons,
    dummyData as data,
    constants,
    images
}
    from "../constants"
// import MainLayout from "../screen/MainLayout";
import Animated, { Adaptable } from "react-native-reanimated";
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from "../store/reducers";
import { logout } from "../store/actions/users";
import MainLayout from "../screens/MainLayout";
import { setSelectedTab } from "../store/actions/tab";
// import { setSelectedTab } from "../../store/actions/tab"

const Drawer = createDrawerNavigator();


const CustomDrawerItem = ({ label, icon, isFocused, onPress }: any) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: "row",
                height: 40,
                marginBottom: SIZES.base,
                alignItems: "center",
                paddingLeft: SIZES.radius,
                borderRadius: SIZES.base,
                backgroundColor: isFocused ? COLORS.transparentBlack1 : ""
            }}
            onPress={onPress}
        >
            <Image source={icon} style={{
                width: 20,
                height: 20,
                tintColor: COLORS.white

            }} />
            <Text style={{
                ...FONTS.h3,
                marginLeft: 15,
                color: COLORS.white
            }}>{label}</Text>

        </TouchableOpacity>
    )
}
const CustomDrawerContent = ({ navigation }: any) => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout() as any);

    }

    const { selectedTab } = useSelector((state: AppState) => state.tab)

    return (
        <DrawerContentScrollView
            scrollEnabled={true}
            contentContainerStyle={{ flex: 1, paddingHorizontal: SIZES.radius }}
        >
            <View style={{
                alignItems: "flex-start",
                justifyContent: "center"
            }}>
                <TouchableOpacity style={{
                    alignItems: "center",
                    justifyContent: "center"
                }}
                    onPress={() => navigation.closeDrawer()}
                >
                    <Image
                        source={icons.cross}
                        style={{
                            height: 35,
                            width: 35,
                            tintColor: COLORS.white
                        }}
                    />

                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        flexDirection: "row",
                        marginTop: 10,
                        alignItems: "center"
                    }}
                    onPress={() => console.log("Profile")}
                >
                    <Image
                        source={images?.my_profile}
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: SIZES.radius
                        }}
                    />
                    <View style={{
                        marginLeft: SIZES.radius
                    }}>
                        <Text style={{
                            ...FONTS.h3, color: COLORS.white,
                        }}>{data.myProfile?.name}</Text>
                        <Text style={{
                            color: COLORS.white
                        }}>View Your Profile</Text>
                    </View>
                </TouchableOpacity>
            </View>


            <View style={{
                flex: 1,
                marginTop: SIZES.radius
            }}>

                <CustomDrawerItem
                    label={constants.screens.home}
                    icon={icons.home}
                    isFocused={selectedTab == constants.screens.home}
                    onPress={() => {
                        dispatch(setSelectedTab(constants.screens.home) as any)
                        navigation.navigate("MainLayout")
                    }}
                />



            </View>

            <View style={{
                marginBottom: SIZES.padding,

            }}>
                <CustomDrawerItem label={"Logout"} icon={icons.logout}
                    onPress={() => handleLogout()}
                />
            </View>

        </DrawerContentScrollView>
    )
}



const CustomDrawer = () => {
    const [progress, setProgress] = React.useState(new Animated.Value(0))
    const scale = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.8]
    })
    const borderRadius = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [0, 26]
    })

    const animatedStyle = { borderRadius, transform: [{ scale }] }
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.primary
            }}
        >
            <Drawer.Navigator
                screenOptions={{
                    overlayColor: "transparent",
                    drawerType: "slide",
                    drawerStyle: { flex: 1, width: "65%", paddingRight: 20, backgroundColor: "darkgreen" },
                    headerShown: false,
                    sceneContainerStyle: { backgroundColor: COLORS.transparentBlack5 },

                }}
                drawerContent={(props: any) => {
                    setTimeout(() => {
                        setProgress(props.progress)

                    }, 0)
                    return (
                        <CustomDrawerContent  {...props} />
                    )
                }}
            >
                <Drawer.Screen name="MainLayout">
                    {(props: any) => <MainLayout {...props} drawerAnimationStyle={animatedStyle} />}
                </Drawer.Screen>
            </Drawer.Navigator>
        </View >
    )
}

export default CustomDrawer