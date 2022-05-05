import React, {useEffect,useState} from 'react';
import { View,Text,StyleSheet,ScrollView } from 'react-native';

import {useNavigation} from '@react-navigation/native';
import  AsyncStorage  from '@react-native-async-storage/async-storage';



 const  Index = ()=> {
    const navigation = useNavigation();
    

    const getAnswer = async () => {
        const token =  await AsyncStorage.getItem('token');
        const nn = "null";
        if(nn !== token && token != null){
            console.warn("token = "+token);
            navigation.navigate('TabMenu');
        }else{
            navigation.navigate('SignIn');
        }
      };
    useEffect(() => {
        getAnswer();
      }, []);

    return null;
}

export default Index