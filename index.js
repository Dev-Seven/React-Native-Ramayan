import "expo-dev-client";
import { registerRootComponent } from "expo";
import App from "./App";
import TrackPlayer from "react-native-track-player";

registerRootComponent(App);

TrackPlayer.registerPlaybackService(() => require("./src/utils/Service.js"));
