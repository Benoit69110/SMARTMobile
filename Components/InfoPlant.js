// Components/FindPlant.js
import React from 'react'
import {ActivityIndicator,Alert,View,Text,TextInput,TouchableOpacity,Image,StyleSheet,Button,Switch} from 'react-native'
// import {Switch} from 'react-native-switch'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import * as ImagePicker from 'react-native-image-picker';
import {PermissionsAndroid} from 'react-native';
import { getPlantsFromApiWithPicture } from '../API/PlantNetApi';
import { getPlantCaracteristic } from '../API/WWPDApi';
import { addImageToPlant, addPlant } from '../API/PlantIFApi';
import { isZipCode } from '../Helpers/Validator';
import { computeWindowedRenderLimits } from 'react-native/Libraries/Lists/VirtualizeUtils';

const CAMERA_ICON=<EntypoIcon name="camera" size={24} color='#449C76'/>
const GALLERY_ICON=<MaterialIcon name="photo-library" size={24} color='#449C76'/>

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

class FindPlant extends React.Component{
    constructor(props){
        super(props)
        this.uriImage=""

        var copyPlantInfos=[...PLANT_INFOS]
        this.state = {
            image: undefined,
            plantCaracteristic :"",
            infosPlant: copyPlantInfos,
            nameIsLoading: false,
            needsIsLoading: false,
            visibility: false,
            profile:{customizeName:"",deviceId:"",address:"",zip:"",city:"",visibility: false},
        }
        this.commonName=""
        this.scientificName=""
        this.resultFindPlant=""

    }

