import React, { useState } from 'react'
import { Text, View, SafeAreaView, Image, Animated } from 'react-native'
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import CategoryCard from '../../components/CategoryCard'
import TrendingCard from '../../components/TrendingCard'
import { icons, images, SIZES, COLORS, FONTS, constants, dummyData } from '../../constants'
const HEADER_HEIGHT = 100;
const Home = ({ navigation }: any) => {
  const [scrollAnim] = useState(new Animated.Value(0));
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
      
      style={[{backgroundColor : "white",height : 80,zIndex : 10000,position : "absolute",top : 0,right : 0,left : 0,}, {
        transform: [{ translateY: navbarTranslate }]
      }]}
      onLayout={(event) => {
        let {height} = event.nativeEvent.layout;
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
            marginLeft: 45
          }}>
            <Text style={{
              ...FONTS.h2,
              color: COLORS.primary,
              fontWeight: "bold"

            }}>Hello Starlince</Text>
            <Text style={{
              ...FONTS.body3,
              marginTop: 3,
              color: COLORS.gray,
            }}>What you want to cook today ?</Text>
          </View>
        </View>
      </Animated.View>

    )
  }


  const renderSearchBar = () => {

    return (

      <View style={{
        flexDirection: "row",
        height: 50,
        marginTop : 80,
        alignItems: "center",
        marginHorizontal: SIZES.padding,
        paddingHorizontal: SIZES.radius,
        borderRadius: 10,
        backgroundColor: COLORS.lightGray
      }}>
        <Image source={icons.search}
          style={{ width: 20, height: 20, tintColor: COLORS.gray }}
        />

        <TextInput style={{ ...FONTS.body3, marginLeft: SIZES.radius, }}
          placeholderTextColor={COLORS.gray}
          placeholder="Search Recipes"
        />
      </View>

    )
  }

  const renderSeeRecipeCard = () => {
    return (
      <View style={{
        flexDirection: "row",
        marginTop: SIZES.padding,
        marginHorizontal: SIZES.padding,
        borderRadius: 10,
        backgroundColor: COLORS.lightGreen,
      }}>
        <View style={{
          width: 100,
          alignItems: "center",
          justifyContent: "center"
        }}>
          <Image source={images.recipe} style={{
            width: 80,
            height: 80
          }} />
        </View>

        <View style={{
          flex: 1,
          paddingVertical: SIZES.radius,
        }}>
          <Text style={{ width: "70%", ...FONTS.body4, color: "black" }}>You have 12 recipres that you haven't tired yet</Text>
          <TouchableOpacity
            onPress={() => null}
            style={{ marginTop: 10, }}>
            <Text
              style={{
                color: COLORS.primary,
                textDecorationLine: "underline",
                ...FONTS.body4,
                fontWeight: "bold"
              }}>
              See Recipes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const renderCategoryHeader = () => {
    return (
      <View style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        marginHorizontal: SIZES.padding,
      }}>
        <Text style={{ ...FONTS.h2, flex: 1, }}>Categories</Text>
        <TouchableOpacity>
          <Text style={{
            ...FONTS.body4,
            color: COLORS.gray,
          }}>View All</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const renderTrendingSection = () => {
    return (
      <View style={{
        marginTop: SIZES.padding,

      }}>
        <Text style={{ ...FONTS.h2, marginHorizontal: SIZES.padding, fontWeight: "bold" }}>Trending Recipe</Text>

        <FlatList
          data={dummyData.trendingRecipes}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item, index }) => {
            return (
              <TrendingCard
                containerStyle={{
                  marginLeft: index == 0 ? SIZES.padding : 0
                }}
                recipeItem={item}
                onPress={() => navigation.push("Recipe", { recipe: item })} />
            )
          }}
        />


      </View>
    )
  }
  return (
    <Animated.View style={{ flex: 1, backgroundColor: "white" }}>
                  {renderHeader()}

      <Animated.FlatList
       bounces={false}
        data={dummyData.categories}
        keyExtractor={item => `${item.id}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={{ flex: 1 }}>
      {renderSearchBar()}
            {renderSeeRecipeCard()}
            {renderTrendingSection()}
            {renderCategoryHeader()}
          </View>
        }
        scrollEventThrottle={16}
        stickyHeaderHiddenOnScroll={true}
        renderItem={({ item }: any) => {
          return (
            <CategoryCard containerStyle={{
              marginHorizontal: 10,

            }}
              categoryItem={item}
              onPress={() => navigation.navigate("Recipe", { recipe: item })}
            />
          )
        }}
        ListFooterComponent={
          <View style={{ marginBottom: 100 }} />
        }
        contentInset={{ top: HEADER_HEIGHT }}
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

    </Animated.View>
  )
}

export default Home