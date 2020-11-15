import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

function Screen17(props) {
  return (
    <View style={styles.container}>
      <View style={styles.headingTop}>
        <Text style={styles.headerDramatic}>lot better,</Text>
        <Text style={styles.headerDramatic}>it's dragon time</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.header}>
          <MaterialCommunityIcons name="cat" size={28} color="black" />
          <Text style={styles.headerCard}> 09 NOV </Text>
          <MaterialCommunityIcons name="cat" size={28} color="black" />
        </View>
        <Text style={styles.description}>
          btw is app Ka password nhi pata na tumje 😂 it's 1669.. 16 aur 69.
          ahem ahem 😂😂.. mornings, I have started loving ... but still miss my
          nights ❤️❤️.. I'm making a wonderful app for psychooo which she can
          read afterwards but psycho is not ready to show me her diary 🥺🥺🤧
          ... psychooo in case you read this someday.. sunlee.. I know that
          those things are called personal and also are personal but it will be
          the best thing to share.. doosron ke reactions dekhne Mai bhi Maza
          ataa hai 😂.. but it will take time.. Mai samajhta hun 😄 chill.. btw
          kal faadia review mai aag lagadia.. dbms vali pighal gai thi.. hahaa
          .. only thing was she asked to come back again next week.. nonsense..
          kya chutia teammates the.. but nonetheless ... we'll rock. Aaj app Ka
          designing part ban Jana chahiye taki easy ho jaye chezen.. rock the
          day.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.startBtn}
        onPress={() => props.navigation.navigate("Screen18")}
      >
        <View style={styles.flexrow}>
          <AntDesign name="gitlab" size={18} color="white" />
          <Text style={styles.startText}> MEAOOWWW </Text>
          <AntDesign name="gitlab" size={18} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
}
export default Screen17;
