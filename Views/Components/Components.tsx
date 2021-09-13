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
    TextStyle,
    StyleProp,
    TouchableHighlightProps,
    AlertButton
} from 'react-native';
import React from 'react';
//
import { useRef } from "react";
import { Animated } from "react-native";

export const SAlert: React.FC<{ customStyle?: TextStyle, alertButtons?: AlertButton[], title?: string, label?: string }> = ({ children, customStyle, alertButtons, title = ""
    , label }) => {
    return (
        <TouchableHighlight onPress={() =>

            Alert.alert(title, label,
                alertButtons
                ,
                { cancelable: true }
            )}>

            <Text
                style={[{
                    backgroundColor: "#066e88",
                    paddingVertical: 5,
                    paddingHorizontal: 6,
                    borderRadius: 7,
                    marginHorizontal: 2,
                    marginVertical: 20,
                    marginBottom: 6,
                    fontSize: 18,
                    width: "80%",
                    textAlign: "center",
                    color: "white"
                }, customStyle,]}>
                {children}
            </Text>

        </TouchableHighlight>
    )
}


export const SText: React.FC<{ customStyle?: TextStyle }> = ({ children, customStyle }) => {
    return (
        <Text
            style={[{ color: "white" }, customStyle]}>
            {children}
        </Text>
    );
};






export const Prueba = () => {
    // fadeAnim will be used as the value for opacity. Initial Value: 0
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: true
        }).start();
    };

    const fadeOut = () => {
        // Will change fadeAnim value to 0 in 3 seconds
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: true
        }).start();
    };

    return (
        <SafeAreaView style={s.container}>
            <Animated.View
                style={[
                    s.fadingContainer,
                    {
                        // Bind opacity to animated value
                        opacity: fadeAnim
                    }
                ]}
            >
                <Text style={s.fadingText}>Fading View!</Text>
            </Animated.View>
            <View style={s.buttonRow}>
                <Button title="Fade In View" onPress={fadeIn} />
                <Button title="Fade Out View" onPress={fadeOut} />
            </View>
        </SafeAreaView>
    );
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    fadingContainer: {
        padding: 20,
        backgroundColor: "powderblue"
    },
    fadingText: {
        fontSize: 28
    },
    buttonRow: {
        flexBasis: 100,
        justifyContent: "space-evenly",
        marginVertical: 16
    }
});



