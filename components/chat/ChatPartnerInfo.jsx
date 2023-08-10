import { useRoute } from '@react-navigation/native';
import { COLORS } from 'colors';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { styled } from 'styled-components/native';

/**
 * 채팅 상대방의 정보를 출력하는 컴포넌트
 * @returns
 */
function ChatPartnerInfo() {
  const { chatRoomId } = useRoute().params;

  const isOwner = true;
  return (
    <Container>
      <Profile source={require('@assets/chat/chat_owner1.png')} />
      <InfoGroup>
        <Group isOwner={isOwner}>
          <GroupLabel>{isOwner ? '사장님' : '시장탐방러'}</GroupLabel>
        </Group>
        <Name>바삭마차</Name>
        {isOwner && (
          <RatingGroup>
            <RatingLabel>평균 별점</RatingLabel>
            <FontAwesome name={'star'} size={RFValue(12)} color={COLORS.main} />
            <Rating>4.3</Rating>
          </RatingGroup>
        )}
      </InfoGroup>
    </Container>
  );
}

const Profile = styled.Image``;

const Container = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-around;

  height: ${hp(10)}px;

  border-top-width: 1px;
  border-bottom-width: 1px;
  border-top-color: ${COLORS.gray01};
  border-bottom-color: ${COLORS.gray01};
  background-color: ${COLORS.white};
`;

const InfoGroup = styled.View`
  width: 75%;
  min-height: 70%;
  max-height: 80%;

  justify-content: space-around;
`;

const Group = styled.View`
  ${({ isOwner }) =>
    isOwner
      ? `
    width: ${wp(10)}px;
    border-radius: ${RFValue(4)}px;
    background-color: ${COLORS.main};
  `
      : `
    width: ${wp(16)}px;
    border-radius: ${RFValue(6)}px;
    background-color: ${COLORS.gray01};
  `}
  padding: ${RFValue(4)}px;
  justify-content: center;
  align-items: center;
`;

const GroupLabel = styled.Text`
  color: ${COLORS.white};
  font-size: ${RFValue(8)}px;
  font-weight: 700;
`;

const Name = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: 700;
`;

const RatingGroup = styled.View`
  width: ${wp(20)}px;

  justify-content: space-around;
  flex-direction: row;
`;

const RatingLabel = styled.Text`
  font-weight: 700;
  font-size: ${RFValue(9)}px;
`;

const Rating = styled.Text`
  font-weight: 700;
  font-size: ${RFValue(9)}px;
  color: ${COLORS.main};
`;

export default ChatPartnerInfo;
