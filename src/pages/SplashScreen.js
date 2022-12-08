import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Image
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen=({navigation })=>{
  
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate("PeopleScreen")
    },3000)
  },[])


  return(
    <View style={styles.container}>
       <Image
        style={{width:200,height:200}}
        source={require('../../assets/splash.gif')}
      />
    </View>
  )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"white"
    }
});