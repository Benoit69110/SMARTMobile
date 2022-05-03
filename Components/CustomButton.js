import React from 'react';
import { View,Text,Pressable,StyleSheet} from 'react-native';

const CustomButton = ({onPress,text,type = "PRIMARY"})=> {
    return (
        <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}> 
                <Text style={[styles.text , styles[`text_${type}`]]}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container : {
        
        width:'100%',

        padding: 12,
        marginVertical: 5,
        alignItems : 'center',
        borderRadius: 5,
    },
    container_PRIMARY:{
        backgroundColor: '#3B71F3',
    },

    container_TERTIAIRY: {},


    text: {
        fontWeight: 'bold',
        color: 'white',
    },

    text_TERTIAIRY: {
        color : 'gray'
    }
});

export default CustomButton