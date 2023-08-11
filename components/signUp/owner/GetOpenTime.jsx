import React, { useEffect, useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DateTimePicker from '@react-native-community/datetimepicker';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

function GetOpenTime({ onSaveTimeData }) {
  const initialTime = new Date();
  initialTime.setHours(0, 0, 0, 0);

  const [startTime, setStartTime] = useState(initialTime);
  const [endTime, setEndTime] = useState(initialTime);

  const onStartTimeChange = (event, selectedTime) => {
    if (selectedTime !== undefined) {
      setStartTime(selectedTime);
    }
  };

  const onEndTimeChange = (event, selectedTime) => {
    if (selectedTime !== undefined) {
      setEndTime(selectedTime);
    }
  };

  useEffect(() => {
    onSaveTimeData(startTime.toLocaleTimeString(), endTime.toLocaleTimeString());
  }, [startTime, endTime, onSaveTimeData]);

  return (
    <Container>
      <LocationTxt>영업시간</LocationTxt>
      <Time>
        <Start>
          <TimeDescription>시작</TimeDescription>

          <DateTimePicker
            value={startTime}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={onStartTimeChange}
          />
        </Start>
        <End>
          <TimeDescription>종료</TimeDescription>

          <DateTimePicker
            value={endTime}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={onEndTimeChange}
            minimumDate={startTime} // 시작 시간 이후 시간대에서만 종료 시간 선택 가능
          />
        </End>
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
  margin-top: ${hp(7)}px;
  font-size: ${RFValue(16)}px;
  font-weight: bold;
`;

const Start = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Time = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: ${hp(1.5)}px;
  margin-left: ${wp(-8)}px;
`;

const TimeDescription = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: bold;
`;

const End = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default GetOpenTime;
