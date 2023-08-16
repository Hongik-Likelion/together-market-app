import { COLORS } from 'colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react';
import { styled } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

function OwnerTopTab(props) {
  const { nickname, profile } = props;
  const navigation = useNavigation();

  const onPressFinishBtn = () => {
    navigation.navigate('profile-setting');
  };

  const onPressPreviousBtn = () => {
    //이거 게시물 작성하기 페이지로 넘어가야함 (수정필요)
    navigation.navigate('profile-screen');
  };

  return (
    <Container>
      <Content>
        <ProfileImg>
          <UserImage source={profile} />
        </ProfileImg>
        <Info></Info>
      </Content>
    </Container>
  );
}

const Container = styled.View`
  background-color: ${COLORS.main};
  display: flex;
  height: ${hp(30)}px;
  width: 100%;
  align-items: center;
`;

const Content = styled.View`
  flex-direction: row;
  margin-top: ${hp(10)}px;
  align-items: center;
  margin-left: ${wp(-2)}px;
`;

const UserImage = styled.Image`
  width: ${RFValue(70)}px;
  height: ${RFValue(70)}px;
`;

const ProfileImg = styled.View`
  margin-right: ${wp(5)}px;
`;

const Info = styled.View``;

export default OwnerTopTab;
