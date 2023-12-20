import ImageUpload from '@components/posting/ImageUpload';
import ItemCategory from '@components/posting/ItemCategory';
import MarketName from '@components/posting/MarketName';
import Review from '@components/posting/Review';
import ShopName from '@components/posting/ShopName';
import React, { useContext, useState, useEffect } from 'react';
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
  const oneBoardData = route.params?.oneBoardData; //수정시 받아온 게시물 data
  const board_id = route.params?.board_id;

  // 게시글 수정인지 생성인지
  const [conditionBoard, setConditionBoard] = useState('');

  // 게시글 데이터 초기값 설정
  const [market_id, setMarket_id] = useState(null);
  const [market_name, setMarket_name] = useState('');
  const [shop_id, setShop_id] = useState(null);
  const [shop_name, setShop_name] = useState('');
  const [purchased_products, setPurchase_Product] = useState([]);
  const [photo, setPhoto] = useState('');
  const [content, setContent] = useState('');

  // 게시글 데이터가 있을 때 해당 값으로 state 업데이트
  useEffect(() => {
    if (oneBoardData !== null) {
      setConditionBoard('수정');

      setMarket_id(oneBoardData?.shop_info?.shop_id || null); // !!!!!!!!!!!! 수정필요
      setMarket_name(oneBoardData?.shop_info?.shop_name || ''); // !!!!!!!!!! 수정필요
      setShop_id(oneBoardData?.shop_info?.shop_id || null);
      setShop_name(oneBoardData?.shop_info?.shop_name || '');

      setPhoto(oneBoardData?.board_info?.photo[0] || '');
      setContent(oneBoardData?.board_info?.content || '');
    } else {
      setConditionBoard('생성');
    }
  }, [oneBoardData]);

  const data = {
    market_id: market_id,
    market_name: market_name,
    shop_id: shop_id,
    shop_name: shop_name,
    purchased_products: purchased_products,
    photo: [photo],
    content: content,
  };

  const resetData = () => {
    setMarket_id(null);
    setMarket_name('');
    setShop_id(null);
    setShop_name('');
    setPurchase_Product([]);
    setPhoto('');
    setContent('');
  };

  console.log('market_id:', market_id);
  console.log('market_name:', market_name);
  console.log('shop_id:', shop_id);
  console.log('shop_name:', shop_name);
  console.log('purchased_products:', purchased_products);
  console.log('photo: ', photo);
  console.log('content: ', content);

  return (
    <Container>
      <KeyboardAwareScrollView>
        <MarketName setMarket_id={setMarket_id} setMarket_name={setMarket_name} market_name={market_name}></MarketName>
        <ShopName
          market_id={market_id}
          setShop_id={setShop_id}
          setShop_name={setShop_name}
          shop_name={shop_name}
        ></ShopName>
        <ItemCategory isOwner={isOwner} setPurchase_Product={setPurchase_Product}></ItemCategory>
        <ImageUpload setPhoto={setPhoto} photo={photo}></ImageUpload>
        <Review setContent={setContent} content={content}></Review>
        <PostingButton
          marketExists={marketExists}
          shopExists={shopExists}
          selectedTag={selectedTag}
          reviewText={reviewText}
          data={data}
          resetData={resetData}
          conditionBoard={conditionBoard}
          board_id={board_id}
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
