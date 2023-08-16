import React from 'react';
import OwnerTopTab from '@components/profile/settingProfile/owner/OwnerTopTab';
import { styled } from 'styled-components/native';

function OwnerProfileSettingScreen(props) {
  return (
    <Container>
      <OwnerTopTab />
    </Container>
  );
}

const Container = styled.View``;

export default OwnerProfileSettingScreen;
