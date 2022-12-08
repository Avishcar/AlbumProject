import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    FlatList,
    Image
} from 'react-native';

import { getMoviesFromApi } from '../webservices/Webservices'
import AlbumBigCard from '../components/AlbumBigCard'
import AlbumVertical from '../components/AlbumVertical'
import ImageGallery from '../components/ImageGallery'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Loading from '../components/Loading'
import AsyncStorage from '@react-native-async-storage/async-storage';

const AlbumScreen = ({ route, navigation }) => {

    const [album, setalbum] = useState([])
    const [defaultshow, setdefaultshow] = useState(true)
    const [images, setimages] = useState([])
    const [loading, setloading] = useState(true)
    const [username, setusername] = useState("")

    useEffect(() => {
        storeData()
    }, [])

    const storeData = async() => {
        try {
            await AsyncStorage.setItem('ScreenName',"AlbumScreen")
            console.log("AlbumScreen try done")
          } catch (e) {
            // saving error
            console.log("async error",e)
          }

        const id = await AsyncStorage.getItem('id')
        const name = await AsyncStorage.getItem('name')
        console.log("id===",id)
        console.log("name===",name)
        setusername(name)
        getMoviesFromApi("albums?userId=" + id)
            .then((res) => {
                // console.log("res", res)
                setalbum(res)
                imageAPI(res[0].id)
                setloading(false)
            })
            .catch((err) => console.log(err));
    }

    const imageAPI = (alubmID) => {
        getMoviesFromApi("photos?albumId=" + alubmID)
            .then((res) => {
                setimages(res)
                setloading(false)
            })
            .catch((err) => console.log(err));
    }

    const renderItem = ({ item }) => (
        <AlbumBigCard data={item} bigcardClick={bigcardClick} />
    );

    const renderItem2 = ({ item }) => (
        <AlbumVertical data={item} bigcardClick={bigcardClick} />
    );

    const renderItem3 = ({ item }) => (
        <ImageGallery data={item} />
    );

    const bigcardClick = (id) => {
        console.log("id--", id)
        setdefaultshow(false)
        setloading(true)
        imageAPI(id)
    }


    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            {
                loading &&
                <Loading />
            }
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.push('PeopleScreen')} >
                    <Image
                        style={{ width: 25, height: 25 }}
                        source={require("../../assets/back.png")}

                    />
                </TouchableOpacity>

                <Text>{username}</Text>
                <Text></Text>
            </View>

            <View style={{ marginTop: 10, padding: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: "#000000" }}>Albums</Text>

                {
                    defaultshow ?
                        <>
                            {
                                album &&

                                <FlatList
                                    data={album}
                                    numColumns={2}
                                    renderItem={renderItem}
                                    keyExtractor={item => item.id}
                                />
                            }
                        </>
                        :

                        <View style={{ flexDirection: "row", }}>
                            <View style={{ marginRight: 10, borderRightColor: "#DEDEDE", borderRightWidth: 1 }}>
                                {
                                    album &&

                                    <FlatList
                                        data={album}
                                        numColumns={1}
                                        renderItem={renderItem2}
                                        keyExtractor={item => item.id}
                                        showsVerticalScrollIndicator={false}
                                    />
                                }
                            </View>

                            <View>
                                {
                                    images &&
                                    <FlatList
                                        data={images}
                                        numColumns={2}
                                        renderItem={renderItem3}
                                        keyExtractor={item => item.id}
                                    />
                                }

                            </View>

                        </View>
                }


            </View>
        </View>
    )
}

export default AlbumScreen;

const styles = StyleSheet.create({
    header: {
        backgroundColor: "white",
        padding: 10,
        height: 50,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: "#DEDEDE",
        borderBottomWidth: 1,
    }

});