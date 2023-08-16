import { COLORS } from 'colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react';
import { styled } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function OwnerInfoTopTab(props) {
  const { nickname, profile, introduction, is_owner, myPostingsCount, myFavMarketsCount } = props;
  const navigation = useNavigation();

  const onPressSettingBtn = () => {
    navigation.navigate('owner-profile-setting');
  };

  const onPressWriteBtn = () => {
    //이거 게시물 작성하기 페이지로 넘어가야함 (수정필요)
    navigation.navigate('home-tab');
  };

  return (
    <Container>
      <AllContent>
        <Content>
          <ProfileImg>
            <UserImage source={profile} />
          </ProfileImg>
          <Info>
            <Firstline>
              {is_owner ? (
                <UserTypeOwn>
                  <UserTypeOwner>사장님</UserTypeOwner>
                </UserTypeOwn>
              ) : (
                <UserTypeUse>
                  <UserTypeUser>시장탐방러</UserTypeUser>
                </UserTypeUse>
              )}

              <SettingIcon onPress={onPressSettingBtn}>
                <Ionicons name={'settings-outline'} size={RFValue(20)} color={COLORS.white} />
              </SettingIcon>
            </Firstline>

            <Nickname>{nickname} 님</Nickname>
            <Introduction>{introduction}</Introduction>
            {is_owner ? (
              <StoredInfo>
                게시물 {myPostingsCount} | 가게후기 {myFavMarketsCount}
              </StoredInfo>
            ) : (
              <StoredInfo>
                게시물 {myPostingsCount} | 관심가게 {myFavMarketsCount}
              </StoredInfo>
            )}
          </Info>
        </Content>
        <WritePost onPress={onPressWriteBtn}>
          <WritePostText>게시물 작성하기</WritePostText>
        </WritePost>
      </AllContent>
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

const AllContent = styled.View`
  margin-top: ${hp(-1)}px;
  justify-content: center;
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

const Firstline = styled.View`
  flex-direction: row;
`;

const UserTypeUse = styled.View`
  background-color: ${COLORS.gray01};
  border-radius: 5px;
  width: 80px;
  justify-content: center;
  align-items: center;
  font-size: ${RFValue(12)}px;
  font-weight: bold;
  padding: ${RFValue(3)}px;
  margin-bottom: ${hp(0.5)}px;
`;

const UserTypeOwn = styled.View`
  background-color: ${COLORS.white};
  border-radius: 5px;
  width: 50px;
  justify-content: center;
  align-items: center;
  font-size: ${RFValue(12)}px;
  font-weight: bold;
  padding: ${RFValue(3)}px;
  margin-bottom: ${hp(0.5)}px;
`;

const SettingIcon = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  margin-right: ${wp(-2)}px;
`;

const UserTypeOwner = styled.Text`
  color: ${COLORS.main};
  font-size: ${RFValue(11)}px;
  font-weight: bold;
`;

const UserTypeUser = styled.Text`
  color: ${COLORS.white};
  font-size: ${RFValue(11)}px;
  font-weight: bold;
`;

const Nickname = styled.Text`
  color: ${COLORS.white};
  font-size: ${RFValue(22)}px;
  font-weight: bold;
  margin-bottom: ${hp(1)}px;
`;

const Introduction = styled.Text`
  color: ${COLORS.white};
  font-size: ${RFValue(13)}px;
  margin-bottom: ${hp(1)}px;
`;

const StoredInfo = styled.Text`
  color: ${COLORS.white};
  font-size: ${RFValue(12)}px;
  margin-bottom: ${hp(1)}px;
`;

const WritePost = styled.TouchableOpacity`
  background-color: ${COLORS.white};

  height: ${RFValue(30)}px;
  width: ${wp(84)}px;
  margin-top: ${hp(1.2)}px;

  justify-content: center;
  align-items: center;

  border-radius: 8px;
`;

const WritePostText = styled.Text`
  color: ${COLORS.main};
  font-weight: bold;
  font-size: ${RFValue(14)}px;
`;

export default OwnerInfoTopTab;
