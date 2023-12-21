import React, { useContext, useState, useEffect } from 'react';
import { styled } from 'styled-components/native';
import { COLORS } from 'colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { View, Text } from 'react-native';
import format from 'pretty-format';
import Feather from 'react-native-vector-icons/Feather';
import { CommonPostingContext } from 'context/CommonPostingContext';
import { getShopList } from 'api/shop';
import { useFocusEffect } from '@react-navigation/native';

function ShopName({ market_id, setShop_id, setShop_name, shop_name }) {
  const [searchText, setSearchText] = useState('');

  const { shopExists, setShopExists } = useContext(CommonPostingContext);

  // 상점 리스트 조회 API
  const [shops, setShops] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      if (market_id) {
        setIsLoading(true);
        getShopList(market_id)
          .then((res) => {
            console.log(format(res.data));
            setShops(res.data);
            setIsLoading(false);
          })
          .catch((err) => {
            console.log('error getShopList');
            console.log(err);
            setIsError(true);
            setIsLoading(false);
          });
      }
    }, [market_id]),
  );

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

  const checkInShops = (shopName) => {
    return shops.some((shop) => shop.shop_name === shopName);
  };

  const handleSearchTextChange = (text) => {
    setSearchText(text);

    const exists = checkInShops(text);
    setShopExists(exists);

    if (exists) {
      const foundShop = shops.find((shop) => shop.shop_name === text);
      if (foundShop) {
        setShop_id(foundShop.shop_id);
        setShop_name(foundShop.shop_name);
      }
    }
  };

  return (
    <Container>
      <Title>
        <TitleLabel>
          가게 이름<Text style={{ color: COLORS.red, fontSize: RFValue(13), fontWeight: 500 }}> (필수)</Text>
        </TitleLabel>
      </Title>
      <Input
        placeholder={shop_name !== '' ? shop_name : '싱글벙글 과일가게'}
        placeholderTextColor={COLORS.gray01}
        value={searchText}
        onChangeText={handleSearchTextChange}
      />

      <IconContainer>
        {shopExists ? (
          <Feather name={'check'} size={RFValue(18)} color={COLORS.main} />
        ) : (
          <Feather name={'search'} size={RFValue(18)} color={COLORS.main} />
        )}
      </IconContainer>

      {!shopExists && searchText.length > 0 && (
        <>
          <SubText>*가게 이름을 정확히 입력해주세요.</SubText>
          <SubText>*뭐라고 주의사항을 적어야 좋을까...</SubText>
        </>
      )}
    </Container>
  );
}

const Container = styled.View`
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

export default ShopName;
