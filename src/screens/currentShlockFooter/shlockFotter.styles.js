import { Dimensions, StyleSheet } from "react-native";
import { Fonts } from "../../constants/constants";
import { widthPercentageToDP } from "../../utils/utils";

const { width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "space-between",
    width,
    height: 70,
  },
  progressContainer: {
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 1,
  },
  timerStyle: { flex: 1, color: "white", fontFamily: Fonts.Poppins_500Medium },
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
    flex: 1,
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
    flexBasis: 150,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingEnd: 10,
  },
  btn: {
    padding: 5,
  },
});

export default styles;
