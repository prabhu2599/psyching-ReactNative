import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "../config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

var image = { uri: "https://picsum.photos/400/800" };

function ScreenSeven(props) {
  return (
    <View style={styles.containerImageBackground}>
      <ImageBackground source={image} style={styles.image} blurRadius={3}>
        <View style={styles.headingTop}>
          <Text style={(styles.headerDramatic, styles.textWithShadow)}>
            DIARY-DIARY
          </Text>
          <Text style={(styles.headerDramatic, styles.textWithShadow)}>
            KEHELE !?
          </Text>
        </View>
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.headerCard}>Bas ek last time </Text>
            <MaterialCommunityIcons name="tag-faces" size={27} color="black" />
          </View>
          <Text style={styles.description}>
            Bas ye last phir iske next pakka diary start karndenge
          </Text>
          <Text style={styles.description}></Text>

          <Text style={styles.description}>
            Aaj exactly hamara algo ka LAB-FAT tha.. and mai ye code kar raha
            hun.. hahaa :p
          </Text>

          <Text style={styles.description}>
            All excited haan.. hahaaa.. chal okay.. badh ja aage.. no more
            waitingggg..
          </Text>
        </View>

        <TouchableOpacity
          style={styles.startBtn}
          onPress={() => props.navigation.navigate("ScreenEight")}
        >
          <View style={styles.flexrow}>
            <MaterialCommunityIcons name="cat" size={18} color="white" />
            <Text style={styles.startText}> Meeoowww </Text>
            <MaterialCommunityIcons name="cat" size={18} color="white" />
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

export default ScreenSeven;
