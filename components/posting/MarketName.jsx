import React, { useContext, useState, useEffect } from 'react';
import { styled } from 'styled-components/native';
import { COLORS } from 'colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import { CommonPostingContext } from 'context/CommonPostingContext';
import { getAllMarkets } from 'api/auth';
import { View, Text } from 'react-native';
import format from 'pretty-format';

function MarketName(props) {
  const { setMarket_id, setMarket_name, market_name } = props;
  const [searchText, setSearchText] = useState(''); // 유저가 입력한 시장

  const {
    // 입력한 시장이 일치하는지
    marketExists,
    setMarketExists,
  } = useContext(CommonPostingContext);

  // 시장 조회 API
  const [markets, setMarkets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAllMarkets()
      .then((res) => {
        console.log(format(res.data));
        setMarkets(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log('error getAllMarkets');
        console.log(err);
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <View>
        <Text>로딩중...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View>
        <Text>에러 발생</Text>
      </View>
    );
  }

  const checkInMarkets = (marketName) => {
    return markets.some((market) => market.market_name === marketName);
  };

  const handleSearchTextChange = (text) => {
    setSearchText(text);

    const exists = checkInMarkets(text);
    setMarketExists(exists);

    if (exists) {
      const foundMarket = markets.find((market) => market.market_name === text);
      if (foundMarket) {
        setMarket_id(foundMarket.market_id); // marketId 상태값 설정
        setMarket_name(foundMarket.market_name); //market_name 설정
      }
    }
  };

  return (
    <Container>
      <Title>
        <TitleLabel>
          시장 이름<Text style={{ color: COLORS.red, fontSize: RFValue(13), fontWeight: 500 }}> (필수)</Text>
        </TitleLabel>
      </Title>
      <Input
        placeholder={market_name !== '' ? market_name : '망원시장'}
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
