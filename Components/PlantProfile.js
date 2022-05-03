import * as React from 'react';
import {ScrollView, FlatList, TextInput, StyleSheet, View,Text} from 'react-native'
import { getProfilePlant } from '../API/PlantIFApi';

const PLANT_INFOS=[
    {
        id: '1',
        title: 'Common Name :',
        placeholder: 'Common Name',
        value: '',
    },
    {
        id: '2',
        title: 'Botanical Name :',
        placeholder: 'Botanical Name',
        value: '',
    },
    {
        id: '3',
        title: 'Maintenance Level :',
        placeholder: 'Maintenance',
        value: '',
    },
    {
        id: '4',
        title: 'Climate :',
        placeholder: 'Climate Zones',
        value: '',
    },
    {
        id: '5',
        title: 'Water Needs :',
        placeholder: 'Water Needs',
        value: '',
    },
    {
        id: '6',
        title: 'Light Needs :',
        placeholder: 'Light Needs',
        value: '',
    },
    {
        id: '7',
        title: 'Soil Type :',
        placeholder: 'Soil Type',
        value: '',
    },
    {
        id: '8',
        title: 'Soil Additional :',
        placeholder: 'Soil Additional',
        value: '',
    },
    {
        id: '9',
        title: 'Height Ranges :',
        placeholder: 'Height Ranges',
        value: '',
    },
    {
        id: '10',
        title: 'Spread Ranges :',
        placeholder: 'Spread Ranges',
        value: '',
    },
    {
        id: '11',
        title: 'Aromatic :',
        placeholder: 'Aromatic',
        value: '',
    },
    {
        id: '12',
        title: 'Abcission :',
        placeholder: 'Abcission',
        value: '',
    },
    {
        id: '13',
        title: 'Frost Tolerance :',
        placeholder: 'Frost Tolerance',
        value: '',
    },

]
class PlantProfile extends React.Component{
    constructor(props){
        super(props)
        this.state={
            profile:{customizeName:"",deviceId:"",address:"",zip:""},
            needs: PLANT_INFOS
        }
        this.idPlant=this.props.route.params.idPlant
    }

    _profilePlant(){
        return (
            <View style={styles.main_container}>
                <Text style={styles.title_container}>Profile of your plant :</Text>
                <View style={styles.profile_container}>
                    <View style={styles.name_field_container}>
                        <Text style={styles.name_field}>Name :</Text>
                        <Text style={styles.name_field}>Localisation :</Text>
                        <Text style={styles.name_field}>Device ID :</Text>
                    </View>
                    <View style={styles.field_container}>
                        <TextInput 
                            style={styles.text_input}
                            placeholder='Choose a name for your plant'
                            value={this.state.profile.customizeName}
                            onChangeText={(text)=>this._profileTextInputChanged('customizeName',text)}
                        />
                        <View style={{flexDirection: 'row'}}>
                            <TextInput 
                                style={[styles.text_input,{width:'64%'}]}
                                placeholder='Address'
                                value={this.state.profile.address}
                                onChangeText={(text)=>this._profileTextInputChanged('address',text)}
                            />
                            <TextInput 
                                style={[styles.text_input,{width:'28%'}]}
                                keyboardType='numeric'
                                placeholder='Zip code'
                                value={this.state.profile.zip}
                                onChangeText={(text)=>this._profileTextInputChanged('zip',text)}
                            />
                        </View>
                        <TextInput 
                            style={styles.text_input}
                            placeholder='Device ID'
                            value={this.state.profile.deviceId}
                            onChangeText={(text)=>this._profileTextInputChanged('deviceId',text)}
                        />
                    </View>
                </View>
            </View> 
        )
    }

    _plantsNeeds(){
        return (
            <View style={styles.main_container}>
                <Text style={styles.title_container}>Needs of your plant :</Text>
                { this.state.needs.map((item)=>
                    <View key={item.id} style={{flexDirection:'row'}}>
                            <Text style={styles.name_field}>{item.title}</Text>
                            <View style={styles.field_container}>
                                <TextInput
                                    style={styles.text_input}
                                    placeholder={item.placeholder}
                                    value={item.value}
                                    onChangeText={(text)=>this._needsTextInputChanged(text,item.id)}
                                />
                            </View>
                    </View>
               )}
            </View>
        )
    }    
    _profileTextInputChanged(input,text){
        console.log('text profile',text)
        var newProfile=this.state.profile
        newProfile[input]=text
        this.setState({profile: newProfile})
        console.log("state",this.state)
    }

    _needsTextInputChanged(text,id){
        var newInfos=this.state.needs
        newInfos[id-1].value=text
        this.setState({needs: newInfos})
    }

    _getProfilePlant(){
        getProfilePlant(this.idPlant).then(data=> {
            console.log(data)
            this.setState({profile: data})
        })
    }

    _getNeedsPlant(){
        getNeedsPlant(this.idPlant).then(data=> {
            var newInfos=this.state.needs
            for(var item in data){
                newInfos[data[item].id]
                newInfos[item.id]=data[item]
            }
            console.log(newInfos)
            this.setState({needs: newInfos})
        })
    }

    // {
    //     id: '1',
    //     title: 'Common Name :',
    //     placeholder: 'Common Name',
    //     value: '',
    // },
    // {
    //     id: '2',
    //     title: 'Botanical Name :',
    //     placeholder: 'Botanical Name',
    //     value: '',
    // },

    render(){
        var data ={
            customizeName: 'ici',
            cool :{pk:'la'}
        }
        for(var item in PLANT_INFOS){
            
            console.log("item",item)
            console.log("value",PLANT_INFOS[item].id)
        }
        return (
            <ScrollView>
                <Text>Profile of the plant id : {this.idPlant}</Text>
                {this._profilePlant()}
                {this._plantsNeeds()}
            </ScrollView>
        )
    }
}


const styles=StyleSheet.create({
    main_container:{
        backgroundColor: '#8FF4C8',
        margin: 20,
        marginBottom: 10,
        marginTop: 10,
        padding: 10,
        borderRadius: 4,
    },
    name_field_container:{
        
    },
    field_container:{
        flex:1,
        flexDirection: 'column',
    },
    profile_container:{
        flexDirection: 'row',
        marginTop: 10,
    },
    text_input:{
        backgroundColor:'white',
        height:25,
        padding: 0,
        paddingHorizontal: 8,
        margin: 5,
        fontSize: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#37474F'
    },
    name_field:{
        marginBottom: 10,
        marginTop: 6,
        fontSize: 14,
        fontWeight: '400',
        color: 'black'
    },
    title_container:{
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
})

export default PlantProfile