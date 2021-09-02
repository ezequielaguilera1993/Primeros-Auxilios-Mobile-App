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


export function Info({ route, navigation }: InfoProps) {
    const inSpanish = useContext(LanguageContext).languageState.inSpanish
    const languageContext = useContext(LanguageContext)

    function handleOnPres() {
        navigation.navigate("Home")
    }


    return (
        <View >
            <Image source={{ uri: "https://scontent.feze15-1.fna.fbcdn.net/v/t1.18169-9/10259922_738343326281238_6218184070437026767_n.png?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=oTpeTeVbSPwAX-Pok8o&tn=jiC2jQ2Ns81D7rIE&_nc_ht=scontent.feze15-1.fna&oh=f9c10cba57a107873495195fcb71d3a4&oe=615762E3" }} />
            <Button title="Ingresar" onPress={handleOnPres} />
        </View>
    )
}



const styles = StyleSheet.create({
    icon: {
        marginLeft: "auto",
        marginRight: 10
    },
    container: {
        flexDirection: "row",
        paddingVertical: 15,
        paddingLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#c7c7c7',
        borderTopWidth: 1,
        borderTopColor: '#c2c2c2',
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: "cover", /* por defecto cover */
        marginRight: 5
    },
    text: {
        color: "green"
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 10,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});