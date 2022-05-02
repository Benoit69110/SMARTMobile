import React, {useState} from 'react';
import { View,Text,StyleSheet,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../Screens/SignInScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import HomeScreen from '../Screens/HomeScreen';
import SignInProvider from '../Screens/SignInProvider';

const Stack = createNativeStackNavigator();

const Navigation = ()=> {
    return (
        <NavigationContainer>
           <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="SignInProvider" component={SignInProvider} />
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation