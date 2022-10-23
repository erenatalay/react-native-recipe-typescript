import React, { useState } from 'react'
import { FlatList, Text, View, Animated, TouchableOpacity, Image, ScrollView } from 'react-native'
import SearchBar from '../../components/SearchBar';
import VerticalCard from '../../components/VerticalCard';
import { icons, images, SIZES, COLORS, FONTS, constants, dummyData } from '../../constants'
const HEADER_HEIGHT = 100;

const Search = ({ navigation, scrollAnim }: any) => {
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
          marginHorizontal: 0,
          alignItems: "center",
          height: 80,
        }}>


          <View style={{
            flex: 1
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
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {renderHeader()}
      <Animated.FlatList
        data={dummyData.trendingRecipes}
        keyExtractor={item => `${item.id}`}
        ListHeaderComponent={
          <>


            <View style={{
              marginTop: 40,
              paddingHorizontal: 15,
              flexDirection: "row", alignItems: "center", justifyContent: "space-between"
            }}>
              <Text style={{
                marginTop: 40,
                color: COLORS.black,
                fontSize: 18,
                fontWeight: "bold"
              }}>
                Last Search
              </Text>
              <TouchableOpacity>
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 40 }}>
                  <Image source={icons.trash} style={{ width: 20, height: 20, tintColor: COLORS.primary }} />
                  <Text style={{
                    color: COLORS.primary,
                    paddingLeft: 10,
                    fontSize: 18,
                  }}>
                    All Clear
                  </Text>
                </View>

              </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
              <TouchableOpacity style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
                borderRadius: 10,
                backgroundColor: COLORS.lightGray,
                marginRight: 10,
              }}>
                <Image source={icons.cross} style={{ width: 20, height: 20, marginRight: 5, marginTop: 2 }} />
                <Text style={{ fontSize: 17, color: "black" }}>How to make pizza</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
                borderRadius: 10,
                backgroundColor: COLORS.lightGray,
                marginRight: 10,

              }}>
                <Image source={icons.cross} style={{ width: 20, height: 20, marginRight: 5, marginTop: 2 }} />
                <Text style={{ fontSize: 17, color: "black" }}>Hamburger</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
                borderRadius: 10,
                backgroundColor: COLORS.lightGray,
                marginRight: 10,

              }}>
                <Image source={icons.cross} style={{ width: 20, height: 20, marginRight: 5, marginTop: 2 }} />
                <Text style={{ fontSize: 17, color: "black" }}>Spangle</Text>
              </TouchableOpacity>


            </ScrollView>
            <View style={{ marginTop: 20 }}>
              <Text style={{ fontWeight: "bold", fontSize: 18, paddingHorizontal: 15, color: "black" }}>Recommend For You</Text>
              <FlatList
                data={dummyData.trendingRecipes}
                keyExtractor={item => `${item.id}`}
                renderItem={({ item, index }) => {
                  return (
                    <VerticalCard
                      containerStyle={{
                        paddingHorizontal: 5,
                        marginTop : 15,
                        flexDirection : "row"
                      }}
                      recipeItem={item}
                      index={index}
                      onPress={() => navigation.push("Recipe", { recipe: item })} />
                  )
                }}

     
              />

            </View>
          </>

        }
        renderItem={({ item, index }) => {
          return (
            <View>
            </View>
          )
        }}
        ListFooterComponent={
          <View style={{ marginBottom: 50 }} />
        }
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

export default Search