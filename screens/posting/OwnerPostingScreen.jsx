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
  const [market_id, setMarket_id] = useState(null);
  const [market_name, setMarket_name] = useState('');
  const [shop_id, setShop_id] = useState(null);
  const [shop_name, setShop_name] = useState('');
  const [purchased_products, setPurchase_Product] = useState([]);
  const [photo, setPhoto] = useState('');
  const [content, setContent] = useState('');

  console.log('market_id:', market_id);
  console.log('market_name:', market_name);
  console.log('shop_id:', shop_id);
  console.log('shop_name:', shop_name);
  console.log('purchased_products:', purchased_products);
  console.log('content: ', content);

  return (
    <Container>
      <KeyboardAwareScrollView>
        <MarketName setMarket_id={setMarket_id} setMarket_name={setMarket_name}></MarketName>
        <ShopName market_id={market_id} setShop_id={setShop_id} setShop_name={setShop_name}></ShopName>
        <ItemCategory isOwner={isOwner} setPurchase_Product={setPurchase_Product}></ItemCategory>
        <Image></Image>
        <Review setContent={setContent}></Review>
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
