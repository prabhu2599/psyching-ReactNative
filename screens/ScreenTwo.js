import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { styles } from "../config/styles";

import { FontAwesome5 } from "@expo/vector-icons";

function ScreenTwo(props) {
  return (
    <View style={styles.container}>
      <View style={styles.headingTop}>
        <Text style={styles.headerDramatic}>Pehla Adhyay</Text>
        <Text style={styles.headerDramatic}>Nirantar </Text>
      </View>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.headerCard}>Oct 28th: Dopahar</Text>
        </View>
        <Text style={{ color: "gray", paddingBottom: 5 }}>
          Actually thoda se drama ke lie ek extra naam add karna tha and I went
          for T-may and khatam.
        </Text>
        <Text style={{ color: "gray", paddingBottom: 5 }}>
          Hahaaa.. agle aadhe ghante sunna pada ganda vala.. bohot daant khaya
          .. hehee
        </Text>
        <Text style={{ color: "gray", paddingBottom: 3 }}>
          par then I felt ki use bura laga :( aaaaaaaggrhrhhh... jo ki nhi lagna
          chahiye tha.. Mere vajahse bilkul nhiiii :( :( :(
        </Text>
        <Text style={{ color: "gray", paddingBottom: 5 }}>
          [ ho gai thi humse bhul.. kya kije :( ]
        </Text>
        <Text style={{ color: "gray", paddingBottom: 5 }}>
          Maine boldia tha ki yar vo naam sirf drama ke lie tha :/ jo ki nhi
          bolna tha as vo cheezon ko neutralize kardega but phir bhi I went for
          it but psycho to sunne ko ready hi nhi thi.. lol
        </Text>
        <Text style={{ color: "gray", paddingBottom: 5 }}>
          Ho gaya ab.. kya karen.. bura laga.. isilie call kia tha par psycho ne
          uthaya nhiii :|
        </Text>
        <Text style={{ color: "gray", paddingBottom: 5 }}>
          Koini.. ek din ayega and we'll make way more better moments.. bas yhi
          tha jisne mujhe rok dia :)
        </Text>
      </View>

      <TouchableOpacity
        style={styles.startBtn}
        onPress={() => props.navigation.navigate("ScreenThird")}
      >
        <View style={styles.flexrow}>
          <Text style={styles.startText}>THINGS WILL GET BETTER </Text>
          <FontAwesome5 name="laugh-beam" size={18} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default ScreenTwo;
