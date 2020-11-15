import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styles } from "../config/styles";
import { AntDesign } from "@expo/vector-icons";

const image = require("../assets/bgClass2.png");

function Screen21(props) {
  return (
    <View style={styles.containerImageBackground}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.headingTop}>
          <Text style={(styles.headerDramatic, styles.textWithShadow)}>
            AUR KUCH DIN KYUUTTT BHI 🥺🥺🤧
          </Text>
        </View>
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            justifyContent: "space-between",
          }}
          style={styles.scrollView}
        ></ScrollView>
        <TouchableOpacity
          style={styles.startBtn}
          onPress={() => props.navigation.navigate("Screen22")}
        >
          <View style={styles.flexrow}>
            <AntDesign name="heart" size={18} color="pink" />
            <Text style={styles.startText}>🥺🥺 BOHOOOTT KYYUUUTTTTT 🥺🥺</Text>
            <AntDesign name="heart" size={18} color="pink" />
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

export default Screen21;
