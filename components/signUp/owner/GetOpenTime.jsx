import { COLORS } from 'colors';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';

import { styled } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

function GetOpenTime({}) {
  return (
    <>
      <Tab>
        <LocationTxt>영업시간</LocationTxt>
      </Tab>
    </>
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
