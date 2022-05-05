// Screens/SocialNetworkScreen.js
import React from 'react'
import {StyleSheet, ScrollView, View,Text} from 'react-native'
import Chart from '../Components/Chart';

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import PubNub from "pubnub";
import { PubNubProvider } from "pubnub-react";

import { EmojiPickerView } from "../Components/EmojiPicker";
import { ChatView } from "../Components/Chat";

const pubnub = new PubNub({
  subscribeKey: "sub-c-a8a8204c-cb7e-11ec-924a-fed9c56767c0",
  publishKey: "pub-c-65b4822e-9c69-4009-9705-e4a81ede48bd",
  uuid: "0" // changer avec le login de l'utilisateur
});

console.disableYellowBox = true;

const Stack = createStackNavigator();

class SettingsScreen extends React.Component{
    render(){
        return(
			<>
			<Text style={styles.menu}>Chat Room</Text>
			<PubNubProvider client={pubnub}>
				<Stack.Navigator headerMode="none">
				<Stack.Screen name="EmojiPicker" component={EmojiPickerView} />
				<Stack.Screen name="Chat" component={ChatView} />
				</Stack.Navigator>
			</PubNubProvider>
			</>
        )
    }
}

const styles = StyleSheet.create({

  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  title: {
      marginTop: 16,
      paddingVertical: 8,
      borderWidth: 4,
      width: 400,
      borderColor: "#20232a",
      borderRadius: 6,
      backgroundColor: "#8fbc8f",
      color: "#20232a",
      textAlign: "center",
      fontSize: 15,
      fontWeight: 'bold',
      marginLeft: 5
  },
  text: {
          marginTop: 16,
          paddingVertical: 8,
          borderWidth: 4,
          width: 400,
          borderColor: "#20232a",
          borderRadius: 6,
          backgroundColor: "#8fbc8f",
          color: "#20232a",
          textAlign: "center",
          fontSize: 15,
          marginLeft: 5
  },
  image:{
      height: 49,
      width: 48,
  },
  menu:{
          marginTop: 0,
          textAlign: 'center',
          fontSize: 28,
          fontWeight: 'bold',
          color: 'black'
  }

});


export default SettingsScreen