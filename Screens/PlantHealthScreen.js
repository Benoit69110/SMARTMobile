// Screens/AddPlantScreen.js
import React from 'react'
import {StyleSheet, Image, ScrollView, View,Text, Button} from 'react-native'
import { Slider } from 'react-native-elements';
import { Animated } from 'react-native';
import { TextInput } from 'react-native-paper';


class AddPlantScreen extends React.Component{
    // au lieu d'avoir les éléments en dur on va les récup du back et les mettre dans le state on pourra avoir les changements en live
    state = {
        name: "Tulip",
        water: "100mg per day",
        climate: "Hot",
        aromatics: "no idea",
        plant_image: require('../assets/plante.jpg'),
        plant_id: 10,
        temperature : 20,
        humidity: 20,
        sun: 10
    };

    render(){
        return(
        <ScrollView>
              <Text style={styles.menu}>Plant Health Book</Text>
              <Text style={styles.text}>Please select a plant amongst your library to see observe its health book.</Text>
              <View>
                    <Image source={this.state.plant_image}
                            key={this.state.plant_id}
                            style={{
                               marginTop: 10,
                               marginLeft: 120,
                               width: 150,
                               height: 150,
                               borderRadius: 200/2,
                               borderColor:'#aba8c8'
                            }}
                    />
              </View>
              <View>
                    <TextInput
                        label ={"Name : " + this.state.name}
                        style={{height: 50, marginTop: 10}}
                        onChangeText={(text) => this.setState({name : text})}
                        placeholder="Change name"
                    />
                    <TextInput
                         label = {"Water needs : " + this.state.water}
                         tyle={{height: 50, marginTop: 200}}
                         onChangeText={(text) => this.setState({water: text})}
                         placeholder="Change water needs"
                    />
                    <TextInput
                          label = {"Climate : " + this.state.climate}
                          style={{height: 50, marginTop: 0}}
                          onChangeText={(text) => this.setState({climate : text})}
                          placeholder="Change climate"
                    />
                    <TextInput
                          label = {"Sun needs : " + this.state.sun}
                          style={{height: 50}}
                          onChangeText={(text) => this.setState({sun : text})}
                          placeholder="Change sun needs"
                    />
                    <TextInput
                          label = {"Aromatics : " + this.state.aromatics}
                          style={{height: 50}}
                          onChangeText={(text) => this.setState({aromatics: text})}
                          placeholder="Change aromatics"
                    />
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
  },
   notification: {
              marginTop: 5,
              borderWidth: 4,
              width: 200,
              height: 160,
              borderColor: "#20232a",
              borderRadius: 10,
              backgroundColor: "#aba8c8",
              color: "#20232a",
              fontSize: 18,
              marginLeft: 180,
              flexGrow: 0.2
    }

});

export default AddPlantScreen