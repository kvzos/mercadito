import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";
import { Avatar } from "react-native-elements";
import { Rating, AirbnbRating } from "react-native-elements";

export default class Account extends Component {
  goToScreen = nameScreen => {
    console.log(nameScreen);
    this.props.navigation.navigate(nameScreen);
  };

  render() {
    return (
      <View style={styles.viewBody}>
        <View style={styles.margin}>
          <Avatar
            size="xlarge"
            rounded
            source={{
              uri:
                "https://scontent-qro1-1.xx.fbcdn.net/v/t1.15752-9/70767028_2320064724975919_650555634013437952_n.png?_nc_cat=105&_nc_oc=AQk772oQL8LNkiHH8IbeO6L-aPRT2AY7ER5_s_zdQrRev1VtuzwyOtntjxHUNY4fujY&_nc_ht=scontent-qro1-1.xx&oh=f256636341048a51c5a06aa9cf92bbc9&oe=5DEFEDC9"
            }}
            showEditButton
          />
        </View>
        <Text style={styles.fontStyleName}> Alexis Leos </Text>
        <Rating
          showRating
          onFinishRating={this.ratingCompleted}
          style={{ paddingVertical: 10 }}
        />
        <View style={styles.info}>
          <Text style={styles.fontStyleInfo}>
            Facultad de Ingenieria Mecanica y Electrica
          </Text>
          <Text style={styles.fontStyleInfo}>81 2218 4821</Text>
          <Text style={styles.fontStyleInfo}>alexiszermeno@elpro.com</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    alignItems: "center"
  },
  margin: {
    marginTop: 30
  },
  fontStyleName: {
    fontSize: 32,
    paddingBottom: 10
  },
  fontStyleInfo: {
    fontSize: 16,
    marginLeft: 5,
    paddingBottom: 12
  },
  info: {
    alignContent: "flex-start",
    marginRight: 40,
    paddingTop: 40
  }
});
