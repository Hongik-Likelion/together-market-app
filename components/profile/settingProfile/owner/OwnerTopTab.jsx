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
          <UserImage
            source={{
              uri: profile,
            }}
          />
        </ProfileImg>
        <Info>
          <Nickname>{nickname} 님</Nickname>
        </Info>
      </Content>
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

export default OwnerTopTab;
