import { COLORS } from 'colors';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { styled } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { UserInfo } from 'context/UserInfoContext';

function SelectedMarketItem({ marketLocation, onPressDelete }) {
  const { id, content } = marketLocation;
  const { userType } = useContext(UserInfo);

  return (
    <Container>
      <ContentGroup userType={userType}>
        <SimpleLineIcons name={'location-pin'} size={20} color={COLORS.white} marginLeft={8} marginRight={5} />
        <Content>{content}</Content>
        <DeleteIcon name={'x'} size={20} color={COLORS.white} onPress={() => onPressDelete(id)} />
      </ContentGroup>
    </Container>
  );
}

SelectedMarketItem.propTypes = {
  marketLocation: PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onPressDelete: PropTypes.func.isRequired,
};

const Container = styled.View``;

const ContentGroup = styled.View`
  background-color: ${COLORS.main};
  margin-left: ${wp(5)}px;
  border-radius: 62.97px;
  width: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;

  ${({ userType }) =>
    userType === 1
      ? `
      margin-top: ${hp(-4.1)}px;
  `
      : `
      margin-top: ${hp(-14)}px;
      margin-bottom: ${hp(17)}px;
  `}
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
