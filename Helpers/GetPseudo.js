import  AsyncStorage  from '@react-native-async-storage/async-storage';

export async function getUserPseudo(){
    return  await AsyncStorage.getItem("token");
}