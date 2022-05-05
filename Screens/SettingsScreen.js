import React, { useState,Component } from 'react';
import avatar from '../assets/avatar6.png';
import CustomInput from '../Components/CustomInput';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';
import {useNavigation} from '@react-navigation/native';
import SignInScreen from './SignInScreen';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';


export default class Profile extends Component {

  state = {
    username: ''
  }

  onDisconnectPressed = async ()=>{
    //const navigation = useNavigation();
    await AsyncStorage.setItem('token', 'null');
    const token =  await AsyncStorage.getItem('token');
    console.warn("token = "+token);
    this.props.navigation.navigate("LoginNavigation")
    //navigation.navigate('SignIn');
  }

  onUpdateProfilePressed = async ()=>{
    //const navigation = useNavigation();
    console.warn("username = "+this.state.username)
    //navigation.navigate('SignIn');
  }

  _displayDisconnectButton(){
    return (
      <TouchableOpacity style={styles.buttonContainer} onPress={this.onDisconnectPressed} >
          <Text>Disconnect</Text>  
      </TouchableOpacity> 
    )
  }

  _displayUserName = async ()=>{
    const token =  await AsyncStorage.getItem('token');
    console.warn("tokentiyiyi = "+token);
    return (test="Test");
  }
  
  render() {
    return (
      <ScrollView showVerticalScrollIndicator={false}>
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={avatar}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              
            <Text  style={styles.username }>UserName</Text>
            <TextInput
              style={styles.input}
              placeholder="UserName"
              onChangeText={(text) => this.setState({ username: text })}
            />


            <TextInput
              style={styles.input}
              placeholder="Mail@gmail.com"
            />

            <TextInput
              style={styles.input}
              placeholder="New Password"
            />

            <TextInput
              style={styles.input}
              placeholder="Re-type the new password"
            />


            <TextInput
              style={styles.input}
              placeholder="Enter your current password"
            />

            
              <TouchableOpacity style={styles.buttonContainer} onPress={this.onUpdateProfilePressed}>
                <Text>Update profile</Text>  
              </TouchableOpacity>   
              {this._displayDisconnectButton()}
                         
              
            </View>
        </View>
      </View>
      </ScrollView>
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
    backgroundColor: "white",
    width: "100%",
    borderWidth: 1,
    height: 40,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#051C60',
    marginBottom: 25,
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
