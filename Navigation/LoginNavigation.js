import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../Screens/SignInScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import SignInProvider from '../Screens/SignInProvider';
import SettingsScreen from '../Screens/SettingsScreen';
import TabMenu from './TabMenu'


const Stack = createNativeStackNavigator();

const Navigation = ()=> {
    return (
        <NavigationContainer independent={true}>
           <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="SignInProvider" component={SignInProvider} />
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="TabMenu" component={TabMenu} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation