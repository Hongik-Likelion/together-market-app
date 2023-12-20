import React from 'react';
import { COLORS } from 'colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { AirbnbRating } from 'react-native-ratings';

function RatingStar({ setRating }) {
  return (
    <AirbnbRating
      selectedColor={COLORS.main}
      reviewColor={COLORS.gray01}
      reviews={[]}
      isDisabled={true}
      showRating={false}
      size={RFValue(14)}
      defaultRating={props.rating}
    />
  );
}

export default RatingStar;
