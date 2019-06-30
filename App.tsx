/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from "react-native";
import { Formik, Form, Field, ErrorMessage } from "formik";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            alignSelf: "stretch",
            minHeight: 200,
            marginHorizontal: 20
          }}
        >
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={values => console.log(values)}
          >
            {props => (
              <View>
                <TextInput
                  onChangeText={props.handleChange("email")}
                  onBlur={props.handleBlur("email")}
                  value={props.values.email}
                  style={{
                    backgroundColor: "grey",
                    height: 50,
                    marginBottom: 5,
                    paddingHorizontal: 10,
                    borderRadius: 5
                  }}
                />
                <TextInput
                  onChangeText={props.handleChange("password")}
                  onBlur={props.handleBlur("password")}
                  value={props.values.password}
                  style={{
                    backgroundColor: "grey",
                    height: 50,
                    marginBottom: 5,
                    paddingHorizontal: 10,
                    borderRadius: 5
                  }}
                />
                <Button onPress={props.handleSubmit} title="Submit" />
              </View>
            )}
          </Formik>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
