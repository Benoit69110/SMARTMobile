// Screens/PlantLibraryScreen.js
import React from 'react'
import {ScrollView, Alert, TouchableOpacity, FlatList, Image, StyleSheet, View,Text} from 'react-native'
import HomeScreen from '../Screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { getAlivePlantLibrary, getDeadPlantLibrary} from '../API/PlantIFApi';

const userMail = "lenabel2000@hotmail.fr"
var aliveLibrary = getAlivePlantLibrary(userMail)
var deadLibrary = getDeadPlantLibrary(userMail)

class PlantLibraryScreen extends React.Component{

      state = {
           userMail: userMail,
           aliveLibrary: aliveLibrary,
           deadLibrary: deadLibrary
      }





    render(){
        return(
        <ScrollView>
              <Text style={styles.menu}>Plant Library</Text>
              <Text style={styles.title}>This is your plant library: here will appear all of the monitored plants that you have in your possession.</Text>
              <Text style={styles.title}>Alive plants: </Text>

                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={true}

                  data= {this.state.aliveLibrary}
                  renderItem={ ({ item, index }) => (

                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Plant Health',{plant_id: item.id})}>
                    <Image source={item.key}
                      key={index}
                      style={{
                        width: 200,
                        height:150,
                        borderRadius: 50,
                        borderWidth:2,
                        borderColor:'#8fbc8f',
                        margin:8
                      }}
                    />
                  </TouchableOpacity>
                  )}
                />
                <Text style={styles.title}>Dead plants: </Text>
                <FlatList
                     horizontal={true}
                     showsHorizontalScrollIndicator={true}

                     data = {this.state.deadLibrary}
                     renderItem={ ({ item, index }) => (
                     <TouchableOpacity onPress={() => alert('This plant is dead, you cannot interact with it anymore')}>
                         <Image source={item.key}
                         key={index}
                         style={{
                            width:200,
                            height:150,
                            borderWidth:2,
                            borderRadius: 50,
                            borderColor:'#8fbc8f',
                            margin:8
                         }}
                         />
                     </TouchableOpacity>
                     )}
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




export default PlantLibraryScreen