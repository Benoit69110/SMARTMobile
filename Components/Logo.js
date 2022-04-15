// Components/Logo.js
import React from 'react'
import {StyleSheet,View,Image,Button,FlatList,Text, ActivityIndicator} from 'react-native'

import LogoImage from '../assets/logo.png';

const LOGO = Image.resolveAssetSource(LogoImage).uri;

class Logo extends React.Component{
    render(){
        return(
            <View style={styles.main_container}>
                <Image
                    source={{uri: LOGO}}
                    style={styles.image}
                />
                <Text style={styles.text}>Plant'IF</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    main_container:{
        flexDirection: 'row'
    },
    image:{
        height: 49,
        width: 48,
    },
    text:{
        marginTop: 5,
        marginLeft: 5,
        fontSize: 28,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: 'black'
    }
});

export default Logo