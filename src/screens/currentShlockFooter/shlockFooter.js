import React, { useEffect, useRef, useState, memo, useContext } from "react";
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import styles from "./shlockFotter.styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Slider from "react-native-slider";
import TrackPlayer, { State, useProgress } from "react-native-track-player";
import { PlayerContext } from "../../utils/Context";

const ShlockFooter = ({
  shlock,
  onSeek,
  minTime,
  maxTime,
  currentTime,
  footerColor,
  shlockNumber,
}) => {
  const { currentTrack } = useContext(PlayerContext);
  const [actions, setActions] = useState({
    prev: false,
    play: false,
    stop: false,
    next: false,
  });
  const [isTouchEnded, setIsTouchEnded] = useState(false);

  const progress = useProgress();
  const [isPlaying, setPlaying] = useState(true);
  const [duration, setDuration] = useState(0);

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
  const intialLoad = async () => {
    try {
      const track = await TrackPlayer.getCurrentTrack();
      const result = await TrackPlayer.getDuration();
      console.log("Track", track);
      setDuration(result);
    } catch (error) {}
  };
  useEffect(() => {
    intialLoad();
  }, []);
  const playOrPauseIcon = isPlaying ? "pause" : "play";
  return (
    <View>
      <View
        style={[styles.progressContainer, { backgroundColor: footerColor }]}
      >
        <Slider
          style={{ width: "100%", height: 50 }}
          minimumValue={0}
          maximumValue={duration}
          value={progress.position || 0}
          tapToSeek={true}
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
            {secondsToHHMMSS(duration || 0)}
          </Text>
        </View>
      </View>
      <View style={[styles.container, { backgroundColor: footerColor }]}>
        <View style={styles.left}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={styles.coverArtContainer}></View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.content}>
          <Text numberOfLines={1} style={styles.songTitle}>
            {currentTrack?.album}
          </Text>
          <Text numberOfLines={1} style={styles.songArtist}>
            {currentTrack?.title}
            {currentTrack?.id}
          </Text>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.btn} disabled={actions?.prev}>
            <Ionicons name="heart-outline" color="#fff" size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => TrackPlayer.skipToPrevious()}
          >
            <AntDesign name="stepbackward" color="#fff" size={24} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={onPlayPausePress}>
            <Ionicons size={24} name={playOrPauseIcon} color={"#fff"} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => TrackPlayer.skipToNext()}
          >
            <AntDesign size={24} name="stepforward" color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default memo(ShlockFooter);
