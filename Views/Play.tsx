import {
    Alert,
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    useColorScheme,
    View,
    TouchableHighlight,
    FlatList,
} from 'react-native';
import React from 'react';


import { PlayProps } from '../App'
import { SText } from './Components/Components';

const styles = StyleSheet.create({
    text: {
        color: "white"
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

export function Play({ route, navigation }: PlayProps) {

    return (<ScrollView>
        <View >
            <TouchableHighlight onPress={() => { navigation.navigate("Home") }}>

                <SText>{route.params?.name}</SText>
            </TouchableHighlight>

        </View>
    </ScrollView>
    )
}


