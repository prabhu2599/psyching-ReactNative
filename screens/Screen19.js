import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

function Screen19(props) {
  return (
    <View style={styles.container}>
      <View style={styles.headingTop}>
        <Text style={styles.headerDramatic}>Exams on my head</Text>
        <Text style={styles.headerDramatic}>but psycho se jaada nhi</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.header}>
          <MaterialCommunityIcons name="heart-flash" size={28} color="black" />
          <Text style={styles.headerCard}> AB SAB FAST-FAST </Text>
          <MaterialCommunityIcons name="heart-flash" size={28} color="black" />
        </View>
        <Text style={styles.description}>
          talked to her 2 din pehle.. running kam on time have to work on app
          too.. . Surely I'm seeing a positive push everyday. lucky to have you
          psycho🦸 .. let's read for exam as Kuch hi Der Mai hai.. 2 hrs to go
          😋 🐈
        </Text>
        <Text style={styles.description}>
          I have many aise kyutt kyutt entries.. kisi din padhna.. hahaa.. I
          think ye cheezen bohot thi for our memories.. and isse pehle ki tu
          kahin aur distract ho jaye.. kuch intresting karte hain... :D
        </Text>
      </View>

      <TouchableOpacity
        style={styles.startBtn}
        onPress={() => props.navigation.navigate("Screen20")}
      >
        <View style={styles.flexrow}>
          <Feather name="codesandbox" size={18} color="white" />
          <Text style={styles.startText}> TO CHALE PHIR !! </Text>
          <Feather name="codesandbox" size={18} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Screen19;
