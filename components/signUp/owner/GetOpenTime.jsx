import React, { useEffect, useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DateTimePicker from '@react-native-community/datetimepicker';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS } from 'colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function GetOpenTime({ onSaveTimeData }) {
  const initialTime = new Date();
  initialTime.setHours(0, 0, 0, 0);

  const [startTime, setStartTime] = useState(initialTime);
  const [endTime, setEndTime] = useState(initialTime);
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);

  const formatTime = (time) => {
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const onStartTimeChange = (event, selectedTime) => {
    if (selectedTime !== undefined) {
      setStartTime(selectedTime);
      setShowStartTimePicker(false);
    }
  };

  const onEndTimeChange = (event, selectedTime) => {
    if (selectedTime !== undefined) {
      setEndTime(selectedTime);
      setShowEndTimePicker(false);
    }
  };

  useEffect(() => {
    onSaveTimeData(formatTimeTo24Hours(startTime), formatTimeTo24Hours(endTime));
  }, [startTime, endTime, onSaveTimeData]);

  const formatTimeTo24Hours = (time) => {
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return (
    <Container>
      <LocationTxt>영업시간</LocationTxt>
      <Time>
        {!showEndTimePicker && (
          <Start>
            <TimeDescription>시작</TimeDescription>

            <StartTime onPress={() => setShowStartTimePicker(true)}>
              <TimeValue>
                {formatTime(startTime)}
                <MaterialIcons name={'keyboard-arrow-down'} size={RFValue(18)} />
              </TimeValue>
            </StartTime>
            <StartTimeContainer>
              {showStartTimePicker && (
                <DateTimePicker
                  value={startTime}
                  mode="time"
                  is24Hour={true}
                  display="spinner"
                  onChange={onStartTimeChange}
                />
              )}
            </StartTimeContainer>
          </Start>
        )}
        {!showStartTimePicker && (
          <End>
            <TimeDescription>종료</TimeDescription>

            <EndTime onPress={() => setShowEndTimePicker(true)}>
              <TimeValue>
                {formatTime(endTime)}
                <MaterialIcons name={'keyboard-arrow-down'} size={RFValue(18)} />
              </TimeValue>
            </EndTime>
            <EndTimeContainer>
              {showEndTimePicker && (
                <DateTimePicker
                  value={endTime}
                  mode="time"
                  is24Hour={true}
                  display="spinner"
                  onChange={onEndTimeChange}
                  minimumDate={false} // 시작 시간 이후 시간대에서만 종료 시간 선택 가능
                />
              )}
            </EndTimeContainer>
          </End>
        )}
      </Time>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;

const LocationTxt = styled.Text`
  position: relative;
  margin-left: ${wp(5)}px;

  font-size: ${RFValue(16)}px;
  font-weight: bold;
`;

const Time = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  top: ${hp(1.5)}px;
`;

const Start = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TimeDescription = styled.Text`
  font-size: ${RFValue(14)}px;
  margin-right: ${wp(3)}px;
  top: ${hp(1.5)}px;
  font-weight: bold;

  align-items: center;
  justify-content: center;
`;

const StartTimeContainer = styled.View`
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: ${wp(100)}px;
`;

const StartTime = styled.TouchableOpacity`
  background-color: ${COLORS.gray02};
  align-items: center;
  justify-content: center;
  top: ${hp(1.5)}px;

  width: ${wp(30)}px;
  height: ${hp(6.28)}px;
  border-radius: 8px;

  padding-left: ${RFValue(4)}px;
  padding: ${RFValue(10)}px;
`;

const TimeValue = styled.Text`
  font-size: ${RFValue(16)}px;

  ${({ showStartTimePicker }) =>
    showStartTimePicker
      ? `
      color: ${COLORS.black};
      `
      : `
      color: ${COLORS.gray01};
      `}
`;

const End = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const EndTimeContainer = styled.View`
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: ${wp(100)}px;
`;

const EndTime = styled.TouchableOpacity`
  background-color: ${COLORS.gray02};
  align-items: center;
  justify-content: center;
  top: ${hp(1.5)}px;

  width: ${wp(30)}px;
  height: ${hp(6.28)}px;
  border-radius: 8px;

  padding-left: ${RFValue(4)}px;
  padding: ${RFValue(10)}px;
`;

export default GetOpenTime;
