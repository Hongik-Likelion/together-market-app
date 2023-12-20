import Image from '@components/posting/Image';
import ItemCategory from '@components/posting/ItemCategory';
import MarketName from '@components/posting/MarketName';
import Review from '@components/posting/Review';
import ShopName from '@components/posting/ShopName';
import React, { useContext, useState } from 'react';
import { styled } from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PostingButton from '@components/posting/PostingButton';
import { CommonPostingContext } from 'context/CommonPostingContext';

function OwnerPostingScreen({ route }) {
  // 해당 요소들이 다 작성되었는지 확인하는 부분
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

  // 사장님 글쓰기 API 넘길것
  const [markt_id, setMarket_id] = useState(null);
  const [market_name, setMarket_name] = useState('');
  const [shop_id, setShop_id] = useState('');
  const [shop_name, setShop_name] = useState('');
  const [purchased_products, setPurchase_Product] = useState([]);
  const [photo, setPhoto] = useState('');
  const [content, setContent] = useState('');

  console.log('markt_id:', markt_id); // markt_id 값 콘솔에 출력

  return (
    <Container>
      <KeyboardAwareScrollView>
        <MarketName market_id={markt_id} setMarket_id={setMarket_id}></MarketName>
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

export default OwnerPostingScreen;
