import ChatRoomList from '@components/chat/ChatRoomList';
import React from 'react';
import { styled } from 'styled-components/native';

/**
 *
 * @returns
 */
function ChatListScreen() {
  const chatRooms = [
    {
      id: 1,
      profile: require('@assets/chat/chat_customer.png'),
      shopName: '호식이네 두마리 치킨',
      marketName: '망원시장',
      lastChat: '넵. 치즈까스 오늘도 판매중입니다. ^^',
      lastUpdated: '2023.08.18',
    },
    {
      id: 2,
      profile: require('@assets/chat/chat_owner1.png'),
      shopName: '싱싱과일',
      marketName: '광장시장',
      lastChat: '참외는 지금 제철과일 할인중이라 10% 세일중입니다.',
      lastUpdated: '2023.08.18',
    },
    {
      id: 3,
      profile: require('@assets/chat/chat_owner2.png'),
      shopName: '이것도 사자',
      marketName: '방신시장',
      lastChat: '평일 저녁에 갔는데 조리 10분 걸렸어요 정말',
      lastUpdated: '2023.08.18',
    },
  ];

  return (
    <Container>
      <ChatRoomList rooms={chatRooms} />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export default ChatListScreen;
