import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "../config/styles";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

function Screen16(props) {
  return (
    <View style={styles.container}>
      <View style={styles.headingTop}>
        <Text style={styles.headerDramatic}>EK SAPNA</Text>
        <Text style={styles.headerDramatic}>AISA BHI</Text>
      </View>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: "space-between",
        }}
        style={styles.scrollView}
      >
        <View style={styles.cardScrollable}>
          <View style={styles.header}>
            <Octicons name="alert" size={28} color="tomato" />
            <Text style={styles.headerCard}> NSFW ALERT !!! BACHKE </Text>
            <Octicons name="alert" size={28} color="tomato" />
          </View>
          <Text style={styles.description}>
            So, exactly ye distaction vale parts bhi day wise placed hain.. they
            aren't random... theeke..
          </Text>
          <Text style={styles.description}>
            Okay, so usi din raat ko I was just slipping into neend and dimak
            mai random thoughts chal rahe the.. and no-porn vala scene chal raha
            tha you know I was just not allowing any other thoughts expect for
            those which had you in them. To ab hua ek hybrid.. lol. Maine just
            aankhe band kie the and mere face pe smile tha.. yes psycho thi
            usme.. but the frame was pretty close.. like just on her face.. and
            it was a first-person scene (first-person samajhti haina.. hehe).
            And jab tak mai kuch smajh pata, suddenly I realized myself being in
            the scene.. I was on top of psycho.. and ye dekhke mere face pe
            smile thoda sa aur badh gaya.. lol... we were just getting
            comfortable vahan.. some 5-6 seconds and... wait... waiiiitttttt...
            i was like nahinnnnnnnn rukkoooo.. and ankhe khuli .. haahaaa.. ye
            kya thaa hahaa :p
          </Text>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.startBtn}
        onPress={() => props.navigation.navigate("Screen17")}
      >
        <View style={styles.flexrow}>
          <AntDesign name="smile-circle" size={20} color="white" />
          <Text style={styles.startText}> Mai-aaun </Text>
          <AntDesign name="smile-circle" size={20} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
}
export default Screen16;
