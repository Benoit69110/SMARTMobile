// Screens/Home.js
import React from 'react'
import {Image, Icon, Button, ScrollView, VirtualizedList, FlatList,StyleSheet, View,Text, TouchableOpacity} from 'react-native'
import MenuImage from '../assets/menu.png';

const MENU = Image.resolveAssetSource(MenuImage).uri;
// comment trouver la taille de l'écran sans coder les tailles en dur?
// on met quoi dedans?
class HomeScreen extends React.Component{
    render(){
        return(
        <ScrollView>
              <Text style={styles.menu}>Home</Text>
              <Text id = "title" style = {styles.title}> Welcome back login! Look below to see what your plants need.</Text>
              <FlatList
                   horizontal={true}
                   showsHorizontalScrollIndicator={true}
                   /* au lieu d'avoir le tableau json data on aura la réponse du back et il suffira de prendre les données, il nous faudra l'id de la plante, la photo et les notifications associées et aussi une catégorie pour afficher un icone?*/
                   data={[
                       {key: require('../assets/plante.jpg'), id: 1200, notification : 'Your plant needs more water!', topic: 'water' }
                   ]}
                   /* Touchable permet de rendre l'élement cliquable, quand on clique dessus on aura direct accès au carnet de santé de la plante*/
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