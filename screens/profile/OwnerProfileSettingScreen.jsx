import { COLORS } from 'colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React, { useState } from 'react';
import OwnerTopTab from '@components/profile/settingProfile/owner/OwnerTopTab';
import { styled } from 'styled-components/native';
import MarketnameChangeInfo from '@components/profile/settingProfile/owner/MarketnameChangeInfo';
import MarketIntroductionChangeInfo from '@components/profile/settingProfile/owner/MarketIntroductionChangeInfo';
import { useRoute } from '@react-navigation/native';
import MarketTimeChangeInfo from '@components/profile/settingProfile/owner/MarketTimeChangeInfo';

function OwnerProfileSettingScreen() {
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

export default OwnerProfileSettingScreen;
