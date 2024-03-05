//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { widthPercentageToDP } from "../../utils/utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: widthPercentageToDP("2"),
    backgroundColor: "#fff",
  },
});

//make this component available to the app
export default styles;
