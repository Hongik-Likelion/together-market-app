import React from 'react';
import { styled } from 'styled-components/native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS } from 'colors';

function AlarmItem({ alarm }) {
  const { type, title, date, content } = alarm;

  return (
    <Container>
      <AlarmType type={type}>
        <AlarmTypeLabel type={type}>{type}</AlarmTypeLabel>
      </AlarmType>
      <Title>{title}</Title>
      <Date>{date}</Date>
      <Content numberOfLines={1}>{content}</Content>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;

  align-items: center;
  align-content: space-around;

  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.lightgray};

  height: ${hp(8)}px;
  padding: ${RFValue(8)}px;
`;

const AlarmType = styled.View`
  ${({ type }) =>
    type === '채팅'
      ? `
        background-color: ${COLORS.gray02};
    `
      : `
        background-color: ${COLORS.main};
    `};

  justify-content: center;
  align-items: center;

  padding: ${RFValue(4)}px;
  border-radius: 6px;
`;

const AlarmTypeLabel = styled.Text`
  font-size: ${RFValue(9)}px;
  ${({ type }) =>
    type === '채팅'
      ? `
        color: ${COLORS.darkgray};
    `
      : `
        color: ${COLORS.white};
    `}
`;

const Title = styled.Text`
  margin-left: ${RFValue(4)}px;
  flex-grow: 1;
  font-size: ${RFValue(13, 680)}px;
  font-weight: 700;
`;

const Date = styled.Text`
  font-weight: 700;
  color: ${COLORS.darkgray};
`;

const Content = styled.Text`
  font-size: ${RFValue(12)}px;
  font-weight: 500;
`;
export default AlarmItem;
