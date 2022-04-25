// Screens/AddPlantScreen.js
import React from 'react'
import {StyleSheet, ScrollView, View,Text} from 'react-native'
import { Slider } from 'react-native-elements';
import { Animated } from 'react-native';


class AddPlantScreen extends React.Component{

    state = {
        temperature : 20,
        humidity: 20,
        sun: 10
    };

    render(){
        return(
        <ScrollView>
              <Text style={styles.menu}>Plant Health Book</Text>
              <Text style={styles.text}>Please select a plant amongst your library to see observe its health book.</Text>
              <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
                  <Slider
                     value={this.state.temperature}
                     onValueChange={(value) => this.setState({ value })}
                  />
                  <Text>Temperature: {this.state.temperature}</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
                  <Slider
                     value={this.state.humidity}
                     onValueChange={(value) => this.setState({ value })}
                  />
                  <Text>Humidity: {this.state.humidity}</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
                  <Slider
                     value={this.state.sun}
                     onValueChange={(value) => this.setState({ value })}
                  />
                  <Text>Sun : {this.state.sun}</Text>
              </View>
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

export default AddPlantScreen