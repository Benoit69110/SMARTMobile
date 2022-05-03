// Navigation/LibraryNavigation.js
import { createAppContainer } from 'react-navigation'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PlantLibrary from '../Components/PlantLibrary'
import PlantHealth from '../Components/PlantHealth'
import PlantProfile from '../Components/PlantProfile'
// import PlantLibraryScreen from '../Screens/PlantLibraryScreen'
// import PlantHealthScreen from '../Screens/PlantHealthScreen'



const Stack = createStackNavigator();

export default function PlantHealthStackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Library">
            <Stack.Screen name='LibraryHome' options={{ headerShown: false }} component={PlantLibrary} />
            <Stack.Screen name='PlantHealth' options={{ title: 'Plant Health Book' }} component={PlantHealth} />
            <Stack.Screen name='PlantProfile' options={{ title: 'Plant Profile' }} component={PlantProfile} />

        </Stack.Navigator>
    )
}