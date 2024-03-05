//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Fonts } from "../constants/constants";

// create a component
const BlackButton = ({ title, customStyles, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, customStyles]}
    >
      <Text style={styles.buttonTitleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 45,
    justifyContent: "center",
    borderRadius: 8,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#111",
  },
  buttonTitleStyle: {
    fontFamily: Fonts.Poppins_700Bold,
    fontSize: 15,
    color: "white",
  },
});

//make this component available to the app
export default BlackButton;
