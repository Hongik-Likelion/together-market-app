import React, { useContext, useState } from 'react';
import { styled } from 'styled-components/native';
import { COLORS } from 'colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { CommonPostingContext } from 'context/CommonPostingContext';

function MarketName() {
  const [searchText, setSearchText] = useState('');
  // const [marketExists, setMarketExists] = useState(false);
  const { marketExists, setMarketExists } = useContext(CommonPostingContext);

  // 시장 더미데이터
  const dummyMarkets = [
    {
      market_id: 1,
      market_name: '망원시장',
    },
    {
      market_id: 2,
      market_name: '광장시장',
    },
    {
      market_id: 3,
      market_name: '어떤시장',
    },
  ];

  const checkInDummyMarkets = (marketName) => {
    return dummyMarkets.some((market) => market.market_name === marketName);
  };

  const handleSearchTextChange = (text) => {
    setSearchText(text);

    const exists = checkInDummyMarkets(text);
    setMarketExists(exists);
  };
  return (
    <Container>
      <Title>
        <TitleLabel>
          시장 이름<Text style={{ color: COLORS.red, fontSize: RFValue(13), fontWeight: 500 }}> (필수)</Text>
        </TitleLabel>
      </Title>
      <Input
        placeholder="망원시장"
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
          <SubText>*시장 이름을 정확히 입력해주세요.</SubText>
          <SubText>*띄어쓰기 없이 입력해주세요. (예) 망원시장(O) 망원 시장(X)</SubText>
        </>
      )}
    </Container>
  );
}

const Container = styled.View`
  /* height: 20%; */
  border-bottom-width: 8px;
  border-bottom-color: ${COLORS.gray02};
`;

const Title = styled.View`
  border-bottom-color: ${COLORS.gray02};
  border-bottom-width: 2px;
`;
const TitleLabel = styled.Text`
  font-size: ${RFValue(17)};
  font-weight: 700;
  padding-top: ${hp(1.5)}px;
  padding-bottom: ${hp(1.5)}px;
  padding-left: ${wp(5)}px;
`;

const IconContainer = styled.View`
  position: absolute;
  top: ${hp(9)}px;
  right: ${wp(8)}px;
`;

const Input = styled.TextInput`
  position: relative;
  background-color: ${COLORS.gray02};

  margin-left: ${wp(5)}px;
  margin-right: ${wp(5)}px;
  margin-top: ${hp(2)}px;
  margin-bottom: ${hp(2)}px;

  height: ${hp(6)}px;
  border-radius: 8px;

  font-size: ${RFValue(15)}px;
  font-weight: 700;
  padding-left: ${RFValue(10)}px;
`;

const SubText = styled.Text`
  font-size: ${RFValue(12)}px;
  margin-left: ${wp(5)}px;
  color: ${COLORS.gray01};
  margin-bottom: ${hp(1)}px;
`;

export default MarketName;
