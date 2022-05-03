// Screens/SocialNetworkScreen.js
import React from 'react'
import {StyleSheet, Dimensions,ScrollView, View,Text, Image} from 'react-native'
import MapView from 'react-native-maps';
import { Marker } from "react-native-maps";
import LogoImage from '../assets/logo.png';
import { getVisiblePlants} from '../API/PlantIFApi';

const LOGO = Image.resolveAssetSource(LogoImage).uri;
const userMail = "lenabel2000@hotmail.fr";
var visiblePlants = getVisiblePlants(userMail);

class SettingsScreen extends React.Component{


     state = {
        region: {
            latitude: 45.771944,
            longitude: 4.8901709,
            latitudeDelta: 0,
            longitudeDelta: 0
        },
        myPlant: {
            latitude: 45.771944,
            longitude: 4.8901709,
            latituteDelta: 0,
            longitudeDelta: 0
        },
        markers: visiblePlants,
        title: "",
        type_plante: "",
        humeur: "",
        photo : "",
        isAlive : undefined
     };


    setRegion = (region) => {
      this.setState({ region : region });
    }

    markerClick(title,type_plante,photo, humeur,isAlive) {
          this.setState({ title:  title, photo: photo, humeur: humeur, type_plante: type_plante, isAlive: isAlive});
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
                <Marker
                    coordinate={this.state.myPlant}
                    title= "Your plant"
                    pinColor = "red"
                />
                {this.state.markers.map((marker) => (
                    <Marker
                            key={marker.key}
                            coordinate={marker.latlng}
                            title={marker.title}
                            pinColor = "green"
                            onPress={() => this.markerClick(marker.title,marker.type_plante,marker.photo, marker.humeur,marker.isAlive)}
                    />
                ))}
            </MapView>
            <Text style={styles.text}>Nom de la plante: {this.state.title}{"\n"}
            Type de la plante: {this.state.type_plante}{"\n"}
            Humeur de la plante : {this.state.humeur}{"\n"}
            Vivante: {this.state.isAlive}{"\n"}
            Photo: {this.state.photo}</Text>
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