import { PreviousBtn, ContinueBtn } from '@assets/signUp/CommonSignUpScreenIcon';
import UserSignUpHeader from '@assets/signUp/UserSignUpScreen';
import SelectMarketTab from '@components/signUp/user/SelectMarketTab';
import SelectedMarketList from '@components/signUp/common/SelectedMarketList';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from 'colors';
import React, { useState } from 'react';
import { Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { v4 as uuidv4 } from 'uuid';

function UserSignUpScreen() {
  const navigation = useNavigation();

  const [marketLocations, setMarketLocations] = useState([]); // 배열상에 선택한 시장들 저장
  const [addedMarket, setAddedMarket] = useState(false);

  const [content, setContent] = useState('');
  const onChangeLocation = (text) => setContent(text);

  const onPressAdd = () => {
    const newmarketLocation = {
      id: uuidv4(),
      content,
    };

    setMarketLocations((prev) => [...prev, newmarketLocation]);
    setContent('');
  };

  const onPressDelete = (marketLocationId) => {
    setMarketLocations((prev) => prev.filter((marketLocation) => marketLocation.id !== marketLocationId));
  };

  const onPressPreviousBtn = () => navigation.navigate('commonSignUpScreen');

  const onPressContinueBtn = () => {
    if (addedMarket) {
      if (marketLocations.length > 0) {
        navigation.navigate('guideSignUpScreen');
      }
      // 추가: marketLocations 배열이 비어있을 때는 아무 동작도 하지 않음
    }
  };

  return (
    <Container>
      <UserSignUpHeaderContainer>
        <UserSignUpHeader isNextPage={COLORS.gray01} position="absolute" marginTop={hp(10)} />
      </UserSignUpHeaderContainer>

      <MainInfoTxt1>김영희님,</MainInfoTxt1>
      <MainInfoTxt2>
        <Text style={{ color: COLORS.main }}>자주 방문하는 시장</Text>을 설정해주세요.
      </MainInfoTxt2>

      <SelectMarketTab
        addedMarket={addedMarket}
        setAddedMarket={setAddedMarket}
        content={content}
        onChangeLocation={onChangeLocation}
        onPressAdd={onPressAdd}
      />
      <SelectedMarketList addedMarket={addedMarket} marketLocations={marketLocations} onPressDelete={onPressDelete} />

      <PreviousBtn marginBottom={hp(2)} marginLeft={wp(4.8)} onPress={onPressPreviousBtn} />
      <ContinueBtn
        fontColor={marketLocations.length > 0 ? 'white' : COLORS.main}
        backColor={marketLocations.length > 0 ? COLORS.main : 'white'}
        width={wp(100)}
        marginBottom={hp(6.15)}
        justifyContent="center"
        onPress={onPressContinueBtn}
      />
    </Container>
  );
}
const UserSignUpHeaderContainer = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  align-items: center;
`;

const Container = styled.View`
  background-color: white;
  flex: 1;
  position: relative;
`;

const MainInfoTxt1 = styled.Text`
  font-size: ${RFValue(20)}px;
  font-weight: bold;
  margin-left: ${wp(4.8)}px;
  margin-top: ${hp(18.7)}px;
`;

const MainInfoTxt2 = styled.Text`
  font-size: ${RFValue(20)}px;
  font-weight: bold;
  margin-left: ${wp(4.8)}px;
  margin-top: ${RFValue(5)}px;
`;

export default UserSignUpScreen;
