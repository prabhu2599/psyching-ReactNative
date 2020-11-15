import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "../config/styles";
import { AntDesign } from "@expo/vector-icons";

var image = { uri: "https://picsum.photos/400/800" };

function Screen24(props) {
  return (
    <View style={styles.containerImageBackground}>
      <ImageBackground source={image} style={styles.image} blurRadius={3}>
        <View style={styles.headingTop}>
          <Text style={(styles.headerDramatic, styles.textWithShadow)}>
            CRACKED
          </Text>
          <Text style={(styles.headerDramatic, styles.textWithShadow)}>
            THE PUZZLE ?
          </Text>
        </View>
        <View style={styles.cardOpacity}>
          <View style={styles.header}>
            <Text style={styles.headerCard}> MIL GAYA RIGHT !?? </Text>
            <AntDesign name="play" size={24} color="red" />
          </View>
          <Text style={styles.description}>
            Okay agar mil gaya ho to obviouly download ho gaya hoga.. open kar
            use.. aur dekh usee 🥺🥺
          </Text>
          <Text style={styles.description}>
            Agar nhi mila to click the peeche vala button.. vapas jaa peeche..
            aur try kar mil jayega.. dil se dekh.. dil pe dekh.. mil jayega :p
          </Text>
        </View>
        <TouchableOpacity
          style={styles.startBtn}
          onPress={() => props.navigation.goBack()}
        >
          <View style={styles.flexrow}>
            <AntDesign name="leftsquare" size={16} color="white" />
            <Text style={styles.startText}> PEECHE CHALE KYA ? </Text>
            <AntDesign name="leftsquare" size={16} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.startBtn}
          onPress={() => props.navigation.navigate("Screen25")}
        >
          <View style={styles.flexrow}>
            <AntDesign name="heart" size={18} color="pink" />
            <Text style={styles.startText}> CHALO AAGE THEN </Text>
            <AntDesign name="heart" size={18} color="pink" />
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

export default Screen24;
