import * as React from "react";
import { Fontisto } from "@expo/vector-icons";
import { Text, View, ImageBackground, TouchableOpacity } from "react-native";
import { styles } from "../config/styles";

var image = { uri: "https://picsum.photos/400/800" };

export default function One(props) {
  return (
    <View style={styles.containerImageBackground}>
      <ImageBackground source={image} style={styles.image} blurRadius={3}>
        <View style={styles.headingTop}>
          <Text style={(styles.headerDramatic, styles.textWithShadow)}>
            SABSE PEHLE RULES
          </Text>
        </View>
        <View style={styles.cardOpacity}>
          <View style={styles.header}>
            <Text style={styles.headerCard}>Rules : </Text>
          </View>
          <Text style={styles.descriptionBullets}>
            1. Read all the rules before proceeding aage
          </Text>
          <Text style={styles.descriptionBullets}>
            2. Cause you know rules are important ;)
          </Text>
          <Text style={styles.descriptionBullets}>
            3. Aur haan don't be ziddi bacha... just follow all the chotu chotu
            rules..
          </Text>
        </View>
        <View style={styles.cardOpacity}>
          <View style={styles.header}>
            <Text style={styles.headerCard}>Wallpaper pasand aya ?? </Text>
          </View>
          <Text style={styles.description}>
            Nhi aya? just close this tab and vapas link open kar.. you'll get
            new wally.. Nice naa.. hehee.. once satisfied.. Click next phir..
          </Text>
          <Text style={styles.description}>
            Remember, no second chances yahan.. aage chale gai to chale gai..
            hehee
          </Text>
        </View>
        <TouchableOpacity
          style={styles.startBtn}
          onPress={() => props.navigation.navigate("Login")}
        >
          <Text style={styles.startText}>AAGE BHADHTE HAIN PHIR?</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
