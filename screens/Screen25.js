import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "../config/styles";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
var image = { uri: "https://picsum.photos/400/800" };

function Screen25(props) {
  return (
    <View style={styles.containerImageBackground}>
      <ImageBackground source={image} style={styles.image} blurRadius={3}>
        <View style={styles.headingTop}>
          <Text style={(styles.headerDramatic, styles.textWithShadow)}>
            BAS KARTE HAIN YAAR.. hahaa
          </Text>
        </View>
        <View style={styles.cardOpacity}>
          <View style={styles.header}>
            <Text style={styles.headerCard}>Call karna phir kal </Text>
            <Ionicons name="ios-heart-half" size={28} color="pink" />
          </View>
          <Text style={styles.description}>
            Batana padega ye bhi ab.. hahaa.. bohot kuch us taraf bhi planned
            hai [us taraf matlab call ki naat kar raha hun :p]
          </Text>
          <Text style={styles.description}>
            We'll have a special call.. maza aayega as I said ;p ..
          </Text>
        </View>
        <TouchableOpacity
          style={styles.startBtn}
          onPress={() => props.navigation.navigate("Screen26")}
        >
          <View style={styles.flexrow}>
            <AntDesign name="heart" size={18} color="pink" />
            <Text style={styles.startText}> Mai waiting :( </Text>
            <AntDesign name="heart" size={18} color="pink" />
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

export default Screen25;
