import AlarmList from '@components/alarm/AlarmList';
import { COLORS } from 'colors';
import React from 'react';
import { styled } from 'styled-components';

function AlarmScreen() {
  return (
    <Container>
      <AlarmList />
    </Container>
  );
}

const Container = styled.View`
  background-color: ${COLORS.white};
  flex: 1;
`;

export default AlarmScreen;
