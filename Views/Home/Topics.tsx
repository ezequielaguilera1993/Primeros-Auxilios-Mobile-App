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
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { options, TopicsProps } from '../../App'
import Icon from 'react-native-ionicons'
import LanguageContext, { LanguageContextConsumer } from '../../Context/globalContext';
import { SText } from '../Components/Components';
import { EnumDeclaration, EnumMember, EnumType } from 'typescript';
import { questionnaireNamesTypes } from '../Play/Q&A';
import { StoreType } from '../../shared/Redux/Store';
import { useSelector } from 'react-redux';
import { RootState } from '../../shared/Redux/Reducers';




export function Topics({ route, navigation }: TopicsProps) {

    const store: StoreType = useSelector((state: RootState) => state).defaultReducer
    type values = {
        allQuestions: number;
        answeredQuestions: number;
    }
    const valuesInfartoAcv: values = store.questionnaires["InfartoAcv"].values
    const valuesRcp: values = store.questionnaires["Rcp"].values
    const valuesHeimlich: values = store.questionnaires["Heimlich"].values

    const valuesInfarto: values = store.questionnaires["Infarto"].values
    const valuesAcv: values = store.questionnaires["Acv"].values
    const valuesRcpBebés: values = store.questionnaires["RcpBebés"].values

    const valuesRcpAdultos: values = store.questionnaires["RcpAdultos"].values
    const valuesHeimlichBebés: values = store.questionnaires["HeimlichBebés"].values
    const valuesHeimlichAdultos: values = store.questionnaires["HeimlichAdultos"].values


    function handleOnPres(option: questionnaireNamesTypes) {
        navigation.navigate("Play", { option })
    }

    const Cuestionario: React.FC<{ label: string, option: questionnaireNamesTypes, values: values }> = ({ label, option }) => {

        return <TouchableHighlight style={{
            width: "70%"
        }} onPress={() => handleOnPres(option)} activeOpacity={.9} underlayColor="transparent" >
            {/* <Image style={s.image} source={{ uri: "https://picsum.photos/100" }} /> */}
            <View style={s.cuestionarioContainer}>
                <SText style={s.cuestionario}>{label}</SText>

                <SText style={s.cuestionario}>{valuesAcv.answeredQuestions + " / " + valuesAcv.allQuestions}</SText>
            </View>
        </TouchableHighlight>
    }
    // let languageContext = useContext(LanguageContext)
    // let isSpanish = languageContext.languageState.inSpanish

    // const [isSpanish, SETisSpanish] = useState<boolean>(false)

    // let changeLanguage = () => { languageContext.languageDispatch({ type: "CHANGE_LANGUAGE" }) }




    return (
        <ScrollView >

            <View style={{ alignItems: "center" }} >
                <SText customStyle={s.title}>Cuestionarios Generales</SText>

                <Cuestionario option={"InfartoAcv"} label="Infarto/Acv" />
                <Cuestionario option={"Rcp"} label="Rcp" />
                <Cuestionario option={"Heimlich"} label="Heimlich" />

                <SText customStyle={s.title}>Cuestionarios Especificos</SText>

                <Cuestionario option={"Infarto"} label="Infarto" />
                <Cuestionario option={"Acv"} label="Acv" />
                <Cuestionario option={"RcpBebés"} label="Rcp en Bebés" />
                <Cuestionario option={"RcpAdultos"} label="Rcp en Adultos" />
                <Cuestionario option={"HeimlichBebés"} label="Heimlich en Bebés" />
                <Cuestionario option={"HeimlichAdultos"} label="Heimlich en Adultos" />
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