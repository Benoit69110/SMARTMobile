// Screens/SocialNetworkScreen.js
import React from 'react'
import {StyleSheet, Dimensions,ScrollView, View,Text} from 'react-native'
import MapView from 'react-native-maps';
import { Marker } from "react-native-maps";


class SettingsScreen extends React.Component{

     state = {
        region: {
            latitude: 45.771944,
            longitude: 4.8901709,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        },
        myPlant: {
            latitude: 45.771944,
            longitude: 4.8901709,
            latituteDelta: 0.01,
            longitudeDelta: 0.01
        }
     }

    setRegion = (region) => {
      this.setState({ region : region });
    }
    render(){
        return(
        <View style = {styles.container}>
        <MapView
             initialRegion={{
                latitude: 45.771944,
                longitude: 4.8901709,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
             }}
            style = {styles.map}
            onRegionChangeComplete={this.setRegion}
        >
        <Marker coordinate={this.state.myPlant} />
        </MapView>
        <Text style={styles.text}>Current latitude: {this.state.region.latitude}</Text>
        <Text style={styles.text}>Current longitude: {this.state.region.longitude}</Text>
        </View>
        )
    }
}

const styles = StyleSheet.create({

  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
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
  },
      map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },

});


export default SettingsScreen