import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    FlatList
} from 'react-native';
import PeopleCard from '../components/PeopleCard'
import { getMoviesFromApi } from '../webservices/Webservices'
import Loading from '../components/Loading'
import AsyncStorage from '@react-native-async-storage/async-storage';

const PeopleScreen = ({ navigation }) => {

    const [peopleData,setpeopleData]=useState([])
    const [loading,setloading]=useState(true)

    useEffect(() => {

        
        storeData()
        getMoviesFromApi("users")
            .then((res) => {
                setpeopleData(res)
                setloading(false)
            })
            .catch((err) => console.log(err));


    },[])

   

    const storeData = async() => {
         try {
            await AsyncStorage.setItem('ScreenName',"PeopleScreen")
            console.log("PeopleScreen try done")
          } catch (e) {
            // saving error
            console.log("async error",e)
          }
    }
    

    const renderItem = ({ item }) => (
        <PeopleCard data={item} />
    );

    return (
        <View style={styles.container}>
            {
                loading &&
                <Loading />
            }
            <ScrollView >
                <Text style={{ fontSize: 18, fontWeight: 'bold',color:"#000" }}>People</Text>
               {
                peopleData &&
                   <FlatList
                    data={peopleData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
               }
                
            </ScrollView>
        </View>
    )
}

export default PeopleScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 10,
    },
});



