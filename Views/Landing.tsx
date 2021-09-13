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
import React, { useEffect, useRef, useState } from 'react';
import { LandingProps } from '../App'
import Icon from 'react-native-ionicons'
import DropShadow from "react-native-drop-shadow";
import { useDispatch } from 'react-redux';
import { actionType, reset } from '../Redux/Actions/Actions';
import * as Sentry from "@sentry/react-native";

export function Landing({ route, navigation }: LandingProps) {


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
            <Button title={"anda la osachange Language"} onPress={() => { }} />
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
                <Button title="ythroerror" onPress={() => { Sentry.captureMessage("Something went wrong"); }} />

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
    button: {
        width: 10
    }

});