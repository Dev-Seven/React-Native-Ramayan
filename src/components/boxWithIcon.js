//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Fonts } from "../constants/constants";
import { widthPercentageToDP } from "../utils/utils";
import Ionicons from "@expo/vector-icons/Ionicons";
// create a component
const IconBox = ({ title, onPress, image }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image style={styles.imgStyle} source={image} />

      <View style={styles.verticalLine} />
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: "92%",
    flexDirection: "row",
    alignItems: "center",
    fontFamily: Fonts.Poppins_900Black,
    height: 70,
    justifyContent: "center",
    backgroundColor: "white",
    shadowColor: "gray",
    paddingHorizontal: "4%",
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: "lightgray",
    marginBottom: widthPercentageToDP("2.5%"),
  },
  textStyle: {
    flex: 1,
    paddingLeft: "2%",
    fontSize: widthPercentageToDP("3.8%"),
    fontFamily: Fonts.Poppins_400Regular,
  },
  imgStyle: {
    width: 25,
    height: 25,
  },
  verticalLine: {
    width: 1,
    marginHorizontal: "5%",
    backgroundColor: "lightgray",
    height: "50%",
  },
});

//make this component available to the app
export default IconBox;
