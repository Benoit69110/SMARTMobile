// Screens/Home.js
import React from 'react'
import {Image, Button, ScrollView, VirtualizedList, FlatList,StyleSheet, View,Text} from 'react-native'
import { testApi } from '../API/PlantIFApi';
import MenuImage from '../assets/menu.png';

const MENU = Image.resolveAssetSource(MenuImage).uri;
// comment trouver la taille de l'écran sans coder les tailles en dur?
// on met quoi dedans?
class HomeScreen extends React.Component{
    render(){
        return(
        <ScrollView>
              <Text style={styles.menu}>Home</Text>
              <Text id = "title" style = {styles.title}> PlantIF, the first app to take care of all your plants!
              With this application, you can follow the evolution and needs of your plant throughout its life.</Text>
              <Text style = {styles.title}> To begin your adventure with PlantIF,
              please create your account and add your first plant.</Text>
              <Text style = {styles.title} > Tutorial : </Text>
              <FlatList
                  data={[
                     {key: 'Home', tutorial: 'This page is the menu, it will show all the notifications you have received about your plants in the last couple of days. '},
                     {key: 'Your plant library', tutorial: 'This page will show you your recently added plants, and all the plants you possess in your library. '},
                     {key: 'Add a plant to your library', tutorial: 'In this page, you will be able to add a plant to your library. You can either take a photo, or directly enter the plant name. You will also be able to register the needs of the plants, the name and the device ID.'},
                     {key: 'PlantIF Network', tutorial: 'This page will show you your friend list, but also people who possess the same type of plants, hence people that could give you advice. You will also be able to find the plants close to you.'},
                     {key: 'Your profile', tutorial: 'In this section, you will find all the informations about your profile and you will be able to modify anything you wouold like. '},
                  ]}
                  renderItem={({item}) => <Text style= {styles.text}>{item.key} : {item.tutorial}</Text>}
              />
        </ScrollView>
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

export default HomeScreen