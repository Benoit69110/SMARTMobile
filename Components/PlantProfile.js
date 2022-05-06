import * as React from 'react';
import {ScrollView, ActivityIndicator, TextInput, StyleSheet, View,Text,Button,Switch,Alert,Image} from 'react-native'
// import {Switch} from 'react-native-switch'
import { getProfilePlant, getNeedsPlant, addPlant, getPlant, reportDeadPlant, getLatestPlantImage } from '../API/PlantIFApi';
import { isZipCode } from '../Helpers/Validator';

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
        var copyPlantInfos=[...PLANT_INFOS]
        this.state={
            profile:{
                customizeName:"",
                arduinonumber:"",
                address:"",
                zip:"",
                city:"",
                visibility: false,
                bornPlant:"-/-/-",
                alive:true
            },
            needs: copyPlantInfos,
            needsLoaded: false,
            profileLoaded: false,
            editable: true,
            latestImage:undefined
        }
        this.idPlant=this.props.route.params.idPlant
        this._getPlant()
        this._getLatestImage(this.idPlant)
    }
    _getLatestImage(idPlant){
        getLatestPlantImage(idPlant).then(response=>{
            // console.log(response)
            try{
                // console.log(response.request)

                if(response.request=="Failed"){
                    this.setState({latestImage: require('../assets/plante.jpg')})
                }else{
                    var base64Icon = 'data:image/png;base64,'+response.image.data;
                    this.setState({latestImage: base64Icon})
                }
            }catch(e){

            }
        })
    }
    componentDidMount(){
        this.setState({editable:false})
    }
    _changeVisbility(){
        var newVisibility=this.state.profile
        newVisibility.visibility=!this.state.profile.visibility
        this.setState({visibility: newVisibility})
    }

    _profilePlant(){
        // if(!this.state.profileLoaded){
        //     this._getProfilePlant()
        // }
        return (
            <View style={styles.main_container}>
                <Text style={styles.title_container}>Profile of your plant : (added on {this.state.profile.bornPlant})</Text>
                {this._displayProfileLoading()}
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
                        disabled={!this.state.editable}
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
                            onChangeText={(text)=>this._profileTextInputChanged('customizeName',text)}
                            editable={this.state.editable}
                        />
                        <TextInput 
                            style={[styles.text_input]}
                            placeholder='Address'
                            value={this.state.profile.address}
                            onChangeText={(text)=>this._profileTextInputChanged('address',text)}
                            editable={this.state.editable}
                        />
                        <View style={{flexDirection: 'row'}}>
                            <TextInput
                                style={[styles.text_input,{width:'64%'}]}
                                placeholder="City"
                                value={this.state.profile.city}
                                onChangeText={(text)=>this._profileTextInputChanged('city',text)}
                                editable={this.state.editable}
                            />
                            <TextInput 
                                style={[styles.text_input,{width:'28%'}]}
                                keyboardType='numeric'
                                placeholder='Zip code'
                                value={this.state.profile.zip}
                                onChangeText={(text)=>this._profileTextInputChanged('zip',text)}
                                editable={this.state.editable}
                            />
                        </View>
                        <TextInput 
                            style={styles.text_input}
                            placeholder='Device ID'
                            value={this.state.profile.arduinonumber}
                            onChangeText={(text)=>this._profileTextInputChanged('arduinonumber',text)}
                            editable={this.state.editable}
                        />
                    </View>
                </View>
            </View> 
        )
    }

    _plantsNeeds(){
        // if(!this.state.needsLoaded){
        //     this._getNeedsPlant()
        // }
        return (
            <View style={styles.main_container}>
                <Text style={styles.title_container}>Needs of your plant :</Text>
                {this._displayNeedsLoading()}
                { this.state.needs.map((item)=>
                    <View key={item.id} style={{flexDirection:'row'}}>
                            <Text style={styles.name_field}>{item.title}</Text>
                            <View style={styles.field_container}>
                                <TextInput
                                    style={styles.text_input}
                                    placeholder={item.placeholder}
                                    value={item.value}
                                    onChangeText={(text)=>this._needsTextInputChanged(text,item.id)}
                                    editable={this.state.editable}
                                />
                            </View>
                    </View>
               )}
            </View>
        )
    }    
    _profileTextInputChanged(input,text){
        var newProfile=this.state.profile
        newProfile[input]=text
        this.setState({profile: newProfile})
    }

    _needsTextInputChanged(text,id){
        var newInfos=this.state.needs
        newInfos[id-1].value=text
        this.setState({needs: newInfos})
    }

    _getPlant(){
        getPlant(this.idPlant).then(response=>{
            if(response){
                this._getProfilePlant(response.profile)
                this._getNeedsPlant(response.needs)
            }

        })
    }
    _getProfilePlant(data){
        if(data!=undefined){
            this.setState({
                profile: data,
                profileLoaded:true
            })
        }
    }
        

    _getNeedsPlant(data){
        if(data!=undefined){
            var newInfos=[...this.state.needs]
            for(var item in data){
                for(var elt in newInfos){
                    var title=newInfos[elt].placeholder
                    title=title.replace(/ :/g,'')
                    title=title.replace(/ /g,'')
                    if(title.toLowerCase()==item.toLowerCase()){
                        var tempEl={...newInfos[elt]}
                        tempEl.value=data[item]
                        newInfos[elt]=tempEl
                    }
                }
            }
            // console.log(newInfos)
            this.setState({
                needs: newInfos,
                needsLoaded:true
            })
        }
    }
    _displayNeedsLoading(){
        if(!this.state.needsLoaded){
            return(
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large'/>
                </View>
            )
        }
    }
    _displayProfileLoading(){
        if(!this.state.profileLoaded){
            return(
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large'/>
                </View>
            )
        }
    }
    
    _reportDeath(){
        console.log("My plant is dead")
        Alert.alert(
            "Warning : This action is irrevocable !",
            "Is your plant really dead ?",
            [{
                text: "No",
            },
            {
                text: "Yes",
                onPress:() => reportDeadPlant(this.idPlant).then(response=>{
                    console.log(response)
                }),
            }]
        )
    }
    _modifyPlant(){
        console.log("Modification of my plant")

        var profileArray={
            profile: {
                arduinoNumber: this.state.profile.arduinonumber,
                customizeName: this.state.profile.customizeName,
                address: this.state.profile.address,
                zip: this.state.profile.zip,
                city: this.state.profile.city,
                visibility: this.state.profile.visibility.valueOf()
            }
        }
       
        var needsArray={needs:{}}
        for(var item of this.state.needs){
            var title=item.placeholder
            title=title.replace(/ :/g,'')
            title=title.replace(/ /g,'')

            title=title.charAt(0).toLowerCase() + title.slice(1)
            needsArray.needs[title]=item.value
        }
        var completeArray={todo: "updatePlant",plantId:  this.idPlant}
        completeArray={...completeArray,...profileArray}
        completeArray={...completeArray,...needsArray}
        console.log(completeArray)
        var res=this._checkProfileFields()
        if(res==0){
            console.log("Update the plant to the library if every field are completed")
            var added=1
            addPlant(completeArray).then(result=>{
                console.log("result add plant",result)
                try{
                    if(result.length!=0){
                        Alert.alert(
                            "Success !",
                            "Congratulations ! Your plant has been successfully modified.",
                            [{
                                text: "Ok",
                            }]
                        )
                    }else{
                        Alert.alert(
                            "Error",
                            "An error occurred... Your plant hasn't been modified.",
                            [{
                                text: "Ok",
                            }]
                        )
                    }
                }catch(e){
                    Alert.alert(
                        "Error",
                        "An error occurred... Your plant hasn't been modified.",
                        [{
                            text: "Ok",
                        }]
                    )
                }
            })
        }
        this.setState({editable: false})
    }

    _checkProfileFields(){
        var error=0
        var typeOfError=""
        if(this.state.profile.arduinonumber=="" || this.state.profile.arduinonumber==null){
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

    render(){
        return (
            <ScrollView>
                <Text style={styles.menu}>Plant id : {this.idPlant}</Text>
                <View style={[styles.main_container,{flexDirection:'row'}]}>
                    {typeof this.state.latestImage=="string"?
                        <Image
                            source={{uri: this.state.latestImage}}
                            style={{
                                width: 90,
                                height: 90,
                                borderRadius: 20,
                                borderColor:'#aba8c8',
                                marginRight: 10,
                            }}
                        />
                    :
                        <Image
                            source={require('../assets/plante.jpg')}
                            style={{
                                width: 90,
                                height: 90,
                                borderRadius: 20,
                                borderColor:'#aba8c8',
                                marginRight: 10,
                            }}
                        />
                    }
                    <View style={{flex:1}}>
                        <View style={{marginBottom:20}}>
                            {this.state.profile.alive?
                                <Button
                                    title="My plant is dead"
                                    onPress={()=>this._reportDeath()}
                                
                                />
                            :
                                <Text style={styles.dead_text}>Your plant is dead</Text>
                            }
                        </View>
                        {this.state.profile.alive?
                            <Button
                                title="Modify my plant"
                                onPress={()=>this.setState({editable: !this.state.editable})}
                            />
                        :
                            null
                        }
                    </View>
                </View>
                {this._profilePlant()}
                {this._plantsNeeds()}
                <View style={styles.main_container}>
                    <Button
                        title="Save changes"
                        onPress={()=>this._modifyPlant()}
                    />
                </View>
            </ScrollView>
        )
    }
}


const styles=StyleSheet.create({
    dead_text:{
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'center',
    },  
    main_container:{
        backgroundColor: '#8FF4C8',
        margin: 20,
        marginBottom: 10,
        marginTop: 10,
        padding: 10,
        borderRadius: 4,
    },
    menu:{
        marginTop: 0,
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black'
    },
    switch_container:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: -15,
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
        borderBottomColor: '#37474F',
        color: 'black'
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
        // textAlign: 'center',
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

export default PlantProfile