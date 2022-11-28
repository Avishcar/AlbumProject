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

import Overlay from 'react-native-modal-overlay';


const Loading = ({  }) => {
    


    return (
        <Overlay visible={true} 
        containerStyle={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}

        >
         <Text>Loading....</Text>

        </Overlay>
    )

}

export default Loading;

const styles = StyleSheet.create({

})
