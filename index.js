/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { Navigation } from "react-native-navigation";
import { name as appName } from "./app.json";

Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "navigation.playground.WelcomeScreen"
      }
    }
  });
});
