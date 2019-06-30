import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Formik } from "formik";

const validate = (values: { email: string; password: string }, props: any) => {
  let errors = { email: "", password: "" };
  if (!values.email) {
    errors.email = "Email cannot be empty";
  }
  if (!values.password) {
    errors.password = "Password required";
  }
  console.log("values and props in validate ", values, props);

  return errors;
};

class LoginScreen extends Component {
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
            validate={validate}
          >
            {props => {
              console.log("props ", props);
              return (
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
              );
            }}
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
  }
});

export default LoginScreen;
