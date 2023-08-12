import React, { useState } from 'react';
import { styled } from 'styled-components/native';
import AlarmItem from './AlarmItem';

function AlarmList(props) {
  const [items] = useState([
    {
      id: 1,
      type: '정부지원',
      title: '소상공인 지원 정책',
      date: '2023.08.18',
      content: 'ZnFQYwqhXqyjVJgdnH',
    },
    {
      id: 2,
      type: '채팅',
      title: '몽땅사자님에게 채팅이 왔어요.',
      date: '2023.08.18',
      content: 'wojhA7TmWdAF 2MXArAsFjxQ',
    },
  ]);

  return (
    <Container data={items} keyExtractor={(item) => item.id} renderItem={({ item }) => <AlarmItem alarm={item} />} />
  );
}

const Container = styled.FlatList``;

export default AlarmList;
