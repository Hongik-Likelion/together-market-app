import { COLORS } from 'colors';
import React, { useState, useEffect } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import { styled } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getAllMarkets } from 'api/auth';
import { View, Text } from 'react-native';

function MarketChangeInfo({ favMarket, changedFavMarket, onChangeFavMarket, getChangedMarketName }) {
  //시장 조회 API
  const [ShopData, setShopData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAllMarkets()
      .then((res) => {
        //console.log(format(res.data));
        setShopData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  //입력받은 시장 존재하는지
  const [existMarket, setExistMarket] = useState(false);

  const findMarketList = (text) => {
    const foundMarket = ShopData.find((item) => item.market_name === text);

    if (foundMarket) {
      setExistMarket(true);
      getChangedMarketName(foundMarket.market_id); //chancedMarketName에는 작성한 market_name에 해당하는 id담기
    } else {
      setExistMarket(false);
    }
  };

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

  return (
    <Tab>
      <MarketTxt>자주 찾는 시장</MarketTxt>
      <Input
        value={changedFavMarket} //market_name이 저장
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
