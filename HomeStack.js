import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import * as Fonts from "expo-font";

import Login from "./src/components/Login";
import Home from "./src/components/Home";
import One from "./screens/One";
import ScreenOne from "./screens/ScreenOne";
import ScreenTwo from "./screens/ScreenTwo";
import ScreenThird from "./screens/ScreenThird";
import ScreenFour from "./screens/ScreenFour";
import ScreenFive from "./screens/ScreenFive";
import ScreenSix from "./screens/ScreenSix";
import ScreenSeven from "./screens/ScreenSeven";
import ScreenEight from "./screens/ScreenEight";
import ScreenNine from "./screens/ScreenNine";
import ScreenTen from "./screens/ScreenTen";
import ScreenEleven from "./screens/ScreenEleven";
import ScreenTwelve from "./screens/ScreenTwelve";
import Screen13 from "./screens/Screen13";
import Screen14 from "./screens/Screen14";
import Screen15 from "./screens/Screen15";
import Screen16 from "./screens/Screen16";
import Screen17 from "./screens/Screen17";
import Screen18 from "./screens/Screen18";
import Screen19 from "./screens/Screen19";
import Screen20 from "./screens/Screen20";
import Screen21 from "./screens/Screen21";
import Screen22 from "./screens/Screen22";
import Screen23 from "./screens/Screen23";
import Screen24 from "./screens/Screen24";
import Screen25 from "./screens/Screen25";
import Screen26 from "./screens/Screen26";
import Screen27 from "./screens/Screen27";

const MainNavigator = createStackNavigator(
  {
    // 1
    Home: { screen: Home },

    One: { screen: One }, //1
    Login: { screen: Login },

    ScreenOne: { screen: ScreenOne },
    ScreenTwo: { screen: ScreenTwo },
    ScreenThird: { screen: ScreenThird },
    ScreenFour: { screen: ScreenFour },
    ScreenFive: { screen: ScreenFive },
    ScreenSix: { screen: ScreenSix },
    ScreenSeven: { screen: ScreenSeven },
    ScreenEight: { screen: ScreenEight },
    ScreenNine: { screen: ScreenNine },
    ScreenTen: { screen: ScreenTen },
    ScreenEleven: { screen: ScreenEleven },
    ScreenTwelve: { screen: ScreenTwelve },
    Screen13: { screen: Screen13 },
    Screen14: { screen: Screen14 },
    Screen15: { screen: Screen15 },
    Screen16: { screen: Screen16 },
    Screen17: { screen: Screen17 },
    Screen18: { screen: Screen18 },
    Screen19: { screen: Screen19 },
    Screen20: { screen: Screen20 },
    Screen21: { screen: Screen21 },
    Screen22: { screen: Screen22 },
    Screen23: { screen: Screen23 },
    Screen24: { screen: Screen24 },
    Screen25: { screen: Screen25 },
    Screen26: { screen: Screen26 },
    Screen27: { screen: Screen27 },
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
    },
  }
);

const HomeStack = createAppContainer(MainNavigator);

export default HomeStack;

// expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
