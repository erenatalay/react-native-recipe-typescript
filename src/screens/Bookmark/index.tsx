import React,{useState} from 'react'
import { FlatList, Text, View,Animated, TouchableOpacity, Image } from 'react-native'
import SearchBar from '../../components/SearchBar';
import VerticalCard from '../../components/VerticalCard'
import { icons, images, SIZES, COLORS, FONTS, constants, dummyData } from '../../constants'
const HEADER_HEIGHT = 100;

const Bookmark = ({ navigation,scrollAnim }: any) => {

  const [offsetAnim] = useState(new Animated.Value(0));
  const [clampedScroll, setClampedScroll] = useState(Animated.diffClamp(
    Animated.add(
      scrollAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolateLeft: 'clamp'
      }),
      offsetAnim
    ), 0, 1
  ));

  const navbarTranslate = clampedScroll.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
    extrapolate: 'clamp'
  });

  const renderHeader = () => {
    return (
      <Animated.View

        style={[{ backgroundColor: "white", height: 80, zIndex: 10000, position: "absolute", top: 0, right: 0, left: 0, }, {
          transform: [{ translateY: navbarTranslate }]
        }]}
        onLayout={(event) => {
          let { height } = event.nativeEvent.layout;
          setClampedScroll(Animated.diffClamp(
            Animated.add(
              scrollAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
                extrapolateLeft: 'clamp'
              }),
              offsetAnim
            ), 0, height)
          );
        }}
      >
        <View style={{
          flexDirection: "row",
          marginHorizontal: 15,
          alignItems: "center",
          height: 80,
        }}>


          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image source={images.my_profile}
              style={{
                width: 45,
                height: 45,
                borderRadius: 20,
              }}
            />
          </TouchableOpacity>

          <View style={{
            width : "90%"
          }}>
            <SearchBar
            searchStyle={{
              flexDirection: "row",
              height: 50,
              alignItems: "center",
              marginHorizontal: SIZES.padding,
              paddingHorizontal: SIZES.radius,
              borderRadius: 10,
              backgroundColor: COLORS.lightGray
            }}
            />
          </View>
        </View>
      </Animated.View>

    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {renderHeader()}
      <Animated.FlatList
        data={dummyData.trendingRecipes}
        keyExtractor={item => `${item.id}`}
        ListFooterComponent={
          <View style={{ marginBottom: 50 }} />
        }
        renderItem={({ item, index }) => {
          return (
            <VerticalCard
              containerStyle={{
                paddingHorizontal: 5,
              }}
              recipeItem={item}
              index={index}
              onPress={() => navigation.push("Recipe", { recipe: item })} />
          )
        }}

        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { y: scrollAnim }
              }
            }
          ],
          { useNativeDriver: true }
        )}
      />

    </View>
  )
}

export default Bookmark