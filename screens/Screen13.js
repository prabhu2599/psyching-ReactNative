import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "../config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Screen13(props) {
  return (
    <View style={styles.container}>
      <View style={styles.headingTop}>
        <Text style={styles.headerDramatic}>Pretty late, but justified</Text>
        <Text style={styles.headerDramatic}>[Tanu ka call Aya 🥳]</Text>
      </View>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: "space-between",
        }}
        style={styles.scrollView}
      >
        <View style={styles.cardScrollable}>
          <View style={styles.header}>
            <MaterialCommunityIcons name="cat" size={26} color="black" />
            <Text style={styles.headerCard}>07 NOV</Text>
            <MaterialCommunityIcons name="cat" size={26} color="black" />
          </View>
          <Text style={styles.description}>
            it's almost 11 hrs now from that call, but still mind ninchi povatle
            Ra asal.😂.. it's was nice that we had that call.. discussed many
            things, cleared many doubts.. a little distracting for sure but..
            worth getting distracted. Surely ... she knows how things were and
            are going to be and that made me feel more better. the call started
            around 8 in eve and we had to rok the call zabardastii at 3 😂 but
            every minute of the call had a lot of quality which I look for in
            things[pyaarr]. we had some little things 2 topics which I really
            liked kyunki I was waiting ki kab we'll start discussing those
            things so that cheezen easy banegi. said to her ki Nov 30 tak no
            baatien.. let's see kya hota hai... I think thoda mushkil hoga uske
            lie but she'll do it.. 🦸 Now I need to stop thinking about this
            shit 😂 aur Kuch productive karte Hain.. let's get some fuel before
            starting my coding thingy and also apna DBMS review which we have.
            🦸
          </Text>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.startBtn}
        onPress={() => props.navigation.navigate("Screen14")}
      >
        <View style={styles.flexrow}>
          <MaterialCommunityIcons name="alien" size={20} color="white" />
          <Text style={styles.startText}> DISTRACTION OR DIARY ? </Text>
          <MaterialCommunityIcons name="alien" size={20} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Screen13;
