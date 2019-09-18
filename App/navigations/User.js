import React from "react";
import { Icon } from "react-native-elements";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

// Screens

import HomeScreen from "../screens/Home";
import bookScreen from "../screens/books";
import accScreen from "../screens/MyAccount/accountsettings";
import registerScreen from "../screens/MyAccount/register";
import loginScreen from "../screens/MyAccount/login";

const homeScreenStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Home"
    })
  }
});

const bookScreenStack = createStackNavigator({
  book: {
    screen: bookScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Libros"
    })
  }
});

const accScreenStack = createStackNavigator({
  accountsettings: {
    screen: accScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Configuracion"
    })
  },
  register: {
    screen: registerScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Registro"
    })
  },
  login: {
    screen: loginScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Inicia Sesion"
    })
  }
});

const RootStack = createBottomTabNavigator({
  Home: {
    screen: homeScreenStack,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: "Inicio",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={25} color={tintColor} />
      )
    })
  },
  books: {
    screen: bookScreenStack,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: "Libros",
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="cart"
          type="material-community"
          size={25}
          color={tintColor}
        />
      )
    })
  },
  accountsettings: {
    screen: accScreenStack,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: "Cuenta",
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="account"
          type="material-community"
          size={25}
          color={tintColor}
        />
      )
    })
  }
});

export default createAppContainer(RootStack);
