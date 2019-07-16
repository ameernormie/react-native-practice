import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email(),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
});

class LoginForm extends Component {
  render() {
    return (
      <View
        style={{
          alignSelf: "stretch",
          minHeight: 200,
          marginHorizontal: 40
        }}
      >
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={values => console.log(values)}
          validationSchema={LoginSchema}
        >
          {props => {
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
                <Button onPress={this.props.handleSubmit} title="Submit" />
              </View>
            );
          }}
        </Formik>
      </View>
    );
  }
}

export default LoginForm;
