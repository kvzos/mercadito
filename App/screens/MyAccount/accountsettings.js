import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";

export default class Account extends Component {
  goToScreen = nameScreen => {
    console.log(nameScreen);
    this.props.navigation.navigate(nameScreen);
  };

  render() {
    return (
      <View style={styles.viewBody}>
        <Text>Account Settings</Text>
        <Button title="Registro" onPress={() => this.goToScreen("register")} />
        <Button
          title="Iniciar Sesion"
          onPress={() => this.goToScreen("login")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
