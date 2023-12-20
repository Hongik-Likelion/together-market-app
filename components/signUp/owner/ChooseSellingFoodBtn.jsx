import React, { useContext } from 'react';
import { Eating, Seafood, Fruit, Extra } from '@assets/signUp/OwnerSignUpFoodScreen';
import { styled } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View, Text } from 'react-native';
import { COLORS } from 'colors';
import { useFetchData } from '@hooks/fetch';
import { Auth } from 'context/AuthContext';
import { fetchEatingCatergory } from 'api/auth';

function ChooseSellingFoodBtn() {
  const {
    shop: [shopRequest, setShopRequest],
  } = useContext(Auth);

  const { product_categories } = shopRequest;

  const [isLoading, isError, products] = useFetchData(fetchEatingCatergory);

  const isFoodSelected = (productId) => product_categories.some((categoryId) => categoryId === productId);

  const handlePhotoSelect = (productId) => {
    if (!isFoodSelected(productId)) {
      setShopRequest((prev) => ({
        ...prev,
        product_categories: [...prev.product_categories, productId],
      }));
    } else {
      setShopRequest((prev) => ({
        ...prev,
        product_categories: prev.product_categories.filter((categoryId) => categoryId !== productId),
      }));
    }
  };

  if (isLoading) {
    return (
      <View>
        <Text>로딩중...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View>
        <Text>에러 발생</Text>
      </View>
    );
  }

  if (products !== null)
    return (
      <Container>
        <Description>
          상품 분류 <Text style={{ fontSize: RFValue(13), fontWeight: 'light' }}>(중복 선택 가능)</Text>
        </Description>
        <Pictures>
          {products
            .reduce((rows, product, index) => {
              if (index % 2 === 0) rows.push([]);
              rows[rows.length - 1].push(product);
              return rows;
            }, [])
            .map((row, rowIndex) => (
              <Row key={rowIndex}>
                {row.map((product) => (
                  <Content key={product.product_id} onPress={() => handlePhotoSelect(product.product_id)}>
                    {product.product_id === 1 && (
                      <Eating
                        backgroundColor={isFoodSelected(product.product_id) ? '#E4FFF5' : COLORS.white}
                        iconColor={isFoodSelected(product.product_id) ? COLORS.main : COLORS.gray01}
                      />
                    )}
                    {product.product_id === 2 && (
                      <Seafood
                        backgroundColor={isFoodSelected(product.product_id) ? '#E4FFF5' : COLORS.white}
                        iconColor={isFoodSelected(product.product_id) ? COLORS.main : COLORS.gray01}
                      />
                    )}
                    {product.product_id === 3 && (
                      <Fruit
                        backgroundColor={isFoodSelected(product.product_id) ? '#E4FFF5' : COLORS.white}
                        iconColor={isFoodSelected(product.product_id) ? COLORS.main : COLORS.gray01}
                      />
                    )}
                    {product.product_id === 4 && (
                      <Extra
                        backgroundColor={isFoodSelected(product.product_id) ? '#E4FFF5' : COLORS.white}
                        iconColor={isFoodSelected(product.product_id) ? COLORS.main : COLORS.gray01}
                      />
                    )}
                    <Name>{product.product_type}</Name>
                  </Content>
                ))}
              </Row>
            ))}
        </Pictures>
      </Container>
    );
}

const Container = styled.View`
  flex: 1;
`;

const Description = styled.Text`
  margin-left: ${wp(4.8)}px;
  margin-top: ${hp(4)}px;
  font-size: ${RFValue(16)}px;
  font-weight: bold;
`;

const Pictures = styled.View`
  margin-top: ${hp(4)}px;
`;

const Row = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: ${hp(1.5)}px;
`;

const Content = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
`;

const Name = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(13)}px;
  margin-top: ${hp(1.5)}px;
`;

export default ChooseSellingFoodBtn;
