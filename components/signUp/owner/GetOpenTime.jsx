import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DateTimePicker from '@react-native-community/datetimepicker';
import { styled } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import dayjs from 'dayjs';

function GetOpenTime({}) {
  const [startTime, setStartTime] = useState(); // 시작 시간
  const [endTime, setEndTime] = useState(); // 종료 시간

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

  return (
    <Tab>
      <LocationTxt>영업시간</LocationTxt>
      <DateTimePicker
        value={startTime}
        mode="time"
        is24Hour={true}
        defaultValue={dayjs('2022-04-17T15:30')}
        onChange={onStartTimeChange}
        style={{ width: 400, height: 200, borderColor: 'red' }} // 크기 조정을 위한 스타일 지정
      />

      <DateTimePicker
        value={endTime}
        mode="time"
        is24Hour={true}
        display="default"
        onChange={onEndTimeChange}
        minimumDate={startTime} // 시작 시간 선택 후에만 종료 시간 선택 가능
      />

      <View>
        {startTime && <Text>시작 시간: {startTime.toLocaleTimeString()}</Text>}
        {endTime && <Text>종료 시간: {endTime.toLocaleTimeString()}</Text>}
      </View>
    </Tab>
  );
}

const Tab = styled.View`
  flex: 1;
`;

const LocationTxt = styled.Text`
  position: relative;
  margin-left: ${wp(5)}px;
  margin-top: ${hp(3)}px;
  font-size: ${RFValue(16)}px;
  font-weight: bold;
`;

export default GetOpenTime;
