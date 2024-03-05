import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./tabNavigations";
import SplashScreen from "../screens/splashScreen/splashScreen";
import Settings from "../screens/settingScreen/settings";
import ContactUs from "../screens/contactUs/contactUs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { goBack } from "../utils/utils";
import Languages from "../screens/languageScreen/languages";
import AboutApp from "../screens/aboutApp/aboutsApp";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/header";
import Policy from "../screens/privacyPolicy/policy";
import Terms from "../screens/termsConditions/terms";
import { useTranslation } from "react-i18next";
const Stack = createNativeStackNavigator();

function SettingsNavigation(props) {
  const { t } = useTranslation();
  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={{ flex: 1, backgroundColor: "white" }}
    >
      <Stack.Navigator
        initialRouteName="SettingDashboard"
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
          name="Settings"
          component={Settings}
          options={{
            header: () => <Header title={t("Settings")} />,
          }}
        />
        <Stack.Screen
          name="Contact Us"
          component={ContactUs}
          options={{
            header: () => (
              <Header
                title={t("Contact Us")}
                onBack={() => {
                  goBack(props);
                }}
                showBack={true}
                showRight={false}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Languages"
          component={Languages}
          options={{
            header: () => (
              <Header
                title={t("Language")}
                onBack={() => {
                  goBack(props);
                }}
                showBack={true}
                showRight={false}
              />
            ),
          }}
        />

        <Stack.Screen
          name="Privacy Policy"
          component={Policy}
          options={{
            header: () => (
              <Header
                title="Privacy Policy"
                onBack={() => {
                  goBack(props);
                }}
                showBack={true}
                showRight={false}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Terms & Conditions"
          component={Terms}
          options={{
            header: () => (
              <Header
                title="Terms & Conditions"
                onBack={() => {
                  goBack(props);
                }}
                showBack={true}
                showRight={false}
              />
            ),
          }}
        />
        <Stack.Screen
          name="About App"
          component={AboutApp}
          options={{
            header: () => (
              <Header
                title="About App"
                onBack={() => {
                  goBack(props);
                }}
                showBack={true}
                showRight={false}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
}

export default SettingsNavigation;
