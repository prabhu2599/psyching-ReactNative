import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "../config/styles";
import { SimpleLineIcons } from "@expo/vector-icons";

var image = { uri: "https://picsum.photos/400/800" };

function ScreenSix(props) {
  return (
    <View style={styles.containerImageBackground}>
      <ImageBackground source={image} style={styles.image} blurRadius={3}>
        <View style={styles.headingTop}>
          <Text style={(styles.headerDramatic, styles.textWithShadow)}>
            TEESRA
          </Text>
          <Text style={(styles.headerDramatic, styles.textWithShadow)}>
            ADHYAY
          </Text>
        </View>
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.headerCard}>
              Abhi maza aayega na bhidu.. hehee
            </Text>
          </View>
          <Text style={styles.description}>
            Ab kuch raw lines aane vali hain agle kuch screens mai, from my
            space jahan mai likhta hun.
          </Text>
          <Text style={styles.description}>
            No editing.. hehee.. Bas jo bhi us din dil pe tha.. likh dia :)
          </Text>

          <Text style={styles.description}>
            Shayad ye sirf 16th tak hi ho.. kyunki tu us din ye dekh rahi hogi
            but jitna bhi hoga kyuutttttt hogaaaa
          </Text>
        </View>

        <TouchableOpacity
          style={styles.startBtn}
          onPress={() => props.navigation.navigate("ScreenSeven")}
        >
          <View style={styles.flexrow}>
            <Text style={styles.startText}>VAISE MAINE LIKHA KYA HOGA!! </Text>
            <SimpleLineIcons name="book-open" size={16} color="white" />
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

export default ScreenSix;
