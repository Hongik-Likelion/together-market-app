import React from 'react';
import { styled } from 'styled-components/native';
import { COLORS } from 'colors';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
function Tab() {
  return (
    <Container>
      <Home>
        <SimpleLineIcons name={'home'} size={RFValue(20)} />
        <Text>홈</Text>
      </Home>
      <Chat>
        <Ionicons name={'chatbubble-ellipses-outline'} size={RFValue(20)} />
        <Text>채팅</Text>
      </Chat>
      <MarketInfo>
        <Ionicons name={'document-text-outline'} size={RFValue(20)} />
        <Text>시장정보</Text>
      </MarketInfo>
      <UserInfo>
        <Ionicons name={'person-outline'} size={RFValue(20)} />
        <Text>프로필</Text>
      </UserInfo>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  display: flex;

  height: 11%;
  width: 100%;
  border-top-color: ${COLORS.gray01};
  border-top-width: 1.3px;
  padding-top: ${hp(1.5)}px;
`;

const Home = styled.View`
  flex: 1;
  align-items: center;
`;

const Chat = styled.View`
  flex: 1;
  align-items: center;
`;

const MarketInfo = styled.View`
  flex: 1;
  align-items: center;
`;

const UserInfo = styled.View`
  flex: 1;
  align-items: center;
`;

const Text = styled.Text`
  margin-top: ${hp(1)}px;
  font-size: ${RFValue(13)}px;
`;

export default Tab;
