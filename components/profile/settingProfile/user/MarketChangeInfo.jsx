import { COLORS } from 'colors';
import React, { useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import { styled } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

function MarketChangeInfo({ favMarket, changedFavMarket, onChangeFavMarket }) {
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
    <Tab>
      <MarketTxt>자주 찾는 시장</MarketTxt>
      <Input
        value={changedFavMarket}
        onChangeText={(text) => {
          onChangeFavMarket(text);
          findMarketList(text);
        }}
        placeholder={favMarket}
        placeholderTextColor={COLORS.gray01}
      />
      {existMarket ? (
        <Feather
          name={'check'}
          size={25}
          color={COLORS.main}
          style={{ position: 'absolute', top: hp(5.2), right: 40 }}
        />
      ) : (
        <Feather
          name={'search'}
          size={25}
          color={COLORS.main}
          style={{ position: 'absolute', top: hp(5.2), right: 40 }}
        />
      )}
    </Tab>
  );
}

const Tab = styled.View`
  flex: 1;
`;

const MarketTxt = styled.Text`
  margin-left: ${wp(5)}px;
  font-size: ${RFValue(16)}px;
  font-weight: bold;
  height: ${RFValue(18)}px;
  margin-bottom: ${hp(1)}px;
`;

const Input = styled.TextInput`
  background-color: ${COLORS.gray02};

  margin-left: ${wp(4.8)}px;

  width: ${wp(90.4)}px;
  height: ${hp(6.28)}px;
  border-radius: 8px;

  padding-left: ${RFValue(4)}px;
  font-size: ${RFValue(16)}px;
  font-weight: bold;
  padding: ${RFValue(10)}px;
`;

export default MarketChangeInfo;
