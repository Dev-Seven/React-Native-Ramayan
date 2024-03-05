//import liraries
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useContext, useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Slider from "react-native-slider";
import TrackPlayer, { State, useProgress } from "react-native-track-player";
import styles from "./playerScreen.styles";
import { Audio } from "expo-av";
import { PlayerContext } from "../../utils/Context";

// create a component
const PlayerScreen = (props) => {
  const { setCurrentTrack } = useContext(PlayerContext);
  const data = !!props.route.params ? props.route.params : null;
  const title = !!data.title ? data.title : "";
  const track = data?.track || null;
  const colorHeader = !!data.headerColor ? data.headerColor : "#fff";
  const assetColor = !!data.headerTitleColor ? data.headerTitleColor : "#111";
  const [actions, setActions] = useState({
    prev: false,
    play: false,
    stop: false,
    next: false,
  });
  const progress = useProgress();
  const [isPlaying, setPlaying] = useState(true);

  const onPlayPausePress = async () => {
    const state = await TrackPlayer.getState();
    console.log(state, State.Playing);
    if (state === State.Playing) {
      TrackPlayer.pause();
      setPlaying(false);
    }

    if (state === State.Paused) {
      TrackPlayer.play();
      setPlaying(true);
    }
  };
  const secondsToHHMMSS = (seconds) => {
    // credits - https://stackoverflow.com/a/37096512
    seconds = Number(seconds);
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor((seconds % 3600) % 60);

    const hrs = h > 0 ? (h < 10 ? `0${h}:` : `${h}:`) : "";
    const mins = m > 0 ? (m < 10 ? `0${m}:` : `${m}:`) : "00:";
    const scnds = s > 0 ? (s < 10 ? `0${s}` : s) : "00";
    return `${hrs}${mins}${scnds}`;
  };

  async function intialLoad() {
    setCurrentTrack(track);
    TrackPlayer.stop();
    TrackPlayer.reset();
    if (track) {
      setPlaying(true);
      await TrackPlayer.add(track).then((res) => {
        TrackPlayer.play();
        // getDuration();
      });
    }
  }

  useEffect(() => {
    intialLoad();
  }, [track]);

  const playOrPauseIcon = isPlaying ? "pause" : "play";
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 3, padding: "5%" }}>
        <View
          style={{
            flex: 1,
            padding: "5%",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#FF7A00",
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={{ fontSize: 24, textAlign: "center" }}>
              {
                "ತಪಸ್ಸ್ವಾಧ್ಯಾಯನಿರತಂ ತಪಸ್ವೀ ವಾಗ್ವಿದಾಂ ವರಮ್ .\n\n\nನಾರದಂ ಪರಿಪಪ್ರಚ್ಛ ವಾಲ್ಮೀಕಿರ್ಮುನಿಪುಙ್ಗವಮ್ \n\n৷৷1.1.1৷৷\n\n\nತಪಸ್ಸ್ವಾಧ್ಯಾಯನಿರತಂ ತಪಸ್ವೀ ವಾಗ್ವಿದಾಂ ವರಮ್ .\n\n\nನಾರದಂ ಪರಿಪಪ್ರಚ್ಛ ವಾಲ್ಮೀಕಿರ್ಮುನಿಪುಙ್ಗವಮ್ \n\n৷৷1.1.1৷৷ತಪಸ್ಸ್ವಾಧ್ಯಾಯನಿರತಂ ತಪಸ್ವೀ ವಾಗ್ವಿದಾಂ ವರಮ್ .\n\n\nನಾರದಂ ಪರಿಪಪ್ರಚ್ಛ ವಾಲ್ಮೀಕಿರ್ಮುನಿಪುಙ್ಗವಮ್ \n\n৷৷1.1.1৷৷"
              }
            </Text>
          </ScrollView>
        </View>
      </View>
      <View style={[{ backgroundColor: "#fff" }]}>
        <Slider
          style={{ width: "100%", height: 50 }}
          minimumValue={0}
          maximumValue={track.duration}
          value={progress.position}
          tapToSeek={true}
          thumbTintColor="#FF7A00"
          minimumTrackTintColor="#000"
          maximumTrackTintColor="#fff"
        />
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            top: -15,
            alignItems: "flex-start",
            paddingHorizontal: "2%",
          }}
        >
          <Text style={styles.timerStyle}>
            {secondsToHHMMSS(Math.floor(progress.position || 0))}
          </Text>
          <Text style={[styles.timerStyle, { textAlign: "right" }]}>
            {secondsToHHMMSS(track.duration || 0)}
          </Text>
        </View>
      </View>
      <View style={[styles.actions, { backgroundColor: "#fff" }]}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => TrackPlayer.setRepeatMode()}
        >
          <AntDesign name="retweet" color="#111" size={40} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => TrackPlayer.skipToPrevious()}
        >
          <AntDesign name="stepbackward" color="#111" size={40} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, { paddingLeft: "2%" }]}
          onPress={onPlayPausePress}
        >
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              paddingLeft: "5%",
              alignItems: "center",
              backgroundColor: "#FF7A00",
              justifyContent: "center",
            }}
          >
            <Ionicons size={40} name={playOrPauseIcon} color={"#fff"} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => TrackPlayer.skipToNext()}
        >
          <AntDesign size={40} name="stepforward" color="#111" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} disabled={actions?.prev}>
          <Ionicons name="heart" color="red" size={40} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

//make this component available to the app
export default PlayerScreen;
