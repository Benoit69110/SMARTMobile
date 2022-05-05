import React from 'react'
import {View,Text,Image,TouchableOpacity,StyleSheet} from 'react-native'
import Logo from './Logo'
import Navigation from '../Navigation/LoginNavigation'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import { getLatestPlantImage } from '../API/PlantIFApi'



const TEMPERATURE_ICON=<FontAwesome name="thermometer" size={30} color='#449C76'/>
const SUN_ICON=<Ionicons name="sunny-sharp" size={30} color='#449C76'/>
const WATER_ICON=<Ionicons name="water" size={30} color='#449C76'/>
const WARNNING_ICON=<Ionicons name="warning" size={30} color='#449C76'/>
const CAMERA_ICON=<EntypoIcon name="camera" size={24} color='#449C76' style={{backgroundColor:'yellow'}}/>

class NotificationItem extends React.Component{
    constructor(props){
        super(props)
        this.state={
            latestImage:undefined
        }
        
        this._getLatestImage(this.props.plant.idPlant)
    }
    _getLatestImage(idPlant){
        getLatestPlantImage(idPlant).then(response=>{
            console.log(response.request)
            if(response.request=="Failed"){
                this.setState({latestImage: require('../assets/plante.jpg')})
            }else{
                var base64Icon = 'data:image/png;base64,'+response.image.data;
                this.setState({latestImage: base64Icon})
            }
        })
    }
    _displayIconProblem(problem){
        switch(problem){
            case 'water':
                return WATER_ICON
                break
            case 'sun':
                return SUN_ICON
                break
            case 'temperature':
                return TEMPERATURE_ICON
                break
            case 'photo':
                return CAMERA_ICON
                break
            default:
                return WARNNING_ICON
                break
        }
    }
    
    _displayPlantHealth=(idPlant)=>{
        console.log("Display plant with id " + idPlant)
        this.props._displayPlantHealth(idPlant)
    }
    render(){
        const displayPlantHealth=this.props.displayPlantHealth
        return(
            <View>
                <TouchableOpacity
                    onPress={()=>displayPlantHealth(this.props.plant.idPlant)}
                    style={{flexDirection: 'row', margin: 10}}
                >
                    {typeof this.state.latestImage=="string"?
                        <Image
                            source={{uri: this.state.latestImage}}
                            style={{
                                width: 70,
                                height: 70,
                                borderRadius: 55,
                                borderColor:'#aba8c8',
                                marginRight: 10,
                            }}
                        />
                    :
                        <Image
                            source={require('../assets/plante.jpg')}
                            style={{
                                width: 70,
                                height: 70,
                                borderRadius: 55,
                                borderColor:'#aba8c8',
                                marginRight: 10,
                            }}
                        />
                    }
                    <View style={{flexDirection: 'row'}}>
                        <View style={{width:'65%'}}>
                            <Text style={{backgroundColor: 'blue'}}>{this.props.plant.customizeName}</Text>
                        </View>
                        <View style={{backgroundColor:'yellow',width:'25%',alignItems:'center'}}>
                            {this._displayIconProblem(this.props.plant.problem)}

                        </View>
                        
                    </View>
                    
                    
                </TouchableOpacity>
            </View>
            
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
export default NotificationItem