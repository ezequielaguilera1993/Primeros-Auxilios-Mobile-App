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
    FlatList, Image, StyleProp, StyleSheetProperties, Animated, RegisteredStyle, TextStyle, ViewPropTypes, Text
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Icon from 'react-native-ionicons'
import { options, PlayProps } from '../../App'
import { SText } from '../Components/Components';
import { InfartoAcv, Infarto, Acv, Heimlich, HeimlichBebés, HeimlichAdultos, Rcp, RcpBebés, RcpAdultos } from './Q&A';

import { QA, iPregunta } from './Q&A';
import { isIterationStatement } from 'typescript';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from '../../shared/Redux/Store';
import { RootState } from '../../shared/Redux/Reducers';
import { addOneAnswered } from '../../shared/Redux/Actions/Actions';
import { SuperposeToast } from './SuperposeToast';
// Toast.show('This is a toast.');

// Toast.show('This is nicely visible even if you call this when an Alert is shown', Toast.SHORT, [
// 'UIAlertController',
// ]);


export function Play({ route, navigation }: PlayProps) {

    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(addOneAnswered("Acv"))
    // }, [])

    // useEffect(() => {


    // }, [])
    const TOAST_CORRECTA = "Correcta 😎"
    const TOAST_INCORRECTA = "Incorrecta😕"
    const [toast, SETtoast] = useState<typeof TOAST_CORRECTA | typeof TOAST_INCORRECTA | null>(null)

    let [cursor, SETcursor] = useState<number>(0)

    let choosenStack: QA;
    switch (route.params.option) {
        case "InfartoAcv": choosenStack = InfartoAcv
            break;
        case "Infarto": choosenStack = Infarto
            break;
        case "Acv": choosenStack = Acv
            break;
        case "Heimlich": choosenStack = Heimlich
            break;
        case "HeimlichBebés": choosenStack = HeimlichBebés
            break;
        case "HeimlichAdultos": choosenStack = HeimlichAdultos
            break;
        case "Rcp": choosenStack = Rcp
            break;
        case "RcpBebés": choosenStack = RcpBebés
            break;
        case "RcpAdultos": choosenStack = RcpAdultos
            break;

        default: { choosenStack = InfartoAcv; Alert.alert("ERROR!") }
    }

    const currentQuestion: iPregunta = choosenStack[cursor]


    let goodOnes = 0


    const Option: React.FC<{ textStyle?: TextStyle, optionSelected: "A" | "B" | "C" | "D" }> = ({ optionSelected, textStyle }) => {

        async function checkOption(choosenOption: string) {

            if (choosenOption === currentQuestion.x) {
                await SETtoast(null)
                SETtoast("Correcta 😎");
                ++goodOnes
            }

            else {
                await SETtoast(null)
                SETtoast("Incorrecta😕");
            }

            if (cursor === choosenStack.length - 1) //Esta en lo ultimo? Volve al Home
            {
                if (goodOnes > 0) {
                    Alert.alert(`Contestaste ${goodOnes} ${goodOnes === 1 ? "pregunta" : "preguntas"} bien de un total de ${choosenStack.length}`)
                }
                else Alert.alert(`No contestaste ninguna pregunta bien. Suerte la próxima🍀`)

                navigation.navigate("Home")
            }
            SETcursor(++cursor)
        }

        return <TouchableHighlight onPress={() => { checkOption(optionSelected) }} activeOpacity={.9} underlayColor="transparent" >
            <View>
                <SText customStyle={textStyle}>{currentQuestion.o[optionSelected]}</SText>
            </View>
        </TouchableHighlight>

    }



    return (

        <View style={{ flex: 1 }} >
            <Image style={s.image} source={{ uri: currentQuestion.i }} />
            <SText customStyle={s.pregunta}>{currentQuestion.p}</SText>


            <Option textStyle={s.option} optionSelected="A" />
            <Option textStyle={s.option} optionSelected="B" />
            <Option textStyle={s.option} optionSelected="C" />
            <Option textStyle={s.option} optionSelected="D" />
            <Button title="test_Toast" onPress={() => {
                SETtoast(toast === TOAST_CORRECTA ? TOAST_INCORRECTA : TOAST_CORRECTA)
            }
            } />
            {toast ?

                <SuperposeToast text={toast} toastStyle={{}} />
                :
                null
            }

        </View>


    )
}

const s = StyleSheet.create({

    image: {
        width: "100%",
        height: 270,
        resizeMode: "contain", /* por defecto cover */
        borderRadius: 10,
        marginVertical: 10
    },
    pregunta: {
        backgroundColor: "white",
        color: "black",
        marginVertical: 2,
        paddingVertical: 2,
        paddingHorizontal: 6,
        alignSelf: "center",
        textAlign: "center",
        fontSize: 24,
        borderRadius: 7
    },
    option: {
        backgroundColor: "#066e88",
        paddingVertical: 5,
        paddingHorizontal: 6,
        borderRadius: 7,
        marginVertical: 3,
        marginHorizontal: 2,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        fontSize: 18,
        width: "80%",
        alignSelf: "center"
    },

});



