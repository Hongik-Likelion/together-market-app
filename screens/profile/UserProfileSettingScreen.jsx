import { COLORS } from 'colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React, { useState } from 'react';
import UserTopTab from '@components/profile/settingProfile/user/UserTopTab';
import { styled } from 'styled-components/native';
import MarketChangeInfo from '@components/profile/settingProfile/user/MarketChangeInfo';
import NicknameChangeInfo from '@components/profile/settingProfile/user/NicknameChangeInfo';
import IntroductionChangeInfo from '@components/profile/settingProfile/user/IntroductionChangeInfo';
import { useRoute } from '@react-navigation/native';
import { patchUserModify } from 'api/auth';
import { View, Text } from 'react-native';
import format from 'pretty-format';
import { useNavigation } from '@react-navigation/native';

function UserProfileSettingScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { nickname, profile, introduction, favMarket } = route.params;

  //favMarket에는 market_name이 有 / changedMarketName에는 market_id를 넣어야
  const [changedNickname, setChangedNickname] = useState(nickname);
  const [changedFavMarket, setChangedFavMarket] = useState(favMarket);
  const [changedIntroduction, setChangedIntroduction] = useState(introduction);
  const [changedMarketName, getChangedMarketName] = useState(''); //여기에 유저가 수정한 market_id 담고

  const onChangeNickname = (text) => setChangedNickname(text);
  const onChangeFavMarket = (text) => setChangedFavMarket(text);
  const onChangeIntroduction = (text) => setChangedIntroduction(text);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onPressFinishBtn = () => {
    // 자기소개 수정 API
    setIsLoading(true);
    const data = {
      nickname: changedNickname,
      favourite_markets: [changedMarketName],
      introduction: changedIntroduction,
    };

    patchUserModify(data)
      .then((res) => {
        console.log(format(res.data));
        setIsLoading(false);
        navigation.navigate('profile-screen');
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
        setIsLoading(false);
      });
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
    <Container>
      <UserTopTab nickname={nickname} profile={profile} />
      <Info>
        <NicknameChangeInfo nickname={nickname} changedNickname={changedNickname} onChangeNickname={onChangeNickname} />
        <MarketChangeInfo
          favMarket={favMarket}
          changedFavMarket={changedFavMarket}
          onChangeFavMarket={onChangeFavMarket}
          getChangedMarketName={getChangedMarketName}
          changedMarketName={changedMarketName}
        />
        <IntroductionChangeInfo
          introduction={introduction}
          changedIntroduction={changedIntroduction}
          onChangeIntroduction={onChangeIntroduction}
        />
      </Info>
      <Finish onPress={onPressFinishBtn}>
        <FinishTxt>완료</FinishTxt>
      </Finish>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;

const Info = styled.View`
  height: 45%;
  margin-top: ${hp(2)}px;
`;

const Finish = styled.TouchableOpacity`
  position: absolute;
  right: ${wp(5)}px;
  top: ${hp(8)}px;

  background-color: ${COLORS.white};
  width: ${RFValue(60)}px;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 4.36px;
`;

const FinishTxt = styled.Text`
  color: ${COLORS.main};
  font-size: ${RFValue(16)}px;
  font-weight: 600;
`;

export default UserProfileSettingScreen;
