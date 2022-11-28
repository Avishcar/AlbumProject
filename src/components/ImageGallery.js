import React,{useState} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    FlatList,
    Image
    
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import ImageZoom from '../components/ImageZoom'

const ImageGallery = ({ data }) => {
    const navigation = useNavigation()
    const [modalVisible,setmodalVisible]=useState(false)
    return (
        <>
        <TouchableOpacity style={{}} onPress={()=>setmodalVisible(!modalVisible)}>
            <Image
        style={{width:120,height:120}}
        source={{uri:data.url}}
        />
        </TouchableOpacity>
        {
            modalVisible &&
            <ImageZoom url={data.url}/>
        }
        
        </>
    )

}

export default ImageGallery;

const styles = StyleSheet.create({

})
