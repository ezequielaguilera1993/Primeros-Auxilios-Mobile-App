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
    FlatList
} from 'react-native';
import React from 'react';

import { PlayProps } from '../App'


export function Play({ route, navigation }: PlayProps) {

    return (<ScrollView>
        <View >
            <TouchableHighlight onPress={() => { navigation.navigate("Home") }}>
                <Text>{route.params?.name}</Text>
            </TouchableHighlight>

        </View>
    </ScrollView>
    )
}


const styles = StyleSheet.create({
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