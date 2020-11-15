import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ScreenEight(props) {
  return (
    <View style={styles.container}>
      <View style={styles.headingTop}>
        <Text style={styles.headerDramatic}>1ST DAY</Text>
        <Text style={styles.headerDramatic}>1ST SHOW</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.header}>
          <MaterialCommunityIcons name="paw" size={26} color="black" />

          <Text style={styles.headerCard}>03 Nov 2020 </Text>
          <MaterialCommunityIcons name="paw" size={26} color="black" />
        </View>
        <Text style={styles.description}>
          1st day and really Maza aaya....super confident about everything
          that's going to come in my way. Psycho is the only challenge which I
          need to take care of. Aur vo bhi maze se karna hai as I can do it. I'm
          sweating a lot now, didn't expect ki exercise itna intense hoga.. I'm
          pretty strong and confident about today's exam although I didn't even
          prepare for it. I'll just go and rock it. I don't know what to reflect
          for 20 mins 😅 yttyyttyyyt(screen pe sweat girke khud type karlia and
          I didnt delete that.. lol) and my keyboard is typing for me 😂.. happy
          to see things working now 😎 and I made them work. Psycho is
          intelligent, dimak hai usme and that's something which I like in her..
          just dimak ko right situation Mai use kare.. she'll be the deadliest
          🦸 .... omg.. okay so leaving the place with a smile to face the world
          🌟😀😀😀😀
        </Text>
      </View>

      <TouchableOpacity
        style={styles.startBtn}
        onPress={() => props.navigation.navigate("ScreenNine")}
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

export default ScreenEight;
