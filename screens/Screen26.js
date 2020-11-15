import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "../config/styles";
import { Entypo } from "@expo/vector-icons";

var image = {
  uri:
    "https://media1.tenor.com/images/e997605afb37a628816c372ad50d4803/tenor.gif",
};

function Screen26(props) {
  return (
    <View style={styles.containerImageBackground}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.headingTop}>
          <Text style={(styles.header, { color: "white" })}>
            Btw EK CHEEZ BHUL HI GAYA 😂
          </Text>
          <Text style={(styles.headerDramatic, styles.textWithShadow)}>
            HAPPY CAKE DAY
          </Text>
        </View>
        <View
          style={{ flex: 1, alignSelf: "flex-end", justifyContent: "flex-end" }}
        >
          <View style={{ marginRight: 20 }}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Screen27")}
            >
              <View style={styles.cardOpacityIcon}>
                <Entypo name="cake" size={30} color="pink" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Screen26;
