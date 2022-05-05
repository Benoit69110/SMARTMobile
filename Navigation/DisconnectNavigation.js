import { createAppContainer } from 'react-navigation'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SettingsScreen from '../Screens/SettingsScreen';
import LoginNavigation from './LoginNavigation'
import { NavigationContainer } from '@react-navigation/native';



const Stack = createNativeStackNavigator();

export default function PlantHealthStackNavigator() {
    return (

            <NavigationContainer independent={true}>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                                <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
                                <Stack.Screen name="LoginNavigation" options={{ headerShown: false }} component={LoginNavigation} />
                </Stack.Navigator>
            </NavigationContainer>
    )
}