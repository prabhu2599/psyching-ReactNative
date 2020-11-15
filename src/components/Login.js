import React from "react";
import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "../../config/styles";
import { AntDesign } from "@expo/vector-icons";

var image = { uri: "https://picsum.photos/400/800" };

export default function Login(props) {
  return (
    <View style={styles.containerImageBackground}>
      <ImageBackground source={image} style={styles.image} blurRadius={3}>
        <View style={styles.card}>
          <Text style={styles.description}>
            Maine poore app se back jane ka option hata dia hai.. matlab agar
            aage going to peeche nhi aaing..
          </Text>
          <Text style={styles.description}>
            To saari cheezen padhna dhyanse..
          </Text>
          <Text style={styles.description}></Text>
          <Text style={styles.description}>
            Back button sirf is page pe rakha hai.. So you have one last
            chance.. hahaa.. Try karna hai to karle.. iske baad back nhi ja
            payegi.. ek page ek hi baar dikhega :p
          </Text>
          <Text style={styles.description}>
            Else let's shuru karte yeaayyyy.. lol
          </Text>
        </View>
        <TouchableOpacity
          style={styles.startBtn}
          onPress={() => props.navigation.goBack()}
        >
          <View style={styles.flexrow}>
            <Text style={styles.startText}> Peeche jana hai kya ? </Text>
            <AntDesign name="back" size={16} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.startBtn}
          onPress={() => props.navigation.navigate("ScreenOne")}
        >
          <View style={styles.flexrow}>
            <AntDesign name="heart" size={18} color="pink" />
            <Text style={styles.startText}> Aage kadam badhaa !! </Text>
            <AntDesign name="heart" size={18} color="pink" />
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
