import * as React from 'react';
import {Image, View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import HomeScreen from '../Screens/HomeScreen'
import HomeScreen2 from '../Screens/HomeScreenLoggedIn'
import SettingsScreen from '../Screens/SettingsScreen'
import AddPlantScreen from '../Screens/AddPlantScreen'
import PlantLibraryScreen from '../Screens/PlantLibraryScreen'
import SocialNetworkScreen from '../Screens/SocialNetworkScreen'
// import PlantHealthScreen from '../Screens/PlantHealthScreen'
import PlantHealthStackNavigator from '../Navigation/LibraryNavigation';

const HOME_ICON=<FontAwesome name="home" size={25} color='#449C76'/>
const LIBRARY_ICON=<FontAwesome name="list-ul" size={25} color='#449C76'/>
const ADD_ICON=<MaterialIcons name="add-circle" size={25} color='#449C76'/>
const NETWORK_ICON=<MaterialIcons name="group" size={25} color='#449C76'/>
const PROFILE_ICON=<MaterialIcons name="account-circle" size={25} color='#449C76'/>

const Tab = createMaterialTopTabNavigator();

class TabMenu extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
                <NavigationContainer>
                    <Tab.Navigator 
                        initialRouteName="Home"
                        screenOptions={{
                            tabBarShowLabel: false,
                        }}
                    >
                        {/* <Tab.Screen name="Home2" component={HomeScreen2} options={{tabBarIcon: () => (<Image source={require("../assets/menu.png")} style={{width: 20, height: 20}} />)}}/> */}
                        <Tab.Screen 
                            name="Home" 
                            component={HomeScreen} 
                            options={{
                                tabBarIcon: ()=> HOME_ICON
                            }}
                        />
                        <Tab.Screen 
                            name="Library" 
                            component={PlantHealthStackNavigator} 
                            options = {{
                                tabBarIcon: () => LIBRARY_ICON
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
                                tabBarIcon: () => NETWORK_ICON
                            }}
                        />
                        <Tab.Screen 
                            name="Profile" 
                            component={SettingsScreen} 
                            options = {{
                                tabBarIcon: () => PROFILE_ICON
                            }}
                        />
                    </Tab.Navigator>
                </NavigationContainer>
            
        );
    }
  
}

export default TabMenu