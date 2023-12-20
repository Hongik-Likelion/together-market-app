import React from 'react';
import { styled } from 'styled-components/native';
import { COLORS } from 'colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Text } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';

function RatingStar({ setRating }) {
  const handleRating = (rating) => {
    setRating(rating); // 선택한 별점을 setRating을 통해 변경합니다.
  };

  return (
    <Container>
      <Text1>전체적으로 어떠셨나요?</Text1>
      <Text2>별점을 선택해주세요</Text2>
      <AirbnbRating
        selectedColor={COLORS.red}
        unselectedColor={COLORS.gray01}
        reviewColor={COLORS.black}
        reviews={[1, 2, 3, 4, 5]}
        size={RFValue(20)}
        reviewSize={RFValue(15)}
        onFinishRating={handleRating} // 사용자가 평가를 선택하면 이벤트 핸들러를 호출합니다.
      />
    </Container>
  );
}

const Container = styled.View`
  border-bottom-width: 8px;
  border-bottom-color: ${COLORS.gray02};
  padding-top: ${hp(2.5)}px;
  padding-bottom: ${hp(2.5)}px;
`;

const Text1 = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: 700;
  text-align: center;
  margin-bottom: ${hp(1)}px;
`;

const Text2 = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${COLORS.main};
  font-weight: 700;
  text-align: center;
  margin-bottom: ${hp(1)}px;
`;

export default RatingStar;
