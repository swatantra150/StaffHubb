import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { enableScreens } from 'react-native-screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Screens/Home'
import Employee from '../Screens/Employee'
import AddDetails from '../Screens/AddDetails'
import MarkAttendence from '../Screens/MarkAttendence'
import User from '../Screens/User'
import Summary from '../Screens/Summary'
enableScreens()
const Stack=createNativeStackNavigator()
const AppNavigation = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name ='Employee' component={Employee}/>
        <Stack.Screen name='AddDetails' component={AddDetails}/>
        <Stack.Screen name='MarkAttendence' component={MarkAttendence}/>
        <Stack.Screen name='User' component={User}/>
        <Stack.Screen name='Summary' component={Summary}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})