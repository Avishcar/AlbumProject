import React from 'react';
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
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PeopleCard = ({ data }) => {

    const navigation = useNavigation()


    onPeopleClick=async(data)=>{
        try {
            await AsyncStorage.setItem('id', JSON.stringify(data.id) )
            await AsyncStorage.setItem('name', data.name)
            console.log("id and name try done")
          } catch (e) {
            // saving error
            console.log("async error",e)
          }

        navigation.navigate('AlbumScreen')
    }

    return (
        <TouchableOpacity style={styles.item}
            onPress={() =>onPeopleClick(data)}
        >
            <View style={{ marginBottom: 10, }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: "#44444F" }}>{data.name}</Text>
                <Text style={{ fontSize: 14, color: "#696974" }}>{data.email}</Text>
                <Text style={{ fontSize: 14, color: "#696974" }}>{data.phone}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', borderTopColor: "#DEDEDE", borderTopWidth: 1 }}>
                <Text>{data.company.name}</Text>
                <Text>25</Text>
            </View>
        </TouchableOpacity>
    )
}


export default PeopleCard;

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFFFFF',
        // padding: 20,
        marginVertical: 8,
        padding: 15,
        borderColor: "#DEDEDE",
        borderWidth: 1,

        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
    },

});