/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import store from './shared/Redux/Store';
AppRegistry.registerComponent(appName,
    () => App
);
