import { COLORS } from 'colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react';
import { styled } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { TouchableOpacity } from 'react-native';

function OwnerTopTab(props) {
  const { nickname, profile } = props;
  const navigation = useNavigation();

  const onPressFinishBtn = () => {
    //!!!!!!!!! [추가] 여기서 이제 수정완료된 정보들을 백에 넘겨주는 API를 작성해야함
    navigation.navigate('profile-screen');
  };

  const onPressPreviousBtn = () => {
    navigation.navigate('profile-screen');
  };

  return (
    <Container>
      <TouchableOpacity onPress={onPressPreviousBtn}>
        <SimpleLineIcons
          name={'arrow-left'}
          size={25}
          color={COLORS.white}
          style={{ position: 'absolute', top: hp(8), left: wp(5) }}
        />
      </TouchableOpacity>

      <Content>
        <ProfileImg>
          <UserImage source={profile} />
        </ProfileImg>
        <Info>
          <Nickname>{nickname} 님</Nickname>
        </Info>
      </Content>
      <Finish onPress={onPressFinishBtn}>
        <FinishTxt>완료</FinishTxt>
      </Finish>
    </Container>
  );
}

const Container = styled.View`
  background-color: ${COLORS.main};
  display: flex;
  height: ${hp(35)}px;
  width: 100%;
`;

const Content = styled.View`
  margin-top: ${hp(10)}px;
  align-items: center;
`;

const UserImage = styled.Image`
  width: ${RFValue(110)}px;
  height: ${RFValue(110)}px;
`;

const ProfileImg = styled.View``;

const Info = styled.View`
  margin-top: ${hp(2)}px;
`;

const Nickname = styled.Text`
  color: ${COLORS.white};
  font-size: ${RFValue(22)}px;
  font-weight: bold;
  margin-bottom: ${hp(1)}px;
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

export default OwnerTopTab;
