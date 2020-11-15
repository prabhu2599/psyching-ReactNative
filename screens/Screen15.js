import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

function Screen15(props) {
  return (
    <View style={styles.container}>
      <View style={styles.headingTop}>
        <Text style={styles.headerDramatic}>ON TRACK,</Text>
        <Text style={styles.headerDramatic}>Tn u</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.header}>
          <MaterialCommunityIcons name="cat" size={28} color="black" />
          <Text style={styles.headerCard}>08 NOV</Text>
          <MaterialCommunityIcons name="cat" size={28} color="black" />
        </View>
        <Text style={styles.description}>
          I'm feeling more stronger ... was little worried about our dbms
          project... even Abhishek seemed little dull yesterday ... but behind
          this meal I really enjoyed the whole day thinking about psycho 😂😁. I
          remember saying 11 hrs yesterday, and she's still on my mind so 11+24
          hrs.. but babe.. it went on till 11 in night until I forced myself to
          sleep 😅 ... I'm grateful to have psyycchhoooooo in my life ... 🦸 I'm
          superman. hahaa
        </Text>
      </View>

      <TouchableOpacity
        style={styles.startBtn}
        onPress={() => props.navigation.navigate("Screen16")}
      >
        <View style={styles.flexrow}>
          <AntDesign name="smile-circle" size={16} color="white" />
          <Text style={styles.startText}> THODA SA DISTRACTION AB </Text>
          <AntDesign name="smile-circle" size={16} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Screen15;
