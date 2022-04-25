// Screens/PlantLibraryScreen.js
import React from 'react'
import {ScrollView, Alert, TouchableOpacity, FlatList, Image, StyleSheet, View,Text} from 'react-native'
import HomeScreen from '../Screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


class PlantLibraryScreen extends React.Component{

    state = {
        isClicked: false
    };
    // fonction pour passer à la page d'affichage du carnet de santé
    showCarnetSante() {
       this.setState({ isClicked: true });

    }
    render(){
        return(
        <ScrollView>
              <Text style={styles.menu}>Plant Library</Text>
              <Text style={styles.title}>This is your plant library: here will appear all of the monitored plants that you have in your possession.</Text>
              <Text style={styles.title}>Recently added plants: </Text>

                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={true}

                  data={[
                     {key: require('../assets/plante.jpg'), id: 1200}
                  ]}
                  renderItem={ ({ item, index }) => (

                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Plant Health',{plant_id: item.id})}>
                    <Image source={item.key}
                      key={index}
                      style={{
                        width: 200,
                        height:150,
                        borderWidth:2,
                        borderColor:'#8fbc8f',
                        margin:8
                      }}
                    />
                  </TouchableOpacity>
                  )}
                />
                <Text style={styles.title}>All of your plants: </Text>
                <FlatList
                     horizontal={true}
                     showsHorizontalScrollIndicator={true}

                     data={[
                         {key: require('../assets/fleur.jpg'), id: 1230},
                         {key: require('../assets/plante.jpg'), id: 1300}
                     ]}
                     renderItem={ ({ item, index }) => (
                     <TouchableOpacity onPress={() => this.props.navigation.navigate('Plant Health',{plant_id: item.id})}>
                         <Image source={item.key}
                         key={index}
                         style={{
                            width:200,
                            height:150,
                            borderWidth:2,
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