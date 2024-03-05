//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Fonts } from "../constants/constants";
import { widthPercentageToDP } from "../utils/utils";
import Ionicons from "@expo/vector-icons/Ionicons";
// create a component
const ShlockCard = ({ title, onPress, number, cardColor }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { backgroundColor: "#fff" }]}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
        }}
      >
        <Text style={styles.titleStyle}>{title}</Text>
        <Text style={styles.textStyle}>{number}</Text>
      </View>
      <Image
        source={require("../../assets/Play.png")}
        style={{ width: 40, height: 40 }}
      />
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
    height: 70,
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
  titleStyle: {
    fontFamily: Fonts.Poppins_700Bold,
    color: "#111",
    fontSize: 16,
    padding: "1%",
  },
  textStyle: {
    fontFamily: Fonts.Poppins_500Medium,
    color: "lightgray",
    padding: "1%",
  },
});

//make this component available to the app
export default ShlockCard;
