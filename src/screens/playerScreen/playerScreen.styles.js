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
  progressContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 1,
  },
  timerStyle: { flex: 1, color: "#111", fontFamily: Fonts.Poppins_500Medium },
  tracker: {
    width,
    height: 50,
    backgroundColor: "rgba(0, 0, 0, .08)",
  },
  left: {
    paddingLeft: widthPercentageToDP("3%"),
  },
  coverArtContainer: {
    position: "absolute",
    width: 135,
    height: 135,
    left: -20,
    bottom: -20,
  },
  coverArt: {
    width: 135,
    height: 135,
  },
  content: {
    justifyContent: "center",
  },
  songTitle: {
    color: "#fff",
    fontSize: widthPercentageToDP("4.2%"),
    fontFamily: Fonts.Poppins_500Medium,
  },
  songArtist: {
    color: "#fff",
    fontSize: widthPercentageToDP("3.2%"),
    fontFamily: Fonts.Poppins_400Regular,
  },
  actions: {
    width: "100%",
    justifyContent: "center",

    flexBasis: 150,
    flexDirection: "row",
    alignItems: "center",
  },
  btn: {
    flex: 1,
    paddingLeft: "6%",
  },
});

export default styles;
