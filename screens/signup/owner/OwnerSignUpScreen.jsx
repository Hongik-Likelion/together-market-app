import { PreviousBtn, ContinueBtn } from '@assets/signUp/CommonSignUpScreenIcon';
import OwnerSignUpHeader from '@assets/signUp/OwnerSignUpScreen';
import SelectedMarketList from '@components/signUp/common/SelectedMarketList';
import GetMarketTab from '@components/signUp/owner/GetMarketTab';
import SetMarketNameTab from '@components/signUp/owner/SetMarketNameTab';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from 'colors';
import React, { useState } from 'react';
import { Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { v4 as uuidv4 } from 'uuid';

function OwnerSignUpScreen() {
  const navigation = useNavigation();

  const [marketLocations, setMarketLocations] = useState([]); // 배열상에 선택한 시장들 저장
  const [marketName, setMarketName] = useState('');
  const [addedMarket, setAddedMarket] = useState(false);

  const [content, setContent] = useState('');
  const onChangeLocation = (text) => setContent(text);

  const onPressAdd = () => {
    const newmarketLocations = {
      id: uuidv4(),
      content,
    };

    setMarketLocations((prev) => [...prev, newmarketLocations]);
    setContent('');
  };

  const onChangeMarketName = (text) => setMarketName(text);

  const onPressDelete = (marketLocationId) => {
    setMarketLocations((prev) => prev.filter((marketLocation) => marketLocation.id !== marketLocationId));
    setAddedMarket(false);
  };

  const onPressPreviousBtn = () => navigation.navigate('commonSignUpScreen');

  const onPressContinueBtn = () => {
    // 시장 위치&가게이름을 Owner 정보 관련 배열에 넣어야할 듯
    if (addedMarket && marketName) {
      navigation.navigate('guideSignUpScreen');
    }
  };

  return (
    <Container>
      <UserSignUpHeaderContainer>
        <OwnerSignUpHeader
          secondPage={COLORS.main}
          thirdPage={COLORS.gray01}
          fourthPage={COLORS.gray01}
          fifthPage={COLORS.gray01}
          position="absolute"
          marginTop={hp(10)}
        />
      </UserSignUpHeaderContainer>
      <MainInfoTxt1>김영희님,</MainInfoTxt1>
      <MainInfoTxt2>
        <Text style={{ color: COLORS.main }}>시장 위치와 가게 이름</Text>을 입력해주세요.
      </MainInfoTxt2>
      <SubTxt>시장 위치, 가게 이름 모두 입력해주세요. (필수)</SubTxt>
      <GetMarketTab
        addedMarket={addedMarket}
        setAddedMarket={setAddedMarket}
        content={content}
        onChangeLocation={onChangeLocation}
        onPressAdd={onPressAdd}
      />
      <SelectedMarketList addedMarket={addedMarket} marketLocations={marketLocations} onPressDelete={onPressDelete} />

      <SetMarketNameTab marketName={marketName} onChangeMarketName={onChangeMarketName} />
      <PreviousBtn marginBottom={hp(2)} marginLeft={wp(4.8)} onPress={onPressPreviousBtn} />
      <ContinueBtn
        fontColor={addedMarket && marketName ? 'white' : COLORS.main}
        backColor={addedMarket && marketName ? COLORS.main : 'white'}
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

const SubTxt = styled.Text`
  position: relative;
  color: ${COLORS.gray01};
  margin-left: ${wp(5)}px;
  top: ${hp(1.23)}px;
  font-size: ${RFValue(14)}px;
`;

export default OwnerSignUpScreen;
