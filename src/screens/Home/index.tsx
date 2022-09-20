import React from 'react'
import { Text, View, SafeAreaView, Image, Animated } from 'react-native'
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import CategoryCard from '../../components/CategoryCard'
import TrendingCard from '../../components/TrendingCard'
import { icons, images, SIZES, COLORS, FONTS, constants, dummyData } from '../../constants'

const Home = ({ navigation }: any) => {
  const scrollY = new Animated.Value(0);

  const diffClamp = Animated.diffClamp(scrollY, 0, 35)
  const translateY = diffClamp.interpolate({
    inputRange: [0, 35],
    outputRange: [0, -35]
  })

  const transform = { transform: [{ translateY: translateY }] }
  const renderHeader = () => {
    return (
      <Animated.View style={transform}>


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
                onPress={() => navigation.push("Recipe",{recipe : item})} />
            )
          }}
        />


      </View>
    )
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>

      <FlatList
        data={dummyData.categories}
        keyExtractor={item => `${item.id}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={{ flex: 1 }}>
            {renderHeader()}
            {renderSearchBar()}
            {renderSeeRecipeCard()}
            {renderTrendingSection()}
            {renderCategoryHeader()}
          </View>
        }
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
        onScroll={(e) => {
          scrollY.setValue(e.nativeEvent.contentOffset.y)
        }}
      />

    </SafeAreaView>
  )
}

export default Home