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
    FlatList,
    Image
    
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const AlbumBigCard = ({ data ,bigcardClick}) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={{margin:10,paddingBottom:30}} onPress={()=>bigcardClick(data.id)}>
           <Image
        style={{width:160,height:160}}
        source={{uri:"https://s3-alpha-sig.figma.com/img/311c/c37b/5c6a2f4b6768c251fdd7b8acf56d9710?Expires=1670803200&Signature=eO0ZRvhnuBKZLRI-5GXaUy6ikMEb8IzDqK-D9jxGyMlfKuNfHqMQq9ZRwz3u5jS5Reb7lUA5Y5XEDlml7vYAXcu5CUoHL7XNoKnCyZJWiCYw8nkM74snXZpsAmoap0VWcJv-SmKB6jx5W57TgMjrB8E1UBJklAgy5An15q96Aiq8riA6beLl6Os3s0f9pLIOYCzRN8RS39JhSXYWxREVVo4onaamaqxrvPWea6Dn~SF8cA6LZ5szkHWROSe0haJn8JSljPxKIkT5YFkeGP~xhGvglm-z14KPqNISgfPFaP3uZQREVjYeD9SVp~vszn6RoBRKnK3Wv30oM~GWHkROsQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"}}
        />
        <Text style={{width:150,fontSize:16,fontWeight:"bold",color:"#000000",flexWrap:"nowrap"}} numberOfLines={1} >{data.title}</Text>
        <Text style={{width:150,fontSize:16,color:"#00000080"}}>25</Text>
        </TouchableOpacity>
    )

}

export default AlbumBigCard;

const styles = StyleSheet.create({

})
