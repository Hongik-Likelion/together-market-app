import { COLORS } from 'colors';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { styled } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { UserInfo } from 'context/UserInfoContext';

function SelectedMarketItem({ marketName, onPressDelete }) {
  // const { userType } = useContext(UserInfo);

  const userType = 1;

  if (marketName === '') return null;

  return (
    <Container>
      <ContentGroup userType={userType}>
        <SimpleLineIcons name={'location-pin'} size={20} color={COLORS.white} marginLeft={8} marginRight={5} />
        <Content>{marketName}</Content>
        <DeleteIcon name={'x'} size={20} color={COLORS.white} onPress={onPressDelete} />
      </ContentGroup>
    </Container>
  );
}

SelectedMarketItem.propTypes = {
  marketName: PropTypes.string.isRequired,
  onPressDelete: PropTypes.func.isRequired,
};

const Container = styled.View`
  height: ${hp(5)}px;
  justify-content: center;
`;

const ContentGroup = styled.View`
  background-color: ${COLORS.main};
  margin-left: ${wp(4)}px;
  border-radius: 62.97px;
  width: 150px;

  flex-direction: row;
  align-items: center;
`;

const Content = styled.Text`
  font-weight: 700;
  color: ${COLORS.white};
  font-size: ${RFValue(14)}px;
`;

const DeleteIcon = styled(Feather)`
  margin-left: auto;
  padding: ${RFValue(10)}px;
`;

export default SelectedMarketItem;
