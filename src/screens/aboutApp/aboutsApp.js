//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import IconBox from "../../components/boxWithIcon";
import { Fonts } from "../../constants/constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "../../utils/utils";
import styles from "./aboutApp.styles";

// create a component
const AboutApp = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          resizeMode="contain"
          style={{
            width: wp("30%"),
            height: hp("25%"),
            alignItems: "center",
            justifyContent: "flex-end",
          }}
          source={require("../../../assets/splashLogo.png")}
        >
          <Image
            resizeMode="contain"
            style={{
              width: wp("40%"),
              height: hp("40%"),
              top: wp("38%"),
              alignItems: "center",
              tintColor: "black",
            }}
            source={require("../../../assets/splashTitle.png")}
          />
        </ImageBackground>

        <Text style={[styles.textStyle, { marginTop: wp("10%") }]}>
          {"V 2.1.3"}
        </Text>

        <Text
          style={[
            styles.textStyle,
            {
              paddingTop: "8%",
              fontSize: wp("5%"),
              fontFamily: Fonts.Poppins_700Bold,
            },
          ]}
        >
          {"Why this app"}
        </Text>
        <Text
          style={[
            styles.textStyle,
            {
              paddingTop: "3%",
              textAlign: "justify",
              width: "80%",
              fontSize: wp("4%"),
              fontFamily: Fonts.Poppins_400Regular,
            },
          ]}
        >
          {
            "Ornare arcu dui vivamus arcu felis bibendum. Eget nulla facilisi etiam dignissim diam quis enim. Ut enim blandit volutpat maecenas volutpat. Porttitor leo a diam sollicitudin. Enim tortor at auctor urna nunc."
          }
        </Text>
        <Text
          style={[
            styles.textStyle,
            {
              paddingTop: "10%",
              textAlign: "center",
              width: "80%",
              fontSize: wp("4.5%"),
              fontFamily: Fonts.Poppins_400Regular,
              textDecorationLine: "underline",
            },
          ]}
        >
          {"Sung the verses"}
        </Text>
        <Text
          style={[
            styles.textStyle,
            {
              paddingTop: "5%",
              fontSize: wp("5%"),
              fontFamily: Fonts.Poppins_700Bold,
            },
          ]}
        >
          {"Ganapathi Sachchidananda "}
        </Text>
      </View>
    </ScrollView>
  );
};

//make this component available to the app
export default AboutApp;
