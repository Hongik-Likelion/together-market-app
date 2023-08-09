import PropTypes from 'prop-types';
import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';

function OwnerSignUpHeader(props) {
  const { secondPage, thirdPage, fourthPage } = props;
  return (
    <Svg width={65} height={8} viewBox="0 0 65 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Circle cx={4} cy={4} r={4} fill="#35AE83" />
      <Circle cx={23} cy={4} r={4} fill={secondPage} />
      <Circle cx={42} cy={4} r={4} fill={thirdPage} />
      <Circle cx={61} cy={4} r={4} fill={fourthPage} />
    </Svg>
  );
}

OwnerSignUpHeader.propTypes = {
  secondPage: PropTypes.string.isRequired,
  thirdPage: PropTypes.string.isRequired,
  fourthPage: PropTypes.string.isRequired,
};

export default OwnerSignUpHeader;
