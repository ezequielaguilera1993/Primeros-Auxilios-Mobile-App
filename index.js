/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import * as Sentry from "@sentry/react-native";

//Sentry error tracking
Sentry.init({
    dsn: "https://98f95e5a1fec496ca1a3d3bd5b930a42@o997602.ingest.sentry.io/5955944",

});


AppRegistry.registerComponent(appName,
    () => App
);
