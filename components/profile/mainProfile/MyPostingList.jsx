import React from 'react';
import MyPostingListItem from './MyPostingListItem';
import { styled } from 'styled-components/native';

function MyPostingList({ myPostings }) {
  return (
    <Container>
      <MyPostingListScrollView>
        {myPostings.map((myPosting) => (
          <MyPostingListItem key={myPosting.board_info.board_id} myPosting={myPosting} />
        ))}
      </MyPostingListScrollView>
    </Container>
  );
}

const Container = styled.View``;

const MyPostingListScrollView = styled.ScrollView`
  flex-grow: 1;
`;

export default MyPostingList;
