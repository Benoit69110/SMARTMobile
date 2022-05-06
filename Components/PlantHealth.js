import React from 'react'
import {StyleSheet, Image, ScrollView, View,Text, Button} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Chart from './Chart'
import { getPlantConstantGlobal, getPlantConstantLight, getPlantConstantTemperature, getPlantConstantWater } from '../API/PlantIFApi'

const BEST_MOOD_ICON=<MaterialCommunityIcons 
                        name="emoticon-outline" 
                        size={50} 
                        color='#449C76'
                        style={{textAlign: 'center'}}
                    />
const GOOD_MOOD_ICON=<MaterialCommunityIcons 
                        name="emoticon-wink-outline" 
                        size={50} 
                        color='#449C76'
                        style={{textAlign: 'center'}}
                    />
const BAD_MOOD_ICON=<MaterialCommunityIcons
                            name="emoticon-sad-outline" 
                            size={50} 
                            color='#449C76'
                            style={{textAlign: 'center'}}
                        />
const DEAD_MOOD_ICON=<MaterialCommunityIcons 
                        name="emoticon-dead-outline" 
                        size={50} 
                        color='#449C76'
                        style={{textAlign: 'center'}}
                    />

const THERMOMETER_ICON=<FontAwesome name="thermometer" size={30} color='#449C76'/>
const LIGHT_ICON=<Ionicons name="sunny-sharp" size={30} color='#449C76'/>
const WATER_ICON=<Ionicons name="water" size={30} color='#449C76'/>
const GLOBAL_ICON=<MaterialCommunityIcons name="cards-heart" size={30} color='#449C76'/>



