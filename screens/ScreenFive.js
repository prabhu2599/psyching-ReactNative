import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../config/styles";
import { Entypo } from "@expo/vector-icons";

function ScreenFive(props) {
  return (
    <View style={styles.container}>
      <View style={styles.headingTop}>
        <Text style={styles.headerDramatic}>DOORI</Text>
        <Text style={styles.headerDramatic}>SAHI JAYENA</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.headerCard}>Nov 3rd tha vo din</Text>
        </View>
        <Text style={styles.description}>
          And saari cheeezen yahin se start hui.. kuch bhari plans aur kuch
          halke..
        </Text>
        <Text style={styles.description}>
          halke vale, to build confidence and bhari jisme jaada push karna pade.
          Plans to theek hi lag rahe the except ek..
        </Text>
        <Text style={styles.description}>
          Baat nhi karna tha till we meet.. shayad ye sabse badi cheez thi..
          hahaa.. aur vo bhi psycho ke sath ... aaaaaaaa.. hahaa :p
        </Text>
        <Text style={styles.description}>
          But I was confident ki ye sari planned-unplanned cheezen hongi.. aur
          bohot maza bhi ayegaa..
        </Text>
        <Text style={styles.description}>
          So things that I planned for were...
        </Text>
        <Text style={styles.descriptionBullets}>
          1. No jumping (laundiyabazi = 0) :p
        </Text>
        <Text style={styles.descriptionBullets}>
          2. No late raat ko calling
        </Text>
        <Text style={styles.descriptionBullets}>3. Subah 5am jaging</Text>
        <Text style={styles.descriptionBullets}>
          4. Sweating thoda sa (exercises)
        </Text>
        <Text style={styles.descriptionBullets}>5. ): nrop on dna ..lol</Text>
        <Text style={styles.descriptionBullets}>6. Coding [FAV part] :D</Text>
        <Text style={styles.descriptionBullets}>7. Pro-ing Psych skills</Text>
      </View>

      <TouchableOpacity
        style={styles.startBtn}
        onPress={() => props.navigation.navigate("ScreenSix")}
      >
        <View style={styles.flexrow}>
          <Text style={styles.startText}>UHUMMM [MARZIA STYLE] </Text>
          <Entypo name="thumbs-up" size={16} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default ScreenFive;
