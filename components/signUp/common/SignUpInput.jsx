import { COLORS } from 'colors';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';

const SignUpInput = ({ children, name, value, onChangeText, keyboardType, placeholder, editable = true }) => {
  return (
    <InputContainer>
      <Input
        value={value}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        placeholder={placeholder}
        editable={editable}
      />
      {children}
    </InputContainer>
  );
};

const InputContainer = styled.View`
  background-color: ${COLORS.gray02};
  border-radius: 8px;
  height: ${hp(6.28)}px;
  padding: ${RFValue(10)}px;

  flex-direction: row;
  align-items: center;
`;

const Input = styled.TextInput`
  flex-grow: 1;
  height: 100%;

  font-size: ${RFValue(16)}px;
  font-weight: bold;
`;

export default SignUpInput;
