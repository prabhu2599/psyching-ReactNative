import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "../config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ScreenTwelve(props) {
  return (
    <View style={styles.container}>
      <View style={styles.headingTop}>
        <Text style={styles.headerDramatic}>
          Stronger; also a call from PSYCHO
        </Text>
        <Text style={styles.headerDramatic}></Text>
      </View>
      <View style={styles.card}>
        <View style={styles.header}>
          <MaterialCommunityIcons name="cat" size={26} color="black" />
          <Text style={styles.headerCard}>06 NOV</Text>
          <MaterialCommunityIcons name="cat" size={26} color="black" />
        </View>
        <Text style={styles.description}>
          ... exercised for regular 15mins but things felt less intense.. surely
          getting fronted. frontend!? ab ye keyboard be Kia hai😂 meri galti nhi
          ... in sabse badhke today morning there was a notification jise mere
          face pe smile agaya.. yes obviously psycho related hi hai.. guess Karo
          kya hua.. Karo Karoo 😂🙆‍♂️.. okay Mai hi batata hun.. aaj subah jab mi
          utha .. there as a missed call from psychooo 🥺🥺🥺🥺🤧🤧🤧... 12:30am
          ko kia usne but shayad vo nhi janti ki ab mai vo of nhi Raha.. 😂
          features upgrade hue hain.. hahaa now I'm even more psychooo 🦸 I'm
          doing all those things Jo psycho karna chahti thi.. keeping early,
          getting up early, eating 20% less, 0 sugar, exercise, journaling, no
          porn :(, no social media aur Kuch special cheezen. 🥺 let's see ye
          psycho-pg Kitna tagda chalta hai 🌟 would love to see the
          transformation after a month ❤️
        </Text>
      </View>

      <TouchableOpacity
        style={styles.startBtn}
        onPress={() => props.navigation.navigate("Screen13")}
      >
        <View style={styles.flexrow}>
          <MaterialCommunityIcons name="cat" size={20} color="white" />
          <Text style={styles.startText}> Meow </Text>
          <MaterialCommunityIcons name="cat" size={20} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default ScreenTwelve;