class PlantHealth extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            idPlant: 2,
            globalMean: 10,
            tempMean: 10,
            waterMean: 10,
            lightMean: 10,

        }
        this.date = new Date()
        this.date = (this.date.getMonth()+1)+'/'+this.date.getDate()+'/'+this.date.getFullYear()
        console.log("current date",this.date)
        
    }

    componentDidMount(){
        this._getConstant()
        
        this.setState({healthPlant:
            {
                name: "Tulip",
                water: "100mm per day",
                climate: "Hot",
                aromatics: "no idea",
                plant_image: require('../assets/plante.jpg'),
                plant_id: 2,
                temperature : 20,
                humidity: 7,
                sun: 3,
                global: 14
            }
        })
    }
    _getInfosAboutConstants(){
        this._getInfoAboutConstant("water",this.state.waterMean)
        this._getInfoAboutConstant("light",this.state.waterMean)
        this._getInfoAboutConstant("heat",this.state.waterMean)
    }
    _getInfoAboutConstant(constantType,value){
        console.log(constantType,value)
        var msg=""
        if(Math.abs(value)<=12){
            msg ="Your plant needs "
            if(value<0){
                msg+="more "
            }else{
                msg+="less "
            }
            msg+=constantType+" !"
        }else{
            msg=""
        }
        return msg
    }

    _checkConstant(value){
        value=Math.abs(value)
        if(value<5){
            return DEAD_MOOD_ICON
        }else if(value>=5 && value<10){
            return BAD_MOOD_ICON
        }else if(value>=10 && value<15){
            return GOOD_MOOD_ICON
        }else if(value>=15){
            return BEST_MOOD_ICON
        }
    }

    _getConstant(){
        getPlantConstantGlobal(this.state.idPlant,this.date).then(data=>{
            console.log("received",data)
            this.setState({globalMean: data.globalMark})
        })
        getPlantConstantWater(this.state.idPlant,this.date).then(data=>{
            console.log("received",data)
            this.setState({waterMean: data.waterMark})
        })
        getPlantConstantLight(this.state.idPlant,this.date).then(data=>{
            console.log("received",data)
            this.setState({lightMean: data.lightMark})
        })
        getPlantConstantTemperature(this.state.idPlant,this.date).then(data=>{
            console.log("received",data)
            this.setState({tempMean: data.tempMark})
        })
    }
    _displayConstant(){
        return (
            <View style={styles.main_container}>
                <Text style={styles.title_container}>
                    Global overview :
                </Text>
                <View style={[styles.constant_container, {borderBottomWidth: 1}]}>
                    <View style={[styles.constant_detail_container, {borderRightWidth: 1}]}>
                       <View style={{flexDirection: 'row'}}>
                           {GLOBAL_ICON}
                           <Text style={styles.constant_text}>Global</Text>
                       </View>
                        {this._checkConstant(this.state.globalMean)}
                    </View>
                    <View style={[styles.constant_detail_container]}>
                        <View style={{flexDirection: 'row'}}>
                           {WATER_ICON}
                           <Text style={styles.constant_text}>Humidity</Text>
                       </View>
                       {this._checkConstant(this.state.waterMean)}
                       <Text style={styles.constant_text}>{this._getInfoAboutConstant("water",this.state.waterMean)}</Text>
                    </View>
                </View>
                <View style={styles.constant_container}>
                    <View style={[styles.constant_detail_container, {borderRightWidth: 1}]}>
                        <View style={{flexDirection: 'row'}}>
                           {LIGHT_ICON}
                           <Text style={styles.constant_text}>Sun</Text>
                       </View>
                       {this._checkConstant(this.state.lightMean)}
                       <Text style={styles.constant_text}>{this._getInfoAboutConstant("light",this.state.lightMean)}</Text>
                    </View>
                    <View style={[styles.constant_detail_container,]}>
                       <View style={{flexDirection: 'row'}}>
                           {THERMOMETER_ICON}
                           <Text style={styles.constant_text}>Temperature</Text>
                       </View>
                        {this._checkConstant(this.state.tempMean)}
                       <Text style={styles.constant_text}>{this._getInfoAboutConstant("heat",this.state.tempMean)}</Text>
                    </View>
                </View>
            </View>
        )
    }
    _getWaterHistoric(){
        var histo=
        {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
                {
                    data: [
                        Math.random() * 20,
                        Math.random() * 20,
                        Math.random() * 20,
                        Math.random() * 20,
                        Math.random() * 20,
                        Math.random() * 20
                    ]
                },
                {
                  data: [20], // max
                  withDots: false,
                },
            ]
        }
        return histo
    }

    _getSunHistoric(){
        var histo=
        {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
            datasets: [
                {
                    data: [
                        Math.random() * 20,
                        Math.random() * 20,
                        Math.random() * 20,
                        Math.random() * 20,
                        Math.random() * 20,
                        Math.random() * 20,
                        Math.random() * 20,
                        Math.random() * 20,
                        Math.random() * 20,
                        Math.random() * 20,
                        Math.random() * 20,
                        Math.random() * 20,
                    ]
                },
                {
                  data: [20], // max
                  withDots: false,
                },
            ]
        }
        return histo
    }

    _displayWaterHistoric(){
        return (
            <View style={styles.main_container}>
                <Text style={styles.title_container}>
                    Water needs evolution
                </Text>
                <Chart 
                    type="water"
                    data={this._getWaterHistoric()}
                />
            </View>
        )
    }

    _displaySunHistoric(){
        return (
            <View style={styles.main_container}>
                <Text style={styles.title_container}>
                    Light needs evolution
                </Text>
                <Chart
                    type="sun"
                    data={this._getSunHistoric()}
                />
            </View>
        )
    }
    _displayPlantProfile=(idPlant)=>{
        console.log("Display profile of plant with id " + idPlant)
        this.props.navigation.navigate("PlantProfile",{idPlant: idPlant})
    }
    render(){        
        return(
        <ScrollView>
            <View style={styles.main_container}>
                <Text style={styles.title_container}>
                    Here your Plant Health Book (id : {this.props.route.params.idPlant})
                </Text>
                <Button
                    title="See my plant's profile"
                    onPress={()=>this._displayPlantProfile(this.props.route.params.idPlant)}
                />
            </View>
            {this._displayConstant()}
            {this._displayWaterHistoric()}
            {this._displaySunHistoric()}
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
    constant_container:{
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    constant_text:{
        textAlignVertical: 'center',
        marginLeft: 5,
        fontSize: 15,
        color: 'black',
    },
    constant_detail_container:{
        flex: 1,
        borderColor:'black',
        paddingTop:10,
        paddingBottom: 10,
        marginLeft: 5
    }

});

export default PlantHealth