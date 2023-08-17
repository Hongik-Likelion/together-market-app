import React from 'react';
import MyMarkCommentListItem from './MyMarkCommentsListItem';
import { styled } from 'styled-components/native';

function MyMarkCommentList({ myMarkComments }) {
  return (
    <Container>
      <MyMarkCommentListScrollView>
        {myMarkComments.map((myMarkComment) => (
          <MyMarkCommentListItem key={myMarkComment.board_info.board_id} myMarkComment={myMarkComment} />
        ))}
      </MyMarkCommentListScrollView>
    </Container>
  );
}

const Container = styled.View``;

const MyMarkCommentListScrollView = styled.ScrollView`
  flex-grow: 1;
`;

export default MyMarkCommentList;
