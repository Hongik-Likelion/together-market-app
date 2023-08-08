import PropTypes from 'prop-types';
import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';

function UserSignUpHeader(props) {
  const { isNextPage } = props;
  return (
    <Svg width={46} height={8} viewBox="0 0 46 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Circle cx={4} cy={4} r={4} fill="#35AE83" />
      <Circle cx={23} cy={4} r={4} fill="#35AE83" />
      <Circle cx={42} cy={4} r={4} fill={isNextPage} />
    </Svg>
  );
}

UserSignUpHeader.propTypes = {
  isNextPage: PropTypes.string.isRequired,
};

export default UserSignUpHeader;
