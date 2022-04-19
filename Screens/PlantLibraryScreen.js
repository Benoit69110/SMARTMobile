// Screens/PlantLibraryScreen.js
import React from 'react'
import {ScrollView,FlatList, Image, StyleSheet, View,Text} from 'react-native'



class PlantLibraryScreen extends React.Component{
    render(){
        return(
        <ScrollView>
              <Text style={styles.menu}>Plant Library</Text>
              <Text style={styles.title}>This is your plant library: here will appear all of the monitored plants that you have in your possession.</Text>
              <Text style={styles.title}>Recently added plants: </Text>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={true}
                  // remplir data avec les données des plantes
                  data={[
                     {key: require('../assets/plante.jpg')}
                  ]}
                  renderItem={ ({ item, index }) => (
                    <Image source={item.key} /* Use item to set the image source */
                      key={index} /* Important to set a key for list items,
                                     but it's wrong to use indexes as keys, see below */
                      style={{
                        width: 200,
                        height:150,
                        borderWidth:2,
                        borderColor:'#8fbc8f',
                        margin:8
                      }}
                    />
                  )}
                />
                <Text style={styles.title}>All of your plants: </Text>
                <FlatList
                     horizontal={true}
                     showsHorizontalScrollIndicator={true}
                     // remplir data avec les données des plantes
                     data={[
                         {key: require('../assets/fleur.jpg')},
                         {key: require('../assets/plante.jpg')}
                     ]}
                     renderItem={ ({ item, index }) => (
                         <Image source={item.key} /* Use item to set the image source */
                         key={index} /* Important to set a key for list items,
                                                     but it's wrong to use indexes as keys, see below */
                         style={{
                            width:200,
                            height:150,
                            borderWidth:2,
                            borderColor:'#8fbc8f',
                            margin:8
                         }}
                     />
                   )}
                />
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
  }

});




export default PlantLibraryScreen