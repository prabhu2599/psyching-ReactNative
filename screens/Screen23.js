import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  ImageBackground,
} from "react-native";
import { styles } from "../config/styles";
import { Foundation } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

var image = {
  uri:
    "https://media1.tenor.com/images/6fff9e5d9ee85db3c493f133a56d23d7/tenor.gif",
};

function Screen23(props) {
  return (
    <View style={styles.containerImageBackground}>
      <ImageBackground source={image} style={styles.image} blurRadius={3}>
        <View style={styles.headingTop}>
          <Text style={(styles.headerDramatic, styles.textWithShadow)}>
            EASTER EGG
          </Text>
          <Text style={(styles.headerDramatic, styles.textWithShadow)}>
            ADHYAAY
          </Text>
        </View>
        <View style={styles.card}>
          <View style={styles.header}>
            <Foundation name="heart" size={26} color="red" />
            <Text style={styles.headerCard}> DHUNDO DHUNDOO.. Hehee </Text>
            <Foundation
              name="heart"
              size={26}
              color="red"
              onPress={() => {
                Linking.openURL(
                  "https://drive.google.com/uc?export=download&id=1VM7Z8i6X63mBm75dzfzeNEnzNBMkTzPe"
                );
              }}
            />
          </View>
          <Text style={styles.description}>
            Sooo isi page mai kahin chotu sa surprise rakha hua hai..
          </Text>
          <Text style={styles.description}>
            Dhund vo kahan hai.. next button ke alvala kuch bhi click kar..
            random random clicks on this page and you'll find it, shayad..
            shayadd... hahaa.. 😂
          </Text>
          <Text style={styles.description}>
            agar tune miss kar dia and next pe chali gai to vapas nhi aapayegi
            :(
          </Text>
          <Text style={styles.description}>
            Mil gaya?? chal nexttt... yeaayyyyyy
          </Text>
        </View>

        <TouchableOpacity
          style={styles.startBtn}
          onPress={() => props.navigation.navigate("Screen24")}
        >
          <View style={styles.flexrow}>
            <AntDesign name="meho" size={17} color="yellow" />
            <Text style={styles.startText}> NHI </Text>
            <AntDesign name="qrcode" size={17} color="black" />
            <Text style={styles.startText}> MILA? </Text>
            <Ionicons name="md-musical-notes" size={17} color="blue" />
            <Text style={styles.startText}> YA </Text>
            <AntDesign name="checksquare" size={17} color="green" />
            <Text style={styles.startText}> MILAYA? </Text>
            <AntDesign name="codesquare" size={17} color="tomato" />
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

export default Screen23;
