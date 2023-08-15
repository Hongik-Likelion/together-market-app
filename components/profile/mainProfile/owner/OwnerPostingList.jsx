import React from 'react';
import OwnerPostingListItem from './OwnerPostingListItem';
import { styled } from 'styled-components/native';

function OwnerPostingList({ myPostings }) {
  return (
    <Container>
      <OwnerPostingListScrollView>
        {myPostings.map((myPosting) => (
          <OwnerPostingListItem key={myPosting.board_info.board_id} myPosting={myPosting} />
        ))}
      </OwnerPostingListScrollView>
    </Container>
  );
}

const Container = styled.View``;

const OwnerPostingListScrollView = styled.ScrollView`
  flex-grow: 1;
`;

export default OwnerPostingList;
