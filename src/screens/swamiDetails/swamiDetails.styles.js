import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "../../utils/utils";
import { Fonts } from "../../constants/constants";

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  textStyle: {
    paddingTop: "3%",
    textAlign: "justify",
    width: "80%",
    fontSize: wp("4%"),
    fontFamily: Fonts.Poppins_400Regular,
  },
  imageStyle: { width: wp("40%"), height: wp("40%"), marginTop: wp("10%") },
});

//make this component available to the app
export default styles;
