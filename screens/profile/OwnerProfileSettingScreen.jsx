import { COLORS } from 'colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React, { useState } from 'react';
import OwnerTopTab from '@components/profile/settingProfile/owner/OwnerTopTab';
import { styled } from 'styled-components/native';
import MarketnameChangeInfo from '@components/profile/settingProfile/owner/MarketnameChangeInfo';
import MarketIntroductionChangeInfo from '@components/profile/settingProfile/owner/MarketIntroductionChangeInfo';
import { useRoute } from '@react-navigation/native';
import MarketTimeChangeInfo from '@components/profile/settingProfile/owner/MarketTimeChangeInfo';
import { patchUserModify } from 'api/auth';
import { View, Text } from 'react-native';
import format from 'pretty-format';
import { useNavigation } from '@react-navigation/native';

function OwnerProfileSettingScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { nickname, profile, introduction, opening_time, closing_time } = route.params;

  const [changedNickname, setNickname] = useState(nickname);
  const [changedIntroduction, setIntroduction] = useState(introduction);
  const [changedStartTimeString, setStartTimeString] = useState(opening_time);
  const [changeEndTimeString, setEndTimeString] = useState(closing_time);

  const onChangeNickname = (text) => setNickname(text);
  const onChangeIntroduction = (text) => setIntroduction(text);
  const onSaveChangedTimeData = (start, end) => {
    setStartTimeString(start);
    setEndTimeString(end);
  };

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onPressFinishBtn = () => {
    // 자기소개 수정 API
    setIsLoading(true);
    const data = {
      shop_name: changedNickname,
      introduction: changedIntroduction,
      opening_time: changedStartTimeString,
      closing_time: changeEndTimeString,
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
      <OwnerTopTab nickname={nickname} profile={profile} />
      <Info>
        <MarketnameChangeInfo
          nickname={nickname}
          changedNickname={changedNickname}
          onChangeNickname={onChangeNickname}
        />
        <MarketIntroductionChangeInfo
          introduction={introduction}
          changedIntroduction={changedIntroduction}
          onChangeIntroduction={onChangeIntroduction}
        />
        <MarketTimeChangeInfo
          opening_time={opening_time}
          closing_time={closing_time}
          onSaveChangedTimeData={onSaveChangedTimeData}
        />
      </Info>
      <Notification>
        <Txt>시장 위치, 주소 등은 재가입을 통해</Txt>
        <Txt>변경할 수 있습니다.</Txt>
      </Notification>
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

const Notification = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${hp(2)}px;
`;

const Txt = styled.Text`
  color: ${COLORS.gray01};
  font-size: ${RFValue(16)}px;
  font-weight: 500;
  margin-bottom: ${hp(0.5)}px;
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

export default OwnerProfileSettingScreen;
