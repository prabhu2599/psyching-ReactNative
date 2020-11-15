import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "../config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

function ScreenTen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.headingTop}>
        <Text style={styles.headerDramatic}>Disturbed but</Text>
        <Text style={styles.headerDramatic}>on track, tanu</Text>
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
            <MaterialCommunityIcons name="paw" size={26} color="black" />

            <Text style={styles.headerCard}>05 Nov 2020 </Text>
            <MaterialCommunityIcons name="paw" size={26} color="black" />
          </View>
          <Text style={styles.description}>
            Today I have my first bada lab fat, stats ... slept late by 1-1:30
            hrs ... I feel the biggest thing is to understand what to pick and
            when to pick any particular thing and when not to, and I'm doing it
            quite well ... coming to Tanu, I think yesterday I understood 1 more
            thing Tanu might be having. I feel that stress-anxiety has lead her
            to multiple things which she didn't realize and ... and I should be
            perfect in things vala syndrome are a few things which Tanu must
            have got during ... feeling with these will take time and skill,
            usually people go into isolation if any of these things get into
            action but even that is dangerous and I want to be close to her and
            never let these things happen. Tanu samajh ja jalddiii 😂.. you know
            why I never force you to do anything.. Mai hamesha tujhe sirf
            suggest karta Hun ki shayad ye Sahi rahega.. maybe this thing will
            work.. we should try it out.. etc etc but never like hum ab yahi
            karenge.. Tu Kar abhi..abhi matlab abhi.. 😂 ye cheezen nhi Hoti
            kyunki I know ki Tu bohot hi pyara samajhti hai aur tu cheezon lo
            better handle Kar legi bohot quickly ... only thing is tujhe time
            dena padega.. aur ye time dena kaise hai.. ye you have to seekh 🙆‍♂️
            keep learning.. keep growing.. 🌟
          </Text>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.startBtn}
        onPress={() => props.navigation.navigate("ScreenEleven")}
      >
        <View style={styles.flexrow}>
          <MaterialCommunityIcons name="cat" size={20} color="white" />
          <Text style={styles.startText}> WAKT BADI CHEEZ HAI </Text>
          <MaterialIcons
            name="sentiment-very-satisfied"
            size={18}
            color="white"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default ScreenTen;
