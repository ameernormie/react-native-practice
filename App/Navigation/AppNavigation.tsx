import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import VideoStreaming from "./../Containers/LiveStream";
import LoginScreen from "../Containers/Login";

const AppStack = createStackNavigator(
  {
    LoginScreen: { screen: LoginScreen },
    VideoStream: { screen: VideoStreaming }
  },
  {
    initialRouteName: "LoginScreen",
    headerMode: "none"
  }
);

const AppNavigator = createAppContainer(AppStack);

export default AppNavigator;
