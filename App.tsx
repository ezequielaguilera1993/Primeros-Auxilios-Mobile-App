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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useReducer } from 'react';
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
import { Info } from './Views/Topics/Info';
import { Landing } from './Views/Landing';
import { Play } from './Views/Play';
import { Topics } from './Views/Topics/Courses';
import { StyleSheet, View } from 'react-native';

type StackParamList = {
  Landing: undefined;
  Home: undefined
  Topics: undefined;
  Info: undefined;
  Play: { name: string | undefined };
};
const Stack = createNativeStackNavigator<StackParamList>();

export type TopicsProps = NativeStackScreenProps<StackParamList, 'Topics'>;
export type PlayProps = NativeStackScreenProps<StackParamList, 'Play'>;
export type LandingProps = NativeStackScreenProps<StackParamList, 'Landing'>;
export type InfoProps = NativeStackScreenProps<StackParamList, 'Info'>;




const App = () => {
  const [languageState, languageDispatch] = useReducer(languageReducer, languageInitialState)

  const languageContextValues = {
    languageState,
    languageDispatch
  }

  function Home() {
    return (<>

      <Tab.Navigator screenOptions={{ headerShown: true }}>
        <Tab.Screen
          name="Topics"
          component={Topics}
          options={{ title: "Topics" }}

        />
        <Tab.Screen
          name="Info"
          component={Info}
          options={{ title: "Info" }}
        />

      </Tab.Navigator>

    </>)

  }

  return (
    <NavigationContainer  >
      <LanguageContextProvider value={languageContextValues}  >

        <Stack.Navigator initialRouteName="Landing" screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Landing"
            component={Landing}
          // options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="Play"
            component={Play}
            options={{ title: "Play" }}
          />

        </Stack.Navigator>


      </LanguageContextProvider>
    </NavigationContainer>

  )

};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black"

  }
})

export default App;
