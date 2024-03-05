import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./tabNavigations";
import SplashScreen from "../screens/splashScreen/splashScreen";
import Settings from "../screens/settingScreen/settings";
import ContactUs from "../screens/contactUs/contactUs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { goBack, navigationToScreen } from "../utils/utils";
import Languages from "../screens/languageScreen/languages";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/header";
import HomeScreen from "../screens/homeScreen/homeScreen";
import ShlockIntro from "../screens/shlockIntro/shlockIntro";
import SwamiDetails from "../screens/swamiDetails/swamiDetails";
import { ScreenList } from "../constants/constants";
import ShlockList from "../screens/shlocks/shlockList";
import Favourites from "../screens/favourites/favourites";
const Stack = createNativeStackNavigator();

function FavNavigations(props) {
  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={{ flex: 1, backgroundColor: "white" }}
    >
      <Stack.Navigator
        initialRouteName="favouriteList"
        screenOptions={{
          headerBackTitle: "",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                goBack(props);
              }}
            >
              <Ionicons name="chevron-back" size={28} />
            </TouchableOpacity>
          ),
        }}
      >
        <Stack.Screen
          name="favouriteList"
          component={Favourites}
          options={{
           
            header: () => (
              <Header
                title="Favourite"
                showBack={false}
                showRight={false}
              />
            ),
          }}
        />
        <Stack.Screen
          name="ShlockIntro"
          component={ShlockIntro}
          options={{
              
            header: (props) => (
              <Header
                headerProps={props}
                title="Information"
                showBack={true}
                onBack={() => {
                  goBack(props);
                }}
              />
            ),
          }}
        />
          <Stack.Screen
          name="ShlockList"
          component={ShlockList}
          options={{
            header: (props) => (
              <Header
                headerProps={props}
                title={props.route.params.title}
                showBack={true}
                onBack={() => {
                  goBack(props);
                }}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
}

export default FavNavigations;
