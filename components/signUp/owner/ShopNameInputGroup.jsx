import { COLORS } from 'colors';
import { Auth } from 'context/AuthContext';
import format from 'pretty-format';
import React, { useContext } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';

function ShopNameInputGroup() {
  const {
    shop: [shopRequest, setShopRequest],
  } = useContext(Auth);

  const { shop_name } = shopRequest;
  return (
    <InputGroup>
      <Label>가게 이름</Label>
      <Input
        value={shop_name}
        onChangeText={(text) => setShopRequest((prev) => ({ ...prev, shop_name: text }))}
        placeholder="싱글벙글 과일가게"
        placeholderTextColor={COLORS.gray01}
      />
    </InputGroup>
  );
}

const InputGroup = styled.View`
  justify-content: space-around;
  height: ${hp(20)}px;
  padding: ${RFValue(12)}px;
`;

const Label = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: bold;
`;

const Input = styled.TextInput`
  background-color: ${COLORS.gray02};
  width: ${wp(90.4)}px;
  height: ${hp(6.28)}px;

  font-size: ${RFValue(16)}px;
  font-weight: bold;
  border-radius: 8px;
  padding: ${RFValue(10)}px;
`;

export default ShopNameInputGroup;
