import React, { useState } from 'react';
import { FlatList } from 'react-native';

import DateInfo from '../DateInfo';
import MyMessage from './MyMessage';
import OthersMessage from './OthersMessage';

function MessageList() {
  const myUserId = 1;

  const [messages] = useState([
    {
      messageId: 1,
      userId: 1,
      content: '안녕하세요 사장님~',
    },
    {
      messageId: 2,
      userId: 1,
      content: '혹시 치즈 돈까스 아직 남아있나요?',
    },
    {
      messageId: 3,
      userId: 1,
      content: '저번에 갔는데 그날은 없다고 하셔서 ㅠ 오늘 가면 있나요?',
    },
    {
      messageId: 4,
      userId: 2,
      content: '넵. 치즈까스 오늘도 판매중입니다.^^ 넵. 치즈까스 오늘도 판매중입니다.^^',
    },
    {
      messageId: 5,
      userId: 1,
      content: '오오.. 감사합니다~',
    },
    {
      messageId: 6,
      userId: 2,
      content: '넵. 치즈까스 오늘도 판매중입니다.^^',
    },
    {
      messageId: 7,
      userId: 1,
      content: '오오.. 감사합니다~',
    },
    {
      messageId: 8,
      userId: 1,
      content: '오오.. 감사합니다~',
    },
    {
      messageId: 9,
      userId: 2,
      content: '넵. 치즈까스 오늘도 판매중입니다.^^',
    },
    {
      messageId: 10,
      userId: 1,
      content: '오오.. 감사합니다~',
    },
    {
      messageId: 11,
      userId: 1,
      content: '오오.. 감사합니다~',
    },
    {
      messageId: 12,
      userId: 2,
      content: '넵. 치즈까스 오늘도 판매중입니다.^^',
    },
    {
      messageId: 13,
      userId: 1,
      content: '오오.. 감사합니다~',
    },
  ]);

  return (
    <FlatList
      ref={(ref) => (this.flatList = ref)}
      onLayout={() => this.flatList.scrollToEnd({ animated: true })}
      data={messages}
      showsVerticalScrollIndicator={false}
      keyExtractor={(message) => message.messageId}
      ListHeaderComponent={() => <DateInfo />}
      renderItem={({ item, index }) =>
        item.userId === myUserId ? (
          <MyMessage
            item={item}
            isLast={index !== messages.length - 1 ? item.userId !== messages[index + 1].userId : true}
          />
        ) : (
          <OthersMessage
            item={item}
            isLast={index !== messages.length - 1 ? item.userId !== messages[index + 1].userId : true}
          />
        )
      }
    />
  );
}

export default MessageList;
