import React, { useContext, useEffect } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./tabNavigations";
import SplashScreen from "../screens/splashScreen/splashScreen";
import Header from "../components/header";
import { goBack } from "../utils/utils";
import PlayerScreen from "../screens/playerScreen/playerScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { DataContext, DataProvider } from "../utils/Context";
import { useTranslation } from "react-i18next";

const Stack = createNativeStackNavigator();

function RootNavigation() {
  const { t } = useTranslation();
  const { statusBarColor } = useContext(DataContext);

  useEffect(() => {
    return () => {};
  }, [statusBarColor]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* Change this color by Global data */}

      <StatusBar backgroundColor={statusBarColor} />
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="DashBoard" component={TabNavigation} />
        <Stack.Screen
          name="PlayerScreen"
          component={PlayerScreen}
          options={{
            headerShown: true,
            header: (props) => (
              <Header
                headerProps={props}
                title={t(props.route.params.title)}
                showBack={true}
                subtitle={t(props.route.params.subtitle)}
                subHeader={true}
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

export default RootNavigation;
