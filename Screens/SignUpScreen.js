import React, {useState} from 'react';
import { View,Text,Image,StyleSheet,useWindowDimensions,ScrollView } from 'react-native';
import Logo from '../assets/Logo_1.png';
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { registerUser } from '../API/PlantIFApi';


const SignUpScreen = ()=> {
    const [username,setuserName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setpassword] = useState('');
    const [passwordRepeat,setPasswordRepeat] = useState('');
    const navigation = useNavigation();
    const{height} = useWindowDimensions();



    const onRegisterPressed = () =>{
        console.warn("onRegisterPressed");
            navigation.navigate('TabMenu');
        var infosUser={
            todo: "newUser",
            name: username,
            mail: email,
            password: password
        }
        registerUser(infosUser).then(result=>{
            console.log(result)
            AsyncStorage.setItem('token', username);

        })
    };


    const onSignInPressed = () =>{
        console.warn("Have an account? Sign In");
        navigation.navigate('SignIn');
    };

    const onTermsOfUsePressed = () =>{
        console.warn("onTermsOfUsePressed");
    };

    const onPrivacyPolicyPressed = () =>{
        console.warn("onPrivacyPolicyPressed");
    };

    return (
        <ScrollView showVerticalScrollIndicator={false}>
        <View style={styles.root}> 
                < Image 
                    source = { Logo } 
                    style = { [styles.logo , {height: height * 0.28} ] } 
                    resizeMode = "contain" 
                />
                <Text style={styles.title}> Create an account </Text>
                <CustomInput 
                    placeholder="User name" 
                    value={username} 
                    setValue={setuserName} />
                <CustomInput 
                    placeholder="Email" 
                    value={email} 
                    setValue={setEmail} />
                <CustomInput 
                    placeholder="Password" 
                    value={password} 
                    setValue={setpassword} 
                    secureTextEntry />
                <CustomInput 
                    placeholder="Repeat Password" 
                    value={passwordRepeat} 
                    setValue={setPasswordRepeat} 
                    secureTextEntry />
                <CustomButton 
                    text="Register" 
                    onPress={onRegisterPressed} />
                <Text style={styles.text}>By registering, you comfirm that you accept our{' '} 
                <Text style={styles.link} onPress={onTermsOfUsePressed}> Terms of Use </Text> and 
                <Text style={styles.link} onPress={onPrivacyPolicyPressed}> Privacy Policy </Text>  </Text>

                <Text style={styles.text2}>Have an account?{' '} 
                <Text style={styles.Bluelink} onPress={onSignInPressed}> Sign In </Text>  </Text>
              
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
        maxHeight: 500,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    text2: {
        color: 'gray',
        fontWeight: 'bold',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075',
    },
    Bluelink: {
        fontWeight: 'bold',
        color: 'blue',
    },
});

export default SignUpScreen
