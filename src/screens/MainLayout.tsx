import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    Image,
    FlatList,
    TouchableWithoutFeedback
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated from "react-native-reanimated";
import { icons, images, SIZES, COLORS, FONTS, constants } from '../constants'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedTab } from "../store/actions/tab"
import Home from "./Home"
import { AppState } from '../store/reducers';
import Search from './Search';
import Settings from './Settings';
import Bookmark from './Bookmark';



const TabButton = ({ label, icon, isFocused, onPress, outerContainerStyle, innerContainerStyle }: any) => {
    return (
        <TouchableWithoutFeedback
            onPress={onPress}
        >

            <Animated.View
                style={[{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                },
                    outerContainerStyle,
                    innerContainerStyle
                ]}

            >
                <Animated.View
                    style={[{
                        flexDirection: "column",
                        width: "100%",
                        height: 50,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 25,

                    },
                        innerContainerStyle
                    ]}
                >
                    <Image
                        source={icon}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: isFocused ? COLORS.primary : COLORS.lightLime,

                        }}
                    />

                    {/* <Text style={{
                        color: isFocused ? COLORS.primary : COLORS.lightLime,
                        fontSize: 12
                    }}>
                        {label}
                    </Text> */}

                    {
                        isFocused && <View style={{
                            position: "absolute",
                            left :0,
                            right : 0,
                            bottom : 0,
                            height : 3,
                            borderTopLeftRadius : 5,
                            borderTopRightRadius : 5,
                            backgroundColor : COLORS.primary


                        }}>

                        </View>
                    }


                </Animated.View>
            </Animated.View>

        </TouchableWithoutFeedback>
    )
}

const MainLayout = ({ drawerAnimationStyle, navigation }: any) => {
    const dispatch = useDispatch();
    const { selectedTab } = useSelector((state: AppState) => state.tab)

    const flatListRef = React.useRef<FlatList>(null);

    React.useEffect(() => {
        dispatch(setSelectedTab(constants.screens.home) as any)

    }, [])

    React.useEffect(() => {

        if (selectedTab == constants.screens.home) {
            flatListRef?.current?.scrollToIndex({
                index: 0
            })
        }
        if (selectedTab == constants.screens.search) {
            flatListRef?.current?.scrollToIndex({
                index: 1
            })

        }


        if (selectedTab == constants.screens.bookmark) {
            flatListRef?.current?.scrollToIndex({
                index: 2
            })

        }

        if (selectedTab == constants.screens.settings) {
            flatListRef?.current?.scrollToIndex({
                index: 3
            })

        }


    }, [selectedTab])

    const renderHeader = () => {
        return (
            <View style={{ flexDirection: "row" }}>


            </View>
        )
    }
    return (
        <Animated.View
            style={{
                flex: 1,
                backgroundColor: "white",
                ...drawerAnimationStyle,

            }}
        >

            {renderHeader()}
            <View style={{
                flex: 1
            }}>
                <FlatList
                    ref={flatListRef}
                    horizontal
                    scrollEnabled={false}
                    pagingEnabled
                    snapToAlignment='center'
                    snapToInterval={SIZES.width}
                    showsHorizontalScrollIndicator={false}
                    data={constants.bottom_tabs}
                    keyExtractor={(item: any) => `${item.id}`}
                    renderItem={({ item, index }: any) => {
                        return (
                            <View
                                style={{
                                    height: SIZES.height,
                                    width: SIZES.width
                                }}
                            >
                                {item.label == constants.screens.home && <Home navigation={navigation} />}
                                {item.label == constants.screens.search && <Search />}
                                {item.label == constants.screens.bookmark && <Bookmark navigation={navigation}/>}
                                {item.label == constants.screens.settings && <Settings navigation={navigation}/>}


                            </View>
                        )
                    }}
                />
            </View>
            {/* footer */}
            <View style={{
                justifyContent: "flex-end"
            }}>

                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 4 }}
                    colors={[
                        COLORS.transparent,
                        COLORS.lightGray
                    ]}
                    style={{
                        position: "absolute",
                        backgroundColor: COLORS.lightGray,
                        top: -1,
                        left: 0,
                        right: 0,
                        height: 100,
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15
                    }}

                />

                {/* Tabs */}
                <View style={{
                    flexDirection: "row",
                    paddingHorizontal: SIZES.radius,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    backgroundColor: COLORS.white

                }}>
                    <TabButton
                        label={constants.screens.home}
                        icon={icons.home}
                        isFocused={selectedTab == constants.screens.home}
                        onPress={() => dispatch(setSelectedTab(constants.screens.home) as any)}

                    />

                    <TabButton
                        label={constants.screens.search}
                        icon={icons.search}
                        isFocused={selectedTab == constants.screens.search}
                        onPress={() => dispatch(setSelectedTab(constants.screens.search) as any)}

                    />

                    <TabButton
                        label={constants.screens.bookmark}
                        icon={icons.bookmark}
                        isFocused={selectedTab == constants.screens.bookmark}
                        onPress={() => dispatch(setSelectedTab(constants.screens.bookmark) as any)}

                    />

                    <TabButton
                        label={constants.screens.settings}
                        icon={icons.settings}
                        isFocused={selectedTab == constants.screens.settings}
                        onPress={() => dispatch(setSelectedTab(constants.screens.settings) as any)}

                    />

                </View>

            </View>
        </Animated.View>
    )
}

export default MainLayout;