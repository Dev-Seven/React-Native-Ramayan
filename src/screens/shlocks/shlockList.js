//import liraries
import React, { useEffect, useState } from "react";
import TrackPlayer, { Capability } from "react-native-track-player";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import BlackButton from "../../components/blackButton";
import ColorCard from "../../components/colorCard";
import ShlockCard from "../../components/shlockCard";
import { ScreenList } from "../../constants/constants";
import { navigationToScreen } from "../../utils/utils";
import styles from "./shlocklist.styles";
import { tracks } from "../../utils/Track";

export function ArrayRange(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
}
// create a component
const ShlockList = (props) => {
  const [favs, setFavs] = useState([]);
  const data = !!props.route.params ? props.route.params : null;
  const title = !!data.title ? data.title : "";
  const label = !!data.label ? data.label : "";
  const colorHeader = !!data.headerColor ? data.headerColor : "#fff";
  const assetColor = !!data.headerTitleColor ? data.headerTitleColor : "#111";
  const totalTracks = data?.total || 0;
  async function setup() {
    await TrackPlayer.setupPlayer({});
    await TrackPlayer.add(tracks);
  }

  useEffect(() => {
    TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.Stop,
        Capability.SeekTo,
      ],
      compactCapabilities: [Capability.Play, Capability.Pause],
    });
    setup();
    return () => {};
  }, []);

  return (
    <ScrollView>
      <BlackButton
        onPress={() =>
          navigationToScreen(ScreenList.PLAYERSCREEN, props, {
            title: title,
            subtitle: "Shargas " + 1,
            headerColor: colorHeader,
            headerTitleColor: assetColor,
          })
        }
        customStyles={{ marginTop: "3%", width: "80%" }}
        title="Play all sargas"
      />
      <View style={styles.container}>
        {ArrayRange(1, totalTracks).map((item, index) => (
          <ShlockCard
            key={index}
            onPress={() => {
              navigationToScreen(ScreenList.PLAYERSCREEN, props, {
                title: title,
                subtitle: `Sargas ${item}`,
                track: {
                  id: item,
                  url: `https://sgsramayana.s3.amazonaws.com/${label}/audio/${label}-00${item}.mp3`,
                  album: label,
                  title: `Sargas ${item}`,
                  duration: 149,
                },
                headerColor: colorHeader,
                headerTitleColor: assetColor,
              });
            }}
            title={`${title} ${item}`}
          />
        ))}
      </View>
    </ScrollView>
  );
};

//make this component available to the app
export default ShlockList;
