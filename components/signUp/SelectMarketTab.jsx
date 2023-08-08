import React from 'react';
import { styled } from 'styled-components/native';
import { COLORS } from 'colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';

//아직 시장 추가해서 아래에 보이는 부분 구현 X
function SelectMarketTab({ favMarket, onChange }) {
  return (
    <>
      <Tab>
        <Input value={favMarket} onChangeText={onChange} placeholder="망원시장" placeholderTextColor={COLORS.gray01} />
        <Feather
          name={'search'}
          size={25}
          color={COLORS.main}
          style={{ position: 'absolute', top: hp(5), right: 30 }}
        />
      </Tab>
      <SubTxt>한 곳 이상 설정해주세요. (필수)</SubTxt>
    </>
  );
}

const Tab = styled.View`
  flex: 1;
`;

const Input = styled.TextInput`
  background-color: ${COLORS.gray02};

  margin-left: ${wp(4.8)}px;
  margin-top: ${hp(3.2)}px;

  width: ${wp(90.4)}px;
  height: ${hp(6.28)}px;
  border-radius: 8px;

  padding-left: 4px;
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
`;

const SubTxt = styled.Text`
  position: absolute;
  color: ${COLORS.gray01};
  margin-left: ${wp(5)}px;
  margin-top: ${hp(37)}px;
  font-size: 16px;
`;

export default SelectMarketTab;
