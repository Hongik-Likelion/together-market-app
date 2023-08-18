import Image from '@components/posting/Image';
import ItemCategory from '@components/posting/ItemCategory';
import MarketName from '@components/posting/MarketName';
import PostingButton from '@components/posting/PostingButton';
import Review from '@components/posting/Review';
import ShopName from '@components/posting/ShopName';
import React, { useContext, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styled } from 'styled-components/native';
import { CommonPostingContext } from 'context/CommonPostingContext';
import RatingStar from '@components/posting/RatingStar';
import { getModifyPost } from 'api/auth';
import { View, Text } from 'react-native';
import format from 'pretty-format';
import { useFocusEffect, useRoute } from '@react-navigation/native';

function UserPostingScreen() {
  const route = useRoute();
  const { myPosting } = route.params; //내가 작성한 게시물 정보들 담긴 객체

  const {
    //각 탭에 값들이 있는지를 확인하는 변수들
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
  console.log(myPosting.board_info.rating);

  return (
    <Container>
      <KeyboardAwareScrollView>
        <RatingStar rating={myPosting.board_info.rating}></RatingStar>
        <MarketName></MarketName>
        <ShopName shopName={myPosting.shop_info.shop_name}></ShopName>
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
