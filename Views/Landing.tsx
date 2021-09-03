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
    Image,
    Text,
    Animated
} from 'react-native';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { LandingProps } from '../App'
import Icon from 'react-native-ionicons'
import LanguageContext from '../Context/globalContext';

import DropShadow from "react-native-drop-shadow";

export function Landing({ route, navigation }: LandingProps) {



    const inSpanish = useContext(LanguageContext).languageState.inSpanish
    const languageContext = useContext(LanguageContext)

    function handleOnPres() {
        navigation.navigate("Home")
    }

    const translation = useRef(new Animated.Value(1)).current

    useEffect(() => {



        const HeartbeatAnimation = (
            value: Animated.Value,
            minValue: number,
            maxValue: number,
            time: number
        ) =>
            Animated.loop(
                Animated.sequence([
                    Animated.timing(value, {
                        toValue: maxValue,
                        duration: time,
                        useNativeDriver: true
                    }),
                    Animated.timing(value, {
                        toValue: minValue,
                        duration: time,
                        useNativeDriver: true
                    }),
                    Animated.timing(value, {
                        toValue: maxValue,
                        duration: time,
                        useNativeDriver: true
                    }),
                    Animated.timing(value, {
                        toValue: minValue,
                        duration: time,
                        useNativeDriver: true
                    })
                ])
            ).start();

        HeartbeatAnimation(translation, 1, 1.03, 1000)
        // Animated.timing(
        //     translation,
        //     {
        //         toValue: 155,
        //         duration: 800,
        //         useNativeDriver: true

        //     }
        // ).start(({ finished }) => {

        //     console.log(finished, 'finished')
        // });

    }, [translation])

    return (
        <View >
            <Animated.Image style={[styles.image, { transform: [{ scale: translation }] }]} source={{ uri: "https://i.imgur.com/8awXiKU.png" }} />

            <DropShadow
                style={{
                    shadowColor: "#fff",
                    shadowOffset: {
                        width: 0,
                        height: 0,
                    },
                    shadowOpacity: .5,
                    shadowRadius: 3,
                }}
            >
                <Button title="Ingresar" onPress={handleOnPres} />
            </DropShadow>
            {/* <Animated.View style={{ backgroundColor: "yellow", height: 100, width: 100, transform: [{ translateX: translation }] }}></Animated.View> */}
        </View>
    )
}



const styles = StyleSheet.create({
    image: {
        width: 400,
        height: 400,
        resizeMode: "cover", /* por defecto cover */
        marginLeft: "auto",
        marginRight: "auto",
    },
    shadow: {
        backgroundColor: "blue",
        height: 100,
        width: 100,

    },
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
    text: {
        color: "green",
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