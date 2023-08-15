import { GetGuideBtn, NotGetGuideBtn } from '@assets/signUp/GuideSignUpScreen';
import { COLORS } from 'colors';
import PropTypes from 'prop-types';
import React from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';

function GuideOption({ content, onChange }) {
  const onPressYesGuideBtn = () => onChange(1);
  const onPressNoGuideBtn = () => onChange(2);

  return (
    <Container>
      <Option onPress={onPressYesGuideBtn}>
        <GetGuideBtn
          backColor={content === 1 ? COLORS.main : COLORS.white}
          borderColor={content === 1 ? COLORS.main : COLORS.gray01}
          fontColor={content === 1 ? COLORS.white : COLORS.black}
          circleColor={content === 1 ? COLORS.white : COLORS.gray01}
          checkColor={content === 1 ? COLORS.main : COLORS.white}
        />
      </Option>

      <Option onPress={onPressNoGuideBtn}>
        <NotGetGuideBtn
          backColor={content === 2 ? COLORS.main : COLORS.white}
          borderColor={content === 2 ? COLORS.main : COLORS.gray01}
          fontColor={content === 2 ? COLORS.white : COLORS.black}
          circleColor={content === 2 ? COLORS.white : COLORS.gray01}
          checkColor={content === 2 ? COLORS.main : COLORS.white}
        />
      </Option>
    </Container>
  );
}

GuideOption.propTypes = {
  content: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

const Container = styled.View`
  flex: 1;
`;

const Option = styled.TouchableOpacity`
  margin-left: ${wp(4.8)}px;
`;

export default GuideOption;
