import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { Button } from "react-native-elements";

import t from "tcomb-form-native";
const Form = t.form.Form;

import { LoginStruct, LoginOptions } from "../../forms/Login";
import { Image } from "react-native-elements";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      testFormValue: {
        user: "",
        password: ""
      }
    };
  }
  onChange = testFormValue => {
    this.setState({
      testFormValue
    });
  };
  sendFormTest = () => {
    const validate = this.refs.formTest.getValue();
    if (validate) {
      console.log("Sesion iniciada");
    } else {
      console.log("No se puede iniciar sesion");
    }
  };

  render() {
    const { testFormValue } = this.state;

    return (
      <View style={styles.viewBody}>
        <View style={styles.center}>
          <Image
            source={require("../../../images/mercadito.png")}
            style={styles.logo}
            PlaceholderContent={<ActivityIndicator />}
            resizeMode="contain"
          />
        </View>

        <Form
          ref="formTest"
          type={LoginStruct}
          options={LoginOptions}
          value={testFormValue}
          onChange={v => this.onChange(v)}
        />
        <Button title="Iniciar Sesion" onPress={this.sendFormTest.bind()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: "#F7F7F7"
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20
  },
  logo: {
    width: 200,
    height: 200
  }
});
