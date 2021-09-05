/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useReducer, useRef } from 'react';
const Tab = createBottomTabNavigator()

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationTree } from 'typescript';
import { LanguageContextProvider, languageInitialState, languageReducer } from './Context/globalContext';
import { Info } from './Views/Home/Info';
import { Landing } from './Views/Landing';
import { Play } from './Views/Play/Play';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { Topics } from './Views/Home/Topics';
export enum options {
  InfartoAcv,
  Infarto,
  Acv,
  Heimlich,
  HeimlichBebés,
  HeimlichAdultos,
  Rcp,
  RcpBebés,
  RcpAdultos,

}
type StackParamList = {
  Landing: undefined;
  Home: undefined
  Topics: undefined;
  Info: undefined;
  Play: { option: options };
};
const Stack = createNativeStackNavigator<StackParamList>();

export type TopicsProps = NativeStackScreenProps<StackParamList, 'Topics'>;
export type PlayProps = NativeStackScreenProps<StackParamList, 'Play'>;
export type LandingProps = NativeStackScreenProps<StackParamList, 'Landing'>;
export type InfoProps = NativeStackScreenProps<StackParamList, 'Info'>;


const styles = StyleSheet.create({
  container: {
    // backgroundColor: ""

  }
})

const App: React.FC = () => {


  const [languageState, languageDispatch] = useReducer(languageReducer, languageInitialState)

  const languageContextValues = {
    languageState,
    languageDispatch
  }





  function Home() {

    return (
      <Tab.Navigator
        screenOptions={{ tabBarActiveBackgroundColor: "rgb(40, 40, 40)", tabBarInactiveBackgroundColor: "rgb(30, 30, 30)" }}
      >
        <Tab.Screen
          name="Topics"
          component={Topics}
          options={{ tabBarIcon: () => <Text style={{ color: "white" }}>Topics</Text>, title: "", tabBarShowLabel: false }}
        />
        <Tab.Screen
          name="Info"
          component={Info}
          options={{ tabBarIcon: () => <Text style={{ color: "white" }}>Info</Text>, title: "", tabBarShowLabel: false }}
        />
      </Tab.Navigator>
    )

  }

  const appColor = "rgb(20, 20, 20)"
  return (
    <LanguageContextProvider value={languageContextValues}>
      <View style={{ flex: 1, backgroundColor: appColor }}>
        <NavigationContainer theme={{
          ...DarkTheme, colors: {
            ...DarkTheme.colors,
            background: appColor,
          }
        }}>
          <Stack.Navigator initialRouteName="Landing" screenOptions={{ headerShown: false, contentStyle: {} }}>
            <Stack.Screen
              name="Landing"
              component={Landing}
            />

            <Stack.Screen
              name="Home"
              component={Home}
            // options={{ contentStyle: { backgroundColor: "red" } }}
            />
            <Stack.Screen
              name="Play"
              component={Play}
              options={{ title: "Play" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </LanguageContextProvider>
  )

};



export default App;
