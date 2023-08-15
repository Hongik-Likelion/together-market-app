import React from 'react';
import TopInfoTab from '@components/profile/mainProfile/InfoTopTab';
import { styled } from 'styled-components/native';

function OwnerProfileScreen(props) {
  const userInfo = [
    {
      id: int,
      email: string,
      nickname: string,
      profile: string,
      introduction: string,
      is_owner: boolean,
    },
  ];
  return (
    <Container>
      <TopInfo>
        <TopInfoTab />
      </TopInfo>
    </Container>
  );
}

const Container = styled.View`
  background-color: white;
  flex: 1;
  z-index: -1;
`;

const TopInfo = styled.View`
  height: 200px;
  z-index: 2;
  display: flex;
  position: fixed;
`;

export default OwnerProfileScreen;
