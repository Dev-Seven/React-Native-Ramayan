import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/homeScreen/homeScreen";
import Favourites from "../screens/favourites/favourites";
import Settings from "../screens/settingScreen/settings";
import { SafeAreaView } from "react-native-safe-area-context";
import SettingsNavigation from "./settingsNavigation";
import SargasanNavigation from "./sargasanNavigation";
import { Fonts } from "../constants/constants";
import FavNavigations from "./favNavigations";

const Tab = createBottomTabNavigator();

export function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderTopColor: "#FF7A00",
        borderTopWidth: 1,
        backgroundColor: "white",
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const iconInActive =
          label == "Home"
            ? require("../../assets/inActiveHome.png")
            : label == "Favourite"
            ? require("../../assets/inActiveHeart.png")
            : require("../../assets/inActiveSettings.png");
        const iconActive =
          label == "Home"
            ? require("../../assets/activeHomeTab.png")
            : label == "Favourite"
            ? require("../../assets/activeHeart.png")
            : require("../../assets/activeSettings.png");
        const size = label == "Home" ? 26 : 24;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ["selected"] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: "center" }}
          >
            <Image
              source={isFocused ? iconActive : iconInActive}
              style={{ width: size, height: size }}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function TabNavigation(props) {
  // console.log("-----", props);
  return (
    <SafeAreaView
      edges={["bottom", "left", "right"]}
      style={{ flex: 1, backgroundColor: "white" }}
    >
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerStyle: {
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.2,
            shadowRadius: 2,
            elevation: 11,
          },
          headerTitleStyle: { fontFamily: Fonts.Poppins_700Bold },
        }}
        tabBar={(props) => <MyTabBar {...props} />}
      >
        <Tab.Screen
          name="Home"
          component={SargasanNavigation}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Favourite"
          options={{ headerShown: false }}
          component={FavNavigations}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsNavigation}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

export default TabNavigation;
