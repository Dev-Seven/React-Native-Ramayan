//import liraries
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Fonts } from "../constants/constants";
import { widthPercentageToDP } from "../utils/utils";

// create a component
const Header = ({
  title,
  subtitle,
  onBack,
  showBack,
  showRight,
  onRight,
  headerProps,
  subHeader,
  renderRightButton,
}) => {
  const headerColor =
    headerProps != undefined && !!headerProps.route.params.headerColor
      ? headerProps.route.params.headerColor
      : "#fff";
  const assetColor =
    headerProps != undefined && !!headerProps.route.params.headerTitleColor
      ? headerProps.route.params.headerTitleColor
      : "#111";

  return (
    <View style={styles.mainContainer}>
      <View style={[styles.container, { backgroundColor: headerColor }]}>
        {!showBack && <View style={{ padding: 20 }}></View>}
        {showBack && (
          <TouchableOpacity style={{ padding: 10 }} onPress={onBack}>
            <Ionicons name="chevron-back" color={assetColor} size={25} />
          </TouchableOpacity>
        )}
        <View style={styles.titlecontainer}>
          <Text style={[styles.titleStyle, { color: assetColor }]}>
            {title}
          </Text>
          {subHeader == true && (
            <Text style={[styles.subtitleStyle, { color: assetColor }]}>
              {subtitle}
            </Text>
          )}
        </View>
        {!showRight && <View style={{ padding: 20 }}></View>}
        {showRight && (
          <TouchableOpacity style={styles.rightButtonStyle} onPress={onRight}>
            {renderRightButton()}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  mainContainer: { overflow: "hidden", paddingBottom: 5 },
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    width: Dimensions.get("window").width,
    justifyContent: "space-between",
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 11,
  },
  titlecontainer: { flex: 1, alignItems: "center", justifyContent: "center" },
  titleStyle: {
    textAlign: "center",
    fontSize: 17,
    alignSelf: "center",
    fontFamily: Fonts.Poppins_700Bold,
  },
  subtitleStyle: {
    textAlign: "center",
    fontSize: 14,
    alignSelf: "center",
    fontFamily: Fonts.Poppins_400Regular,
  },
  rightButtonStyle: {
    justifyContent: "center",
    right: widthPercentageToDP("2%"),
  },
});

//make this component available to the app
export default Header;
