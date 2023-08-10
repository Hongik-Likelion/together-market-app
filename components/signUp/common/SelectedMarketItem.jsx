import { COLORS } from 'colors';
import PropTypes from 'prop-types';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { styled } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

function SelectedMarketItem({ marketLocation, onPressDelete }) {
  const { id, content } = marketLocation;
  return (
    <Container>
      <ContentGroup>
        <SimpleLineIcons name={'location-pin'} size={20} color={COLORS.white} marginLeft={8} marginRight={5} />
        <Content>{content}</Content>
        <DeleteIcon name={'x'} size={20} color={COLORS.white} onPress={() => onPressDelete(id)} />
      </ContentGroup>
    </Container>
  );
}

SelectedMarketItem.propTypes = {
  marketLocation: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onPressDelete: PropTypes.func.isRequired,
};

const Container = styled.View``;

const ContentGroup = styled.View`
  background-color: ${COLORS.main};
  margin-left: ${wp(5)}px;
  margin-top: ${hp(-14)}px;
  border-radius: 62.97px;
  width: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
