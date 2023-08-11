import React, { useState } from 'react';
import { View, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

function GetOpenTime({}) {
  const [startTime, setStartTime] = useState(new Date()); // 시작 시간
  const [endTime, setEndTime] = useState(new Date()); // 종료 시간
  const [isSelected, setIsSelected] = useState(false); // 시작 시간 선택 여부

  const onSelect = (event, selectedTime) => {
    if (selectedTime !== undefined) {
      if (!isSelected) {
        setStartTime(selectedTime);
        setIsSelected(true);
      } else {
        setEndTime(selectedTime);
      }
    }
  };

  return (
    <>
      <View>
        <Text>영업시간</Text>
        <DateTimePicker value={startTime} mode="time" is24Hour={true} display="default" onChange={onSelect} />
        {isSelected && (
          <DateTimePicker
            value={endTime}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={onSelect}
            minimumDate={startTime} // 시작 시간 선택 후에만 종료 시간 선택 가능
          />
        )}
        <View>
          <Text>시작 시간: {startTime.toLocaleTimeString()}</Text>
          <Text>종료 시간: {endTime.toLocaleTimeString()}</Text>
        </View>
      </View>
    </>
  );
}

export default GetOpenTime;
