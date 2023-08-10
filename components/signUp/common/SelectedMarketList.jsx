import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components/native';

import SelectedMarketItem from './SelectedMarketItem';

function SelectedMarketList({ addedMarket, marketLocations, onPressDelete }) {
  return (
    <Container>
      {addedMarket &&
        marketLocations.map((marketLocation) => (
          <SelectedMarketItem key={marketLocation.id} marketLocation={marketLocation} onPressDelete={onPressDelete} />
        ))}
    </Container>
  );
}

SelectedMarketList.propTypes = {
  addedMarket: PropTypes.bool.isRequired,
  marketLocations: PropTypes.array.isRequired,
  onPressDelete: PropTypes.func.isRequired,
};

const Container = styled.View``;

export default SelectedMarketList;
