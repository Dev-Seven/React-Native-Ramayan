//import liraries
import React, { useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import RadioCard from "../../components/radioCard";
import { LanguageContext } from "../../utils/Context";
import styles from "./languages.styles";

// create a component
const Languages = () => {
  const { setLanguage } = useContext(LanguageContext);
  const options = [
    { id: "en", name: "English" },
    { id: "sn", name: "Sanskrit" },
    { id: "kn", name: "Kannada" },
    { id: "bg", name: "Bengali" },
    { id: "tm", name: "Tamil" },
    { id: "tl", name: "Telugu" },
  ];
  const [languages, setLanguages] = useState(options);
  return (
    <View style={styles.container}>
      <RadioCard
        items={languages}
        onChangeValue={(item) => setLanguage(item)}
      />
    </View>
  );
};

//make this component available to the app
export default Languages;
