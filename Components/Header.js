// Components/Header.js
import React from 'react'
import {View,Text} from 'react-native'
import Logo from './Logo'
import TabMenu from './TabMenu'



class Header extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
                <Logo/>
                <TabMenu/>
            </View>
            
        )
    }
}


export default Header