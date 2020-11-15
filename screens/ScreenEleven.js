import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "../config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

var image = { uri: "https://picsum.photos/400/800" };

function ScreenEleven(props) {
  return (
    <View style={styles.containerImageBackground}>
      <ImageBackground source={image} style={styles.image} blurRadius={3}>
        <View style={styles.headingTop}>
          <Text style={(styles.headerDramatic, styles.textWithShadow)}>
            PSYCHING
          </Text>
          <Text style={(styles.headerDramatic, styles.textWithShadow)}>
            WITH PSYCHO
          </Text>
        </View>
        <View style={styles.card}>
          <View style={styles.header}>
            <MaterialCommunityIcons
              name="flash-alert"
              size={28}
              color="tomato"
            />
            <Text style={styles.headerCard}>THODA SA DISTRACTION</Text>
            <MaterialCommunityIcons
              name="flash-alert"
              size={28}
              color="tomato"
            />
          </View>
          <Text style={styles.description}>
            Tu hamesha puchti hti na ki ye Pysching with psycho kya hai.. lol
            [mai actually hass raah hun ye lol likhke.. hahaaa pata nhi kyun]
          </Text>
          <Text style={styles.description}>
            So, the Psyching thing works in do ways,
          </Text>
          <Text style={styles.descriptionBullets}>
            1. Pro-way: I realized one thing ki mai, psycho diagnosis acha kar
            raha but psychotherapy ... naaaaa.. level up karna padega.. lol..so
            I started taking online courses.. aur isilie vo break.. just wanted
            to level up my psych game, taki tujhe better samajh saku.. hehee..
          </Text>
          <Text style={styles.descriptionBullets}>
            2. Desi-way: Aur desi way mai it's just me doobing in you thoda
            thoda..aur thoda pagal hona.. aur saari cheezen.. hehee.. was just
            enjoying the phase tanu.. aur kuch nhi.. :p to aise psycho ke sath
            psycho ban jana bhi psyching.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.startBtn}
          onPress={() => props.navigation.navigate("ScreenTwelve")}
        >
          <View style={styles.flexrow}>
            <MaterialCommunityIcons name="brain" size={20} color="white" />
            <Text style={styles.startText}> LET's PSYCH </Text>
            <MaterialCommunityIcons name="brain" size={20} color="white" />
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

export default ScreenEleven;
