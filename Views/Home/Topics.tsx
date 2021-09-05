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





export function Topics({ route, navigation }: TopicsProps) {

    const Cuestionario: React.FC<{ label: string, option: options }> = ({ label, option }) => {

        return <TouchableHighlight style={{
            width: "70%"
        }} onPress={() => handleOnPres(option)} activeOpacity={.9} underlayColor="transparent" >
            {/* <Image style={s.image} source={{ uri: "https://picsum.photos/100" }} /> */}
            <View style={s.cuestionarioContainer}>
                <SText style={s.cuestionario}>{label}</SText>
            </View>
        </TouchableHighlight>
    }
    // let languageContext = useContext(LanguageContext)
    // let isSpanish = languageContext.languageState.inSpanish

    function handleOnPres(option: options) {

        navigation.navigate("Play", { option })

    }

    // const [isSpanish, SETisSpanish] = useState<boolean>(false)

    // let changeLanguage = () => { languageContext.languageDispatch({ type: "CHANGE_LANGUAGE" }) }




    return (
        <ScrollView >



            <View style={{ alignItems: "center" }} >
                <SText customStyle={s.title}>Cuestionarios Generales</SText>

                <Cuestionario option={options.InfartoAcv} label="Infarto/Acv" />
                <Cuestionario option={options.Rcp} label="Rcp" />
                <Cuestionario option={options.Heimlich} label="Heimlich" />

                <SText customStyle={s.title}>Cuestionarios Especificos</SText>

                <Cuestionario option={options.Infarto} label="Infarto" />
                <Cuestionario option={options.Acv} label="Acv" />
                <Cuestionario option={options.RcpBebés} label="Rcp en Bebés" />
                <Cuestionario option={options.RcpAdultos} label="Rcp en Adultos" />
                <Cuestionario option={options.HeimlichBebés} label="Heimlich en Bebés" />
                <Cuestionario option={options.HeimlichAdultos} label="Heimlich en Adultos" />
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
        paddingHorizontal: 6,
        borderRadius: 7,
        marginHorizontal: 2,
        marginVertical: 2,
        marginBottom: 4,
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