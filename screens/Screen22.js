import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "../config/styles";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const image = require("../assets/bgdoremon.png");

function Screen22(props) {
  return (
    <View style={styles.containerImageBackground}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.headingTop}>
          <Text style={(styles.headerDramatic, styles.textWithShadow)}>
            Aur WE HAVE KYUTT MUSIC TASTE bhi
          </Text>
          <Text style={(styles.headerDramatic, styles.textWithShadow)}></Text>
        </View>
        <View style={styles.cardOpacity}>
          <View style={styles.header}>
            <FontAwesome5 name="music" size={24} color="tomato" />
            <Text style={styles.headerCard}> GAANE JO BANE APNE </Text>
            <FontAwesome5 name="music" size={24} color="tomato" />
          </View>
          <Text style={styles.description}>
            Is safar mai kuch gaane yaadgaar ban gaye 🥺🥺🥺🥺
          </Text>
          <Text style={styles.descriptionBullets}>1. TUNE JO NA KAHAN :(</Text>
          <Text style={styles.descriptionBullets}>2. YET - SWITCHFOOT</Text>
          <Text style={styles.descriptionBullets}>3. JAAN NISAR </Text>
          <Text style={styles.descriptionBullets}>4. NAINA - RAHUL MISHRA</Text>
          <Text style={styles.description}>
            ... Aur bohot saare.. but ye gaane jab bhi sununga na, psycho.. yk
            kya hoga 🥺🥺
          </Text>
        </View>

        <TouchableOpacity
          style={styles.startBtn}
          onPress={() => props.navigation.navigate("Screen23")}
        >
          <View style={styles.flexrow}>
            <AntDesign name="heart" size={18} color="pink" />
            <Text style={styles.startText}> JHOOTI.. LAGE TERI KAHANI </Text>
            <AntDesign name="heart" size={18} color="pink" />
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
export default Screen22;
