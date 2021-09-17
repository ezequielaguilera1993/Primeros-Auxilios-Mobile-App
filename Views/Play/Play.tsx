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
import { allQuestionnaires } from './Q&A/Q&A'
const { InfartoAcv, Infarto, Acv, Heimlich, HeimlichBebés, HeimlichAdultos, Rcp, RcpBebés, RcpAdultos } = allQuestionnaires


import { QA, iPregunta } from './Q&A/Q&A';
import { isIterationStatement } from 'typescript';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from '../../Redux/Store';
import { RootState } from '../../Redux/Reducers';
import { actionType, addOneAnswered, reset, } from '../../Redux/Actions/Actions';
import { SuperposeToast } from './SuperposeToast';


let goodOnes = 0


export function Play({ route, navigation }: PlayProps) {
    const routeParamQuestionnaireName = route.params.option
    useEffect(() => { goodOnes = 0 }, [])

    const store: StoreType = useSelector((state: RootState) => state).defaultReducer
    const currentQuestionnaireValues = store.questionnaires[routeParamQuestionnaireName].values
    const { allQuestions, answeredQuestions } = currentQuestionnaireValues

    const dispatch = useDispatch();

    const TOAST_CORRECTA = "Correcta 😎"
    const TOAST_INCORRECTA = "Incorrecta😕"
    const [toast, SETtoast] = useState<typeof TOAST_CORRECTA | typeof TOAST_INCORRECTA | null>(null)

    let [cursor, SETcursor] = useState<number>(0)

    let choosenStack: QA;
    switch (routeParamQuestionnaireName) {
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


    const Option: React.FC<{ textStyle?: TextStyle, optionSelected: "A" | "B" | "C" | "D" }> = ({ optionSelected, textStyle }) => {

        async function checkOption(choosenOption: string) {

            if (choosenOption === currentQuestion.x) {
                await SETtoast(null)
                SETtoast("Correcta 😎");
                ++goodOnes
                if (!answeredQuestions.includes(cursor)) {

                    dispatch<actionType>(addOneAnswered({ questionnaireName: routeParamQuestionnaireName, questionNumber: cursor }))

                }
            }

            else {
                await SETtoast(null)
                SETtoast("Incorrecta😕");
            }

            if (cursor === choosenStack.length - 1) //Esta en lo ultimo? Volve al Home
            {
                setTimeout(() => {
                    if (goodOnes > 0) {
                        Alert.alert(`Contestaste ${goodOnes} ${goodOnes === 1 ? "pregunta" : "preguntas"} bien de un total de ${choosenStack.length}`)
                    }
                    else Alert.alert(`No contestaste ninguna pregunta bien.`, 'Suerte la próxima🍀')

                    navigation.navigate("Home")
                }
                    , 100)
            }
            else SETcursor(++cursor) //sino, corre el cursor
        }

        return <TouchableHighlight style={{ height: "7.4%" }} onPress={() => { checkOption(optionSelected) }} activeOpacity={.9} underlayColor="transparent" >
            <SText customStyle={{ ...textStyle, flex: 1 }}>{currentQuestion.o[optionSelected]}</SText>
        </TouchableHighlight>
    }


    return (

        <View style={{ flex: 1 }}>
            <Image style={s.image} source={{ uri: currentQuestion.i }} />

            <SText customStyle={s.pregunta}>{currentQuestion.p}</SText>

            <Option textStyle={s.option} optionSelected="A" />
            <Option textStyle={s.option} optionSelected="B" />
            <Option textStyle={s.option} optionSelected="C" />
            <Option textStyle={s.option} optionSelected="D" />
            {/* <Button title="test_Toast" onPress={() => {
                    SETtoast(toast === TOAST_CORRECTA ? TOAST_INCORRECTA : TOAST_CORRECTA)
                }
                } /> */}
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
        height: "50%",
        resizeMode: "contain", /* por defecto cover */
        borderRadius: 10,
    },
    pregunta: {
        backgroundColor: "white",
        color: "black",
        paddingVertical: 2,
        paddingHorizontal: 6,
        alignSelf: "center",
        textAlign: "center",
        fontSize: 24,
        borderRadius: 7,
        marginBottom: 2,


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
        alignSelf: "center",
    },

});



