//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import styles from "./swamiDetails.styles";

// create a component
const SwamiDetails = () => {
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <Image
          style={styles.imageStyle}
          source={require("../../../assets/swamijiBox.png")}
        />
        <Text style={[styles.textStyle]}>
          {
            "Ornare arcu dui vivamus arcu felis bibendum. Eget nulla facilisi etiam dignissim diam quis enim. Ut enim blandit volutpat maecenas volutpat. Porttitor leo a diam sollicitudin. Enim tortor at auctor urna nunc. Morbi tristique senectus et netus et malesuada fames ac. Tincidunt eget nullam non nisi est sit. At tellus at urna condimentum mattis pellentesque id. Tempor orci eu lobortis elementum nibh tellus molestie. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Enim facilisis gravida neque convallis a cras semper auctor."
          }
        </Text>
      </View>
    </ScrollView>
  );
};

//make this component available to the app
export default SwamiDetails;
