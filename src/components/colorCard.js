//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Fonts } from "../constants/constants";
import { widthPercentageToDP } from "../utils/utils";
import Ionicons from "@expo/vector-icons/Ionicons";
// create a component
const ColorCard = ({ title, onPress, number, cardColor }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { backgroundColor: cardColor }]}
    >
      <Text style={styles.textStyle}>{title}</Text>
      <Text style={styles.textStyle}>{number}</Text>
      <Ionicons name="md-heart" size={25} color="red" />
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    fontFamily: Fonts.Poppins_900Black,
    height: 65,
    justifyContent: "center",
    backgroundColor: "white",
    shadowColor: "gray",
    paddingHorizontal: "3%",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    borderRadius: 6,
    borderWidth: 0.3,
    borderColor: "lightgray",
    elevation: 10,
    marginBottom: widthPercentageToDP("2.5%"),
  },
  textStyle: {
    flex: 1,
    fontFamily: Fonts.Poppins_500Medium,
    color: "white",
  },
});

//make this component available to the app
export default ColorCard;
