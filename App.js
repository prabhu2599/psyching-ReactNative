import * as Fonts from "expo-font";
import React, { useState } from "react";
import { AppLoading } from "expo";

import HomeStack from "./HomeStack";

const getFonts = () => {
  return Fonts.loadAsync({
    Montserrat: require("./assets/fonts/Montserrat-Thin.ttf"),
    Rubik: require("./assets/fonts/BalsamiqSans-Regular.ttf"),
  });
};

export default function App() {
  const [fonts, setfonts] = useState(false);

  if (fonts) {
    return <HomeStack />;
    console.reportErrorsAsExceptions = false;
  } else {
    return <AppLoading startAsync={getFonts} onFinish={() => setfonts(true)} />;
  }
}

// expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
