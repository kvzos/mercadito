import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Avatar } from "react-native-elements";
import { ListItem } from "react-native-elements";
import { SocialIcon } from "react-native-elements";
import { Button } from "react-native-elements";

export default class Books extends Component {
  render() {
    return (
      <View style={styles.viewBody}>
        <Image
          style={styles.img}
          source={{
            uri:
              "https://http2.mlstatic.com/libro-programacion-en-c-de-byron-usado-D_NQ_NP_995831-MLM28821320364_112018-F.jpg"
          }}
        />
        <Text style={styles.fontStyleSize}>Programacion en C</Text>
        <Text style={{ fontSize: 18 }}>Publicado por Alexis Leos</Text>
        <Text style={{ fontSize: 9 }}>
          Facultad de Ingenieria Mecanica y Electrica
        </Text>
        <Text style={{ fontSize: 28 }}>
          Precio:
          <Text style={{ fontWeight: "bold", paddingTop: 30 }}> $80 </Text>
        </Text>
        <SocialIcon
          light
          raised={true}
          type="whatsapp"
          style={{ backgroundColor: "#66CD00", width: 100 }}
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
    paddingTop: 10
  },
  img: {
    width: 250,
    height: 300,
    borderRadius: 10
  },
  fontStyleSize: {
    fontSize: 35,
    paddingTop: 20
  },
  info: {}
});
