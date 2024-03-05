import React, { Component } from "react";
import { useState } from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { Fonts } from "../constants/constants";
import { widthPercentageToDP } from "../utils/utils";

const RadioCard = ({ items, onChangeValue }) => {
  const [value, setValue] = useState(0);

  return items.map((item, index) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setValue(index);
          onChangeValue(item?.id);
        }}
        style={styles.container}
      >
        <Text style={styles.textStyle}>{item.name}</Text>
        {value === index ? (
          <TouchableOpacity style={styles.rbStyle}>
            <View style={styles.selected} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.rbStyle, { borderColor: "lightgray" }]}
          ></TouchableOpacity>
        )}
      </TouchableOpacity>
    );
  });
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    fontFamily: Fonts.Poppins_900Black,
    height: 55,
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
    elevation: 6,
    marginBottom: widthPercentageToDP("2.5%"),
  },
  textStyle: {
    flex: 1,
    fontFamily: Fonts.Poppins_400Regular,
    fontSize: widthPercentageToDP("3.5%"),
  },
  rbWrapper: {
    marginBottom: 36,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  rbStyle: {
    height: 26,
    width: 26,
    borderRadius: 110,
    borderWidth: 2,
    borderColor: "#2750aa",
    alignItems: "center",
    justifyContent: "center",
  },
  selected: {
    width: 10,
    height: 10,
    borderRadius: 55,
    backgroundColor: "#2750aa",
  },
  result: {
    marginTop: 22,
    color: "white",
    fontWeight: "600",
    backgroundColor: "blue",
  },
});

export default RadioCard;
