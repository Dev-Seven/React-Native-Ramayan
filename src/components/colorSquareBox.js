//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { Fonts } from "../constants/constants";
import { widthPercentageToDP } from "../utils/utils";
import Ionicons from "@expo/vector-icons/Ionicons";
// create a component
const SquareColorBox = ({ title, onPress, number, cardColor, image }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { backgroundColor: cardColor }]}
    >
      <View
        style={{
          paddingHorizontal: widthPercentageToDP("3%"),
          paddingVertical: widthPercentageToDP("1.5%"),
        }}
      >
        <Text
          style={[
            styles.textStyle,
            {
              fontSize: widthPercentageToDP("4%"),
              fontFamily: Fonts.Poppins_700Bold,
            },
          ]}
        >
          {title}
        </Text>
        <Text style={styles.textStyle}>{number}</Text>
      </View>
      <View style={styles.imageContainerStyle}>
        <Image resizeMode="contain" style={styles.imageStyle} source={image} />
      </View>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP("44%"),
    flexDirection: "column",
    fontFamily: Fonts.Poppins_900Black,
    height: widthPercentageToDP("35%"),
    backgroundColor: "white",

    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: "lightgray",
    elevation: 10,
  },
  textStyle: {
    textAlign: "left",
    alignSelf: "flex-start",
    fontSize: widthPercentageToDP("3%"),
    fontFamily: Fonts.Poppins_500Medium,
    color: "white",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    alignSelf: "baseline",
  },
  imageContainerStyle: {
    width: "100%",
    position: "absolute",
    bottom: -2,
    height: widthPercentageToDP("22%"),
    alignSelf: "baseline",
    overflow: "hidden",
  },
});

//make this component available to the app
export default SquareColorBox;
