import React, { useState, useEffect } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DateTimePicker from '@react-native-community/datetimepicker';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // 이전에 주어진 색상 관련 모듈은 사용되지 않았으므로 제거
import { COLORS } from 'colors';

function MarketTimeChangeInfo({ opening_time, closing_time, onSaveChangedTimeData }) {
  const formatTimeToDateHours = (timeStr) => {
    const [hours, minutes] = timeStr.split(':');
    const date = new Date();
    date.setHours(parseInt(hours, 10));
    date.setMinutes(parseInt(minutes, 10));
    return date;
  };

  const [startTime, setStartTime] = useState(formatTimeToDateHours(opening_time));
  const [isSelectedStart, setStart] = useState(false);

  const [endTime, setEndTime] = useState(formatTimeToDateHours(closing_time));
  const [isSelectedEnd, setEnd] = useState(false);

  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);

  useEffect(() => {
    onSaveChangedTimeData(formatTimeTo24Hours(startTime), formatTimeTo24Hours(endTime));
  }, [startTime, endTime, onSaveChangedTimeData]);

  const formatTimeTo24Hours = (time) => {
    if (time instanceof Date) {
      const hours = time.getHours().toString().padStart(2, '0');
      const minutes = time.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
    }
    return '';
  };

  const onStartTimeChange = (event, selectedTime) => {
    if (selectedTime !== undefined) {
      setStartTime(selectedTime);
      setStart(true);
      setShowStartTimePicker(false);
      onSaveChangedTimeData(formatTimeTo24Hours(selectedTime), formatTimeTo24Hours(endTime));
    }
  };

  const onEndTimeChange = (event, selectedTime) => {
    if (selectedTime !== undefined) {
      setEndTime(selectedTime);
      setEnd(true);
      setShowEndTimePicker(false);
      onSaveChangedTimeData(formatTimeTo24Hours(startTime), formatTimeTo24Hours(selectedTime));
    }
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
                {isSelectedStart ? formatTimeTo24Hours(startTime) : opening_time}
                <MaterialIcons name={'keyboard-arrow-down'} size={RFValue(18)} />
              </TimeValue>
            </StartTime>
            <StartTimeContainer>
              {showStartTimePicker && (
                <DateTimePicker value={startTime} mode="time" display="spinner" onChange={onStartTimeChange} />
              )}
            </StartTimeContainer>
          </Start>
        )}
        {!showStartTimePicker && (
          <End>
            <TimeDescription>종료</TimeDescription>

            <EndTime onPress={() => setShowEndTimePicker(true)}>
              <TimeValue>
                {isSelectedEnd ? formatTimeTo24Hours(endTime) : closing_time}
                <MaterialIcons name={'keyboard-arrow-down'} size={RFValue(18)} />
              </TimeValue>
            </EndTime>
            <EndTimeContainer>
              {showEndTimePicker && (
                <DateTimePicker
                  value={endTime}
                  mode="time"
                  display="spinner"
                  onChange={onEndTimeChange}
                  minimumDate={false}
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

  color: ${COLORS.black};
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

export default MarketTimeChangeInfo;
