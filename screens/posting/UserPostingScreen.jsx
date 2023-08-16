import Image from '@components/posting/Image';
import ItemCategory from '@components/posting/ItemCategory';
import MarketName from '@components/posting/MarketName';
import PostingButton from '@components/posting/PostingButton';
import Review from '@components/posting/Review';
import ShopName from '@components/posting/ShopName';
import React, { useContext } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styled } from 'styled-components/native';
import { CommonPostingContext } from 'context/CommonPostingContext';
import RatingStar from '@components/posting/RatingStar';

function UserPostingScreen({route}) {
  const {
    marketExists,
    setMarketExists,
    shopExists,
    setShopExists,
    selectedTag,
    setSelectedTag,
    reviewText,
    setReviewText,
  } = useContext(CommonPostingContext);

  const isOwner = route.params?.isOwner;

  return (
    <Container>
      <KeyboardAwareScrollView>
        <RatingStar></RatingStar>
        <MarketName></MarketName>
        <ShopName></ShopName>
        <ItemCategory isOwner={isOwner}></ItemCategory>
        <Image></Image>
        <Review></Review>
        <PostingButton
          marketExists={marketExists}
          shopExists={shopExists}
          selectedTag={selectedTag}
          reviewText={reviewText}
        ></PostingButton>
      </KeyboardAwareScrollView>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export default UserPostingScreen;