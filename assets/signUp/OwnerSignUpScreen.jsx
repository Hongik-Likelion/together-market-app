import PropTypes from 'prop-types';
import * as React from 'react';
import Svg, { G, Circle, Defs } from 'react-native-svg';

function OwnerSignUpHeader(props) {
  const { secondPage, thirdPage, fourthPage, fifthPage } = props;
  return (
    <Svg width={92} height={16} viewBox="0 0 92 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <G filter="url(#filter0_d_282_4630)">
        <Circle cx={4} cy={4} r={4} fill="#35AE83" />
        <Circle cx={23} cy={4} r={4} fill={secondPage} />
        <Circle cx={42} cy={4} r={4} fill={thirdPage} />
        <Circle cx={61} cy={4} r={4} fill={fourthPage} />
        <Circle cx={80} cy={4} r={4} fill={fifthPage} />
      </G>
      <Defs></Defs>
    </Svg>
  );
}

OwnerSignUpHeader.propTypes = {
  secondPage: PropTypes.string.isRequired,
  thirdPage: PropTypes.string.isRequired,
  fourthPage: PropTypes.string.isRequired,
  fifthPage: PropTypes.string.isRequired,
};

export default OwnerSignUpHeader;
