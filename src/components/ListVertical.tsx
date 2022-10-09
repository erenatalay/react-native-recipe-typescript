import React from 'react'
import {View,Image,Text,TouchableOpacity} from "react-native"
import { icons } from '../constants'

const ListVertical = ({item } : any) => {
  return (
    <TouchableOpacity style={{
      flex : 1,padding : 10,borderRadius : 10,backgroundColor: "white" ,flexDirection : "row",alignItems : "center",justifyContent : "flex-start"}}>
        <Image style={{ tintColor : item.type === null ? "#DA5D64" : "black" ,width : 25,height : 25,marginRight : 15}} source={item.icon}/>
        <Text style={{color : item.type === null ? "#DA5D64" : "black",fontSize : 16}}>{item.name}</Text>
        <View style={{
            alignItems : "flex-end",justifyContent : "flex-end",flex : 1
        }}>
        <Image style={{width : 15,height : 15,tintColor : "gray"}} source={icons.inArrow}/>

        </View>

    </TouchableOpacity>

  )
}

export default ListVertical