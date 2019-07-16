import React, { Component } from "react";
import LoginScreen from "./App/Containers/Login";
import AppNavigator from "./App/Navigation/AppNavigation";

interface Props {}
export default class App extends Component<Props> {
  render() {
    return <AppNavigator />;
  }
}
