import React, { useState, useCallback, useRef } from "react";
import { View, Alert } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function AppGuideYoutubeCard() {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  return (
    <View>
      <YoutubePlayer
        height={160}
        width={160}
        play={playing}
        videoId={"fMiN67xd2zQ"}
        onChangeState={onStateChange}
      />
      
    </View>
  );
}