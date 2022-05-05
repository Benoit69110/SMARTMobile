import * as React from 'react';
import {ScrollView, FlatList, Image, StyleSheet, View,Text} from 'react-native'
import { getAllAlivePlants, getAllDeadPlants } from '../API/PlantIFApi';
import PlantItem from './PlantItem'

class PlantLibrary extends React.Component{
    constructor(props){
        super(props)
        this.state={
            alivePlants:[],
            deadPlants: []
        }
    }
    componentDidMount(){
        this._getAllAlivePlants()
        this._getAllDeadPlants()
    }
    _displayPlantHealth=(idPlant)=>{
        // console.log("Display plant with id " + idPlant)
        this.props.navigation.navigate("PlantHealth",{idPlant: idPlant})
    }

    _getAllAlivePlants(){
        // console.log("Request all plant alive to Plant'IF API")
        getAllAlivePlants("bal@gmail.com").then(response=>{
            // console.log("res==",response.library)
            this.setState({alivePlants:response.library})
        })
    }

    _getAllDeadPlants(){
        // console.log("Request all plants dead to Plant'IF API")
        getAllDeadPlants("bal@gmail.com").then(response=>{
            // console.log("res==",response.library)
            this.setState({deadPlants:response.library})
        })
    }


    _displayPlants(param){
        return (
            <View style={styles.main_container}>
                <Text style={styles.title_container}>
                    {param=='alive' ? 'All of your alive plants :' : 'All of your dead plants :'}
                </Text>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={true}
                    data={param=='alive' ? 
                            this.state.alivePlants 
                        : 
                            this.state.deadPlants
                        }
                    renderItem={ ({item}) => <PlantItem 
                                                plant={item} 
                                                displayPlantHealth={this._displayPlantHealth}
                                            />}
                />
               {param=='alive'  ? <Text style={styles.text}>You don't have any alive plant</Text>:null}
                {param!='alive'  ? <Text style={styles.text}>You don't have any dead plant</Text>:null}
            </View>
        )
    }

    render(){
        return (
            <ScrollView>
                <Text style={styles.menu}>Plant Library</Text>
                <View style={styles.main_container}>
                    <Text style={styles.title_container}>
                        This is your plant library : here will appear all of the monitored plants that you have in your possession.
                    </Text>
                </View>

                {this._displayPlants('alive')}
                {this._displayPlants('dead')}
                
                     
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({

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
            borderRadius: 6,
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
  
  });
  
  export default PlantLibrary