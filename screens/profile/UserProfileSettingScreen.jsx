import React, { useState } from 'react';
import UserTopTab from '@components/profile/settingProfile/user/UserTopTab';
import { styled } from 'styled-components/native';
import MarketChangeInfo from '@components/profile/settingProfile/user/MarketChangeInfo';
import NicknameChangeInfo from '@components/profile/settingProfile/user/NicknameChangeInfo';
import IntroductionChangeInfo from '@components/profile/settingProfile/user/IntroductionChangeInfo';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useRoute } from '@react-navigation/native';

function UserProfileSettingScreen() {
  const route = useRoute();
  const { nickname, profile, introduction, favMarket } = route.params;

  const [changedNickname, setNickname] = useState(nickname);
  const [changedFavMarket, setFavMarket] = useState(favMarket);
  const [changedIntroduction, setIntroduction] = useState(introduction);

  const onChangeNickname = (text) => setNickname(text);
  const onChangeFavMarket = (text) => setFavMarket(text);
  const onChangeIntroduction = (text) => setIntroduction(text);

  return (
    <Container>
      <UserTopTab nickname={nickname} profile={profile} />
      <Info>
        <NicknameChangeInfo nickname={nickname} changedNickname={changedNickname} onChangeNickname={onChangeNickname} />
        <MarketChangeInfo
          favMarket={favMarket}
          changedFavMarket={changedFavMarket}
          onChangeFavMarket={onChangeFavMarket}
        />
        <IntroductionChangeInfo
          introduction={introduction}
          changedIntroduction={changedIntroduction}
          onChangeIntroduction={onChangeIntroduction}
        />
      </Info>
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

export default UserProfileSettingScreen;
