import * as React from 'react';
import {ScrollView, FlatList, Image, StyleSheet, View,Text} from 'react-native'
import PlantItem from './PlantItem'

class PlantLibrary extends React.Component{
    constructor(props){
      super(props)
    }
    _displayPlantHealth=(idPlant)=>{
        console.log("Display plant with id " + idPlant)
        this.props.navigation.navigate("PlantHealth",{idPlant: idPlant})
    }

    _getRecentAddedPlant(){
        console.log("Request recent added plant to Plant'IF API")
        const res=[
            {image: require('../assets/plante.jpg'), id: 2,name:'my dandelion'}
         ]
        return res
    }

    _getAllPlants(){
        console.log("Request all plants to Plant'IF API")
        const res=[
            {image: require('../assets/fleur.jpg'), id: 2,name:'my dandelion'},
            {image: require('../assets/plante.jpg'), id: 1300,name:'my tulip'}
        ]
        return res
    }


    _displayPlants(param){
        return (
            <View style={styles.main_container}>
                <Text style={styles.title_container}>
                    {param=='all' ? 'All of your plants :' : 'Recently added plants :'}
                </Text>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={true}
                    data={param=='all' ? 
                            this._getAllPlants() 
                        : 
                            this._getRecentAddedPlant()
                        }
                    renderItem={ ({item}) => <PlantItem 
                                                plant={item} 
                                                displayPlantHealth={this._displayPlantHealth}
                                            />}
                />
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

                {this._displayPlants('recent')}
                {this._displayPlants('all')}
                
                     
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