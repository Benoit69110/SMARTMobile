import React from "react";
import { StyleSheet,View,Text,Image,TouchableOpacity } from "react-native";
import { getLatestPlantImage } from "../API/PlantIFApi";

class PlantItem extends React.Component{
  constructor(props){
    super(props)
    this.state={
      latestImage: undefined
    }
    this._getLatestImage(this.props.plant.id)
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
        const plant=this.props.plant
        const displayPlantHealth=this.props.displayPlantHealth
        return (
            <TouchableOpacity onPress={() => displayPlantHealth(plant.id)}>
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
                    <Text>{plant.name}</Text>
            </TouchableOpacity>
        )
    }
}

export default PlantItem