import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../config/styles";
import { Feather } from "@expo/vector-icons";

function ScreenFour(props) {
  return (
    <View style={styles.container}>
      <View style={styles.headingTop}>
        <Text style={styles.headerDramatic}>Doosra Adhyay</Text>
        <Text style={styles.headerDramatic}>The After-Effects</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.headerCard}>Nov 1-2 ki baat hai</Text>
        </View>
        <Text style={({ color: "gray", paddingBottom: 5 }, styles.description)}>
          You know, meri aadat hai.. that whenever I'm going through some phase,
          I always do ek cheez..
        </Text>
        <Text style={({ color: "gray", paddingBottom: 5 }, styles.description)}>
          Kuch aisa, jo mai tere lie karun.. jo mere sath reh jaye.. aur vapas
          in lamhon ki yaad dilaye :)
        </Text>
        <Text style={({ color: "gray", paddingBottom: 5 }, styles.description)}>
          [ memories bring back.. memories bring back you (laal dil) ]
        </Text>
        <Text style={({ color: "gray", paddingBottom: 5 }, styles.description)}>
          So started to plan many things.. that I'll do while we are in this
          doori vala state :D
        </Text>
        <Text style={({ color: "gray", paddingBottom: 5 }, styles.description)}>
          Kuch mentally behtar banane vale.. aur kuch physically better banane
          vale :p
        </Text>
      </View>

      <TouchableOpacity
        style={styles.startBtn}
        onPress={() => props.navigation.navigate("ScreenFive")}
      >
        <View style={styles.flexrow}>
          <Text style={styles.startText}>YEH DOORIYAN!? SHAYAD? </Text>
          <Feather name="phone-off" size={16} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default ScreenFour;
