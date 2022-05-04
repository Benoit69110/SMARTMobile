import React, { useState,Component } from 'react';
import avatar from '../assets/avatar6.png';
import CustomInput from '../Components/CustomInput';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class Profile extends Component {
  render() {
    
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={avatar}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              
            <Text>Write name.</Text>
            <TextInput
              style={styles.input}
              placeholder="John Doe"
            />
               
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Modifier</Text>  
              </TouchableOpacity>              
              
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#90ee90",
    height:200,
  },
  input: {
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  container2 : {
    backgroundColor: 'white',
    width:'100%',

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderraduis: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
},
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:40,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#90ee90",
  },
});
