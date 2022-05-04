// <TouchableOpacity onPress={() => this._displayPlantHealth(item.id)}>
//   <Image source={item.key}
//     key={index}
//     style={{
//       width: 200,
//       height:150,
//       borderWidth:2,
//       borderColor:'#8fbc8f',
//       margin:8
//     }}
//   />
// </TouchableOpacity>
// )}

import React from "react";
import { StyleSheet,View,Text,Image,TouchableOpacity } from "react-native";

class PlantItem extends React.Component{
    render(){
        const plant=this.props.plant
        const displayPlantHealth=this.props.displayPlantHealth
        return (
            <TouchableOpacity onPress={() => displayPlantHealth(plant.id)}>
              <Image source={plant.image}
                id={plant.id}
                style={{
                  width: 200,
                  height:150,
                  borderWidth:2,
                  borderColor:'#8fbc8f',
                  margin:8
                }}
              />
            </TouchableOpacity>
        )
    }
}

export default PlantItem