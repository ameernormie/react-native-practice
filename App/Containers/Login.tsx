import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Formik } from "formik";
import LoginForm from "./LoginForm";

const validate = (values: { email: string; password: string }, props: any) => {
  let errors = { email: "", password: "" };
  if (!values.email) {
    errors.email = "Email cannot be empty";
  }
  if (!values.password) {
    errors.password = "Password required";
  }

  return errors;
};

class LoginScreen extends Component {
  handleSubmit = () => {
    this.props.navigation.navigate("VideoStream");
  };

  render() {
    return (
      <View style={styles.container}>
        <LoginForm handleSubmit={this.handleSubmit} />
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
  }
});

export default LoginScreen;
