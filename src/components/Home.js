import React from "react";
import { Text, View, ImageBackground, TouchableOpacity } from "react-native";
import { styles } from "../../config/styles";
import { AntDesign } from "@expo/vector-icons";

var image = {
  uri:
    "https://media1.tenor.com/images/9264824efe4c0f26c6dbe44d7a8bb1a9/tenor.gif",
};

export default function Home(props) {
  return (
    <View style={styles.containerImageBackground}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.headingTop}>
          <Text style={(styles.header, { color: "white" })}>
            Knock Knock.. Who's there!!? Aree..
          </Text>
          <Text style={(styles.headerDramatic, styles.textWithShadow)}>
            Hey Psychoo !!
          </Text>
        </View>
        <View
          style={{ flex: 1, alignSelf: "flex-end", justifyContent: "flex-end" }}
        >
          <TouchableOpacity
            style={styles.startBtn}
            onPress={() => props.navigation.navigate("One")}
          >
            <View style={styles.flexrow}>
              <Text style={styles.startText}>AAJA PHIR </Text>
              <AntDesign name="heart" size={34} color="pink" />
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
