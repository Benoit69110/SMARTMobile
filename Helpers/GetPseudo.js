import  AsyncStorage  from '@react-native-async-storage/async-storage';

export async function getUserPseudo(){
    return  await AsyncStorage.getItem("token");
}

export async function getUserEmail(){
    return  await AsyncStorage.getItem("mail");
}