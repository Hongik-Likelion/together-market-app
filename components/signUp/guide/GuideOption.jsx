import { GetGuideBtn, NotGetGuideBtn } from '@assets/signUp/GuideSignUpScreen';
import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { styled } from 'styled-components/native';

function GuideOption({ selectGuide }) {
  const onPressGuideBtn = () => {
    selectGuide(true);
  };

  return (
    <Container>
      <TouchableOpacity onPress={onPressGuideBtn}>
        <GetGuideBtn />
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressGuideBtn}>
        <NotGetGuideBtn />
      </TouchableOpacity>
    </Container>
  );
}

GuideOption.propTypes = {
  selectGuide: PropTypes.func.isRequired,
};

const Container = styled.View`
  flex: 1;
`;

export default GuideOption;
