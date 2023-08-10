import { useNavigation } from '@react-navigation/native';
import { COLORS } from 'colors';
import PropTypes from 'prop-types';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';

ChatRoomListItem.propTypes = {
  room: PropTypes.shape({
    id: PropTypes.number,
    profile: PropTypes.number,
    shopName: PropTypes.string,
    marketName: PropTypes.string,
    lastChat: PropTypes.string,
    lastUpdated: PropTypes.string,
  }),
};

function ChatRoomListItem({ room }) {
  const { navigate } = useNavigation();
  const chatRoomId = 1;
  const { profile, marketName, shopName, lastChat, lastUpdated } = room;

  return (
    <Container onPress={() => navigate('chat-room', { chatRoomId })}>
      <Profile source={profile} />
      <ContentGroup>
        <ShopName numberOfLines={1}>{shopName}</ShopName>
        <MarketName numberOfLines={1}>{marketName}</MarketName>
        <LastChat numberOfLines={1}>{lastChat}</LastChat>
      </ContentGroup>
      <SubInfoGroup>
        <LastUpdated>{lastUpdated}</LastUpdated>
      </SubInfoGroup>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  min-height: ${hp(8)}px;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-between;
  align-items: center;

  padding: ${RFValue(8)}px;

  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.lightgray};
`;

const Profile = styled.Image`
  width: 55px;
  height: 55px;
`;

const ContentGroup = styled.View`
  width: 65%;
  height: 100%;

  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-around;

  margin-left: ${wp(2)}px;
`;

const ShopName = styled.Text`
  max-width: 70%;

  color: ${COLORS.black};
  font-weight: 700;
  font-size: ${RFValue(14)}px;

  margin-right: ${wp(1)}px;
`;
const MarketName = styled.Text`
  max-width: 40%;

  color: ${COLORS.darkgray};
  font-weight: 700;
  font-size: ${RFValue(10)}px;
`;
const LastChat = styled.Text`
  color: ${COLORS.black};
  font-size: ${RFValue(12)}px;
  font-weight: 500;
`;

const SubInfoGroup = styled.View`
  height: 100%;
  max-width: 20%;
`;

const LastUpdated = styled.Text`
  color: ${COLORS.darkgray};
  font-size: ${RFValue(10)}px;
  font-weight: 700;
`;

export default ChatRoomListItem;
