import React from 'react';
import { ContinueBtn } from '@assets/signUp/CommonSignUpScreenIcon';
import { UserInfo } from 'context/UserInfoContext';
import { styled } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

function UserSignUpScreen() {
  const { userType } = useContext(UserInfo);
  const navigation = useNavigation();
  const onPressContinueBtn = () => {};

  return (
    <Container>
      <ContinueBtn
        fontColor={userType ? 'white' : COLORS.main}
        backColor={userType ? COLORS.main : 'white'}
        width={wp(100)}
        marginBottom={hp(6.15)}
        justifyContent="center"
        onPress={onPressContinueBtn}
      />
    </Container>
  );
}

const Container = styled.View``;

export default UserSignUpScreen;
