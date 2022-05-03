import React, {useState} from 'react';
import { View,Text,Image,StyleSheet,useWindowDimensions,ScrollView } from 'react-native';
import Logo from '../assets/Logo_2.png';
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import  AsyncStorage  from '@react-native-async-storage/async-storage';


const SignInScreen = ()=> {
    const [username,setuserName] = useState('');
    const [password,setpassword] = useState('');


    const{height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () =>{
        console.warn("Sign in");
        // Validate user

        AsyncStorage.setItem('token', username);
        navigation.navigate('TabMenu');
    };

    const onForgotPasswordPressed = () =>{
        console.warn("Forgot password");
    };

    const onCreateAccountPressed = () =>{
        console.warn("Don't have an account? Create one");
        navigation.navigate('SignUp');
    };


    return (
        <ScrollView showVerticalScrollIndicator={false}>
        <View style={styles.root}> 
                < Image 
                source = { Logo } 
                style = { [styles.logo , {height: height * 0.4} ] } 
                resizeMode = "contain" 
                />
                <CustomInput placeholder="User Name" value={username} setValue={setuserName} />
                <CustomInput placeholder="Password" value={password} setValue={setpassword} secureTextEntry />
                <CustomButton text="Sign In" onPress={onSignInPressed} />
                <CustomButton text="Forgot password ?" onPress={onForgotPasswordPressed} type="TERTIAIRY"/>
                <CustomButton text="Don't have an account? Create one" onPress={onCreateAccountPressed} type="TERTIAIRY"/>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
     root : {
        alignItems : 'center',
        padding : 20 ,
    },
    logo: {
        width: 400,
        maxWidth: 800,
        maxHeight: 700,
    },
});

export default SignInScreen
