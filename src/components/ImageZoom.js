import React, { useState } from 'react';
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
import Overlay from 'react-native-modal-overlay';


const ImageZoom = ({ url }) => {
    const navigation = useNavigation()
    const [modalVisible,setmodalVisible]=useState(true)

    onClose = () => setmodalVisible(false);

    return (
        <Overlay visible={modalVisible} onClose={this.onClose} closeOnTouchOutside
        containerStyle={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}

        >
          <Image
        // style={{width:340,height:390,zIndex:0}}
        style={{width:340,height:340}}
        source={{uri:url}}
        />

        </Overlay>
    )

}

export default ImageZoom;

const styles = StyleSheet.create({

})
