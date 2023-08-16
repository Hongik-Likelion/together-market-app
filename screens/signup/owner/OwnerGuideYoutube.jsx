import React, { useState, useCallback, useRef } from 'react';
import { Alert } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { styled } from 'styled-components/native';

function OwnerGuideYoutube(props) {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('영상 시청이 종료되었습니다!');
    }
  }, []);

  return (
    //나중에 영상 만들어지면, 해당 영상 ID로 바꿔야함
    <Container>
      <YoutubePlayer height={300} play={playing} videoId={'fMiN67xd2zQ'} onChangeState={onStateChange} />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;

export default OwnerGuideYoutube;
