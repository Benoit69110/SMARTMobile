import * as React from 'react';
import {View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomeScreen from '../Screens/HomeScreen'
import SettingsScreen from '../Screens/SettingsScreen'
import AddPlantScreen from '../Screens/AddPlantScreen'
import PlantLibraryScreen from '../Screens/PlantLibraryScreen'
import SocialNetworkScreen from '../Screens/SocialNetworkScreen'



const Tab = createMaterialTopTabNavigator();

class TabMenu extends React.Component {
    render(){
        return (
                <NavigationContainer>
                    <Tab.Navigator>
                        <Tab.Screen name="Home" component={HomeScreen} />
                        <Tab.Screen name="Library" component={PlantLibraryScreen} />
                        <Tab.Screen name="Add a plant" component={AddPlantScreen} />
                        <Tab.Screen name="Social Network" component={SocialNetworkScreen} />
                        <Tab.Screen name="Profile" component={SettingsScreen} />
                    </Tab.Navigator>
                </NavigationContainer>
            
        );
    }
  
}

export default TabMenu