import React, { useState,Component } from 'react';
import avatar from '../assets/avatar6.png';
import CustomInput from '../Components/CustomInput';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';
import {useNavigation} from '@react-navigation/native';
import SignInScreen from './SignInScreen';
import { modifyUser } from '../API/PlantIFApi';
import { getUser } from '../API/PlantIFApi';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native';


export default class Profile extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      mail:'',
      newPassword:'',
      RNewPassword:'',
      currentPassword: ''
    }
  }
  


  executeOnLoad = async () => {
    console.warn("view has loaded!");
    const mail =  await AsyncStorage.getItem('mail');
    console.warn("mail = "+mail);
    // getUser(mail).then(response=>{
    //   console.log(response.connexion)
    //   if(response["request"]){
    //       Alert.alert(
    //         "Modify User",
    //         "informations has been modified.",
    //         [{
    //             text: "Ok",
    //         }]
    //       )
    //   }else{
    //       Alert.alert(
    //           "Error",
    //           "Password is invalid.",
    //           [{
    //               text: "Ok",
    //           }]
    //       )
    //   }
    // });
  }

  async componentDidMount(){
    console.warn("view has loaded!");
    const mail =  await AsyncStorage.getItem('mail');
    console.warn("mail = "+mail);
    getUser(mail).then(response=>{
      console.log(response)
      if(response["request"]){
        this.setState({ username: response["name"] })
        this.setState({ mail: response["mail"] })
          Alert.alert(
            "Load User",
            "informations has been loaded.",
            [{
                text: "Ok",
            }]
          )
      }else{
          Alert.alert(
              "Error",
              "informations has not been loaded.",
              [{
                  text: "Ok",
              }]
          )
      }
      
    });
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
    if(this.state.newPassword !== this.state.RNewPassword){
      console.warn("Password does not match");
    }else{
      console.warn("Password does not match");
        modifyUser(this.state.username,this.state.mail,this.state.newPassword,this.state.currentPassword).then(response=>{
          console.log(response.connexion)
          if(response["request"]){
            Alert.alert(
              "Modify User",
              "informations has been modified.",
              [{
                  text: "Ok",
              }]
            )
        }else{
            Alert.alert(
                "Error",
                "Password is invalid.",
                [{
                    text: "Ok",
                }]
            )
        }
      })
    }
    //const navigation = useNavigation();
    
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
      <View style={styles.container}  >
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={avatar}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              
            <Text  style={styles.username }>UserName</Text>
            <TextInput
              style={styles.input}
              placeholder="UserName"
              value={this.state.username}
              onChangeText={(text) => this.setState({ username: text })}
            />


            <TextInput
              style={styles.input}
              placeholder="Mail@gmail.com"
              value={this.state.mail}
              onChangeText={(text) => this.setState({ mail: text })}
            />

            <TextInput
              style={styles.input}
              placeholder="New Password"
              onChangeText={(text) => this.setState({ newPassword: text })}
            />

            <TextInput
              style={styles.input}
              placeholder="Re-type the new password"
              onChangeText={(text) => this.setState({ RNewPassword: text })}
            />


            <TextInput
              style={styles.input}
              placeholder="Enter your current password"
              onChangeText={(text) => this.setState({ currentPassword: text })}
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
