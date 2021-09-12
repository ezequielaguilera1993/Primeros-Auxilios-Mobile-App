import React, { useEffect, useRef } from 'react';
import { Animated, TextStyle } from 'react-native';
import Toast from 'react-native-simple-toast';

export const SuperposeToast: React.FC<{ toastStyle: TextStyle, text: string }> = ({ toastStyle, text }) => {


    const animateValue = useRef(new Animated.Value(0)).current

    useEffect(() => {
        const SuperposeToastAnimation = (
            value: Animated.Value,
            minValue: number,
            maxValue: number,
            appear: number,
            stand: number,
            desAppear: number = appear
        ) =>
            Animated.loop(
                Animated.sequence([
                    Animated.timing(value, {
                        toValue: maxValue,
                        duration: appear,
                        useNativeDriver: true
                    }),

                    Animated.timing(value, {
                        toValue: maxValue,
                        duration: stand,
                        useNativeDriver: true
                    }),

                    Animated.timing(value, {
                        toValue: minValue,
                        duration: desAppear,
                        useNativeDriver: true
                    }),

                ]), { iterations: 1 }
            ).start(() => {
                text = ""
            });
        SuperposeToastAnimation(animateValue, 0, 1, 100, 300, 300)
    }, [text])

    return <Animated.Text style={[{
        color: "black", opacity: animateValue, alignSelf: "center", position: "absolute", bottom: 80,
        backgroundColor: "#cddce0", borderRadius: 20, fontSize: 20, paddingHorizontal: 10, paddingVertical: 3,
        fontWeight: "600"
    }, toastStyle]}>{text}</Animated.Text>
}