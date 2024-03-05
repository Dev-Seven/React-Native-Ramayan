//import liraries
import React, { Component, useEffect, useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import BlackButton from "../../components/blackButton";
import { ScreenList } from "../../constants/constants";
import { DataContext } from "../../utils/Context";
import { navigationToScreen } from "../../utils/utils";
import ShlockList from "../shlocks/shlockList";
import styles from "./shlockIntro.styles";

// create a component
const ShlockIntro = (props) => {
  const { setStatusBarColor } = useContext(DataContext);
  const data = !!props.route.params ? props.route.params : null;
  const title = !!data.title ? data.title : "";
  const colorHeader = !!data.headerColor ? data.headerColor : "#fff";
  const assetColor = !!data.headerTitleColor ? data.headerTitleColor : "#111";

  useEffect(() => {
    setStatusBarColor(colorHeader);
    return () => {
      setStatusBarColor("#fff");
    };
  }, [colorHeader]);
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={[styles.titleStyle]}>{"What is " + title}?</Text>
          <Text style={[styles.infoStyle]}>
            {
              "Ornare arcu dui vivamus arcu felis bibendum. Eget nulla facilisi etiam dignissim diam quis enim. Ut enim blandit volutpat maecenas volutpat. Porttitor leo a diam sollicitudin. Enim tortor at auctor urna nunc. Morbi tristique senectus et netus et malesuada fames ac. Tincidunt eget nullam non nisi est sit. At tellus at urna condimentum mattis pellentesque id. Tempor orci eu lobortis elementum nibh tellus molestie. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Enim facilisis gravida neque convallis a cras semper auctor.\n\nOrnare arcu dui vivamus arcu felis bibendum. Eget nulla facilisi etiam dignissim diam quis enim. Ut enim blandit volutpat maecenas volutpat. Porttitor leo a diam sollicitudin."
            }
          </Text>
        </View>
      </ScrollView>
      <BlackButton
        onPress={() => {
          navigationToScreen(ScreenList.SHLOCKS, props, {
            title: title,
            total: data?.total,
            label: data?.label,
            headerColor: colorHeader,
            headerTitleColor: assetColor,
          });
        }}
        title="Next"
        customStyles={{ position: "absolute", bottom: 20 }}
      />
    </View>
  );
};

export default ShlockIntro;
