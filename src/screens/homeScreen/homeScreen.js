//import liraries
import React, { Component, useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import SquareColorBox from "../../components/colorSquareBox";
import { ScreenList } from "../../constants/constants";
import { PlayerContext } from "../../utils/Context";
import { navigationToScreen, widthPercentageToDP } from "../../utils/utils";
import ShlockFooter from "../currentShlockFooter/shlockFooter";
import styles from "./homeScreen.styles";

// create a component
const HomeScreen = (props) => {
  const { currentTrack } = useContext(PlayerContext);
  const [data, setdata] = useState([
    {
      id: 1,
      label: "Balakanda",
      name: "Bālakāṇḍa",
      color: "#FFAA19",
      total: 76,
      image: require("../../../assets/img1.png"),
    },
    {
      id: 2,
      label: "Ayodhyakanda",
      name: "Ayodhyakāṇḍa",
      color: "#FF7A67",
      total: 111,
      image: require("../../../assets/img2.png"),
    },
    {
      id: 3,
      label: "Aranyakanda",
      name: "Araṇyakāṇḍa",
      color: "#7876FF",
      total: 74,
      image: require("../../../assets/img3.png"),
    },
    {
      id: 4,
      label: "Kiskindakanda",
      name: "Kiṣkindakāṇḍa",
      color: "#7E2FED",
      total: 66,
      image: require("../../../assets/img4.png"),
    },
    {
      id: 5,
      label: "Sundarakanda",
      name: "Sundarākāṇḍa",
      color: "#81B29A",
      total: 66,
      image: require("../../../assets/img5.png"),
    },
    {
      id: 6,
      label: "Yuddhakanda",
      name: "Yuddhakāṇḍa",
      color: "#457B9D",
      total: 116,
      image: require("../../../assets/img6.png"),
    },
    {
      id: 7,
      label: "Uttarakanda",
      name: "Uttarakāṇḍa",
      color: "#F2A064",
      total: 66,
      image: require("../../../assets/img6.png"),
    },
  ]);
  const [activeItem, setActiveItem] = useState("");
  const [maxTime, setMaxTime] = useState(204000);
  const [minTime, setMinTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const startTimer = async () => {
    setTimeout(() => {
      setCurrentTime(currentTime + 1000);
    }, 1000);
  };

  useEffect(() => {
    // if (currentTime <= maxTime) {
    //   startTimer();
    // } else {
    //   setCurrentTime(0);
    // }
  }, [currentTime]);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {/* <View style={styles.container}> */}
      <FlatList
        data={data}
        style={{ padding: widthPercentageToDP("2"), backgroundColor: "white" }}
        numColumns={2}
        renderItem={({ item, index }) => {
          return (
            <View style={{ padding: widthPercentageToDP("2%") }}>
              <SquareColorBox
                title={item.name}
                onPress={() => {
                  setActiveItem(item);
                  setCurrentTime(0);
                  navigationToScreen(ScreenList.SHLOCK_INTRO, props, {
                    headerColor: item.color,
                    headerTitleColor: "#fff",
                    title: item.name,
                    label: item.label,
                    total: item.total,
                  });
                }}
                number={item.total + " Sargas"}
                cardColor={item.color}
                image={item.image}
              />
            </View>
          );
        }}
      />
      {/* </View> */}
      {activeItem == "" ? null : (
        <ShlockFooter
          currentTime={currentTime}
          maxTime={maxTime}
          minTime={0}
          onSeek={(val) => setCurrentTime(val)}
          shlockNumber={1}
          shlock={activeItem}
          footerColor={
            data?.find((item) => item?.label === currentTrack?.album)?.color ||
            activeItem?.color
          }
        />
      )}
    </View>
  );
};

//make this component available to the app
export default HomeScreen;
