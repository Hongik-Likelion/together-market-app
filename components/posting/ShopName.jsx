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

function ShopName() {
  const [searchText, setSearchText] = useState('');
  // const [shopExists, setShopExists] = useState(false);
  const { shopExists, setShopExists } = useContext(CommonPostingContext);

  // 상점 더미데이터
  const dummyShops = [
    {
      shop_id: 1,
      shop_name: '싱글벙글 과일가게',
    },
    {
      shop_id: 2,
      shop_name: '하하호호 과일가게',
    },
    {
      shop_id: 3,
      shop_name: '이런저런 과일가게',
    },
  ];

  const checkInDummyShops = (shopName) => {
    return dummyShops.some((shop) => shop.shop_name === shopName);
  };

  const handleSearchTextChange = (text) => {
    setSearchText(text);

    const exists = checkInDummyShops(text);
    setShopExists(exists);
  };

  return (
    <Container>
      <Title>
        <TitleLabel>
          가게 이름<Text style={{ color: COLORS.red, fontSize: RFValue(13), fontWeight: 500 }}> (필수)</Text>
        </TitleLabel>
      </Title>
      <Input
        placeholder="싱글벙글 과일가게"
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
