//import liraries
import React, { Component, useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "../../components/card";
import { ScreenList } from "../../constants/constants";
import { navigationToScreen } from "../../utils/utils";
import styles from "./settings.styles";

// create a component
const Settings = (props) => {
  const options = [
    { id: 1, name: "Contact Us" },
    { id: 2, name: "Language" },
    { id: 3, name: "Privacy Polices" },
    { id: 4, name: "Term & Condition" },
    { id: 5, name: "About App" },
  ];

 
  const openSetting = (i) => {
    switch (i) {
      case 0:
        navigationToScreen(ScreenList.ContactUs, props, {});
        break;
      case 1:
        navigationToScreen(ScreenList.LANGUAGES, props, {});
        break;
      case 2:
        navigationToScreen(ScreenList.PRIVACY_POLICY, props, {});
        break;
      case 3:
        navigationToScreen(ScreenList.TERMS_CONDITIONS, props, {});
        break;
      case 4:
        navigationToScreen(ScreenList.ABOUS_US, props, {});
        break;

      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      {options.map((item, index) => (
        <Card
          title={item.name}
          onPress={() => {
            openSetting(index);
          }}
        />
      ))}
    </View>
  );
};

//make this component available to the app
export default Settings;
