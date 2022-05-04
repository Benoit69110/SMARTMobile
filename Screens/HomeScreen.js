// Screens/Home.js
import React from 'react'
import {ScrollView, FlatList,StyleSheet, View,Text, TouchableOpacity,Image} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { testApi } from '../API/PlantIFApi';
import {getUserPseudo} from '../Helpers/GetPseudo';


const HOME_ICON=<FontAwesome name="home" size={25} color='#449C76'/>
const LIBRARY_ICON=<FontAwesome name="list-ul" size={25} color='#449C76'/>
const ADD_ICON=<MaterialIcons name="add-circle" size={25} color='#449C76'/>
const NETWORK_ICON=<MaterialIcons name="group" size={25} color='#449C76'/>
const PROFILE_ICON=<MaterialIcons name="account-circle" size={25} color='#449C76'/>
const DOWN_ICON=<FontAwesome name="angle-down" size={25} color='#449C76'/>

const TUTORIAL={
    home:{
        icon: HOME_ICON,
        label: 'Home',
        value: 'This page is the menu, it will show all the notifications you have received about your plants in the last couple of days.'
    },
    library:{
        icon: LIBRARY_ICON,
        label: 'Library',
        value: 'This page will show you your recently added plants, and all the plants you possess in your library.'
    },
    addPlant:{
        icon: ADD_ICON,
        label: 'Add Plant',
        value: 'In this page, you will be able to add a plant to your library. You can either take a photo, or directly enter the plant name. You will also be able to register the needs of the plants, the name and the device ID.'
    },
    social:{
        icon: NETWORK_ICON,
        label: "Plant'IF Network",
        value: 'This page will show you your friend list, but also people who possess the same type of plants, hence people that could give you advice. You will also be able to find the plants close to you.'
    },
    profile:{
        icon: PROFILE_ICON,
        label: 'Profile',
        value: 'In this section, you will find all the informations about your profile and you will be able to modify anything you wouold like.'
    }
}

class HomeScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showTutorial: false,
            pseudo: ""
        }
        
        getUserPseudo().then(data=>{
            this.setState({pseudo:data})
        })
    }



    _displayTutorial(){
        return (
            <View style={styles.main_container}>
                {Object.entries(TUTORIAL).map(([key,item]) =>
                    <View key={key} style={{flexDirection: 'row'}}>
                        {item.icon}
                        <Text>{item.value}</Text>
                    </View>
                )}
            </View>
        )
    }
    _displayPlantHealth=(idPlant)=>{
        console.log("Display plant with id " + idPlant)
        this.props.navigation.navigate("PlantHealth",{idPlant: idPlant})
    }

    /*_displayProblem(problem){
        switch(problem){
            case 'less-water':
                return {
                    icon: WATER_ICON,
                    msg: "Your plant needs less water !"
                }
                break
            case 'more-water':
                return {
                    icon: WATER_ICON,
                    msg: "Your plant needs more water !"
                }
                break
            case 'less-sun':
                return {
                    icon: SUN_ICON,
                    msg: "Your plant needs less light !"
                }
                break
            case 'more-sun':
                return {
                    icon: SUN_ICON,
                    msg: "Your plant needs more light !"
                }
                break
            case 'less-temperature':
                return {
                    icon: TEMPERATURE_ICON,
                    msg: "Your plant is too hot !"
                }
                break
            case 'more-temperature':
                return {
                    icon: TEMPERATURE_ICON,
                    msg: "Your plant is too cold !"
                }
                break
            case 'photo':
                return {
                    icon: TEMPERATURE_ICON,
                    msg: "You haven't taken a picture of your plant for a long time ! Take the time to do one"
                }
                break
            default:
                return {
                    icon: WARNNING_ICON,
                    msg: "Your plant has a problem, check its health book !"
                }
                break
        }
    }*/
    _displayNotifications(){
        var data=[
            {
                arduinoNumber: 1400,
                customizeName: "my tulip",
                image: "blue sky",
                need: "vdsv",
                problem: 'more-water'
            },
            {
                arduinoNumber: 1300,
                customizeName: "my orchid",
                image: "blue sky",
                need: "vdsv",
                problem: 'less-sun'
            },
            {
                arduinoNumber: 1200,
                customizeName: "my dandelion",
                image: "blue sky",
                need: "vdsv",
                problem: 'more-temperature'
            }
        ]
        return(
            <View style={styles.main_container}>
                <Text style={styles.title_container}>Notifications :</Text>
                {Object.entries(data).map(([key,item]) =>
                    <View key={key} style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                            onPress={()=>this._displayPlantHealth(item.arduinoNumber)}
                        >
                            <Text>{item.customizeName}</Text>
                            {/* {this._displayProblem(item.problem)} */}
                        </TouchableOpacity>
                    </View>
                )}
                {/* <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={true}
                    // au lieu d'avoir le tableau json data on aura la réponse du back et il suffira de prendre les données, il nous faudra l'id de la plante, la photo et les notifications associées et aussi une catégorie pour afficher un icone?
                    data={[
                        {key: require('../assets/plante.jpg'), id: 1200, notification : 'Your plant needs more water!', topic: 'water' }
                    ]}
                    // Touchable permet de rendre l'élement cliquable, quand on clique dessus on aura direct accès au carnet de santé de la plante
                    renderItem={ ({ item, index }) => (
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Plant Health',{plant_id: item.id})}>
                            <View style={styles.notification}>
                                <Image source={item.key}
                                    key={index}
                                    style={{
                                        marginLeft: -170,
                                        width: 150,
                                        height: 150,
                                        borderRadius: 200/2,
                                        borderColor:'#aba8c8'
                                    }}
                                />
                                    <Image source={require('../assets/eau.png')}
                                            key={'icon'}
                                            style={{
                                                marginTop: -130,
                                                marginLeft: 70,
                                                width: 40,
                                                height: 40,
                                                borderRadius: 200/2,
                                                borderColor:'#aba8c8'
                                            }}
                                            />
                                <Text style = {{ marginTop: 10, fontSize: 15, marginLeft: 10}}> {item.notification} </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                /> */}
            </View>
            
        )

    }
    render(){
        return(
        <ScrollView>
            <Text style={styles.menu}>Home</Text>
            <View style={styles.main_container}>
                <Text id = "title" style={[styles.title_container,{fontStyle: 'italic'}]}>
                    PlantIF, the first app to take care of all your plants!
                    With this application, you can follow the evolution and needs of your plant throughout its life.
                </Text>
            </View>
            <View style={styles.main_container}>
                <Text style = {styles.title_container}>
                    Welcome back {this.state.pseudo != null ? this.state.pseudo : ''} ! Look below to see what your plants need.
                </Text>
            </View>
            <View style={styles.main_container}>
                <TouchableOpacity
                    onPress={()=>this.setState({showTutorial: !this.state.showTutorial})}
                    style={{flexDirection: 'row'}}
                >
                    <Text style = {styles.title_container} >Tutorial</Text>
                    {DOWN_ICON}
                </TouchableOpacity>
                {this.state.showTutorial ? this._displayTutorial():null}
            </View>
            {this._displayNotifications()}
        </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    main_container:{
        backgroundColor: '#8FF4C8',
        margin: 20,
        marginBottom: 10,
        marginTop: 10,
        padding: 10,
        borderRadius: 4,
    },
    title_container:{
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    title: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        width: 400,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#8fbc8f",
        color: "#20232a",
        textAlign: "center",
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 5
    },
    text: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        width: 400,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#8fbc8f",
        color: "#20232a",
        textAlign: "center",
        fontSize: 15,
        marginLeft: 5
    },
    image:{
        height: 49,
        width: 48,
    },
    menu:{
        marginTop: 0,
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black'
    },
    image:{
        height: 49,
        width: 48,
    },
    notification: {
        marginTop: 5,
        borderWidth: 4,
        width: 200,
        height: 160,
        borderColor: "#20232a",
        borderRadius: 10,
        backgroundColor: "#aba8c8",
        color: "#20232a",
        fontSize: 18,
        marginLeft: 180,
        flexGrow: 0.2
    }

});

export default HomeScreen