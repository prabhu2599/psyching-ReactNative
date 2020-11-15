import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { styles } from "../config/styles";

function ScreenOne(props) {
  return (
    <View style={styles.container}>
      <View style={styles.headingTop}>
        <Text style={styles.headerDramatic}>Pehla Adhyay</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.headerCard}>Oct 28th: Subah ka samay</Text>
        </View>
        <Text style={{ color: "gray", paddingBottom: 5 }}></Text>
        <Text style={{ color: "gray", paddingBottom: 5 }}>
          Socha tha agar mai milunga use.. meri dil ki baatien kahunga use.. :D
        </Text>
        <Text style={{ color: "gray", paddingBottom: 5 }}>
          lol. :p par situation kuch aur hi bol raha tha.. aur as decided.. kuch
          bade jhagde hone hi vale the..
        </Text>
        <Text style={{ color: "gray", paddingBottom: 5 }}>
          Kuch well placed words.. aur aag lag hi gai.. hahaa.
        </Text>
        <Text style={{ color: "gray", paddingBottom: 5 }}>
          Ab jab jungle mai aag lagaoge to ek ped jal ke ruk sakta hai.. ho
          sakta hai.. yaa poora jungle hi ud jae .. :p keh nhi sakte.. so you
          have to be prepared.
        </Text>
        <Text style={{ color: "gray", paddingBottom: 5 }}>
          Aur mai tha vahi..hehee.. bas ek cheez ka bura laga :(
        </Text>
      </View>

      <TouchableOpacity
        style={styles.startBtn}
        onPress={() => props.navigation.navigate("ScreenTwo")}
      >
        <View style={styles.flexrow}>
          <Text style={styles.startText}>AUR KYA THA VO? </Text>
          <FontAwesome5 name="sad-cry" size={18} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default ScreenOne;