    _initialState(){
        this.commonName=""
        this.scientificName=""
        this.resultFindPlant=""

        var copyPlantInfos=[...PLANT_INFOS]
        this.setState({
            image:undefined,
            plantCaracteristic :"",
            infosPlant: copyPlantInfos,
            nameIsLoading: false,
            needsIsLoading: false,
            visibility: false,
            profile:{customizeName:"",deviceId:"",address:"",zip:"",city:"",visibility: false},
        })
    }
    _openCameraWithPermission = async() => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                ImagePicker.launchCamera(
                    {
                        mediaType: 'photo',
                        includeBase64: true,
                        maxHeight: 200,
                        maxWidth: 200,
                    },
                        (response) => {
                        // console.log(response);
                        this.setState({image: response})
                        // console.log(this.state)
                    },
                );
            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    }

    _openGalleryWithPermission = async() => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                ImagePicker.launchImageLibrary(
                    {
                        mediaType: 'photo',
                        includeBase64: true,
                        maxHeight: 200,
                        maxWidth: 200,
                    },
                        (response) => {
                        // console.log(response);
                        this.setState({image: response})
                        // console.log(this.state)
                    },
                );
            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    }

    _displayImageIcon(){
        console.log("loaded")
        if(this.state.image === undefined){
            return
        }else if(this.state.image.assets != null){
            this.uriImage=this.state.image.assets[0].uri
            return (
                <View style={styles.uploaded_container}>
                    <Text style={[styles.name_field,{textAlignVertical:'center'}]}>Image uploaded :</Text>
                    <Image
                        source={{uri: this.uriImage}}
                        style={styles.image}
                    />
                </View>
            )
        }else{
            return 
        }
    }


    _displayNamePlantFound(){
        if(this.resultFindPlant!="" && this.scientificName!=""){
            return (
                <View>
                    <Text style={styles.name_field}>Your plant matches best with : {this.resultFindPlant.bestMatch}</Text>
                </View>
            )
        }
    }

    _displayNameLoading(){
        if(this.state.nameIsLoading){
            return(
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large'/>
                </View>
            )
        }
        
    }
    _displayNeedsLoading(){
        if(this.state.needsIsLoading){
            return(
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large'/>
                </View>
            )
        }
    }
    // Get the name of the plant with plant net API
    _searchPlant(){
        if(this.uriImage.length>0){
            console.log("search with API")
            this.setState({nameIsLoading: true})
            getPlantsFromApiWithPicture(this.state.image)
                .then(data=>{
                    console.log(data)
                    if(data.error == undefined){
                        this.resultFindPlant=data
                        this.commonName=data.results[0].species.commonNames[0]
                        this.scientificName=data.results[0].species.genus.scientificName
                        var newInfos=PLANT_INFOS
                        this.setState({
                            infosPlant: newInfos,
                            nameIsLoading: false
                        },()=>{})
                        this._getInfosPlant(this.scientificName)
                    }else{
                        this.setState({nameIsLoading: false})
                        Alert.alert(
                            "Error",
                            "An error occurred, please select another picture.",
                            [{
                                text: "Ok",
                            }]
                        )
                    }
                    
            });
        }else{
            Alert.alert(
                "Info",
                "Please, select a picture.",
                [{
                    text: "Ok",
                }]
            )
        }
    }    

    // Get information from water wise plant data API on the plant
    _getInfosPlant(){
        if(this.scientificName.length>0){
            this.setState({needsIsLoading: true})
            getPlantCaracteristic(this.scientificName)
                .then((data)=>{
                    if(data.result.total>0){
                        this.setState({plantCaracteristic: data.result.records[0]})
                        var newResult=[...this.state.infosPlant]

                        for(var i=0;i<newResult.length;i++){
                            var id=newResult[i].placeholder
                            var tempEl={...newResult[i]}
                            tempEl.value=this.state.plantCaracteristic[id]
                            newResult[i]=tempEl
                        }
                        this.setState({
                            infosPlant: newResult,
                            needsIsLoading: false
                        },()=>{})
                    }else{
                        this.setState({
                            needsIsLoading: false
                        },()=>{})
                        Alert.alert(
                            "Info",
                            "Sorry, we don't find any informations about your plant... You can fill fields manually",
                            [{
                                text: "Ok",
                            }]
                        )
                    }
                });
        }
    }


    _profileTextInputChanged(input,text){
        var newProfile=this.state.profile
        switch(input){
            case 'name':
                newProfile['customizeName']=text
                break
            case 'address':
                newProfile['address']=text
                break
            case 'zip':
                newProfile['zip']=text
                break
            case 'device':
                newProfile['deviceId']=text
                break
            case 'city':
                newProfile['city']=text
                break
            default :
                newProfile={customizeName:"",deviceId:"",address:"",zip:"",visibility: false}
        }
        this.setState({profile: newProfile})
    }

    _needsTextInputChanged(text,id){
        var newInfos=this.state.infosPlant
        newInfos[id-1].value=text
        this.setState({infosPlant: newInfos})
    }


    _addPlantToLibrary(){
       if(this.state.image==undefined){
            Alert.alert(
                "Error",
                "Select a picture of your plant",
                [{
                    text: "Ok",
                }]
            )
       } else{
            var profileArray={
                profile: {
                    arduinoNumber: this.state.profile.deviceId,
                    customizeName: this.state.profile.customizeName,
                    address: this.state.profile.address,
                    zip: this.state.profile.zip,
                    city: this.state.profile.city,
                    visibility: this.state.profile.visibility.valueOf()
                }
            }
        
            var needsArray={needs:{}}
            for(var item of this.state.infosPlant){
                var title=item.placeholder
                title=title.replace(/ :/g,'')
                title=title.replace(/ /g,'')

                title=title.charAt(0).toLowerCase() + title.slice(1)
                needsArray.needs[title]=item.value
            }
            var completeArray={todo: "addPlant"}
            completeArray={...completeArray,...profileArray}
            completeArray={...completeArray,...needsArray}
            console.log(completeArray)
            var res=this._checkProfileFields()
            if(res==0){
                console.log("Add the plant to the library if every field are completed")
                var added=1
                addPlant(completeArray).then(result=>{
                    console.log("result add plant",result)
                    console.log("plant ID",result.plantId)
                    try{
                        if(result.request=="Ok"){
                            addImageToPlant(this.state.image,result.plantId).then(data=>{
                                console.log(data)
                                this._initialState()
                            })
                            Alert.alert(
                                "Success !",
                                "Congratulations ! Your plant has been successfully added to your library.",
                                [{
                                    text: "Ok",
                                }]
                            )
                        }else{
                            this._initialState()
                            Alert.alert(
                                "Error",
                                "An error occurred... Your plant hasn't been added to your library.",
                                [{
                                    text: "Ok",
                                }]
                            )
                        }
                        
                    }catch(e){
                        this._initialState()
                        Alert.alert(
                            "Error",
                            "An error occurred... Your plant hasn't been added to your library.",
                            [{
                                text: "Ok",
                            }]
                        )
                    }
                })
            }
        }
        
    }
   
    _checkProfileFields(){
        var error=0
        var typeOfError=""
        if(this.state.profile.deviceId=="" || this.state.profile.deviceId==null){
            error+=1
            typeOfError="Device ID is empty or has an incorrect format."
        }
        if(this.state.profile.customizeName=="" || this.state.profile.customizeName==null){
            error+=1
            typeOfError="You didn't define a customize name for your plant."
        }
        if(this.state.profile.address=="" || this.state.profile.address==null){
            error+=1
            typeOfError="Address is empty or has an incorrect format."
        }
        if(this.state.profile.city=="" || this.state.profile.city==null){
            error+=1
            typeOfError="City is empty or has an incorrect format."
        }
        if(this.state.profile.zip=="" || this.state.profile.zip==null || !isZipCode(this.state.profile.zip)){
            error+=1
            typeOfError="Zip code is empty or has an incorrect format."
        }

        if(error>1){
            Alert.alert(
                "Error",
                "Many fields of your plant's profile are incomplete or invalid.",
            )
        }else if(error==1){
            Alert.alert(
                "Error",
                typeOfError,
            )
        }

        return error
    }



    _choosePicture(){
        return (
            <View style={styles.main_container}>
                <Text style={styles.title_container}>Find the name of your plant with a picture :</Text>
                <View style={styles.picture_container}>
                    <TouchableOpacity
                        style={styles.icon_container}
                        onPress={()=>this._openCameraWithPermission()}
                    >
                        <Text>{CAMERA_ICON}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.icon_container}
                        onPress={()=>this._openGalleryWithPermission()}
                    >
                        <Text>{GALLERY_ICON}</Text>
                    </TouchableOpacity>
                </View>
                {this._displayImageIcon()}
                {this._displayNameLoading()}
                {this._displayNamePlantFound()}
                <Button
                    title="Search"
                    onPress={()=>this._searchPlant()}
                />
                
            </View>
        )
    }


    _profilePlant(){
        return (
            <View style={styles.main_container}>
                <Text style={styles.title_container}>Profile of your plant :</Text>
                
                <View style={styles.switch_container}>
                    <Text style={styles.name_field}>Visible to anyone ?</Text>
                    <Switch
                        onValueChange={(val)=>{
                                this._changeVisbility()
                            }
                        }
                        value={this.state.profile.visibility}
                        activeText={'Yes'}
                        inActiveText={'No'}
                    />
                </View>
                <View style={styles.profile_container}>
                    <View style={styles.name_field_container}>
                        <Text style={styles.name_field}>Name :</Text>
                        <Text style={styles.name_field}>Localisation :</Text>
                        <Text style={styles.name_field}></Text>
                        <Text style={styles.name_field}>Device ID :</Text>
                    </View>
                    <View style={styles.field_container}>
                        <TextInput 
                            style={styles.text_input}
                            placeholder='Choose a name for your plant'
                            value={this.state.profile.customizeName}
                            onChangeText={(text)=>this._profileTextInputChanged('name',text)}
                        />
                        <TextInput 
                            style={[styles.text_input]}
                            placeholder='Address'
                            value={this.state.profile.address}
                            onChangeText={(text)=>this._profileTextInputChanged('address',text)}
                        />

                        <View style={{flexDirection: 'row'}}>
                            <TextInput
                                style={[styles.text_input,{width:'64%'}]}
                                placeholder="City"
                                value={this.state.profile.city}
                                onChangeText={(text)=>this._profileTextInputChanged('city',text)}
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
                            onChangeText={(text)=>this._profileTextInputChanged('device',text)}
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
                {this._displayNeedsLoading()}
                { this.state.infosPlant.map((item)=>
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

    _changeVisbility(){
        var newProfile=this.state.profile
        newProfile.visibility=!this.state.profile.visibility
        this.setState({profile: newProfile})
    }
    render(){
        return(
            <View>
                {this._choosePicture()}
                {this._profilePlant()}
                {this._plantsNeeds()}
                <View style={styles.main_container}>
                    <Button
                        title="Add my plant"
                        onPress={()=>this._addPlantToLibrary()}
                    />
                </View>
               
            </View>
        )
    }
}

const needsStyle=StyleSheet.create({

});
const styles=StyleSheet.create({
    main_container:{
        backgroundColor: '#8FF4C8',
        margin: 20,
        marginBottom: 10,
        marginTop: 10,
        padding: 10,
        borderRadius: 4,
    },
    switch_container:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: -15,
    },
    uploaded_container:{
        flex: 1,
        flexDirection: 'row',
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
    picture_container:{
        flexDirection: 'row',
        alignSelf: 'center'
    },
    icon_container:{
        backgroundColor:'#ECEFF1',
        borderRadius: 100,
        width: 52,
        height: 52,
        alignItems:'center',
        paddingTop: 12,
        margin: 10,
    },
    title_container:{
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    image:{
        height: 49,
        width: 48,
        margin: 10
    },
    loading_container: {
        // position: 'absolute',
        // left: 0,
        // right: 0,
        // top: 100,
        // bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
  
    }
})



export default FindPlant