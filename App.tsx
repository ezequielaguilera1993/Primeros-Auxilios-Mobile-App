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
import { Courses } from './Views/Home/Courses';
import { Info } from './Views/Home/Info';
import { Landing } from './Views/Landing';
import { Play } from './Views/Play';

type StackParamList = {
  Landing: undefined;
  Home: undefined
  Courses: undefined;
  Info: undefined;
  Play: { name: string | undefined };
};
const Stack = createNativeStackNavigator<StackParamList>();

export type CoursesProps = NativeStackScreenProps<StackParamList, 'Courses'>;
export type PlayProps = NativeStackScreenProps<StackParamList, 'Play'>;
export type LandingProps = NativeStackScreenProps<StackParamList, 'Landing'>;
export type InfoProps = NativeStackScreenProps<StackParamList, 'Info'>;




const App = () => {
  const [languageState, languageDispatch] = useReducer(languageReducer, languageInitialState)

  const languageContextValues = {
    languageState,
    languageDispatch
  }

  return (
    <NavigationContainer>
      <LanguageContextProvider value={languageContextValues}>

        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen
            name="Landing"
            component={Landing}
          />

          <Stack.Screen
            name="Home"
            component={() =>
              <>

                <Tab.Navigator>
                  <Tab.Screen
                    name="Courses"
                    component={Courses}
                    options={{ title: "Courses" }}

                  />
                  <Tab.Screen
                    name="Info"
                    component={Info}
                    options={{ title: "Info" }}
                  />

                </Tab.Navigator>

              </>
            }
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



export default App;
