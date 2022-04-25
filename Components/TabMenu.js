import * as React from 'react';
import {Image, View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomeScreen from '../Screens/HomeScreen'
import SettingsScreen from '../Screens/SettingsScreen'
import AddPlantScreen from '../Screens/AddPlantScreen'
import PlantLibraryScreen from '../Screens/PlantLibraryScreen'
import SocialNetworkScreen from '../Screens/SocialNetworkScreen'
import PlantHealthScreen from '../Screens/PlantHealthScreen'


const Tab = createMaterialTopTabNavigator();

class TabMenu extends React.Component {
    render(){
        return (
                <NavigationContainer>
                    <Tab.Navigator>
                        <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: () => (<Image source={require("../assets/menu.png")} style={{width: 20, height: 20}} />)}}/>
                        <Tab.Screen name="Library" component={PlantLibraryScreen} options = {{tabBarIcon: () => (<Image source={require("../assets/library.png")} style={{width: 20, height: 20}} />)}}/>
                        <Tab.Screen name="Plant Health" component={PlantHealthScreen} options = {{tabBarIcon: () => (<Image source={require("../assets/health.png")} style={{width: 20, height: 20}} />)}}/>
                        <Tab.Screen name="Add a plant" component={AddPlantScreen} options = {{tabBarIcon: () => (<Image source={require("../assets/add_plant.png")} style={{width: 20, height: 20}} />)}}/>
                        <Tab.Screen name="Social Network" component={SocialNetworkScreen} options = {{tabBarIcon: () => (<Image source={require("../assets/network.png")} style={{width: 20, height: 20}} />)}}/>
                        <Tab.Screen name="Profile" component={SettingsScreen} options = {{tabBarIcon: () => (<Image source={require("../assets/profile.png")} style={{width: 20, height: 20}} />)}}/>
                    </Tab.Navigator>
                </NavigationContainer>
            
        );
    }
  
}

export default TabMenu