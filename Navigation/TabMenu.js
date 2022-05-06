import * as React from 'react';
import {Image, View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import HomeScreen from '../Screens/HomeScreen'
import AddPlantScreen from '../Screens/AddPlantScreen'
import SocialNetworkScreen from '../Screens/SocialNetworkScreen'
import Forum from '../Screens/Forum'
import PlantHealthStackNavigator from './LibraryNavigation';
import DisconnectNavigation from './DisconnectNavigation';

const HOME_ICON=<FontAwesome name="home" size={25} color='#449C76'/>
const LIBRARY_ICON=<FontAwesome name="list-ul" size={25} color='#449C76'/>
const ADD_ICON=<MaterialIcons name="add-circle" size={25} color='#449C76'/>
const NETWORK_ICON=<MaterialIcons name="group" size={25} color='#449C76'/>
const PROFILE_ICON=<MaterialIcons name="account-circle" size={25} color='#449C76'/>
const FORUM_ICON=<MaterialIcons name="forum" size={25} color='#449C76'/>
const MAP_ICON=<FontAwesome5 name="map-marked-alt" size={23} color='#449C76'/>


const Tab = createMaterialTopTabNavigator();

class TabMenu extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
                <NavigationContainer independent={true} >
                    <Tab.Navigator 
                        initialRouteName="Home"
                        screenOptions={{
                            tabBarShowLabel: false,
                            unmountOnBlur:true
                        }}
                    >
                        <Tab.Screen 
                            name="Home" 
                            component={HomeScreen} 
                            options={{
                                tabBarIcon: ()=> HOME_ICON,
                            }}
                        />
                        <Tab.Screen 
                            name="Library" 
                            component={PlantHealthStackNavigator} 
                            options = {{
                                tabBarIcon: () => LIBRARY_ICON,
                            }}
                        />
                        <Tab.Screen 
                            name="Add a plant"
                            component={AddPlantScreen}
                            options = {{
                                tabBarIcon: () => ADD_ICON
                            }}
                        />
                        <Tab.Screen 
                            name="Social Network" 
                            component={SocialNetworkScreen} 
                            options = {{
                                tabBarIcon: () => MAP_ICON,
                                lazy: true
                            }}
                        />
                        <Tab.Screen
                            name="Forum"
                            component={Forum}
                            options = {{
                                tabBarIcon: () => FORUM_ICON
                            }}
                        />
                        <Tab.Screen 
                            name="Profile" 
                            component={DisconnectNavigation} 
                            options = {{
                                tabBarIcon: () => PROFILE_ICON,
                                lazy: true
                            }}
                        />


                    </Tab.Navigator>
                </NavigationContainer>
            
        );
    }
  
}

export default TabMenu