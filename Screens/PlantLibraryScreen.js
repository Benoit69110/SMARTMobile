// Screens/PlantLibraryScreen.js
import React from 'react'
import {ScrollView, Alert, TouchableOpacity, FlatList, Image, StyleSheet, View,Text} from 'react-native'
import HomeScreen from '../Screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PlantLibrary from '../Components/PlantLibrary'
import LibraryNavigation from '../Navigation/LibraryNavigation';


class PlantLibraryScreen extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <View>
              <Text style={styles.menu}>Plant Library</Text>
              <PlantLibrary/>
        </View>
        )
    }
}

const styles = StyleSheet.create({
  menu:{
      marginTop: 0,
      textAlign: 'center',
      fontSize: 28,
      fontWeight: 'bold',
      color: 'black'
  }

});




export default PlantLibraryScreen