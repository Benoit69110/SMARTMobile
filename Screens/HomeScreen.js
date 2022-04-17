// Screens/Home.js
import React from 'react'
import {FlatList,StyleSheet, View,Text} from 'react-native'

// comment trouver la taille de l'écran sans coder les tailles en dur?
// on met quoi dedans?
class HomeScreen extends React.Component{
    render(){
        return(
            <View style ={styles.container}>
                <View style={{ backgroundColor : '#8fbc8f', width: 400, marginTop: 10}}>
                    <Text style = {{ color: 'white', marginTop: 10}}> PlantIF, the first app to take care of all your plants!
                     With this application, you can follow the evolution and needs of your plant throughout its life.</Text>
                </View>
                <View style={{ backgroundColor : '#8fbc8f', width: 400, marginTop: 20}}>
                     <Text style = {{ color: 'white', marginTop: 10}}> To begin your adventure with PlantIF,
                     please create your account and add your first plant.</Text>
                </View>
                <View style={{ backgroundColor : '#8fbc8f', width: 400, marginTop: 20}}>
                                     <Text style = {{ color: 'white', marginTop: 10}}> To begin your adventure with PlantIF,
                                     please create your account and add your first plant.</Text>
                </View>
                <View style = {{ backgroundColor : '#8fbc8f', width: 400, marginTop: 20}}>
                      <Text style = {{ color: 'white'}} > Tutorial : </Text>
                      <FlatList
                        data={[
                          {key: 'Home', tutorial: 'This page is the menu, it will show all the notifications you have received about your plants in the last couple of days. '},
                          {key: 'Your plant library', tutorial: 'This page will show you your recently added plants, and all the plants you possess in your library'},
                          {key: 'Add a plant to your library', tutorial: 'In this page, you will be able to add a plant to your library. You can either take a photo, or directly enter the plant name. You will also be able to register the needs of the plants, the name and the device ID'},
                          {key: 'PlantIF Network', tutorial: 'This page will show you your friend list, but also people who possess the same type of plants, hence people that could give you advice. You will also be able to find the plants close to you.'},
                          {key: 'Your profile', tutorial: 'In this section, you will find all the informations about your profile and you will be able to modify anything you wouold like. '},
                        ]}
                        renderItem={({item}) => <Text style= {{ color: 'white'}}>{item.key} : {item.tutorial}</Text>}
                      />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({

  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});

export default HomeScreen