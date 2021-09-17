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
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { options, TopicsProps } from '../../App'
import Icon from 'react-native-ionicons'
import { SText, SAlert } from '../Components/Components';
import { EnumDeclaration, EnumMember, EnumType } from 'typescript';
import { questionnaireNamesTypes } from '../Play/Q&A/Q&A';
import { questionnaireValues, StoreType } from '../../Redux/Store';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Redux/Reducers';

import { questionnaireProperties } from '../../Redux/Store';
import { actionType, reset } from '../../Redux/Actions/Actions';

export function Topics({ route, navigation }: TopicsProps) {
    const dispatch = useDispatch()

    const store: StoreType = useSelector((state: RootState) => state).defaultReducer
    type valuesType = {
        allQuestions: number;
        answeredQuestions: number;
    }

    const valuesInfartoAcv: questionnaireValues = store.questionnaires["InfartoAcv"].values
    const valuesRcp: questionnaireValues = store.questionnaires["Rcp"].values
    const valuesHeimlich: questionnaireValues = store.questionnaires["Heimlich"].values

    const valuesInfarto: questionnaireValues = store.questionnaires["Infarto"].values
    const valuesAcv: questionnaireValues = store.questionnaires["Acv"].values
    const valuesRcpBebés: questionnaireValues = store.questionnaires["RcpBebés"].values

    const valuesRcpAdultos: questionnaireValues = store.questionnaires["RcpAdultos"].values
    const valuesHeimlichBebés: questionnaireValues = store.questionnaires["HeimlichBebés"].values
    const valuesHeimlichAdultos: questionnaireValues = store.questionnaires["HeimlichAdultos"].values


    function handleOnPres(option: questionnaireNamesTypes) {
        navigation.navigate("Play", { option })
    }

    const Cuestionario: React.FC<{ label: string, option: questionnaireNamesTypes, values: questionnaireValues }> = ({ label, option, values }) => {

        return <TouchableHighlight style={{
            width: "70%"
        }} onPress={() => handleOnPres(option)} activeOpacity={.9} underlayColor="transparent" >
            {/* <Image style={s.image} source={{ uri: "https://picsum.photos/100" }} /> */}
            <View style={s.cuestionarioContainer}>
                <SText customStyle={s.cuestionario}>{label}</SText>

                <SText customStyle={s.cuestionario}>{values.answeredQuestions.length + " / " + values.allQuestions}</SText>
            </View>
        </TouchableHighlight>
    }




    return (
        <ScrollView >

            <View style={{ alignItems: "center", padding: 0 }} >
                <SText customStyle={s.title}>Cuestionarios Generales</SText>

                <Cuestionario values={valuesInfartoAcv} option={"InfartoAcv"} label="Infarto/Acv" />
                <Cuestionario values={valuesRcp} option={"Rcp"} label="Rcp" />
                <Cuestionario values={valuesHeimlich} option={"Heimlich"} label="Heimlich" />

                <SText customStyle={s.title}>Cuestionarios Especificos</SText>

                <Cuestionario values={valuesInfarto} option={"Infarto"} label="Infarto" />
                <Cuestionario values={valuesAcv} option={"Acv"} label="Acv" />
                <Cuestionario values={valuesRcpBebés} option={"RcpBebés"} label="Rcp en Bebés" />
                <Cuestionario values={valuesRcpAdultos} option={"RcpAdultos"} label="Rcp en Adultos" />
                <Cuestionario values={valuesHeimlichBebés} option={"HeimlichBebés"} label="Heimlich en Bebés" />
                <Cuestionario values={valuesHeimlichAdultos} option={"HeimlichAdultos"} label="Heimlich en Adultos" />

                <SAlert title="Reestablecer preguntas" label="Esta acción eliminará todas las preguntas contestadas correctamente, dejando los datos en cero." alertButtons={
                    [
                        { text: "Borra todo chango", onPress: () => dispatch<actionType>(reset()) },
                        { text: "Nooo, cancelar!" },

                    ]
                }  >
                    Reestablecer
                </SAlert>
            </View>

        </ScrollView>
    )
}



const s = StyleSheet.create({
    title: {
        backgroundColor: "#066e88",
        paddingVertical: 5,
        paddingHorizontal: 6,
        borderRadius: 7,
        marginHorizontal: 2,
        marginVertical: 20,
        marginBottom: 6,
        fontSize: 18,
        width: "80%",
        textAlign: "center"
    },
    cuestionarioContainer: {
        backgroundColor: "#313131",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 7,
        marginHorizontal: 2,
        marginVertical: 2,
        marginBottom: 4,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    cuestionario: {
        fontSize: 16,
        textAlign: "center"
    },
    image: {
        width: 60,
        height: 60,
        resizeMode: "contain", /* por defecto cover */
        borderRadius: 10,
        marginVertical: 10
    },
})