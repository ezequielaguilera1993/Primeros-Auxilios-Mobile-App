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
import React, { useContext, useEffect, useState } from 'react';
import { TopicsProps } from '../../App'
import Icon from 'react-native-ionicons'
import LanguageContext from '../../Context/globalContext';
import { SText } from '../Components/Components';
const BOOK_LIST = [
    { id: 1, title: "Libro primero", cover: "https://picsum.photos/100" },
    { id: 2, title: "Segundo libro", cover: "https://picsum.photos/101" },
    { id: 3, title: "El tercero", cover: "https://picsum.photos/102" },
]
export function Topics({ route, navigation }: TopicsProps) {
    const inSpanish = useContext(LanguageContext).languageState.inSpanish
    const languageContext = useContext(LanguageContext)

    function handleOnPres() {
        navigation.navigate("Play", { name: "vengo de Home yo kuakua" })
    }

    useEffect(() => {
    })

    const [books, SETbooks] = useState<typeof BOOK_LIST>(BOOK_LIST)

    return (
        <View >
            {/* <Button title="Go to next page" onPress={() => { navigation.navigate("Play", { name: "janee" }) }} /> */}
            <FlatList
                data={books}
                renderItem={
                    (i) =>
                        <TouchableHighlight onPress={handleOnPres}>
                            <View style={styles.container}>
                                <Image style={styles.image} source={{ uri: i.item.cover }} />
                                <SText >{i.item.title}</SText>
                                <Icon style={styles.icon} name="arrow-dropright"></Icon>
                            </View>
                        </TouchableHighlight>
                }
                keyExtractor={item => item.id.toString()}
                ListHeaderComponent={<SText> {inSpanish ? "Lista de libros" : "BooksList"}</SText>}
                ListFooterComponent={<View>
                    <Button title="change Language" onPress={() => { languageContext.languageDispatch({ type: "CHANGE_LANGUAGE" }) }} />
                    <SText>_______Footer________</SText>
                </View>}
            >
            </FlatList>
        </View>
    )
}



const styles = StyleSheet.create({
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
    image: {
        width: 50,
        height: 50,
        resizeMode: "cover", /* por defecto cover */
        marginRight: 5
    },
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