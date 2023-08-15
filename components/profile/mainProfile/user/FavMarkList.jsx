import React from 'react';
import FavMarkListItem from './FavMarkListIem';
import { styled } from 'styled-components/native';

function FavMarkList({ myFavMarkets }) {
  return (
    <Container>
      <FavMarkListScrollView>
        {myFavMarkets.map((myFavMarket) => (
          <FavMarkListItem key={myFavMarket.market_name} myFavMarket={myFavMarket} />
        ))}
      </FavMarkListScrollView>
    </Container>
  );
}

const Container = styled.View``;

const FavMarkListScrollView = styled.ScrollView`
  flex-grow: 1;
`;

export default FavMarkList;
