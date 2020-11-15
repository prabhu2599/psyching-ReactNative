import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ScreenNine(props) {
  return (
    <View style={styles.container}>
      <View style={styles.headingTop}>
        <Text style={styles.headerDramatic}>As Expected,</Text>
        <Text style={styles.headerDramatic}>PSYCHOO</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.header}>
          <MaterialCommunityIcons name="paw" size={26} color="black" />

          <Text style={styles.headerCard}>04 Nov 2020 </Text>
          <MaterialCommunityIcons name="paw" size={26} color="black" />
        </View>
        <Text style={styles.description}>
          Best sleep for sure. This thing is working. Yeayy ... right direction.
          I'm being super humble and kind to others. I love to help and I don't
          leave any chance of helping others. Best baat is that even psycho
          knows that I do that.. she understands me well.. matlab jitna BHI
          janti hai.. theek janti hai.. and that feeling makes me more positive.
          She has been the driving force for me for this transition. Would make
          this whole episode of my life memorable. Ye subah la journaling is
          quite ajeeb. .. and one more point I need to add.. psycho ke lie ye
          best chance Hoga ki Apne lo explore kare.. slow all the things down
          and explore everything a bit more slower.. every fight we had.. every
          drama I created ... The best thing is that I was successful in
          reducing the whole drama by 50% dot. So now recovery time will be
          reduced to half.. stress will be reduced to half.. dimak kharab
          reduced to half.. intensity reduced to half.. aur kya Kuch nhi.. only
          thing to realise is that these things happen rarely.. and jab mauka
          mile uthalo.. life ek hi Baar milta hai and do everything that you
          like and feel. laal dil
        </Text>
      </View>

      <TouchableOpacity
        style={styles.startBtn}
        onPress={() => props.navigation.navigate("ScreenTen")}
      >
        <View style={styles.flexrow}>
          <MaterialCommunityIcons name="cat" size={20} color="white" />
          <Text style={styles.startText}> [Me] + [you] = Meow </Text>
          <MaterialCommunityIcons name="cat" size={20} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default ScreenNine;
