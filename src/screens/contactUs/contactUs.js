//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import IconBox from "../../components/boxWithIcon";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "../../utils/utils";
import styles from "./contactUs.styles";

// create a component
const ContactUs = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        style={{
          width: wp("30%"),
          height: hp("30%"),
          alignItems: "center",
          justifyContent: "flex-end",
          marginBottom: wp("8%"),
        }}
        source={require("../../../assets/splashLogo.png")}
      >
        <Image
          resizeMode="contain"
          style={{
            width: wp("40%"),
            height: hp("40%"),
            top: wp("32%"),
            alignItems: "center",
            tintColor: "black",
          }}
          source={require("../../../assets/splashTitle.png")}
        />
      </ImageBackground>

      <IconBox
        image={require("../../../assets/call_icon.png")}
        title="+91 90 123 45 678"
      />
      <IconBox
        title="SGS Ramayana@gmail.com"
        image={require("../../../assets/mail.png")}
      />
    </View>
  );
};

//make this component available to the app
export default ContactUs;
