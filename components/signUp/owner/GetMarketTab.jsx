import { COLORS } from 'colors';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styled } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

function GetMarketTab({ addedMarket, setAddedMarket, content, onChangeLocation, onPressAdd }) {
  const tempmarketList = ['망원시장', '광장시장'];
  const [existMarket, setExistMarket] = useState(false);

  const findMarketList = (text) => {
    if (tempmarketList.includes(text)) {
      setExistMarket(true);
    } else {
      setExistMarket(false);
    }
  };

  return (
    <>
      <Tab>
        <LocationTxt>시장 위치</LocationTxt>
        <Input
          value={content}
          onChangeText={(text) => {
            onChangeLocation(text);
            findMarketList(text);
          }}
          placeholder="망원시장"
          placeholderTextColor={COLORS.gray01}
          editable={!addedMarket}
        />
        {existMarket ? (
          <Ionicons
            name={'add'}
            size={25}
            color={COLORS.main}
            style={{ position: 'absolute', top: hp(8.5), right: 30 }}
            onPress={() => {
              setAddedMarket(true);
              setExistMarket(false);
              onChangeLocation('');
              onPressAdd();
            }}
          />
        ) : (
          <Feather
            name={'search'}
            size={25}
            color={COLORS.main}
            style={{ position: 'absolute', top: hp(8.5), right: 30 }}
          />
        )}
      </Tab>
      <SubTxt>복수 입력 불가</SubTxt>
    </>
  );
}

GetMarketTab.propTypes = {
  addedMarket: PropTypes.bool.isRequired,
  setAddedMarket: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  onChangeLocation: PropTypes.func.isRequired,
  onPressAdd: PropTypes.func.isRequired,
};

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

const Input = styled.TextInput`
  background-color: ${COLORS.gray02};
  position: relative;

  margin-left: ${wp(4.8)}px;
  top: ${hp(1.5)}px;

  width: ${wp(90.4)}px;
  height: ${hp(6.28)}px;
  border-radius: 8px;

  padding-left: ${RFValue(4)}px;
  font-size: ${RFValue(16)}px;
  font-weight: bold;
  padding: ${RFValue(10)}px;
`;

const SubTxt = styled.Text`
  position: absolute;
  color: ${COLORS.gray01};
  margin-left: ${wp(6.5)}px;
  top: ${hp(45)}px;
  font-size: ${RFValue(14)}px;
`;

export default GetMarketTab;
