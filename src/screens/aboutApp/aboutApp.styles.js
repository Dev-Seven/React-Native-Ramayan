//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Fonts } from "../../constants/constants";

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  textStyle: {
    textAlign: "center",
    fontFamily: Fonts.Poppins_400Regular,
  },
});

//make this component available to the app
export default styles;
