import {
    Alert,
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableHighlight,
    FlatList,
    Image
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { InfoProps } from '../../App'
import Icon from 'react-native-ionicons'
import LanguageContext from '../../Context/globalContext';
import { SText } from '../Components/Components';


export function Info({ route, navigation }: InfoProps) {
    // const inSpanish = useContext(LanguageContext).languageState.inSpanish
    // const languageContext = useContext(LanguageContext)
    // 
    // function handleOnPres() {
    // navigation.navigate("Home")
    // }

    return (
        <View >
            {/* <Image source={{ uri: "https://scontent.feze15-1.fna.fbcdn.net/v/t1.18169-9/10259922_738343326281238_6218184070437026767_n.png?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=oTpeTeVbSPwAX-Pok8o&tn=jiC2jQ2Ns81D7rIE&_nc_ht=scontent.feze15-1.fna&oh=f9c10cba57a107873495195fcb71d3a4&oe=615762E3" }} /> */}
            <SText>Info</SText>
        </View>
    )
}



const styles = StyleSheet.create({

});