import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "../config/styles";
import { Octicons } from "@expo/vector-icons";

var image = { uri: "https://picsum.photos/400/800" };

function ScreenThird(props) {
  return (
    <View style={styles.containerImageBackground}>
      <ImageBackground source={image} style={styles.image} blurRadius={3}>
        <View style={styles.headingTop}>
          <Text style={(styles.headerDramatic, styles.textWithShadow)}>
            Ab Thoda
          </Text>
          <Text style={(styles.headerDramatic, styles.textWithShadow)}>
            Distraction
          </Text>
        </View>
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.headerCard}>
              Na jaane kya batayien.. Hawaayien
            </Text>
          </View>
          <Text
            style={({ color: "gray", paddingBottom: 5 }, styles.description)}
          >
            Chehra.. kyun milta tera.. Yun khwabon se mere.. Ye kya raaz hai?..
            hahaaa
          </Text>
          <Text
            style={({ color: "gray", paddingBottom: 5 }, styles.description)}
          >
            You know mere sapne mai tu bohot baar aachuki.. but ek din to alag
            hi gaya.. lol
          </Text>
          <Text
            style={({ color: "gray", paddingBottom: 5 }, styles.description)}
          >
            You know I stopped watching my research thingy :p..(tu janti hai kya
            hai vo.. hehee) and also as I was not allowing any such thought..
            and tujhme mai dub raha tha so tera thought allowed tha.. aur Ab
            dimak ke paas ek hi rasta bacha tha..
          </Text>
          <Text
            style={({ color: "gray", paddingBottom: 5 }, styles.description)}
          >
            Aur phir hua ek unexpected hybrid.. sapne mai..
          </Text>
          <Text
            style={({ color: "gray", paddingBottom: 5 }, styles.description)}
          >
            Ahem Ahem.. Zaada details in future Adhyaays.. Shayad Nov 8th ke
            part mai :p
          </Text>
        </View>

        <TouchableOpacity
          style={styles.startBtn}
          onPress={() => props.navigation.navigate("ScreenFour")}
        >
          <View style={styles.flexrow}>
            <Text style={styles.startText}>
              AB HO JATA HAI HAINA.. Kya karen[Naina]
            </Text>
            <Octicons name="heart" size={18} color="white" />
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

export default ScreenThird;
