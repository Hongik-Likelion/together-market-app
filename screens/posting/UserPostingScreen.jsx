import ImageUpload from '@components/posting/ImageUpload';
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

function UserPostingScreen({ route }) {
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

  // 손님 글쓰기 API 넘길것
  const [market_id, setMarket_id] = useState(null);
  const [market_name, setMarket_name] = useState('');
  const [shop_id, setShop_id] = useState(null);
  const [shop_name, setShop_name] = useState('');
  const [purchased_products, setPurchase_Product] = useState([]);
  const [photo, setPhoto] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(null);

  const data = {
    market_id: market_id,
    market_name: market_name,
    shop_id: shop_id,
    shop_name: shop_name,
    purchased_products: purchased_products,
    photo: [photo],
    content: content,
    rating: rating,
  };

  const resetData = () => {
    setMarket_id(null);
    setMarket_name('');
    setShop_id(null);
    setShop_name('');
    setPurchase_Product([]);
    setPhoto('');
    setContent('');
    setRating(null);
  };

  return (
    <Container>
      <KeyboardAwareScrollView>
        <RatingStar setRating={setRating}></RatingStar>
        <MarketName setMarket_id={setMarket_id} setMarket_name={setMarket_name}></MarketName>
        <ShopName market_id={market_id} setShop_id={setShop_id} setShop_name={setShop_name}></ShopName>
        <ItemCategory isOwner={isOwner} setPurchase_Product={setPurchase_Product}></ItemCategory>
        <ImageUpload setPhoto={setPhoto}></ImageUpload>
        <Review setContent={setContent}></Review>
        <PostingButton
          marketExists={marketExists}
          shopExists={shopExists}
          selectedTag={selectedTag}
          reviewText={reviewText}
          data={data}
          resetData={resetData}
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
