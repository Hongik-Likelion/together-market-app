import OwnerSignUpHeader from '@assets/signUp/OwnerSignUpScreen';
import UserSignUpHeader from '@assets/signUp/UserSignUpScreen';
import { COLORS } from 'colors';
import { UserInfo } from 'context/AuthContext';
import React, { useContext } from 'react';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';

function GuideTopTab(props) {
  const { userType } = useContext(UserInfo);
  return (
    <UserSignUpHeaderContainer>
      {userType === 1 ? (
        <OwnerSignUpHeader
          secondPage={COLORS.main}
          thirdPage={COLORS.main}
          fourthPage={COLORS.main}
          fifthPage={COLORS.main}
          position="absolute"
          marginTop={hp(10)}
        />
      ) : (
        <UserSignUpHeader isNextPage={COLORS.main} position="absolute" marginTop={hp(10)} />
      )}
    </UserSignUpHeaderContainer>
  );
}

const UserSignUpHeaderContainer = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  align-items: center;
`;

export default GuideTopTab;
