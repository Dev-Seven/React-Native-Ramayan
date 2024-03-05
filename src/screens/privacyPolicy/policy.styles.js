import { Dimensions, StyleSheet } from "react-native";
import { Fonts } from "../../constants/constants";
import { widthPercentageToDP } from "../../utils/utils";
const width = Dimensions.get("window").width;

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

export default styles;
