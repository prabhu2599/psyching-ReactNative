import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "../config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

function Screen14(props) {
  return (
    <View style={styles.container}>
      <View style={styles.headingTop}>
        <Text style={styles.headerDramatic}>MY FAV VISION,</Text>
        <Text style={styles.headerDramatic}>FOR PSYCHO</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.headerCard}>JAB WE MET </Text>
          <Foundation name="heart" size={26} color="red" />
        </View>
        <Text style={styles.description}>
          So thiss.. was just as a vision (starting mai), but baadme it became
          my fav which gave me unlimited serotonin shots. Kitne baar replay kia
          hoga mujhe khud nhi yaad. hahaa.. So ill just brief here, we'll
          discuss this someday.
        </Text>
        <Text style={styles.descriptionBullets}>
          * Scene tha of the first time we met, VIT mai hi, morning time.
        </Text>
        <Text style={styles.descriptionBullets}>
          * Came to you, gave you a phool :p.. bohot hi chotu sa flower.. :p
        </Text>
        <Text style={styles.descriptionBullets}>
          * Tu khush hui,. and I asked if I can touch your hair
        </Text>
        <Text style={styles.descriptionBullets}>
          * And you said.. uhumm[tanu style].. aur mai tere close aya and ..
        </Text>
        <Text style={styles.descriptionBullets}>
          * Mera right hand on your left cheeck.. and dheerese tere left ear ke
          neeche se slide karte hue.. meri ungliyan just kuch 1/4 hi tere baalon
          mai chupi thi..
        </Text>
        <Text style={styles.descriptionBullets}>
          * Moment tha bhai moment tha..[Zakir khan vala] hahaa.. and we
          kissed.. SHAYAADDD
        </Text>
        <Text style={styles.descriptionBullets}>
          * I don't know :p .. it got blur phir.. but I think we kissed.. :p
        </Text>
      </View>

      <TouchableOpacity
        style={styles.startBtn}
        onPress={() => props.navigation.navigate("Screen15")}
      >
        <View style={styles.flexrow}>
          <MaterialCommunityIcons name="cat" size={20} color="white" />
          <Text style={styles.startText}> MEMORIES BRING BACK YOU. </Text>
          <MaterialCommunityIcons name="cat" size={20} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Screen14;
