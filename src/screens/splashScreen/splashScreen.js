//import liraries
import React, { Component, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import { ScreenList } from "../../constants/constants";
import {
  navigationToScreen,
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  replaceToScreen,
} from "../../utils/utils";
import styles from "./splashScreen.styles";

// create a component
const SplashScreen = (props) => {
  useEffect(() => {
    setTimeout(() => {
      replaceToScreen(ScreenList.DASHBOARD, props, {});
    }, 2000);
  }, []);

  return (
    <ImageBackground
      style={{ flex: 1, alignItems: "center" }}
      source={require("../../../assets/gradientBg.png")}
    >
      <ImageBackground
        resizeMode="contain"
        style={{
          width: wp("35%"),
          height: hp("60%"),
          alignItems: "center",
          justifyContent: "flex-end",
        }}
        source={require("../../../assets/splashLogo.png")}
      >
        <Image
          resizeMode="contain"
          style={{ width: wp("45%"), height: hp("36%"), alignItems: "center" }}
          source={require("../../../assets/splashTitle.png")}
        />
      </ImageBackground>

      <Image
        resizeMode="cover"
        style={{
          width: wp("100%"),
          height: hp("100%"),
          bottom: wp("0%"),
          alignItems: "center",
          position: "absolute",
        }}
        source={require("../../../assets/splashFrame.png")}
      />
    </ImageBackground>
  );
};

//make this component available to the app
export default SplashScreen;
