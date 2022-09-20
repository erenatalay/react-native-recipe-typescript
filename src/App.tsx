import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Drawer from "./navigation/Drawer"
import Login from './screens/Login';
import Recipe from './screens/Recipe';
const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{ headerShown: false}} >
      <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Drawer} />
        <Stack.Screen name="Recipe" component={Recipe} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App