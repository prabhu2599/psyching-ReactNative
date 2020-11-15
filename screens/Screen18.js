import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

function Screen18(props) {
  return (
    <View style={styles.container}>
      <View style={styles.headingTop}>
        <Text style={styles.headerDramatic}>It's cheat day babe, </Text>
        <Text style={styles.headerDramatic}>Aaj Jane ki..</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.header}>
          <MaterialCommunityIcons name="cat" size={28} color="black" />
          <Text style={styles.headerCard}> 10 NOV - zid na karo </Text>
          <MaterialCommunityIcons name="cat" size={28} color="black" />
        </View>
        <Text style={styles.description}>
          I'm feeling more positive and happy... happy hona is a big thing 😂😂
          smiles ke peeche duniya ghum Lia but ab Jake Khush rehne Ka mauka Mila
          raha hai 🌻.. ... okaayyy so kal call Aya/Kia.. psycho.. and we called
          it a cheat day 😁😁😁 jahan hum dono baat kar sake but rules tute bhi
          na.. 😂 Jada mat haso.. ye bhi ho sakta hai 😂😂... haan to bas.. Jada
          intense baatien nhi ki but Jo bhi thi pyari thi ❤️❤️😊 Aur Psycho bhi
          bohot pyaari baatien Kar rhi thi 🥺😊 jaada has rhi thi [kuch kha lia
          lagta hai.. hahaa]😋 aur vo bohot kyyuuuttt thaaaa ❤️❤️😁😁😁
        </Text>
      </View>

      <TouchableOpacity
        style={styles.startBtn}
        onPress={() => props.navigation.navigate("Screen19")}
      >
        <View style={styles.flexrow}>
          <MaterialCommunityIcons name="flash" size={20} color="white" />
          <Text style={styles.startText}> AB JALDI JALDI KARTE HAI </Text>
          <MaterialCommunityIcons name="flash" size={20} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Screen18;
