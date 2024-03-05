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
  },
  titleStyle: {
    width: "80%",
    paddingTop: "8%",
    fontSize: wp("5%"),
    textAlign: "left",

    fontFamily: Fonts.Poppins_700Bold,
  },
  infoStyle: {
    paddingTop: "3%",
    textAlign: "justify",
    width: "80%",
    fontSize: wp("4%"),
    fontFamily: Fonts.Poppins_400Regular,
  },
});

//make this component available to the app
export default styles;
