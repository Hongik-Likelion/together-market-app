import React, { useState } from 'react';
import { styled } from 'styled-components/native';
import { COLORS } from 'colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

import Feather from 'react-native-vector-icons/Feather';

function MarketSelectScreen() {

  const navigation = useNavigation();

  const [searchText, setSearchText] = useState("");
  const [marketExists, setMarketExists] = useState(false);
  // const [selectedMarket, setSelectedMarket] = useState("");
  
  // 시장 더미데이터
  const dummyMarkets = [
    { 
      market_id : 1,
      market_name : '망원시장'
    },
    { 
      market_id : 2,
      market_name : '광장시장'
    },
    { 
      market_id : 3,
      market_name : '어떤시장'
    },
  ];

  const checkInDummyMarkets = (marketName) => {
    return dummyMarkets.some((market) => market.market_name === marketName);
  }

  const handleSearchTextChange = (text) => {
    setSearchText(text);

    const exists = checkInDummyMarkets(text);
    setMarketExists(exists);
  };

  return (
    <Container>
        <Input 
          placeholder = "시장 위치를 입력해주세요.(예.망원시장)"
          placeholderTextColor={COLORS.gray01}
          value={searchText}
          onChangeText={handleSearchTextChange}
        />

        <IconContainer>
          {marketExists ? (
            <Feather name={'check'} size={RFValue(18)} color={COLORS.main} />
          ) : (
            <Feather name={'search'} size={RFValue(18)} color={COLORS.main} />
          )}
        </IconContainer>

      {!marketExists && searchText.length > 0 && (
        <>
        <Text>*시장 이름을 정확히 입력해주세요.</Text>
        <Text>*띄어쓰기 없이 입력해주세요. (예) 망원시장(O) 망원 시장(X)</Text>
        </>
      )}

      <SelectButton marketExists={marketExists} disabled={!marketExists} onPress={() => navigation.navigate('home-list')}>
        <ButtonLabel marketExists={marketExists}>시장 위치 설정하기</ButtonLabel>
      </SelectButton>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const IconContainer = styled.View`
  position: absolute;
  top: ${hp(2) + RFValue(10)}px;
  right: ${wp(5) + RFValue(10)}px;
`;

const Input = styled.TextInput`
  position: relative;
  background-color: ${COLORS.gray02};

  margin-left: ${wp(5)}px;
  margin-right: ${wp(5)}px;
  margin-top: ${hp(2)}px;
  margin-bottom: ${hp(1)}px;

  height: ${hp(6)}px;
  border-radius: 8px;

  font-size: ${RFValue(15)}px;
  font-weight: 700;
  padding-left: ${RFValue(10)}px;
`;

const Text = styled.Text`
  font-size: ${RFValue(12)}px;
  margin-left: ${wp(5)}px;
  color: ${COLORS.gray01};
  margin-bottom: ${hp(1)}px;
`;

const SelectButton = styled.TouchableOpacity`
    margin-top: ${wp(5)}px;
    margin-left: ${wp(5)}px;
    margin-right: ${wp(5)}px;
    height: ${hp(4.5)}px;
    border: solid 1px ${COLORS.main};
    background-color: ${(props) => (props.marketExists ? COLORS.main : COLORS.white)};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

const ButtonLabel = styled.Text`
    font-size: ${RFValue(15)}px;
    color:  ${(props) => (props.marketExists ? COLORS.white : COLORS.main)};
    font-weight: 700;
`;

export default MarketSelectScreen;