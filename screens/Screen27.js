import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { styles } from "../config/styles";

var image = {
  uri:
    "https://media1.tenor.com/images/0d84bb3bd9afe4c6388d52754c83a67b/tenor.gif",
};
function Screen27(props) {
  return (
    <View style={styles.containerImageBackground}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.headingTop}>
          <Text style={(styles.header, { color: "white", marginLeft:2 })}>
            And here's a cute soya cat, for no reason..😂😂
          </Text>
          <Text style={(styles.headerDramatic, styles.textWithShadow)}>
            THANKS FOR YOUR PATIENCE PSYCHOOOOO
          </Text>
          <Text style={(styles.header, { color: "white" })}></Text>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Screen27;
