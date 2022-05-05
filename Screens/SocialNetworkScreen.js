// Screens/SocialNetworkScreen.js
import React from 'react'
import {StyleSheet, Dimensions,ScrollView, View,Text, Image, ActivityIndicator, TouchableOpacity} from 'react-native'
import MapView from 'react-native-maps';
import { Marker } from "react-native-maps";
import LogoImage from '../assets/logo.png';
import { getVisiblePlants, getAlivePlantLibrary} from '../API/PlantIFApi';
import Geolocation from '@react-native-community/geolocation';

const LOGO = Image.resolveAssetSource(LogoImage).uri;
const userMail = "lenabel2000@hotmail.fr";
// plants that are visible
var visiblePlants = getVisiblePlants(userMail);
// your plants
var alivePlants = getAlivePlantLibrary(userMail);

class SettingsScreen extends React.Component{


     state = {
        region: {
            latitude: 0,
            longitude: 0,
            latitudeDelta: 1.5,
            longitudeDelta: 1.5
        },
        myPosition: {
            latitude: 0,
            longitude: 0,
            latitudeDelta: 1.5,
            longitudeDelta: 1.5
        },
        markers: visiblePlants,
        yourPlants: alivePlants,
        title: "",
        type_plante: "",
        humeur: "",
        photo : "",
     };

   componentDidMount () {
        this.relocate()
   }
  relocate() {
    Geolocation.getCurrentPosition(
      (position) => {
        let region = {
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                  latitudeDelta: 1,
                  longitudeDelta: 1
        };
        this.setState({myPosition:region})
        this.refs.map.animateToRegion(region)
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000}
    );
  }

    setRegion = (region) => {
      this.setState({ region : region });
    }

    markerClick(title,type_plante,photo, humeur,isAlive) {
          this.setState({ title:  title, photo: photo, humeur: humeur, type_plante: type_plante});
    }
    render(){
        return(
        <View style = {styles.container}>
            <MapView
                ref = "map"
                style = {styles.map}
                onRegionChangeComplete={this.setRegion}>
                <Marker
                            key="you"
                            coordinate={this.state.myPosition}
                            title="You are here"
                            pinColor = "blue"
                />
                {this.state.yourPlants.map((marker) => (
                    <Marker
                            key={marker.key}
                            coordinate={marker.latlng}
                            title={marker.title}
                            pinColor = "red"
                    />
                ))}
                {this.state.markers.map((marker) => (
                    <Marker
                            key={marker.key}
                            coordinate={marker.latlng}
                            title={marker.title}
                            pinColor = "green"
                            onPress={() => this.markerClick(marker.title,marker.type_plante,marker.photo, marker.humeur)}
                    />
                ))}
            </MapView>
            <Text style={styles.title}>Nom de la plante: {this.state.title}{"\n"}
            Type de la plante: {this.state.type_plante}{"\n"}
            Humeur de la plante : {this.state.humeur}{"\n"}
            Photo: {this.state.photo}</Text>
        </View>

    )

  }
}

const styles = StyleSheet.create({

  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'green',
  },
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
      width: 350,
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
          width: 300,
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