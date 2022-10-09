import React from 'react'
import { Image, Text, TouchableOpacity, View, FlatList } from 'react-native'
import ListVertical from '../../components/ListVertical'
import SearchBar from '../../components/SearchBar'
import { icons, images, SIZES, COLORS, FONTS, constants, dummyData } from '../../constants'

interface ISettings {
  name: string,
  icon: any,
  type: string
}

const Settings = ({ navigation }: any) => {
  const renderHeader = () => {
    return (
      <View

        style={{ backgroundColor: "white", height: 60, zIndex: 10000, position: "absolute", top: 0, right: 0, left: 0, }}

      >
        <View style={{
          flexDirection: "row",
          marginHorizontal: 15,
          alignItems: "center",
          height: 60,
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
            width: "75%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Text style={{

              fontSize: 18,
              color: "black"
            }}>Settings</Text>
          </View>
        </View>
      </View>

    )
  }

  const renderProfile = () => {
    return (
      <View style={{
        flex: 1,
        backgroundColor: "#EEECED",
        borderBottomRightRadius : 35,
        borderBottomLeftRadius : 35,
       
      }}>
        <View style={{
          marginTop: 80,
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 30,
          borderColor: "lightgray",

        }}>
          <Image source={dummyData.myProfile.profile_image} style={{ width: 100, height: 100, borderRadius: 100, borderWidth: 1, borderColor: "black" }} />
          <Text style={{ ...FONTS.h2, fontWeight: "bold" }}>Starlince</Text>
          <Text style={{ ...FONTS.body4, color: "#B3B2BE" }}>starlince@gmail.com</Text>
        </View>

      </View>
    )
  }
  return (
    <View style={{flex : 1, backgroundColor: COLORS.lightGray}}>
      {renderHeader()}
      <View style={{
         flex: 1,
         backgroundColor: COLORS.white,
         borderTopEndRadius : 50,
         borderTopStartRadius : 50
      }}>

        <FlatList
          data={dummyData.settings}
          keyExtractor={(item: any, index) => `${index}`}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View>
              {renderProfile()}
            </View>
          }
          scrollEventThrottle={16}

          renderItem={({ item, index }) => {
            return (
              <View style={{
                flexDirection: "column",
                paddingHorizontal: 10,
                marginVertical: 5,
              }}>
                {
                  index === 0 && item.type === "general" && <Text style={{ ...FONTS.body4, fontWeight: "bold" }}>General</Text>
                }
                {
                  item.type === "general" && <ListVertical item={item} />
                }
                {
                  index === 2 && item.type === "legal" && <Text style={{ ...FONTS.body4, fontWeight: "bold" }}>Legal</Text>
                }
                {
                  item.type === "legal" && <ListVertical item={item} />
                }
                {
                  item.type === null && <View style={{ marginBottom: 15 }}></View>
                }
                {
                  item.type === null && <ListVertical item={item} />
                }
              </View>
            )
          }}
          ListFooterComponent={
            <View
              style={{ marginBottom: 100 }}
            />
          }
        />
      </View>

    </View>
  )
}

export default Settings