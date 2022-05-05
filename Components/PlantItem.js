import React from "react";
import { StyleSheet,View,Text,Image,TouchableOpacity } from "react-native";
import { getLatestPlantImage } from "../API/PlantIFApi";

class PlantItem extends React.Component{
    constructor(props){
      super(props)
      console.log(props)
      this.state={
        latestImage: undefined
      }
      this._getLatestImage(this.props.plant.profile.id)
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
    render(){
        const plant=this.props.plant.profile
        const displayPlantHealth=this.props.displayPlantHealth
        return (
            <TouchableOpacity style={{width:200,margin:5}}onPress={() => displayPlantHealth(plant.id)}>
              {typeof this.state.latestImage=="string"?
                        <Image
                            source={{uri: this.state.latestImage}}
                            id={plant.id}
                            style={{
                              width: 200,
                              height:150,
                              borderWidth:2,
                              borderColor:'#8fbc8f',
                              margin:8
                            }}
                        />
                    :
                        <Image
                            source={require('../assets/plante.jpg')}
                            id={plant.id}
                            style={{
                              width: 200,
                              height:150,
                              borderWidth:2,
                              borderColor:'#8fbc8f',
                              margin:8
                            }}
                        />
                    }
                    <Text style={styles.text}>{plant.customizeName} (added on {plant.bornPlant})</Text>
            </TouchableOpacity>
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
    textAlign:"center",
          color: "#20232a",
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

export default PlantItem