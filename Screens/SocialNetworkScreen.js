// Screens/SocialNetworkScreen.js
import React from 'react'
import {StyleSheet, Dimensions,ScrollView, View,Text, Image, ActivityIndicator, TouchableOpacity} from 'react-native'
import MapView from 'react-native-maps';
import { Marker } from "react-native-maps";
import LogoImage from '../assets/logo.png';
import { getVisiblePlants, getAllAlivePlants } from '../API/PlantIFApi';
import Geolocation from '@react-native-community/geolocation';
import {withNavigation } from 'react-navigation'

const LOGO = Image.resolveAssetSource(LogoImage).uri;
const userMail = "lenabel2000@hotmail.fr";
// plants that are visible
// your plants
// var alivePlants = getAlivePlantLibrary(userMail);

class SettingsScreen extends React.Component{
  constructor(props){
    super(props)
    props.navigation.addListener('focus',payload=>{
        console.log("re render")
        this.componentDidMount()
        this.render()
    })
}
    _getVisiblePlants(){
      getVisiblePlants().then(response=>{
        console.log(response.library)
        this.setState({markers: response.library})
      })
    }

    _getAllAlivePlants(){
      // console.log("Request all plant alive to Plant'IF API")
      getAllAlivePlants("bal@gmail.com").then(response=>{
          // console.log("res==",response.library)
          this.setState({yourPlants:response.library})
      })
  }

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
        markers: [],
        // -------------
        yourPlants: [],
        // ------------
        customizeName: "",
        botanicalName: ""
     };

   componentDidMount () {
        this.relocate()
        this._getVisiblePlants()

   }
  relocate() {
    Geolocation.getCurrentPosition(
      (position) => {
        let region = {
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                  latitudeDelta: 3,
                  longitudeDelta: 3
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

    markerClick(customizeName,botanicalName) {
          this.setState({ customizeName:customizeName, botanicalName: botanicalName});
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
                
                {this.state.markers.map((marker) => (
                    <Marker
                            key={marker.profile.id}
                            coordinate={{
                              latitude: marker.profile.latitude,
                              longitude: marker.profile.longitude,
                              latitudeDelta: 3,
                              longitudeDelta: 3
                            }}
                            title={marker.profile.customizeName}
                            pinColor = "green"
                            onPress={() => this.markerClick(marker.profile.customizeName,marker.needs.botanicalName)}
                    />
                ))}
                {this.state.yourPlants.map((marker) => (
                    <Marker
                            key={marker.profile.id}
                            coordinate={{
                              latitude: marker.profile.latitude,
                              longitude: marker.profile.longitude,
                              latitudeDelta: 3,
                              longitudeDelta: 3
                            }}
                            title={marker.profile.customizeName}
                            pinColor = "red"
                    />
                ))}
            </MapView>
            <Text style={styles.title}>
              Customize name : {this.state.customizeName}{"\n"}
              Botanical Name : {this.state.botanicalName}{"\n"}
            </Text>
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